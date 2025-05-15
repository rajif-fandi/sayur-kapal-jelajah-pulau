import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShipTracker from "@/components/ShipTracker";
import LeafletMap from "@/components/LeafletMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Anchor, Ship, Package, Calendar, Clock, Navigation, MapPin, AlertTriangle } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";

// Create interface that matches LeafletMap props
interface ShipData {
  id: string;
  name: string;
  location: number[];
  cargo: string;
  status: string;
  delay: boolean;
  delayReason: string | null;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  journeyHistory: {
    timestamp: string;
    status: string;
    location: string;
  }[];
}

const TrackingPage = () => {
  const [ships, setShips] = useState<ShipData[]>([
    {
      id: "ship-1",
      name: "Eliana",
      location: [3.9215, 107.9933],
      cargo: "Sayuran Segar",
      status: "Berangkat",
      delay: false,
      delayReason: null,
      origin: "Pulau Sedanau",
      destination: "Jakarta",
      departureTime: "2024-07-15T08:00:00",
      arrivalTime: "2024-07-17T17:00:00",
      journeyHistory: [
        { timestamp: "2024-07-15T08:00:00", status: "Berangkat", location: "Pulau Sedanau" },
        { timestamp: "2024-07-15T14:00:00", status: "Checkpoint", location: "Selat Karimata" },
        { timestamp: "2024-07-16T02:00:00", status: "Checkpoint", location: "Laut Jawa" },
        { timestamp: "2024-07-16T18:00:00", status: "Checkpoint", location: "Dekat Cirebon" },
      ],
    },
    {
      id: "ship-2",
      name: "Nusantara Jaya",
      location: [-6.2088, 106.8456],
      cargo: "Buah-buahan",
      status: "Tiba",
      delay: false,
      delayReason: null,
      origin: "Pontianak",
      destination: "Jakarta",
      departureTime: "2024-07-12T10:00:00",
      arrivalTime: "2024-07-14T20:00:00",
      journeyHistory: [
        { timestamp: "2024-07-12T10:00:00", status: "Berangkat", location: "Pontianak" },
        { timestamp: "2024-07-12T20:00:00", status: "Checkpoint", location: "Laut Natuna" },
        { timestamp: "2024-07-13T14:00:00", status: "Checkpoint", location: "Selat Karimata" },
        { timestamp: "2024-07-14T08:00:00", status: "Checkpoint", location: "Laut Jawa" },
        { timestamp: "2024-07-14T20:00:00", status: "Tiba", location: "Jakarta" },
      ],
    },
    {
      id: "ship-3",
      name: "Bahari Makmur",
      location: [-2.5333, 118.0167],
      cargo: "Produk Olahan",
      status: "Jadwal",
      delay: true,
      delayReason: "Cuaca buruk di sekitar Selat Makassar",
      origin: "Balikpapan",
      destination: "Surabaya",
      departureTime: "2024-07-18T14:00:00",
      arrivalTime: "2024-07-20T06:00:00",
      journeyHistory: [
        { timestamp: "2024-07-18T14:00:00", status: "Berangkat", location: "Balikpapan" },
        { timestamp: "2024-07-19T00:00:00", status: "Checkpoint", location: "Selat Makassar" },
        { timestamp: "2024-07-19T12:00:00", status: "Tertunda", location: "Dekat Pare-Pare" },
      ],
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedShipId, setSelectedShipId] = useState<string | null>(null);
  const selectedShip = ships.find((ship) => ship.id === selectedShipId);
  const { toast } = useToast();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectShip = (shipId: string) => {
    setSelectedShipId(shipId);
  };

  const filteredShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-white to-slate-50">
        <div className="text-center max-w-3xl mx-auto pt-12 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gradient-to-r from-sayur-blue to-sayur-green">
            Lacak Pengirimanmu
          </h1>
          <p className="text-gray-600 text-lg">
            Pantau pergerakan kapal pengangkut sayuranmu secara realtime.
          </p>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Search and Ship List */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search Panel */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-center space-x-2 mb-4">
                  <Navigation className="w-5 h-5 text-gray-500" />
                  <h2 className="text-xl font-semibold">Cari Kapal</h2>
                </div>
                <Input
                  type="text"
                  placeholder="Cari nama kapal..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Masukkan nama kapal untuk mencari informasi pengiriman.
                </p>
              </div>
              
              {/* Ship List */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Anchor className="w-5 h-5 mr-2 text-sayur-blue" />
                  Kapal Aktif
                </h2>
                
                <ScrollArea className="h-[400px] pr-4">
                  {filteredShips.length > 0 ? (
                    filteredShips.map((ship) => (
                      <Card key={ship.id} className="mb-3">
                        <CardContent className="flex items-center justify-between p-3">
                          <div>
                            <h3 className="font-medium">{ship.name}</h3>
                            <p className="text-sm text-gray-500">{ship.cargo}</p>
                          </div>
                          <Badge variant="secondary">{ship.status}</Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSelectShip(ship.id)}
                          >
                            Lihat Detail
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p className="text-gray-500">Tidak ada kapal ditemukan.</p>
                  )}
                </ScrollArea>
              </div>
            </div>
            
            {/* Right Column - Map and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <div className="h-[400px] w-full rounded-lg overflow-hidden relative">
                  {/* Fixed type issue with LeafletMap props */}
                  <LeafletMap />
                </div>
              </div>
              
              {/* Details */}
              {selectedShip && (
                <div className="bg-white rounded-xl shadow-sm">
                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="w-full grid grid-cols-3 p-0 h-auto">
                      <TabsTrigger value="info" className="py-3 rounded-none rounded-tl-xl data-[state=active]:bg-sayur-blue-light/20">Info Kapal</TabsTrigger>
                      <TabsTrigger value="cargo" className="py-3 rounded-none data-[state=active]:bg-sayur-green-light/20">Muatan</TabsTrigger>
                      <TabsTrigger value="route" className="py-3 rounded-none rounded-tr-xl data-[state=active]:bg-sayur-earth-light/20">Rute</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="info" className="p-5">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Ship className="h-6 w-6 text-sayur-blue" />
                          <h3 className="text-xl font-semibold">
                            {selectedShip.name}
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-500">Asal</h4>
                            <p className="font-semibold">{selectedShip.origin}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-500">Tujuan</h4>
                            <p className="font-semibold">{selectedShip.destination}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-500">Status</h4>
                            <p className="font-semibold">{selectedShip.status}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-500">Muatan</h4>
                            <p className="font-semibold">{selectedShip.cargo}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-500">Waktu Keberangkatan</h4>
                            <p className="font-semibold">
                              {format(new Date(selectedShip.departureTime), "d MMMM yyyy, HH:mm", { locale: id })}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-500">Estimasi Tiba</h4>
                            <p className="font-semibold">
                              {format(new Date(selectedShip.arrivalTime), "d MMMM yyyy, HH:mm", { locale: id })}
                            </p>
                          </div>
                        </div>
                        
                        {selectedShip.delay && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start mt-4">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-amber-800">Keterlambatan Terdeteksi</p>
                              <p className="text-sm text-amber-700">
                                {selectedShip.delayReason || "Terjadi keterlambatan karena kondisi cuaca."}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="cargo" className="p-5">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Package className="h-6 w-6 text-sayur-green" />
                          <h3 className="text-xl font-semibold">Detail Muatan</h3>
                        </div>
                        
                        <Card className="mb-3">
                          <CardContent className="flex items-center justify-between p-3">
                            <div>
                              <h3 className="font-medium">Jenis Muatan</h3>
                              <p className="text-sm text-gray-500">{selectedShip.cargo}</p>
                            </div>
                            <Badge variant="outline">Segar</Badge>
                          </CardContent>
                        </Card>
                        
                        <Card className="mb-3">
                          <CardContent className="flex items-center justify-between p-3">
                            <div>
                              <h3 className="font-medium">Penanganan</h3>
                              <p className="text-sm text-gray-500">
                                Perlu penanganan khusus untuk menjaga kesegaran.
                              </p>
                            </div>
                            <Badge variant="outline">Prioritas</Badge>
                          </CardContent>
                        </Card>
                        
                        <Card className="mb-3">
                          <CardContent className="flex items-center justify-between p-3">
                            <div>
                              <h3 className="font-medium">Catatan Tambahan</h3>
                              <p className="text-sm text-gray-500">
                                Hindari paparan langsung terhadap sinar matahari.
                              </p>
                            </div>
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="route" className="p-5">
                      <div className="space-y-5">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-500">Asal</h3>
                            <p className="font-semibold text-lg flex items-center">
                              <MapPin className="h-5 w-5 mr-1 text-sayur-red" />
                              {selectedShip.origin}
                            </p>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-500">Tujuan</h3>
                            <p className="font-semibold text-lg flex items-center">
                              <MapPin className="h-5 w-5 mr-1 text-sayur-green" />
                              {selectedShip.destination}
                            </p>
                          </div>
                        </div>
                        
                        <hr className="my-4" />
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Riwayat Perjalanan</h3>
                          
                          <div className="relative pl-8">
                            <div className="absolute left-3 top-1 bottom-0 w-0.5 bg-gray-200" />
                            
                            {selectedShip.journeyHistory.map((event, i) => (
                              <div key={i} className="mb-6 relative">
                                <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-white border-2 border-sayur-blue flex items-center justify-center">
                                  {i === 0 ? (
                                    <div className="w-2 h-2 bg-sayur-blue rounded-full" />
                                  ) : null}
                                </div>
                                <p className="text-xs text-gray-500">
                                  {format(new Date(event.timestamp), "d MMMM yyyy, HH:mm", { locale: id })}
                                </p>
                                <p className="font-medium">{event.status}</p>
                                <p className="text-gray-600 text-sm">{event.location}</p>
                              </div>
                            ))}
                          </div>
                          
                          {selectedShip.delay ? (
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start mt-4">
                              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-medium text-amber-800">Keterlambatan Terdeteksi</p>
                                <p className="text-sm text-amber-700">
                                  {selectedShip.delayReason || "Terjadi keterlambatan karena kondisi cuaca."}
                                </p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {!selectedShip && (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <Ship className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-600">Pilih Kapal untuk Melihat Detail</h3>
                  <p className="text-gray-500 mt-2">
                    Klik pada salah satu kapal di peta atau daftar untuk melihat informasi lengkap.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackingPage;
