
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Ship, Anchor, Map, Users } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-sayur-earth-light/50 flex items-center justify-center">
              <Ship className="h-10 w-10 text-sayur-earth-dark animate-ship-sailing" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient-to-r from-sayur-earth to-sayur-earth-dark">Tentang Kami</h1>
            <p className="text-gray-600 text-lg">
              GreenWave Cargo adalah perusahaan distribusi sayuran yang menghubungkan petani pulau dengan konsumen di perkotaan melalui jalur laut yang berkelanjutan.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="visi-misi" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="visi-misi">Visi & Misi</TabsTrigger>
                <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
                <TabsTrigger value="tim">Tim Kami</TabsTrigger>
                <TabsTrigger value="kontak">Kontak</TabsTrigger>
              </TabsList>
              
              <TabsContent value="visi-misi" className="p-6 bg-white rounded-xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-sayur-green/10 flex items-center justify-center flex-shrink-0">
                        <Ship className="h-6 w-6 text-sayur-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Visi</h3>
                        <p className="text-gray-600">
                          Menjadi perusahaan distribusi sayuran terdepan yang menghubungkan petani pulau dan konsumen kota dengan cara yang berkelanjutan dan berkeadilan.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-sayur-blue/10 flex items-center justify-center flex-shrink-0">
                        <Anchor className="h-6 w-6 text-sayur-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Misi</h3>
                        <ul className="text-gray-600 space-y-2 list-disc list-inside">
                          <li>Membangun jaringan distribusi sayuran antar pulau yang efisien</li>
                          <li>Meningkatkan pendapatan petani pulau melalui akses pasar yang lebih luas</li>
                          <li>Menyediakan sayuran segar berkualitas tinggi kepada konsumen kota</li>
                          <li>Mengurangi jejak karbon dengan mengoptimalkan rute transportasi laut</li>
                          <li>Mendorong praktik pertanian berkelanjutan di pulau-pulau terpencil</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
                    <img 
                      src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&q=80" 
                      alt="Kapal distribusi sayuran" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sejarah" className="p-6 bg-white rounded-xl shadow-sm">
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 rounded-xl overflow-hidden h-[250px]">
                      <img 
                        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80" 
                        alt="Perjalanan awal GreenWave Cargo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4">Awal Perjalanan</h3>
                      <p className="text-gray-600 mb-4">
                        GreenWave Cargo didirikan pada tahun 2020 oleh sekelompok pengusaha muda yang prihatin dengan kondisi petani di pulau-pulau terpencil. 
                        Berawal dari sebuah kapal kecil yang menghubungkan Pulau Pari dengan daratan Jakarta, kini GreenWave Cargo telah berkembang menjadi 
                        jaringan distribusi sayuran yang mencakup puluhan pulau di seluruh Indonesia.
                      </p>
                      <p className="text-gray-600">
                        Tantangan awal yang dihadapi adalah minimnya infrastruktur transportasi dan komunikasi, namun dengan pendekatan inovatif dan teknologi tepat guna, 
                        GreenWave Cargo berhasil membangun model bisnis yang berkelanjutan dan menguntungkan semua pihak.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-sayur-green-dark pl-6 py-2">
                    <h4 className="text-xl font-medium mb-2">Tonggak Penting</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sayur-green-dark font-semibold">2020</p>
                        <p className="text-gray-600">Pendirian GreenWave Cargo dengan satu kapal dan melayani satu pulau</p>
                      </div>
                      <div>
                        <p className="text-sayur-green-dark font-semibold">2021</p>
                        <p className="text-gray-600">Ekspansi ke 5 pulau di Kepulauan Seribu dan memperoleh pendanaan awal</p>
                      </div>
                      <div>
                        <p className="text-sayur-green-dark font-semibold">2022</p>
                        <p className="text-gray-600">Peluncuran aplikasi pelacakan kapal realtime untuk transparansi distribusi</p>
                      </div>
                      <div>
                        <p className="text-sayur-green-dark font-semibold">2023</p>
                        <p className="text-gray-600">Ekspansi ke pulau-pulau di Jawa Timur dan Bali dengan armada 10 kapal</p>
                      </div>
                      <div>
                        <p className="text-sayur-green-dark font-semibold">2024</p>
                        <p className="text-gray-600">Pengembangan sistem berlangganan sayur mingguan dan program pemberdayaan petani</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tim" className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 text-center">Tim Pendiri</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-white to-sayur-green/5 p-6 rounded-xl shadow-sm">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                        alt="Ahmad Surya" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-medium text-center mb-1">Ahmad Surya</h4>
                    <p className="text-sayur-green-dark text-center text-sm mb-3">CEO & Co-Founder</p>
                    <p className="text-gray-600 text-sm text-center">
                      Mantan ahli logistik maritim dengan pengalaman 10 tahun di industri perkapalan dan distribusi.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-sayur-blue/5 p-6 rounded-xl shadow-sm">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                        alt="Siti Nuraini" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-medium text-center mb-1">Siti Nuraini</h4>
                    <p className="text-sayur-blue text-center text-sm mb-3">COO & Co-Founder</p>
                    <p className="text-gray-600 text-sm text-center">
                      Ahli pertanian berkelanjutan dengan latar belakang akademik di bidang agrikultur dan pengembangan masyarakat.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-sayur-earth/5 p-6 rounded-xl shadow-sm">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" 
                        alt="Budi Santoso" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-medium text-center mb-1">Budi Santoso</h4>
                    <p className="text-sayur-earth text-center text-sm mb-3">CTO & Co-Founder</p>
                    <p className="text-gray-600 text-sm text-center">
                      Pakar teknologi dengan fokus pada sistem pelacakan dan manajemen rantai pasok berbasis IoT dan blockchain.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mt-12 mb-6 text-center">Tim Manajemen</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80" 
                        alt="Maya Putri" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium">Maya Putri</h5>
                    <p className="text-gray-600 text-sm">VP Marketing</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                        alt="Reza Wijaya" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium">Reza Wijaya</h5>
                    <p className="text-gray-600 text-sm">VP Operations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                        alt="Dina Sari" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium">Dina Sari</h5>
                    <p className="text-gray-600 text-sm">VP Finance</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" 
                        alt="Yusuf Pratama" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="font-medium">Yusuf Pratama</h5>
                    <p className="text-gray-600 text-sm">VP Technology</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="kontak" className="p-6 bg-white rounded-xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Hubungi Kami</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-sayur-green/10 flex items-center justify-center flex-shrink-0">
                          <Map className="h-5 w-5 text-sayur-green" />
                        </div>
                        <div>
                          <h4 className="font-medium">Kantor Pusat</h4>
                          <p className="text-gray-600">Jl. Pelabuhan Utama No. 123, Kepulauan Seribu, Jakarta, Indonesia</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-sayur-blue/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-sayur-blue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-600">info@greenwavecargo.com</p>
                          <p className="text-gray-600">support@greenwavecargo.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-sayur-earth/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-sayur-earth" />
                        </div>
                        <div>
                          <h4 className="font-medium">Telepon</h4>
                          <p className="text-gray-600">+62 812-3456-7890 (Kantor)</p>
                          <p className="text-gray-600">+62 878-9012-3456 (Layanan Pelanggan)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Jam Operasional</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <p className="font-medium">Senin - Jumat:</p>
                          <p>08.00 - 17.00 WIB</p>
                          <p className="font-medium">Sabtu:</p>
                          <p>08.00 - 14.00 WIB</p>
                          <p className="font-medium">Minggu & Hari Libur:</p>
                          <p>Tutup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent"
                          placeholder="Nama lengkap Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent"
                          placeholder="alamat@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent"
                          placeholder="Topik pesan Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sayur-green focus:border-transparent"
                          placeholder="Tulis pesan Anda disini..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="bg-sayur-green hover:bg-sayur-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Kirim Pesan
                      </button>
                    </form>
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

export default AboutPage;
