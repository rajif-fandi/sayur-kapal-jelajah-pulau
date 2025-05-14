import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, FileText, Image, ChevronRight, MapPin, Ship, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Farmer stories data
const farmerStories = [
  {
    id: 'f1',
    name: 'Pak Budi',
    location: 'Pulau Pari',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    coverImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80',
    excerpt: 'Menggunakan teknik pertanian organik tradisional selama 15 tahun.',
    fullStory: `
      Perjalanan saya sebagai petani organik di Pulau Pari dimulai 15 tahun lalu ketika saya menyadari dampak negatif pestisida kimia 
      terhadap tanah dan lingkungan pulau kami yang kecil. Dengan lahan terbatas dan tantangan iklim pulau, saya mengembangkan teknik 
      pertanian organik yang memanfaatkan sumber daya lokal seperti kompos dari limbah organik dan pupuk alami dari laut.
      
      Dulu, hasil panen kami hanya bisa dijual di pasar lokal dengan harga rendah, dan banyak yang terbuang karena tidak ada pembeli. 
      Sayuran yang tidak terjual harus dibuang karena tidak ada fasilitas penyimpanan yang memadai di pulau kami.
      
      Sejak bergabung dengan GreenWave Cargo pada tahun 2020, kehidupan saya dan keluarga berubah drastis. Sekarang saya memiliki akses ke pasar 
      kota yang lebih luas, dan sayuran organik saya dihargai dengan harga yang layak. Dengan jadwal pengiriman yang teratur, saya bisa merencanakan 
      panen dengan lebih baik dan hampir tidak ada sayuran yang terbuang.
      
      Saya sekarang bisa menyekolahkan anak-anak saya sampai perguruan tinggi dan memperluas kebun saya dengan beberapa jenis sayuran baru 
      yang diminati pasar kota. GreenWave Cargo juga memberikan pelatihan tentang teknik pertanian berkelanjutan yang membantu meningkatkan 
      hasil panen saya.
    `,
    gallery: [
      'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80'
    ],
    products: ['Bayam', 'Kangkung', 'Selada'],
    featured: true
  },
  {
    id: 'f2',
    name: 'Ibu Siti',
    location: 'Pulau Tidung',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    coverImage: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80',
    excerpt: 'Generasi ketiga petani yang menggabungkan teknik tradisional dengan modern.',
    fullStory: `
      Saya adalah generasi ketiga petani di keluarga kami. Nenek saya mulai bertani di Pulau Tidung pada tahun 1960-an, dan pengetahuan itu 
      diturunkan kepada ibu saya dan kemudian kepada saya. Namun, saya menyadari bahwa teknik tradisional saja tidak cukup untuk menghadapi 
      tantangan pertanian modern.
      
      Setelah menyelesaikan pendidikan di bidang pertanian di Jakarta, saya kembali ke Pulau Tidung dengan pengetahuan baru. Saya menggabungkan 
      kearifan lokal dari orangtua saya dengan teknik modern yang saya pelajari, seperti sistem irigasi tetes untuk menghemat air dan rotasi 
      tanaman untuk menjaga kesuburan tanah.
      
      Salah satu tantangan terbesar kami adalah mengangkut hasil panen ke kota. Sebelumnya, kami bergantung pada kapal nelayan yang jadwalnya 
      tidak pasti. Saat cuaca buruk, sayuran kami bisa rusak menunggu transportasi.
      
      GreenWave Cargo memberikan solusi transportasi yang andal dan terjadwal, sehingga saya bisa merencanakan panen dan pengiriman dengan lebih baik. 
      Selain itu, sistem pelacakan mereka memberi saya visibilitas penuh terhadap pergerakan produk saya, memberikan ketenangan pikiran bahwa 
      sayuran saya akan sampai dengan aman ke pelanggan di kota.
    `,
    gallery: [
      'https://images.unsplash.com/photo-1582095128060-e9ca8130cc6b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&q=80'
    ],
    products: ['Tomat', 'Cabai', 'Terong'],
    featured: false
  },
  {
    id: 'f3',
    name: 'Pak Ahmad',
    location: 'Pulau Harapan',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    coverImage: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&q=80',
    excerpt: 'Pelopor teknik hidroponik di pulau dengan sumber air terbatas.',
    fullStory: `
      Pulau Harapan memiliki tantangan unik: keterbatasan sumber air tawar. Sebagai pulau kecil, kami bergantung pada air hujan dan pasokan air 
      dari daratan utama yang sering kali tidak mencukupi untuk pertanian tradisional.
      
      Setelah banyak penelitian dan eksperimen, saya mulai menerapkan teknik hidroponik yang menghemat air hingga 90% dibandingkan metode konvensional. 
      Awalnya, banyak tetangga yang skeptis. Mereka menganggap pertanian harus dilakukan dengan tanah, bukan dengan air dan nutrisi.
      
      Namun, ketika mereka melihat hasil panen pertama saya—wortel, brokoli, dan sawi yang tumbuh subur dengan air minimal—banyak yang mulai tertarik. 
      Saat ini, saya telah melatih lebih dari 30 keluarga di Pulau Harapan untuk mengadopsi teknik hidroponik, menciptakan komunitas petani hidroponik 
      yang berkembang.
      
      Kemitraan dengan GreenWave Cargo memungkinkan kami menjual sayuran hidroponik premium ke pasar Jakarta dan Tangerang. Dengan branding khusus 
      "Hidroponik Pulau", sayuran kami dijual dengan harga premium yang mencerminkan kualitas dan keunikannya. Hal ini telah meningkatkan pendapatan 
      komunitas kami secara signifikan.
    `,
    gallery: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?auto=format&fit=crop&q=80'
    ],
    products: ['Wortel', 'Brokoli', 'Sawi'],
    featured: false
  },
  {
    id: 'f4',
    name: 'Bu Ani',
    location: 'Pulau Pramuka',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    coverImage: 'https://images.unsplash.com/photo-1464972377689-e7673b713fb0?auto=format&fit=crop&q=80',
    excerpt: 'Pengembang kebun sayur komunal untuk ketahanan pangan pulau.',
    fullStory: `
      Ketahanan pangan selalu menjadi isu penting di Pulau Pramuka. Sebagai pulau kecil dengan populasi yang cukup padat, kami sangat bergantung 
      pada pasokan makanan dari daratan. Ketika cuaca buruk, kapal tidak bisa berlayar, dan kami mengalami kelangkaan sayuran segar.
      
      Berawal dari sebidang tanah kosong di belakang rumah saya, saya mulai mengajak para ibu rumah tangga untuk bersama-sama menanami lahan 
      tersebut dengan berbagai jenis sayuran. Kami fokus pada sayuran yang cepat panen seperti kangkung dan bayam, serta tanaman yang tahan 
      terhadap kondisi garam seperti selada air.
      
      Dalam dua tahun, kebun komunal kami berkembang dari satu lokasi menjadi lima lokasi yang tersebar di pulau. Lebih dari 50 keluarga kini 
      terlibat dalam proyek ini, tidak hanya memproduksi sayuran untuk konsumsi sendiri tetapi juga menjualnya ke penginapan dan restoran di pulau.
      
      Kemitraan dengan GreenWave Cargo membuka peluang baru: kami dapat mengirimkan kelebihan produksi ke pasar di Jakarta. Pendapatan dari penjualan 
      ini diinvestasikan kembali ke kebun komunal, memungkinkan kami memperluas lahan dan meningkatkan infrastruktur seperti sistem irigasi dan 
      rumah kaca sederhana.
    `,
    gallery: [
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80'
    ],
    products: ['Selada Air', 'Kangkung', 'Bayam'],
    featured: false
  }
];

