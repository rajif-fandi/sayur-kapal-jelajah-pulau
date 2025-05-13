
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Ship } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8 mx-auto w-20 h-20 rounded-full bg-sayur-earth-light/50 flex items-center justify-center">
              <Ship className="h-10 w-10 text-sayur-earth-dark animate-ship-sailing" />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-gradient-to-r from-sayur-earth to-sayur-earth-dark">Tentang Kami</h1>
            <div className="p-8 bg-gradient-to-br from-white/80 to-sayur-earth-light/20 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
              <p className="text-xl text-gray-700 mb-6">
                Halaman tentang kami sedang dalam pengembangan. Kenali lebih jauh misi dan visi SayurNaikKapal dalam menghubungkan petani pulau dan konsumen kota.
              </p>
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-sayur-earth/10 blur-xl rounded-full"></div>
                <p className="relative px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg text-sayur-earth font-medium">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
