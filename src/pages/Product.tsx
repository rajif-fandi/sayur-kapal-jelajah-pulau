
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Filter, Users } from "lucide-react";
import { Leaf, Ship } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

const categories = [
  "Semua",
  "Sayuran Daun",
  "Sayuran Buah",
  "Umbi-umbian",
  "Rempah-rempah"
];

const products = [
  {
    id: 'p1',
    name: 'Bayam Organik',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80',
    location: 'Pulau Pari',
    weight: 'ikat',
    badge: 'Organik',
    category: 'Sayuran Daun',
    rating: 4.8,
    stock: 150,
    description: 'Bayam organik segar yang ditanam tanpa pestisida di tanah subur Pulau Pari.'
  },
  {
    id: 'p2',
    name: 'Kangkung Segar',
    price: 12000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1662318183265-5bbe6578d1b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Pulau Tidung',
    weight: 'ikat',
    badge: null,
    category: 'Sayuran Daun',
    rating: 4.5,
    stock: 200,
    description: 'Kangkung segar dengan batang tebal dan daun hijau yang renyah.'
  },
  {
    id: 'p3',
    name: 'Tomat Cherry',
    price: 25000,
    originalPrice: 30000,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80',
    location: 'Pulau Pramuka',
    weight: '250g',
    badge: 'Promo',
    category: 'Sayuran Buah',
    rating: 4.9,
    stock: 80,
    description: 'Tomat cherry manis dengan tekstur renyah dan kulit tipis.'
  },
  {
    id: 'p4',
    name: 'Cabai Rawit',
    price: 45000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1656690446612-a8ace4c6ca82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Pulau Harapan',
    weight: '500g',
    badge: null,
    category: 'Rempah-rempah',
    rating: 4.7,
    stock: 120,
    description: 'Cabai rawit pedas dengan cita rasa khas pulau yang cocok untuk berbagai masakan.'
  },
  {
    id: 'p5',
    name: 'Wortel Organik',
    price: 20000,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80',
    location: 'Pulau Tidung',
    weight: 'kg',
    badge: 'Organik',
    category: 'Umbi-umbian',
    rating: 4.6,
    stock: 100,
    description: 'Wortel organik segar dengan warna oranye cerah dan rasa manis alami.'
  },
  {
    id: 'p6',
    name: 'Sawi Hijau',
    price: 14000,
    originalPrice: null,
    image: 'https://cdn.acehonline.co/files/images/20220610-sawi.jpg',
    location: 'Pulau Pari',
    weight: 'ikat',
    badge: null,
    category: 'Sayuran Daun',
    rating: 4.4,
    stock: 180,
    description: 'Sawi hijau segar dengan daun lebar dan batang renyah, kaya akan nutrisi.'
  },
  {
    id: 'p7',
    name: 'Terong Ungu',
    price: 18000,
    originalPrice: 22000,
    image: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/28/Sumber-Foto-Canva-by-vichuda-2393014252.png',
    location: 'Pulau Pramuka',
    weight: 'kg',
    badge: 'Promo',
    category: 'Sayuran Buah',
    rating: 4.3,
    stock: 90,
    description: 'Terong ungu segar dengan kulit mengkilap dan daging yang lembut.'
  },
  {
    id: 'p8',
    name: 'Bawang Merah',
    price: 35000,
    originalPrice: null,
    image: 'https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/tpqx_7Ik9yLWFVOeJTs4W/original/052222900_1607682083-Manfaat-Bawang-Merah_-Antialergi-hingga-Menurunkan-Risiko-Kanker-shutterstock_1724962108.jpg',
    location: 'Pulau Harapan',
    weight: 'kg',
    badge: null,
    category: 'Rempah-rempah',
    rating: 4.7,
    stock: 150,
    description: 'Bawang merah kecil dengan aroma tajam dan rasa khas, hasil panen terbaik.'
  }
];