// Video content
const videos = [
  {
    id: 'v1',
    title: 'Dari Pulau ke Meja Makan',
    thumbnail: 'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?auto=format&fit=crop&q=80',
    duration: '4:32',
    views: '1.2k'
  },
  {
    id: 'v2',
    title: 'Kehidupan Petani Pulau',
    thumbnail: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80',
    duration: '6:15',
    views: '985'
  },
  {
    id: 'v3',
    title: 'Teknik Hidroponik di Pulau',
    thumbnail: 'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?auto=format&fit=crop&q=80',
    duration: '5:48',
    views: '1.5k'
  }
];

// Blog posts
const blogPosts = [
  {
    id: 'b1',
    title: 'Tantangan dan Peluang Pertanian di Pulau Kecil',
    excerpt: 'Membahas berbagai tantangan yang dihadapi oleh petani pulau dan bagaimana mereka mengatasinya dengan inovasi...',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80',
    author: 'Siti Nuraini',
    date: '10 Mei 2025',
    readTime: '8 menit'
  },
  {
    id: 'b2',
    title: 'Mengoptimalkan Transportasi Laut untuk Pertanian Berkelanjutan',
    excerpt: 'Bagaimana GreenWave Cargo merevolusi distribusi sayuran dari pulau ke kota dengan sistem transportasi laut yang efisien...',
    image: 'https://images.unsplash.com/photo-1569597754991-8246c88d2a29?auto=format&fit=crop&q=80',
    author: 'Ahmad Surya',
    date: '5 Mei 2025',
    readTime: '6 menit'
  },
  {
    id: 'b3',
    title: 'Membangun Komunitas Petani Tangguh di Tengah Perubahan Iklim',
    excerpt: 'Kisah tentang bagaimana petani pulau beradaptasi dengan perubahan iklim dan membentuk komunitas yang saling mendukung...',
    image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80',
    author: 'Budi Santoso',
    date: '28 April 2025',
    readTime: '10 menit'
  }
];

