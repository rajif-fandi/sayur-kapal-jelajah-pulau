
import React, { useState, useEffect } from 'react';
import { Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sayur-green-light/30 via-white to-sayur-blue-light/20">
      {/* Wave background */}
      <div className="absolute inset-0 bg-wave-pattern animate-wave opacity-30"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-sayur-green text-white rounded-full px-4 py-1 text-sm font-medium">
              Sayuran Segar dari Pulau Terpencil
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Hubungkan Petani Pulau dengan <span className="text-sayur-green">Masyarakat Kota</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Kami menghubungkan petani di pulau terpencil dengan konsumen di kota besar melalui distribusi sayuran segar berkualitas menggunakan transportasi kapal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2" size="lg">
                Lacak Kapal Sekarang
                <Ship className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline" size="lg">
                Jelajahi Produk
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-sayur-green">500+</span> petani dari pulau terpencil
              </div>
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative h-80 md:h-96 w-full bg-sayur-blue rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-sayur-blue via-sayur-blue-light/70 to-sayur-blue-light/30"></div>
              
              {/* Map placeholder - will be replaced with interactive map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <Ship className="h-16 w-16 mx-auto mb-4 animate-ship-sailing" />
                  <p className="text-xl font-medium">Peta Interaktif</p>
                  <p className="text-sm opacity-80">Akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
            
            {/* Shipping Info Cards */}
            <div className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-lg w-60">
              <div className="flex space-x-3">
                <div className="h-10 w-10 rounded-md bg-sayur-green/10 flex items-center justify-center text-sayur-green">
                  <Ship className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimasi Tiba</p>
                  <p className="font-medium">2 Mei, 16:30 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