const ProductPage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  
  const filteredProducts = products.filter(product => 
    (selectedCategory === "Semua" || product.category === selectedCategory) &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    // Default: popularity (by rating)
    return b.rating - a.rating;
  });
  
  const handleAddToCart = (productId: string, productName: string) => {
    toast({
      title: "Ditambahkan ke keranjang",
      description: `${productName} telah ditambahkan ke keranjang belanja Anda.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-white to-slate-50">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-sayur-green-light/30 to-sayur-blue-light/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-sayur-green/10 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-sayur-green animate-pulse" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-sayur-green">Produk Sayuran Segar</h1>
              <p className="text-gray-700 text-lg mb-8">
                Pilih dari berbagai sayuran organik berkualitas tinggi yang dipanen langsung dari kebun petani pulau.
                Dikirim dengan kapal untuk menjaga kesegaran dan kualitas terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-sayur-green hover:bg-sayur-green-dark">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Mulai Belanja
                </Button>
                <Button variant="outline" className="border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white">
                  <Ship className="mr-2 h-4 w-4" />
                  Lihat Jadwal Pengiriman
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Catalog */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="w-full md:w-1/4 lg:w-1/5">
              <div className="bg-white p-5 rounded-xl shadow-sm sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Filter Produk</h2>
                
                {/* Search */}
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Pencarian</label>
                  <Input 
                    type="text" 
                    id="search" 
                    placeholder="Cari sayuran..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Kategori</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input 
                          type="radio" 
                          id={category} 
                          name="category" 
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-sayur-green focus:ring-sayur-green border-gray-300"
                        />
                        <label htmlFor={category} className="ml-2 text-sm text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sort By */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm text-gray-700 mb-2">Urutkan Berdasarkan</h3>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent text-sm text-gray-600"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popularity">Popularitas</option>
                    <option value="price-low">Harga: Rendah ke Tinggi</option>
                    <option value="price-high">Harga: Tinggi ke Rendah</option>
                    <option value="name-asc">Nama: A-Z</option>
                  </select>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full" onClick={() => {
                    setSelectedCategory("Semua");
                    setSearchQuery("");
                    setSortBy("popularity");
                  }}>
                    Reset Filter
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-xl">
                  {selectedCategory === "Semua" ? "Semua Produk" : selectedCategory}
                </h2>
                <p className="text-gray-600 text-sm">Menampilkan {sortedProducts.length} produk</p>
              </div>
              
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice || undefined}
                      image={product.image}
                      location={product.location}
                      weight={product.weight}
                      badge={product.badge || undefined}
                      className=""
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">Tidak ada produk ditemukan</h3>
                  <p className="text-gray-500 mt-2">
                    Coba ubah filter atau kata kunci pencarian Anda
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Value Propositions */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-sayur-green/5 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sayur-green/10 flex items-center justify-center">
                  <Ship className="h-8 w-8 text-sayur-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Pengiriman Terjadwal</h3>
                <p className="text-gray-600">
                  Kapal kami berlayar setiap hari dengan jadwal tetap untuk memastikan sayuran sampai dalam keadaan segar.
                </p>
              </div>
              
              <div className="text-center p-6 bg-sayur-blue/5 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sayur-blue/10 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-sayur-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Organik</h3>
                <p className="text-gray-600">
                  Semua sayuran kami ditanam dengan metode organik tanpa pestisida dan bahan kimia berbahaya.
                </p>
              </div>
              
              <div className="text-center p-6 bg-sayur-earth/5 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sayur-earth/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-sayur-earth" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mendukung Petani Lokal</h3>
                <p className="text-gray-600">
                  Setiap pembelian Anda mendukung penghidupan petani pulau dan komunitas lokal.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="ordering">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ordering">Pemesanan</TabsTrigger>
                <TabsTrigger value="delivery">Pengiriman</TabsTrigger>
                <TabsTrigger value="products">Produk</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ordering" className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Bagaimana cara memesan produk?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Anda dapat memesan produk melalui website atau aplikasi kami. Pilih produk yang diinginkan, 
                      tambahkan ke keranjang, dan lakukan checkout dengan mengisi informasi pengiriman.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Metode pembayaran apa saja yang tersedia?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Kami menerima pembayaran melalui transfer bank, e-wallet, kartu kredit, dan COD (bayar saat terima) 
                      untuk daerah tertentu.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Bagaimana jika saya ingin membatalkan pesanan?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Pembatalan pesanan dapat dilakukan paling lambat 24 jam setelah pemesanan. 
                      Silakan hubungi layanan pelanggan kami untuk proses pembatalan.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="delivery" className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Berapa lama waktu pengiriman?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Waktu pengiriman bergantung pada lokasi Anda. Untuk wilayah Jakarta dan sekitarnya, 
                      pengiriman dilakukan dalam 1-2 hari setelah panen. Untuk wilayah lain, mungkin memerlukan 2-3 hari.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Apakah saya bisa melacak pengiriman saya?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Ya, Anda dapat melacak posisi kapal pengiriman secara real-time melalui fitur pelacakan di website atau aplikasi kami.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Bagaimana jika produk saya rusak saat pengiriman?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Kami memiliki kebijakan garansi kesegaran. Jika produk Anda rusak atau tidak segar saat tiba, 
                      silakan laporkan dalam waktu 24 jam dan kami akan mengganti atau mengembalikan dana Anda.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="products" className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Bagaimana cara menyimpan sayuran agar tetap segar?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Setiap produk memiliki cara penyimpanan yang berbeda. Secara umum, simpan sayuran daun dalam wadah tertutup di lemari es, 
                      dan sayuran umbi di tempat kering dan sejuk. Informasi penyimpanan spesifik tertera pada kemasan.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Apakah produk benar-benar organik?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Ya, semua sayuran kami ditanam dengan metode organik dan telah mendapatkan sertifikasi dari badan sertifikasi organik nasional.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium">Apakah ada paket berlangganan?</h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Ya, kami menyediakan paket berlangganan mingguan dan bulanan dengan berbagai pilihan sayuran sesuai kebutuhan keluarga Anda. 
                      Paket berlangganan mendapatkan diskon khusus dan prioritas pengiriman.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
