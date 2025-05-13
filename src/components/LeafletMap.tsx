
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Ship, Anchor, Navigation } from 'lucide-react';

interface Ship {
  id: string;
  name: string;
  position: [number, number]; // [lat, lng]
  destination: string;
  cargo: string[];
  eta: string;
  status: 'sailing' | 'loading' | 'arrived';
  speed: number; // in knots
  progress: number; // percentage of journey completed
}

// Sample ship data
const ships: Ship[] = [
  {
    id: 'ship1',
    name: 'KM Sayur Bahari',
    position: [-5.7, 106.8], // Near Jakarta
    destination: 'Pelabuhan Jakarta',
    cargo: ['Kangkung', 'Bayam', 'Tomat'],
    eta: '2 Mei, 16:30 WIB',
    status: 'sailing',
    speed: 12.5,
    progress: 65
  },
  {
    id: 'ship2',
    name: 'KM Tani Samudra',
    position: [-7.2, 112.7], // Near Surabaya
    destination: 'Pelabuhan Surabaya',
    cargo: ['Kentang', 'Cabai', 'Bawang'],
    eta: '4 Mei, 09:15 WIB',
    status: 'loading',
    speed: 0,
    progress: 10
  },
  {
    id: 'ship3',
    name: 'KM Nelayan Jaya',
    position: [-6.5, 109.2], // Mid-journey
    destination: 'Pelabuhan Semarang',
    cargo: ['Wortel', 'Kol', 'Sawi'],
    eta: '3 Mei, 14:00 WIB',
    status: 'sailing',
    speed: 10.8,
    progress: 42
  }
];

// Define island locations
const islands = [
  { name: 'Pulau Pari', position: [-5.85, 106.6], products: ['Kangkung', 'Bayam'] },
  { name: 'Pulau Tidung', position: [-5.8, 106.5], products: ['Tomat', 'Cabai'] },
  { name: 'Pulau Harapan', position: [-5.75, 106.55], products: ['Wortel', 'Sawi'] }
];

