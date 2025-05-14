
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeafletMap from "@/components/LeafletMap";
import ShipTracker from "@/components/ShipTracker";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Navigation, 
  Ship, 
  Calendar, 
  Clock, 
  MapPin, 
  Package,
  Search
} from "lucide-react";
import { toast } from "sonner";

// Sample ship data
const ships = [
  {
    id: "ship-01",
    name: "GW Serayu",
    route: "Pulau Pari - Jakarta",
    status: "Berlayar",
    departure: "07:30 WIB",
    arrival: "10:15 WIB",
    progress: 65,
    lastUpdated: "08:45 WIB",
    capacity: "80%",
    type: "Medium Vessel",
    products: ["Bayam", "Kangkung", "Terong", "Tomat", "Cabai"]
  },
  {
    id: "ship-02",
    name: "GW Barito",
    route: "Pulau Tidung - Jakarta",
    status: "Bersandar",
    departure: "13:00 WIB",
    arrival: "15:45 WIB",
    progress: 0,
    lastUpdated: "12:30 WIB",
    capacity: "70%",
    type: "Small Vessel",
    products: ["Wortel", "Kentang", "Selada", "Bayam"]
  },
  {
    id: "ship-03",
    name: "GW Citarum",
    route: "Jakarta - Pulau Pramuka",
    status: "Berlayar",
    departure: "06:15 WIB",
    arrival: "09:00 WIB",
    progress: 85,
    lastUpdated: "08:30 WIB",
    capacity: "90%",
    type: "Large Vessel",
    products: ["Sarana Tanam", "Bibit", "Pupuk Organik"]
  },
  {
    id: "ship-04",
    name: "GW Mahakam",
    route: "Pulau Harapan - Jakarta",
    status: "Persiapan",
    departure: "14:30 WIB",
    arrival: "17:15 WIB",
    progress: 0,
    lastUpdated: "14:00 WIB",
    capacity: "40%",
    type: "Medium Vessel",
    products: ["Sawi", "Selada Air", "Cabai", "Tomat"]
  }
];

// Sample schedule data
const schedules = [
  {
    day: "Senin",
    routes: [
      { from: "Pulau Pari", to: "Jakarta", departure: "07:30", arrival: "10:15", ship: "GW Serayu" },
      { from: "Jakarta", to: "Pulau Pramuka", departure: "11:30", arrival: "14:15", ship: "GW Citarum" },
      { from: "Pulau Tidung", to: "Jakarta", departure: "15:30", arrival: "18:15", ship: "GW Barito" }
    ]
  },
  {
    day: "Selasa",
    routes: [
      { from: "Pulau Harapan", to: "Jakarta", departure: "07:00", arrival: "09:45", ship: "GW Mahakam" },
      { from: "Jakarta", to: "Pulau Tidung", departure: "11:00", arrival: "13:45", ship: "GW Barito" },
      { from: "Pulau Pramuka", to: "Jakarta", departure: "15:00", arrival: "17:45", ship: "GW Citarum" }
    ]
  },
  {
    day: "Rabu",
    routes: [
      { from: "Pulau Pari", to: "Jakarta", departure: "07:30", arrival: "10:15", ship: "GW Serayu" },
      { from: "Jakarta", to: "Pulau Harapan", departure: "12:30", arrival: "15:15", ship: "GW Mahakam" },
      { from: "Pulau Tidung", to: "Jakarta", departure: "16:00", arrival: "18:45", ship: "GW Barito" }
    ]
  },
  {
    day: "Kamis",
    routes: [
      { from: "Pulau Pramuka", to: "Jakarta", departure: "07:15", arrival: "10:00", ship: "GW Citarum" },
      { from: "Jakarta", to: "Pulau Pari", departure: "11:15", arrival: "14:00", ship: "GW Serayu" },
      { from: "Pulau Harapan", to: "Jakarta", departure: "15:15", arrival: "18:00", ship: "GW Mahakam" }
    ]
  },
  {
    day: "Jumat",
    routes: [
      { from: "Pulau Tidung", to: "Jakarta", departure: "07:45", arrival: "10:30", ship: "GW Barito" },
      { from: "Jakarta", to: "Pulau Pramuka", departure: "11:45", arrival: "14:30", ship: "GW Citarum" },
      { from: "Pulau Pari", to: "Jakarta", departure: "15:45", arrival: "18:30", ship: "GW Serayu" }
    ]
  },
  {
    day: "Sabtu",
    routes: [
      { from: "Pulau Harapan", to: "Jakarta", departure: "08:00", arrival: "10:45", ship: "GW Mahakam" },
      { from: "Jakarta", to: "Pulau Tidung", departure: "12:00", arrival: "14:45", ship: "GW Barito" },
      { from: "Pulau Pramuka", to: "Jakarta", departure: "16:00", arrival: "18:45", ship: "GW Citarum" }
    ]
  },
  {
    day: "Minggu",
    routes: [
      { from: "Pulau Pari", to: "Jakarta", departure: "09:30", arrival: "12:15", ship: "GW Serayu" },
      { from: "Jakarta", to: "Pulau Harapan", departure: "13:30", arrival: "16:15", ship: "GW Mahakam" }
    ]
  }
];

