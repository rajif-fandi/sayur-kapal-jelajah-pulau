
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, User, Calendar, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Sample farmer stories data
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
  }
];

const FarmerStoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = farmerStories.find(s => s.id === id);
  
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Cerita tidak ditemukan</h2>
          <p className="mb-8">Maaf, cerita petani yang Anda cari tidak dapat ditemukan.</p>
          <Link to="/cerita">
            <Button>Kembali ke Cerita Petani</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-slate-50">
        {/* Hero Section */}
        <div className="relative h-[50vh]">
          <img 
            src={story.coverImage} 
            alt={story.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="container mx-auto">
              <Link to="/cerita" className="inline-flex items-center text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Cerita Petani
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{story.name}</h1>
              <div className="flex items-center text-white/90 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{story.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <div className="prose prose-lg max-w-none">
                  {story.fullStory.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Galeri</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {story.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-sm">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={image} 
                          alt={`Galeri ${story.name} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.location}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Hasil Tani:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {story.products.map((product, index) => (
                      <span 
                        key={index} 
                        className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full">Lihat Produk</Button>
              </div>
              
              <div className="bg-sayur-green/5 p-6 rounded-xl border border-sayur-green/10">
                <div className="w-10 h-10 rounded-full bg-sayur-green/20 flex items-center justify-center mb-4">
                  <Leaf className="h-5 w-5 text-sayur-green" />
                </div>
                <h3 className="font-medium mb-2">Dukung Petani Lokal</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dengan membeli produk dari petani pulau, Anda membantu meningkatkan kesejahteraan mereka dan mendukung pertanian berkelanjutan.
                </p>
                <Button variant="outline" className="w-full border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white">
                  Belanja Sekarang
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

export default FarmerStoryDetail;
