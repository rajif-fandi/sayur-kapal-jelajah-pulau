
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LeafletMap from '@/components/LeafletMap';
import ShipTracker from '@/components/ShipTracker';
import ProductSection from '@/components/ProductSection';
import FarmerStoriesSection from '@/components/FarmerStoriesSection';
import SubscriptionSection from '@/components/SubscriptionSection';
import CTASection from '@/components/CTASection';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  const handleSplashFinish = () => {
    setShowSplash(false);
  };
  
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main>
            {/* Hero Section */}
            <section>
              <HeroSection />
            </section>
            
            {/* Map Section */}
            <section className="bg-white py-16">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pelacakan Kapal Real-time</h2>
                  <p className="text-gray-600 text-lg">
                    Pantau pergerakan kapal distribusi sayur dari pulau ke kota dengan peta interaktif kami.
                  </p>
                </div>
                
                <LeafletMap />
                
                <div className="mt-12">
                  <ShipTracker />
                </div>
              </div>
            </section>
            
            {/* Products Section */}
            <section className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <ProductSection />
              </div>
            </section>
            
            {/* Farmer Stories Section */}
            <section className="bg-white py-16">
              <div className="container mx-auto px-4">
                <FarmerStoriesSection />
              </div>
            </section>
            
            {/* Subscription Section */}
            <section className="bg-gray-50">
              <div className="container mx-auto">
                <SubscriptionSection />
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-white py-16">
              <div className="container mx-auto px-4">
                <CTASection />
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
