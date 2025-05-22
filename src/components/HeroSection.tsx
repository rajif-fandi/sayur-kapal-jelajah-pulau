
import React, { useState, useEffect } from 'react';
import { Ship, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FarmerPhotoMap from "./FarmerPhotoMap";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sayur-blue-light/40 via-white to-sayur-green-light/30">
      {/* Animated waves background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 w-full h-56 bg-wave-pattern animate-wave opacity-20"></div>
        <div className="absolute bottom-0 w-full h-40 bg-wave-pattern animate-wave opacity-30" style={{ animationDelay: '-2s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-0 w-full h-24 bg-wave-pattern animate-wave opacity-40" style={{ animationDelay: '-5s', animationDuration: '20s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-gradient-to-r from-sayur-blue to-sayur-blue-dark text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
              <div className="flex items-center gap-2">
                <Waves className="h-4 w-4" />
                <span>Sayuran Segar dari Pulau Terpencil</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-sayur-blue-dark via-sayur-blue to-sayur-green bg-clip-text text-transparent">
              Hubungkan Petani Pulau dengan Masyarakat Kota <span className="relative">
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sayur-blue to-sayur-green rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Kami menghubungkan petani di pulau terpencil dengan konsumen di kota besar melalui distribusi sayuran segar berkualitas menggunakan transportasi kapal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pelacakan">
                <Button className="bg-gradient-to-r from-sayur-blue to-sayur-blue-dark hover:from-sayur-blue-dark hover:to-sayur-blue text-white shadow-lg transition-all flex items-center gap-2" size="lg">
                  Lacak Kapal Sekarang
                  <Ship className="h-5 w-5 animate-ship-sailing" />
                </Button>
              </Link>
              <Link to="/produk">
                <Button variant="outline" className="border-2 border-sayur-green bg-white/80 backdrop-blur-sm text-sayur-green hover:bg-sayur-green hover:text-white transition-all" size="lg">
                  Jelajahi Produk
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-sayur-earth-light to-sayur-earth shadow-md" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-sayur-blue">500+</span> petani dari pulau terpencil
              </div>
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative h-80 md:h-96 w-full bg-gradient-to-b from-sayur-blue to-sayur-blue-light/70 rounded-lg overflow-hidden shadow-2xl">
              {/* Farmer photos interactive map */}
              <div className="absolute inset-0">
                <div className="w-full h-full">
                  <FarmerPhotoMap />
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
