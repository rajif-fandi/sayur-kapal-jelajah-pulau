
import React, { useState, useEffect } from 'react';
import { Ship } from 'lucide-react';

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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-sayur-blue-light/30 to-sayur-green-light/20 z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute bottom-0 w-full">
            <div className="h-12 bg-sayur-blue-light/30 animate-wave rounded-full opacity-50"></div>
          </div>
          <Ship className="h-20 w-20 text-sayur-blue animate-ship-sailing relative mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-sayur-green">SayurNaikKapal</h1>
        <p className="text-gray-600 mb-8">Distribusi sayur dari pulau ke kota</p>
        
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sayur-green to-sayur-blue transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Memuat pengalaman segar...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