const StoriesPage = () => {
  const [selectedFarmer, setSelectedFarmer] = useState(farmerStories[0]);
  const [activeTab, setActiveTab] = useState('farmers');
  
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
              Setiap sayuran memiliki kisah dan perjuangan di baliknya.
            </p>
          </div>
          
          {/* Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="farmers">Petani</TabsTrigger>
              <TabsTrigger value="videos">Video</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Farmers Tab */}
          {activeTab === 'farmers' && (
            <div className="space-y-12">
              {/* Featured Farmer Story */}
              <Card className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={selectedFarmer.image} 
                        alt={selectedFarmer.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                      <h3 className="text-xl font-medium text-white">{selectedFarmer.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium rounded-full bg-sayur-blue/10 text-sayur-blue">
                      <MapPin className="h-3 w-3" />
                      {selectedFarmer.location}
                    </div>
                    <h3 className="text-2xl font-medium mb-2 hidden md:block">{selectedFarmer.name}</h3>
                    <div className="prose prose-sm text-gray-600 mb-4">
                      <p>{selectedFarmer.fullStory.substring(0, 500)}...</p>
                    </div>
                    
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Hasil Tani:</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedFarmer.products.map((product, index) => (
                          <span 
                            key={index} 
                            className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="mt-4 flex items-center text-sayur-blue self-start">
                      Baca cerita lengkap
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Farmer Gallery */}
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Galeri Foto {selectedFarmer.name}</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {selectedFarmer.gallery.map((image, idx) => (
                      <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4">
                        <AspectRatio ratio={1/1} className="bg-slate-50">
                          <img 
                            src={image} 
                            alt={`Galeri ${selectedFarmer.name} ${idx + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex justify-end gap-2 mt-4">
                    <CarouselPrevious className="static transform-none" />
                    <CarouselNext className="static transform-none" />
                  </div>
                </Carousel>
              </div>
              
              {/* Other Farmers */}
              <div>
                <h2 className="text-xl font-medium mb-6">Petani Lainnya</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {farmerStories.filter(farmer => farmer.id !== selectedFarmer.id).map((story) => (
                    <Card 
                      key={story.id} 
                      className="overflow-hidden border-0 shadow-md bg-white/90 backdrop-blur-sm h-full cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedFarmer(story)}
                    >
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
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-12">
              {/* Featured Video */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-medium mb-6">Video Cerita Petani</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="relative rounded-lg overflow-hidden">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={videos[0].thumbnail} 
                          alt={videos[0].title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {videos[0].duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mt-4">{videos[0].title}</h3>
                    <p className="text-gray-500 text-sm">
                      {videos[0].views} tayangan • Diperbarui 2 minggu lalu
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Video Terkait</h3>
                    <div className="space-y-4">
                      {videos.slice(1).map((video) => (
                        <div key={video.id} className="flex gap-3 cursor-pointer">
                          <div className="relative w-32 flex-shrink-0">
                            <AspectRatio ratio={16/9}>
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </AspectRatio>
                            <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1 py-0.5 rounded">
                              {video.duration}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 text-sm">{video.title}</h4>
                            <p className="text-gray-500 text-xs mt-1">
                              {video.views} tayangan
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full">Lihat Semua Video</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-sayur-green/5 to-sayur-green/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-sayur-green/20 flex items-center justify-center mb-4">
                      <Image className="h-6 w-6 text-sayur-green" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Proses Pertanian</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Melihat bagaimana sayuran ditanam dan dipanen dengan metode organik di pulau-pulau terpencil.
                    </p>
                    <Button variant="outline" className="border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white">
                      Tonton Sekarang
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-sayur-blue/5 to-sayur-blue/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-sayur-blue/20 flex items-center justify-center mb-4">
                      <Ship className="h-6 w-6 text-sayur-blue" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Distribusi Kapal</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Mengikuti perjalanan sayuran dari kebun petani hingga pelabuhan kota melalui rute laut yang indah.
                    </p>
                    <Button variant="outline" className="border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
                      Tonton Sekarang
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-sayur-earth/5 to-sayur-earth/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-sayur-earth/20 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-sayur-earth" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Kisah Petani</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Mendengar langsung dari para petani tentang kehidupan, tantangan, dan harapan mereka.
                    </p>
                    <Button variant="outline" className="border-sayur-earth text-sayur-earth hover:bg-sayur-earth hover:text-white">
                      Tonton Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <div className="space-y-12">
              {/* Featured Blog Post */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card className="overflow-hidden h-full">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={blogPosts[0].image} 
                          alt={blogPosts[0].title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <Badge className="mb-3 bg-sayur-blue">{blogPosts[0].readTime} bacaan</Badge>
                        <h2 className="text-white text-2xl font-bold mb-2">{blogPosts[0].title}</h2>
                        <div className="flex items-center text-white/80 text-sm">
                          <span>Oleh {blogPosts[0].author}</span>
                          <span className="mx-2">•</span>
                          <span>{blogPosts[0].date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  {blogPosts.slice(1).map((post) => (
                    <Card key={post.id} className="overflow-hidden h-full">
                      <div className="relative">
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <Badge className="mb-2 bg-sayur-green">{post.readTime} bacaan</Badge>
                          <h3 className="text-white text-lg font-bold mb-2">{post.title}</h3>
                          <div className="flex items-center text-white/80 text-xs">
                            <span>Oleh {post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Blog Articles */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Artikel Terbaru</h2>
                  <Button variant="outline" size="sm">Lihat Semua</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, idx) => {
                    const post = blogPosts[idx % blogPosts.length]; // Reuse blog posts
                    return (
                      <Card key={`recent-${idx}`} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <AspectRatio ratio={16/9}>
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                          <div className="p-4">
                            <div className="flex items-center text-gray-500 text-xs mb-2">
                              <span>{post.date}</span>
                              <span className="mx-2">•</span>
                              <span>{post.readTime} bacaan</span>
                            </div>
                            <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center text-xs">
                              <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                              <span>Oleh {post.author}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          
          {/* Call to Action */}
          <div className="text-center max-w-xl mx-auto mt-16">
            <div className="p-6 bg-gradient-to-br from-sayur-blue/5 to-sayur-green/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Bergabung dengan Komunitas Kami</h3>
              <p className="text-gray-600 mb-6">
                Tertarik untuk mengenal lebih banyak petani pulau dan mendukung mereka? Bergabunglah dengan komunitas GreenWave Cargo dan dapatkan akses ke cerita eksklusif, acara, dan kesempatan berinteraksi langsung dengan para petani.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-sayur-blue text-white">
                  Bergabung Sekarang
                </Button>
                <Button variant="outline" className="border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoriesPage;
