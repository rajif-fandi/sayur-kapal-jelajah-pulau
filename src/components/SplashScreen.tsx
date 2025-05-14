
import React, { useState, useEffect } from 'react';
import { Ship, Waves, Anchor } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onFinish, 500);
            return 100;
          }
          return prev + 5;
        });
      }, 80);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onFinish]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-sayur-blue-light/30 to-sayur-blue/10 z-50">
      {/* Animated waves */}
      <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden">
        <div className="absolute bottom-[-10px] left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDEwMCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCBkPSdNMCAyMGMzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMmwxIDBoLTEwMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbD0nI0ZGRicgZmlsbC1vcGFjaXR5PScwLjMnLz48L3N2Zz4=')]" style={{ animation: 'wave-motion 10s linear infinite', backgroundSize: '100px 20px' }}></div>
        <div className="absolute bottom-[-5px] left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDEwMCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCBkPSdNMCAyMGMzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMmwxIDBoLTEwMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbD0nI0ZGRicgZmlsbC1vcGFjaXR5PScwLjQnLz48L3N2Zz4=')]" style={{ animation: 'wave-motion 7s linear infinite', backgroundSize: '80px 20px' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDEwMCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCBkPSdNMCAyMGMzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMiAzIDAgNS0yIDgtMiAzIDAgNSAyIDggMmwxIDBoLTEwMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcgZmlsbD0nI0ZGRicgZmlsbC1vcGFjaXR5PScwLjUnLz48L3N2Zz4=')]" style={{ animation: 'wave-motion 4s linear infinite', backgroundSize: '60px 20px' }}></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="relative mb-8">
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-sayur-blue/10 rounded-full filter blur-xl"></div>
          
          {/* Ship container with ripple effect */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sayur-blue to-sayur-blue-dark opacity-30 blur"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-6 border border-white/50 shadow-lg">
              <Ship className="h-16 w-16 text-sayur-blue animate-ship-sailing" />
            </div>
          </div>
          
          {/* Decorative maritime elements */}
          <div className="absolute -top-4 -left-8 transform -rotate-12">
            <Anchor className="h-6 w-6 text-sayur-blue/40" />
          </div>
          <div className="absolute top-4 -right-8 transform rotate-12">
            <Waves className="h-6 w-6 text-sayur-blue/40" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-sayur-blue via-sayur-blue-dark to-sayur-green bg-clip-text text-transparent">GreenWave Cargo</h1>
        <p className="text-gray-600 mb-8">Distribusi sayur dari pulau ke kota</p>
        
        <div className="relative w-64 h-3 bg-white/50 backdrop-blur-sm rounded-full overflow-hidden border border-white/50 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-sayur-blue via-sayur-blue-dark to-sayur-green transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Memuat pengalaman segar...</p>
        
        {/* Progress percentage */}
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 text-xs font-medium text-sayur-blue">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
