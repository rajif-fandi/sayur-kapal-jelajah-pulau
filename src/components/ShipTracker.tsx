
import React, { useState, useEffect } from 'react';
import { Ship, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ShipData {
  id: string;
  name: string;
  status: 'sailing' | 'loading' | 'arrived';
  origin: string;
  destination: string;
  progress: number;
  eta: string;
  cargo: string[];
}

// Sample data
const sampleShips: ShipData[] = [
  {
    id: 'ship-1',
    name: 'KM Sayur Bahari',
    status: 'sailing',
    origin: 'Pulau Pari',
    destination: 'Pelabuhan Jakarta',
    progress: 65,
    eta: '2 Mei, 16:30 WIB',
    cargo: ['Kangkung', 'Bayam', 'Tomat', 'Wortel']
  },
  {
    id: 'ship-2',
    name: 'KM Tani Samudra',
    status: 'loading',
    origin: 'Pulau Tidung',
    destination: 'Pelabuhan Surabaya',
    progress: 15,
    eta: '4 Mei, 09:15 WIB',
    cargo: ['Kentang', 'Cabai', 'Bawang Merah']
  },
  {
    id: 'ship-3',
    name: 'KM Hasil Tani',
    status: 'arrived',
    origin: 'Pulau Harapan',
    destination: 'Pelabuhan Makassar',
    progress: 100,
    eta: 'Telah Tiba',
    cargo: ['Kubis', 'Terong', 'Timun', 'Jagung']
  }
];

const ShipTracker = () => {
  const [ships, setShips] = useState<ShipData[]>([]);
  const [selectedShip, setSelectedShip] = useState<ShipData | null>(null);
  
  // Simulate ship data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShips(sampleShips);
      setSelectedShip(sampleShips[0]);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation for ship progress
  useEffect(() => {
    if (!ships.length) return;
    
    const interval = setInterval(() => {
      setShips(prevShips => 
        prevShips.map(ship => {
          if (ship.status === 'sailing' && ship.progress < 98) {
            return {...ship, progress: ship.progress + 0.1};
          }
          return ship;
        })
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [ships]);
  
  const getStatusClass = (status: ShipData['status']) => {
    switch (status) {
      case 'sailing':
        return 'text-sayur-blue';
      case 'loading':
        return 'text-amber-500';
      case 'arrived':
        return 'text-green-600';
      default:
        return '';
    }
  };
  
  const getStatusText = (status: ShipData['status']) => {
    switch (status) {
      case 'sailing':
        return 'Dalam Perjalanan';
      case 'loading':
        return 'Memuat Sayur';
      case 'arrived':
        return 'Telah Tiba';
      default:
        return '';
    }
  };
  
  if (!ships.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center h-64 flex items-center justify-center">
        <div className="animate-pulse text-sayur-green">
          <Ship className="h-12 w-12 mx-auto mb-4 animate-ship-sailing" />
          <p className="text-lg">Memuat data kapal...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-3">
        {/* Ship List */}
        <div className="bg-gray-50 p-4 border-r border-gray-200">
          <h3 className="font-medium text-lg mb-4">Kapal Distribusi</h3>
          <div className="space-y-3">
            {ships.map((ship) => (
              <button
                key={ship.id}
                onClick={() => setSelectedShip(ship)}
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-colors",
                  selectedShip?.id === ship.id 
                    ? "bg-sayur-green/10 border border-sayur-green/20" 
                    : "hover:bg-gray-100"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center",
                      ship.status === 'arrived' ? "bg-green-100" : "bg-sayur-blue-light/20"
                    )}>
                      <Ship className={cn(
                        "h-5 w-5",
                        ship.status === 'arrived' ? "text-green-600" : "text-sayur-blue"
                      )} />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{ship.name}</div>
                      <div className="text-xs text-gray-500">{ship.origin} → {ship.destination}</div>
                    </div>
                  </div>
                  <div className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    getStatusClass(ship.status)
                  )}>
                    {getStatusText(ship.status)}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Ship Details */}
        {selectedShip && (
          <div className="md:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-medium">{selectedShip.name}</h3>
                <p className="text-gray-500">
                  {selectedShip.origin} → {selectedShip.destination}
                </p>
              </div>
              <div className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                getStatusClass(selectedShip.status)
              )}>
                {getStatusText(selectedShip.status)}
              </div>
            </div>
            
            {/* Progress tracker */}
            <div className="mb-8">
              <div className="flex justify-between mb-1 text-sm">
                <span>{selectedShip.origin}</span>
                <span>{selectedShip.destination}</span>
              </div>
              <Progress value={selectedShip.progress} className="h-2" />
              <div className="mt-2 flex justify-end">
                <div className="bg-gray-100 rounded-lg px-3 py-1 text-sm">
                  ETA: {selectedShip.eta}
                </div>
              </div>
            </div>
            
            {/* Cargo information */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Muatan Sayur:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedShip.cargo.map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-sayur-green/10 text-sayur-green text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                {selectedShip.status === 'arrived' 
                  ? 'Sayur sudah siap dikirim ke alamat Anda' 
                  : 'Kami akan memberitahu Anda saat kapal sampai'}
              </p>
              <Button 
                variant={selectedShip.status === 'arrived' ? 'default' : 'outline'}
                className={selectedShip.status === 'arrived' 
                  ? 'bg-sayur-green hover:bg-sayur-green-dark' 
                  : 'border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white'
                }
              >
                {selectedShip.status === 'arrived' ? 'Pesan Sekarang' : 'Detail Perjalanan'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipTracker;
