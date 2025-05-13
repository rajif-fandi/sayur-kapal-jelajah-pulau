
import React, { useState, useEffect } from 'react';
import { Ship, Anchor, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              Hubungkan Petani Pulau dengan <span className="relative">
                Masyarakat Kota
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
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxkZWZzPjxwYXR0ZXJuIGlkPSd3YXZlJyB4PScwJyB5PScwJyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgcGF0dGVyblRyYW5zZm9ybT0ncm90YXRlKDQ1KSc+PHBhdGggZD0nTTEwIDBoMTB2MTBoLTEwek0wIDEwaDEwdjEwaC0xMHonIGZpbGwtb3BhY2l0eT0nMC4xJyBmaWxsPScjZmZmJy8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd1cmwoI3dhdmUpJy8+PC9zdmc+')]"></div>
              
              {/* Map placeholder - will be replaced with interactive map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glassy-container p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-lg text-white">
                  <div className="mb-2 mx-auto bg-white/20 rounded-full p-3 w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                    <Ship className="h-8 w-8 animate-ship-sailing" />
                  </div>
                  <p className="text-xl font-medium">Peta Interaktif</p>
                  <p className="text-sm opacity-80">Pelacakan kapal distribusi sayur</p>
                  <div className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Anchor className="h-4 w-4" />
                    <span className="text-xs">3 kapal sedang dalam perjalanan</span>
                  </div>
                </div>
              </div>
              
              {/* Wave animation at bottom */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                  <path fill="rgba(255,255,255,0.3)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Shipping Info Cards */}
            <div className="absolute -bottom-6 right-8 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-white/50 w-64">
              <div className="flex space-x-3">
                <div className="h-12 w-12 rounded-md bg-sayur-blue/10 flex items-center justify-center text-sayur-blue">
                  <Ship className="h-7 w-7 animate-ship-sailing" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimasi Tiba</p>
                  <p className="font-medium text-sayur-blue">2 Mei, 16:30 WIB</p>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sayur-blue to-sayur-blue-dark rounded-full" style={{ width: '65%' }}></div>
                  </div>
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