// Define city destinations
const cities = [
  { name: 'Jakarta', position: [-6.2, 106.85] },
  { name: 'Surabaya', position: [-7.25, 112.75] },
  { name: 'Semarang', position: [-6.96, 110.42] }
];

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const shipMarkersRef = useRef<{[key: string]: L.Marker}>({});

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize map with a maritime-themed style
      mapRef.current = L.map(mapContainerRef.current, {
        center: [-6.0, 107.0], // Center around Indonesian islands
        zoom: 8,
        layers: [
          // Using a blue-themed map style
          L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
          })
        ]
      });
      
      // Create custom ship icon with more maritime design
      const shipIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzBFQTVFOSIgc3Ryb2tlPSIjMEVBNUU5IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaGlwIj48cG9seWdvbiBwb2ludHM9IjIgMjIgMjIgMjIgMjIgNyAxMiAyIDIgNyAyIDIyIiBmaWxsPSIjMEVBNUU5IiBmaWxsLW9wYWNpdHk9IjAuOCIvPjxwYXRoIGQ9Ik0xMiAydjIwIiBzdHJva2U9IiNmZmYiLz48cGF0aCBkPSJNNSA0YTEgMSAwIDAgMSAxIDF2My40YTQgNCAwIDAgMCAyLjUgMy43bDIgMC45YTIgMiAwIDAgMCAxLjcgMEwgMTQuNSAxMi4xYTQgNCAwIDAgMCAyLjUtMy43VjVhMSAxIDAgMCAxIDEtMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjYiLz48cGF0aCBkPSJNMiA3aDIwIiBzdHJva2U9IiNmZmYiLz48L3N2Zz4=',
        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -19],
        className: 'pulse-gentle'
      });
      
      // Create enhanced island icon
      const islandIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzRDQUY1MCIgc3Ryb2tlPSIjNENBRjUwIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMTcgMjJoLTEwYTEgMSAwIDAgMS0uOS0xLjQ1bDIuNzctNi4xMWMuMjgtLjYyLjI4LTEuMzUgMC0xLjk3bC0yLjc3LTYuMTJhMSAxIDAgMCAxIC45LTEuNDVoMTBhMSAxIDAgMCAxIC45LjY2bDMgN2ExIDEgMCAwIDEgMCAuODhsLTMgN2ExIDEgMCAwIDEtLjkuNTZ6IiBmaWxsLW9wYWNpdHk9IjAuOCIvPjxwYXRoIGQ9Ik05IDJoNnYwIiBzdHJva2U9IiNmZmYiLz48cGF0aCBkPSJNMTIgMnYyMiIgc3Ryb2tlPSIjZmZmIi8+PC9zdmc+',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
      
      // Enhanced city icon
      const cityIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc5NTU0OCIgc3Ryb2tlPSIjNzk1NTQ4IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiBmaWxsLW9wYWNpdHk9IjAuOCIvPjxwYXRoIGQ9Ik05IDIydi01YTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAydjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC42Ii8+PHBhdGggZD0iTTggNmg4IiBzdHJva2U9IiNmZmYiLz48cGF0aCBkPSJNOCAxMGg4IiBzdHJva2U9IiNmZmYiLz48L3N2Zz4=',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
      
      // Create markers for ships with enhanced popup
      ships.forEach(ship => {
        const marker = L.marker(ship.position, { icon: shipIcon })
          .addTo(mapRef.current!)
          .bindPopup(`
            <div class="p-1">
              <div class="text-center mb-2">
                <h3 class="font-bold text-sayur-blue text-lg">${ship.name}</h3>
                <p class="text-gray-600">${ship.destination}</p>
              </div>
              <div class="flex justify-between text-sm mb-1">
                <span>ETA:</span>
                <span class="font-medium">${ship.eta}</span>
              </div>
              <div class="flex justify-between text-sm mb-1">
                <span>Kecepatan:</span>
                <span class="font-medium">${ship.speed} knot</span>
              </div>
              <div class="mt-2">
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-sayur-blue h-1.5 rounded-full" style="width: ${ship.progress}%"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                  <span>0%</span>
                  <span>${ship.progress}%</span>
                  <span>100%</span>
                </div>
              </div>
              <div class="mt-2 pt-2 border-t border-gray-200">
                <p class="text-xs text-gray-500 mb-1">Muatan:</p>
                <div class="flex flex-wrap gap-1">
                  ${ship.cargo.map(item => `<span class="bg-sayur-green/10 text-sayur-green text-xs px-1.5 py-0.5 rounded">${item}</span>`).join('')}
                </div>
              </div>
            </div>
          `, { 
            className: 'map-custom-popup',
            minWidth: 220
          });
          
        shipMarkersRef.current[ship.id] = marker;
      });
      
      // Add island markers with enhanced popups
      islands.forEach(island => {
        L.marker(island.position, { icon: islandIcon })
          .addTo(mapRef.current!)
          .bindPopup(`
            <div>
              <h3 class="font-bold text-sayur-green">${island.name}</h3>
              <p class="text-xs text-gray-500 mt-1">Produk utama:</p>
              <div class="flex flex-wrap gap-1 mt-1">
                ${island.products.map(item => `<span class="bg-sayur-green/10 text-sayur-green text-xs px-1.5 py-0.5 rounded">${item}</span>`).join('')}
              </div>
            </div>
          `, {
            className: 'map-custom-popup'
          });
      });
      
      // Add city markers with enhanced popups
      cities.forEach(city => {
        L.marker(city.position, { icon: cityIcon })
          .addTo(mapRef.current!)
          .bindPopup(`
            <div>
              <h3 class="font-bold text-sayur-earth-dark">${city.name}</h3>
              <p class="text-sm">Kota tujuan distribusi sayuran</p>
            </div>
          `, {
            className: 'map-custom-popup'
          });
      });
      
      // Draw routes from islands to cities with improved styling
      islands.forEach(island => {
        cities.forEach(city => {
          // Calculate if a ship is on this route
          const hasShipOnRoute = ships.some(ship => 
            ship.destination.includes(city.name) && 
            ship.status === 'sailing'
          );
          
          // Apply different styling based on whether a ship is on the route
          const routeStyle = hasShipOnRoute ? {
            color: '#0EA5E9',
            weight: 3,
            opacity: 0.8,
            dashArray: '5, 5',
            className: 'animate-pulse-gentle'
          } : {
            color: '#4CAF50',
            weight: 2,
            opacity: 0.5,
            dashArray: '5, 5'
          };
          
          L.polyline([island.position, city.position], routeStyle).addTo(mapRef.current!);
        });
      });
      
      // Add water texture overlay for a more maritime feel
      L.rectangle([[-10, 100], [-3, 120]], {
        color: 'transparent',
        fillColor: '#0EA5E9',
        fillOpacity: 0.05
      }).addTo(mapRef.current!);

      // Custom map controls styling
      document.querySelectorAll('.leaflet-control-zoom a').forEach(el => {
        el.classList.add('bg-white/80', 'backdrop-blur-sm', 'border', 'border-white/50');
      });
      
      // Add CSS for custom popups
      const style = document.createElement('style');
      style.textContent = `
        .map-custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .map-custom-popup .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
        }
        .pulse-gentle {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Enhanced ship movement animation with slight rocking effect
    const animateShips = () => {
      ships.forEach(ship => {
        if (ship.status === 'sailing') {
          // More natural movement pattern
          const now = Date.now() / 1000;
          const latMovement = Math.sin(now * 0.4) * 0.004;
          const lngMovement = Math.cos(now * 0.2) * 0.004 + 0.001;
          
          ship.position = [
            ship.position[0] + latMovement,
            ship.position[1] + lngMovement
          ];
          
          // Update marker position with slight rotation
          const marker = shipMarkersRef.current[ship.id];
          if (marker) {
            marker.setLatLng(ship.position);
            
            // Apply a slight rotation to simulate rocking on waves
            const iconElement = marker.getElement()?.querySelector('img');
            if (iconElement) {
              const rotation = Math.sin(now) * 10;
              iconElement.style.transform = `rotate(${rotation}deg)`;
            }
          }
        }
      });
    };
    
    const animationInterval = setInterval(animateShips, 100);
    
    return () => {
      clearInterval(animationInterval);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);
  
  return (
    <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/30">
      {/* Glass overlay for maritime effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-sayur-blue/5 to-transparent pointer-events-none z-10"></div>
      
      {/* Map container */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      
      {/* Map legend with glassmorphism */}
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-lg z-20 border border-white/50">
        <h3 className="text-lg font-medium mb-3 text-sayur-blue">Pelacakan Kapal</h3>
        <div className="flex flex-col space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-sayur-blue"></div>
            <span>Kapal dalam perjalanan</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-sayur-green"></div>
            <span>Kebun/pulau penghasil</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-sayur-earth-dark"></div>
            <span>Kota tujuan</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center text-xs text-gray-500">
            <Ship className="h-3 w-3 mr-1" />
            <span>{ships.filter(s => s.status === 'sailing').length} kapal aktif</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-sm py-2 px-3 rounded-lg flex items-center gap-2 z-20 border border-white/50">
        <Navigation className="h-4 w-4 text-sayur-blue" />
        <span className="text-sm font-medium">Pelacakan Real-time</span>
      </div>
    </div>
  );
};

export default LeafletMap;
