
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, FileText, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample farmer stories data
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
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Generasi ketiga petani yang menggabungkan teknik tradisional dengan modern.',
    products: ['Tomat', 'Cabai', 'Terong']
  },
  {
    id: 'f3',
    name: 'Pak Ahmad',
    location: 'Pulau Harapan',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Pelopor teknik hidroponik di pulau dengan sumber air terbatas.',
    products: ['Wortel', 'Brokoli', 'Sawi']
  },
  {
    id: 'f4',
    name: 'Bu Ani',
    location: 'Pulau Pramuka',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Pengembang kebun sayur komunal untuk ketahanan pangan pulau.',
    products: ['Selada Air', 'Kangkung', 'Bayam']
  }
];

const StoriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-sayur-blue/10 flex items-center justify-center">
              <Book className="h-8 w-8 text-sayur-blue" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gradient">Cerita Petani Pulau</h1>
            <p className="text-gray-600">
              Mengenal lebih dekat para petani pulau yang menyediakan sayuran segar berkualitas untuk meja makan Anda.
            </p>
          </div>
          
          {/* Featured Story */}
          <Card className="mb-12 overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={farmerStories[0].image} 
                    alt={farmerStories[0].name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                  <h3 className="text-xl font-medium text-white">{farmerStories[0].name}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <div className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-sayur-blue/10 text-sayur-blue">
                  {farmerStories[0].location}
                </div>
                <h3 className="text-2xl font-medium mb-2 hidden md:block">{farmerStories[0].name}</h3>
                <p className="text-gray-600 mb-4">
                  "Saya telah bertani di Pulau Pari selama lebih dari 15 tahun. Menggunakan teknik pertanian organik tradisional, 
                  saya membudidayakan sayuran yang sehat dan bebas pestisida. Tantangan terbesar kami adalah transportasi 
                  hasil panen ke kota, namun berkat SayurNaikKapal, kini sayuran kami bisa dinikmati oleh keluarga 
                  di perkotaan dalam keadaan segar."
                </p>
                
                <div className="mt-2">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Hasil Tani:</h4>
                  <div className="flex flex-wrap gap-1">
                    {farmerStories[0].products.map((product, index) => (
                      <span 
                        key={index} 
                        className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-sayur-blue">
                  <FileText className="h-4 w-4 mr-1" />
                  <span className="text-sm">Baca cerita lengkap</span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Carousel Stories */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-6">Cerita Lainnya</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {farmerStories.slice(1).map((story) => (
                  <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-0 shadow-md bg-white/90 backdrop-blur-sm h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative">
                          <AspectRatio ratio={4/3} className="bg-slate-50">
                            <img 
                              src={story.image} 
                              alt={story.name}
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute top-2 right-2">
                            <span className="bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-sayur-blue">
                              {story.location}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-medium text-lg mb-2">{story.name}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {story.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {story.products.map((product, index) => (
                              <span 
                                key={index}
                                className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-sayur-blue text-sm">
                            <Image className="h-3 w-3 mr-1" />
                            <span>Lihat galeri</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static transform-none" />
                <CarouselNext className="static transform-none" />
              </div>
            </Carousel>
          </div>
          
          {/* Call to Action */}
          <div className="text-center max-w-xl mx-auto mt-12">
            <div className="p-6 bg-gradient-to-br from-sayur-blue/5 to-sayur-green/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <p className="text-gray-600 mb-4">
                Tertarik untuk mengenal lebih banyak petani pulau dan cerita inspiratif di balik sayuran segar Anda?
              </p>
              <button className="px-4 py-2 bg-sayur-blue text-white rounded-md hover:bg-sayur-blue-dark transition-colors">
                Bergabung dengan Komunitas
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoriesPage;
