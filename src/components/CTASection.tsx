
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ship, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-br from-sayur-green/10 to-sayur-blue/10 rounded-2xl overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dukung Petani Pulau & Nikmati Sayuran Segar
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Bergabunglah dengan komunitas yang mendukung keberlanjutan ekonomi petani pulau terpencil
              sambil menikmati sayuran segar berkualitas langsung ke rumah Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-sayur-green hover:bg-sayur-green-dark text-white flex items-center gap-2" size="lg">
                <MapPin className="h-5 w-5" />
                Lacak Kapal Sekarang
              </Button>
              <Link to="/produk">
                <Button variant="outline" className="border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white" size="lg">
                  Dukung Petani Pulau
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 md:ml-10">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sayur-green/10 text-sayur-green mb-4">
                    <Ship className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Pelacakan Real-time</h3>
                  <p className="text-gray-600 text-sm">
                    Pantau perjalanan sayuran Anda dari kebun ke meja makan.
                  </p>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sayur-blue/10 text-sayur-blue mb-4">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 12.5V16.5L18 18" />
                      <path d="M12 7a5 5 0 0 1 10 0" />
                      <path d="M12 7a5 5 0 0 0-10 0" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="M12 2v2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Pengiriman Terjadwal</h3>
                  <p className="text-gray-600 text-sm">
                    Dapatkan kiriman rutin sayuran segar setiap minggu.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sayur-earth/10 text-sayur-earth mb-4">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Kualitas Terjamin</h3>
                  <p className="text-gray-600 text-sm">
                    Sayuran segar yang dipetik langsung dari kebun.
                  </p>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sayur-blue/10 text-sayur-blue mb-4">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Pembelian Langsung</h3>
                  <p className="text-gray-600 text-sm">
                    Dukung ekonomi petani tanpa perantara.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                    <span className="text-sm ml-3">
                      <span className="font-semibold">120+</span> pengiriman hari ini
                    </span>
                  </div>
                  <div className="text-sm font-medium text-sayur-green">
                    Gabung Sekarang!
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

export default CTASection;
