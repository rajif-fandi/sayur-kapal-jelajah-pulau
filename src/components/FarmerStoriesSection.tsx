
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FarmerStoryCard from './FarmerStoryCard';
import { Link } from 'react-router-dom';

// Sample farmer stories
const farmerStories = [
  {
    id: 'f1',
    name: 'Pak Budi',
    location: 'Pulau Pari',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    story: 'Pak Budi telah bertani di Pulau Pari selama lebih dari 15 tahun. Menggunakan teknik pertanian organik tradisional, beliau membudidayakan sayuran yang sehat dan bebas pestisida. "Saya ingin anak cucu kita bisa menikmati sayuran sehat dari pulau kami," katanya.',
    products: ['Bayam', 'Kangkung', 'Selada']
  },
  {
    id: 'f2',
    name: 'Ibu Siti',
    location: 'Pulau Tidung',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    story: 'Sebagai generasi ketiga petani di Pulau Tidung, Ibu Siti menggabungkan pengetahuan tradisional dengan teknik pertanian modern. Berkat kerja sama dengan SayurNaikKapal, kini sayurannya bisa dinikmati oleh masyarakat kota.',
    products: ['Tomat', 'Cabai', 'Terong']
  }
];

const FarmerStoriesSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Cerita Petani Pulau</h2>
          <p className="text-gray-600 max-w-2xl">
            Temui para petani yang merawat dan membudidayakan sayuran segar dari pulau-pulau terpencil.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/cerita">
            <Button variant="outline" className="border-sayur-earth text-sayur-earth hover:bg-sayur-earth hover:text-white">
              Semua Cerita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Farmer Stories */}
      <div className="grid grid-cols-1 gap-8">
        {farmerStories.map((story) => (
          <FarmerStoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default FarmerStoriesSection;
