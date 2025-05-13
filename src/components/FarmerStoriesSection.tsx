
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Sample farmer stories
const farmerStories = [
  {
    id: 'f1',
    name: 'Pak Budi',
    location: 'Pulau Pari',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Menggunakan teknik pertanian organik tradisional selama 15 tahun.',
    products: ['Bayam', 'Kangkung', 'Selada']
  },
  {
    id: 'f2',
    name: 'Ibu Siti',
    location: 'Pulau Tidung',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Generasi ketiga petani yang menggabungkan teknik tradisional dengan modern.',
    products: ['Tomat', 'Cabai', 'Terong']
  }
];

const FarmerStoriesSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sayur-blue/10 flex items-center justify-center">
            <Book className="h-5 w-5 text-sayur-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Cerita Petani Pulau</h2>
            <p className="text-gray-600 text-sm">
              Kisah inspiratif para petani pulau dibalik kesegaran sayuran Anda
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/cerita">
            <Button variant="outline" className="border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
              Semua Cerita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Farmer Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farmerStories.map((story) => (
          <Card key={story.id} className="overflow-hidden border-0 shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1">
                  <div className="h-full relative">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-0.5 rounded-full text-sayur-blue">
                        {story.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 p-4 flex flex-col">
                  <h3 className="font-medium text-base mb-1">{story.name}</h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                    {story.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {story.products.slice(0, 2).map((product, index) => (
                        <span 
                          key={index}
                          className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                      {story.products.length > 2 && (
                        <span className="text-xs text-gray-500">+{story.products.length - 2}</span>
                      )}
                    </div>
                    
                    <Link to={`/cerita/${story.id}`} className="text-xs text-sayur-blue flex items-center">
                      Baca selengkapnya
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FarmerStoriesSection;