const TrackingPage = () => {
  const [selectedShip, setSelectedShip] = useState(ships[0]);
  const [trackingQuery, setTrackingQuery] = useState("");
  
  const handleTrackShipment = () => {
    if (trackingQuery.trim() === "") {
      toast.error("Masukkan nomor resi pengiriman");
      return;
    }
    
    toast.success("Melacak pengiriman: " + trackingQuery);
    // In a real app, we would fetch tracking data based on the tracking number
    setTrackingQuery("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-white to-slate-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-sayur-blue-light/30 to-sayur-blue/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-sayur-blue/10 flex items-center justify-center">
                <Navigation className="h-10 w-10 text-sayur-blue" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-sayur-blue">Pelacakan Kapal</h1>
              <p className="text-gray-700 text-lg mb-8">
                Pantau lokasi kapal dan status pengiriman sayuran Anda secara real-time dari pulau ke kota.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl shadow-sm max-w-xl mx-auto">
                <Input 
                  type="text" 
                  placeholder="Masukkan nomor resi pengiriman" 
                  className="flex-1"
                  value={trackingQuery}
                  onChange={(e) => setTrackingQuery(e.target.value)}
                />
                <Button className="bg-sayur-blue hover:bg-sayur-blue-dark" onClick={handleTrackShipment}>
                  <Search className="mr-2 h-4 w-4" />
                  Lacak Pengiriman
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tracking Content */}
        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-3 mb-8">
              <TabsTrigger value="map">Peta Kapal</TabsTrigger>
              <TabsTrigger value="schedule">Jadwal Kapal</TabsTrigger>
              <TabsTrigger value="shipments">Info Pengiriman</TabsTrigger>
            </TabsList>
            
            <TabsContent value="map">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Ship List */}
                <div className="lg:col-span-1">
                  <h2 className="text-xl font-semibold mb-4">Armada Kapal</h2>
                  <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2">
                    {ships.map(ship => (
                      <Card 
                        key={ship.id} 
                        className={`cursor-pointer hover:bg-gray-50 transition-colors ${selectedShip.id === ship.id ? 'border-sayur-blue ring-2 ring-sayur-blue/20' : ''}`}
                        onClick={() => setSelectedShip(ship)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{ship.name}</h3>
                              <p className="text-sm text-gray-600">{ship.route}</p>
                            </div>
                            <Badge className={
                              ship.status === "Berlayar" ? "bg-green-500" : 
                              ship.status === "Bersandar" ? "bg-blue-500" : 
                              "bg-amber-500"
                            }>
                              {ship.status}
                            </Badge>
                          </div>
                          
                          <div className="mt-3">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>{ship.departure}</span>
                              <span>{ship.arrival}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-sayur-blue h-2 rounded-full" 
                                style={{ width: `${ship.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Map and Ship Detail */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <div>
                        <h2 className="text-xl font-semibold">{selectedShip.name}</h2>
                        <p className="text-gray-600">{selectedShip.route}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <div>
                          <p className="text-xs text-gray-500">Terakhir diperbarui</p>
                          <p className="font-medium">{selectedShip.lastUpdated}</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-sayur-blue text-sayur-blue">
                          Segarkan
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Jenis Kapal</p>
                        <p className="font-medium">{selectedShip.type}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Kapasitas Terisi</p>
                        <p className="font-medium">{selectedShip.capacity}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <p className="font-medium">{selectedShip.status}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2">Muatan Produk</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedShip.products.map((product, index) => (
                          <Badge key={index} variant="outline" className="bg-sayur-green/10 text-sayur-green border-sayur-green/20">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[400px] rounded-xl overflow-hidden shadow-sm">
                    <LeafletMap />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-6">Jadwal Kapal Mingguan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                  {schedules.map((day, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-center text-sayur-blue">{day.day}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {day.routes.map((route, ridx) => (
                          <div key={ridx} className="p-2 bg-gray-50 rounded-lg text-sm">
                            <div className="flex items-center gap-1 mb-1">
                              <Ship className="h-3 w-3 text-sayur-green" />
                              <span className="font-medium">{route.ship}</span>
                            </div>
                            <div className="flex items-center justify-between mb-1 text-xs">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1 text-gray-500" />
                                <span>{route.departure}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1 text-gray-500" />
                                <span>{route.arrival}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                                <span>{route.from}</span>
                              </div>
                              <span>→</span>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                                <span>{route.to}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 p-4 border border-dashed rounded-lg bg-gray-50">
                  <h3 className="font-medium mb-2">Catatan Jadwal:</h3>
                  <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                    <li>Jadwal dapat berubah tanpa pemberitahuan tergantung kondisi cuaca</li>
                    <li>Keberangkatan akan ditunda jika cuaca buruk atau gelombang tinggi</li>
                    <li>Kapasitas dapat berubah tergantung musim panen</li>
                    <li>Silakan periksa status kapal secara real-time melalui fitur pelacakan</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipments">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Status Pengiriman Terkini</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="border-b">
                        <div className="grid grid-cols-4 p-3 text-sm font-medium text-gray-500 bg-gray-50">
                          <div>Nomor Resi</div>
                          <div>Produk</div>
                          <div>Tanggal</div>
                          <div>Status</div>
                        </div>
                      </div>
                      
                      {[
                        { 
                          id: "TRK0012345", 
                          products: "Bayam, Kangkung, Selada", 
                          date: "14 Mei 2025", 
                          status: "Dikirim" 
                        },
                        { 
                          id: "TRK0012344", 
                          products: "Tomat, Wortel, Kentang", 
                          date: "13 Mei 2025", 
                          status: "Tiba" 
                        },
                        { 
                          id: "TRK0012343", 
                          products: "Bayam, Sawi", 
                          date: "12 Mei 2025", 
                          status: "Tiba" 
                        },
                        { 
                          id: "TRK0012342", 
                          products: "Cabai, Terong, Tomat", 
                          date: "10 Mei 2025", 
                          status: "Tiba" 
                        },
                        { 
                          id: "TRK0012341", 
                          products: "Wortel, Kentang", 
                          date: "9 Mei 2025", 
                          status: "Tiba" 
                        }
                      ].map((shipment, idx) => (
                        <div key={idx} className="border-b">
                          <div className="grid grid-cols-4 p-3 text-sm hover:bg-gray-50 cursor-pointer">
                            <div className="font-medium text-sayur-blue">{shipment.id}</div>
                            <div>{shipment.products}</div>
                            <div>{shipment.date}</div>
                            <div>
                              <Badge className={
                                shipment.status === "Dikirim" ? "bg-amber-500" : 
                                shipment.status === "Tiba" ? "bg-green-500" : 
                                "bg-gray-500"
                              }>
                                {shipment.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <ShipTracker className="mt-8" />
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Informasi Pengiriman</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium mb-3">Lacak Pengiriman</h3>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Nomor resi pengiriman" 
                            className="flex-1"
                            value={trackingQuery}
                            onChange={(e) => setTrackingQuery(e.target.value)}
                          />
                          <Button size="icon" onClick={handleTrackShipment}>
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="min-w-8 mt-1">
                            <Package className="h-6 w-6 text-sayur-blue" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Paket Standard</h3>
                            <p className="text-sm text-gray-600">
                              Pengiriman sayuran dari pulau ke kota dengan kapal reguler. 
                              Estimasi waktu 6-8 jam tergantung kondisi cuaca.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="min-w-8 mt-1">
                            <Ship className="h-6 w-6 text-sayur-green" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Paket Express</h3>
                            <p className="text-sm text-gray-600">
                              Pengiriman dengan kapal cepat, prioritas bongkar muat. 
                              Estimasi waktu 3-4 jam untuk jarak yang sama.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="min-w-8 mt-1">
                            <Calendar className="h-6 w-6 text-sayur-earth" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Berlangganan</h3>
                            <p className="text-sm text-gray-600">
                              Pengiriman rutin mingguan dengan jadwal tetap dan 
                              jaminan ketersediaan produk.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-dashed rounded-lg">
                        <h3 className="font-medium mb-3">Butuh Bantuan?</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Tim layanan pelanggan kami siap membantu Anda dengan pertanyaan seputar pengiriman.
                        </p>
                        <Button className="w-full bg-sayur-blue hover:bg-sayur-blue-dark">
                          Hubungi Layanan Pelanggan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-sayur-blue/10 to-sayur-green/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Jaga Kesegaran dengan GreenWave Cargo</h2>
              <p className="text-gray-700 mb-8">
                Dapatkan sayuran segar dari pulau ke rumah Anda dalam kondisi terbaik.
                Lacak kapal kami secara real-time dan ketahui kapan tepatnya sayuran Anda akan tiba.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-sayur-green hover:bg-sayur-green-dark">Belanja Sekarang</Button>
                <Button variant="outline" className="border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
                  Berlangganan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackingPage;
