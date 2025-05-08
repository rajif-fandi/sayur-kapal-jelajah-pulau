
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Ship {
  id: string;
  name: string;
  position: [number, number]; // [lat, lng]
  destination: string;
  cargo: string[];
  eta: string;
  status: 'sailing' | 'loading' | 'arrived';
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
    status: 'sailing'
  },
  {
    id: 'ship2',
    name: 'KM Tani Samudra',
    position: [-7.2, 112.7], // Near Surabaya
    destination: 'Pelabuhan Surabaya',
    cargo: ['Kentang', 'Cabai', 'Bawang'],
    eta: '4 Mei, 09:15 WIB',
    status: 'loading'
  }
];

// Define island locations
const islands = [
  { name: 'Pulau Pari', position: [-5.85, 106.6] },
  { name: 'Pulau Tidung', position: [-5.8, 106.5] },
  { name: 'Pulau Harapan', position: [-5.75, 106.55] }
];

// Define city destinations
const cities = [
  { name: 'Jakarta', position: [-6.2, 106.85] },
  { name: 'Surabaya', position: [-7.25, 112.75] }
];

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const shipMarkersRef = useRef<{[key: string]: L.Marker}>({});

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize map
      mapRef.current = L.map(mapContainerRef.current, {
        center: [-6.0, 107.0], // Center around Indonesian islands
        zoom: 8,
        layers: [
          // Using CartoDB Voyager tiles for a more illustrated look
          L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
          })
        ]
      });
      
      // Create custom ship icon
      const shipIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMEVBNUU5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc2hpcCI+PHBvbHlnb24gcG9pbnRzPSIyIDIyIDIyIDIyIDIyIDcgMTIgMiAyIDcgMiAyMiIvPjxwYXRoIGQ9Ik0xMiAydjIwIi8+PHBhdGggZD0iTTUgNGExIDEgMCAwIDEgMSAxdjMuNGE0IDQgMCAwIDAgMi41IDMuN2wyIDAuOWEyIDIgMCAwIDAgMS43IDBMIDE0LjUgMTIuMWE0IDQgMCAwIDAgMi41LTMuN1Y1YTEgMSAwIDAgMSAxLTEiLz48cGF0aCBkPSJNMiA3aDIwIi8+PC9zdmc+',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
      });
      
      // Create markers for ships
      ships.forEach(ship => {
        const marker = L.marker(ship.position, { icon: shipIcon })
          .addTo(mapRef.current!)
          .bindPopup(`
            <div class="text-center">
              <h3 class="font-bold">${ship.name}</h3>
              <p class="text-gray-600">${ship.destination}</p>
              <p class="text-sm">ETA: ${ship.eta}</p>
              <p class="text-xs mt-2">Muatan: ${ship.cargo.join(', ')}</p>
            </div>
          `);
          
        shipMarkersRef.current[ship.id] = marker;
      });
      
      // Add island markers
      const islandIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNENBRjUwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtdHJlZSI+PHBhdGggZD0ibTE3IDIyaC0xMGExIDEgMCAwIDEtLjktMS40NWwyLjc3LTYuMTFjLjI4LS42Mi4yOC0xLjM1IDAtMS45N2wtMi43Ny02LjEyYTEgMSAwIDAgMSAuOS0xLjQ1aDEwYTEgMSAwIDAgMSAuOS42NmwzIDdhMSAxIDAgMCAxIDAgLjg4bC0zIDdhMSAxIDAgMCAxLS45LjU2eiIvPjxwYXRoIGQ9Ik05IDJoNnYwIi8+PHBhdGggZD0iTTEyIDJ2MjIiLz48L3N2Zz4=',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
      });
      
      islands.forEach(island => {
        L.marker(island.position, { icon: islandIcon })
          .addTo(mapRef.current!)
          .bindPopup(`<b>${island.name}</b><br>Penghasil sayuran segar`);
      });
      
      // Add city markers
      const cityIcon = new L.Icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzk1NTQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYnVpbGRpbmciPjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgeD0iNCIgeT0iMiIgcng9IjIiLz48cGF0aCBkPSJNOSAyMnYtNWEyIDIgMCAwIDEgMi0yaDJhMiAyIDAgMCAxIDIgMnY1Ii8+PHBhdGggZD0iTTggNmg4Ii8+PHBhdGggZD0iTTggMTBoOCIvPjwvc3ZnPg==',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
      });
      
      cities.forEach(city => {
        L.marker(city.position, { icon: cityIcon })
          .addTo(mapRef.current!)
          .bindPopup(`<b>${city.name}</b><br>Kota tujuan sayuran`);
      });
      
      // Draw routes from islands to cities
      islands.forEach(island => {
        cities.forEach(city => {
          L.polyline([island.position, city.position], {
            color: '#4CAF50',
            weight: 2,
            opacity: 0.5,
            dashArray: '5, 5'
          }).addTo(mapRef.current!);
        });
      });
    }
    
    // Animate ship movement
    const animateShips = () => {
      ships.forEach(ship => {
        if (ship.status === 'sailing') {
          // Move slightly in random direction
          const latDelta = (Math.random() - 0.5) * 0.01;
          const lngDelta = (Math.random() - 0.5) * 0.01;
          
          ship.position = [
            ship.position[0] + latDelta,
            ship.position[1] + lngDelta
          ];
          
          // Update marker position
          const marker = shipMarkersRef.current[ship.id];
          if (marker) {
            marker.setLatLng(ship.position);
          }
        }
      });
    };
    
    const animationInterval = setInterval(animateShips, 2000);
    
    return () => {
      clearInterval(animationInterval);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);
  
  return (
    <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md z-20">
        <h3 className="text-lg font-medium mb-2">Pelacakan Kapal</h3>
        <div className="flex flex-col space-y-2 text-sm">
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
      </div>
    </div>
  );
};

export default LeafletMap;
