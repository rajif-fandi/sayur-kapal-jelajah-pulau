
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sayur-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <svg className="h-6 w-6 text-sayur-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20"/>
                  <path d="M12 2v20"/>
                  <path d="M20 16c-1.39-1.86-5.23-1.75-10-1.97"/>
                  <path d="M4 16c1.39-1.86 5.23-1.75 10-1.97"/>
                </svg>
              </div>
              <span className="font-poppins font-bold text-xl">SayurNaikKapal</span>
            </Link>
            <p className="mt-4 text-gray-200">
              Menghubungkan petani pulau dengan masyarakat kota melalui distribusi sayuran segar berkualitas menggunakan transportasi kapal.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="hover:text-sayur-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-sayur-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-sayur-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Tautan</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/produk" className="hover:text-sayur-blue transition-colors">
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link to="/pelacakan" className="hover:text-sayur-blue transition-colors">
                  Pelacakan Kapal
                </Link>
              </li>
              <li>
                <Link to="/cerita" className="hover:text-sayur-blue transition-colors">
                  Cerita Petani
                </Link>
              </li>
              <li>
                <Link to="/langganan" className="hover:text-sayur-blue transition-colors">
                  Berlangganan
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-sayur-blue transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Jl. Pelabuhan Utama No. 123, Kepulauan Seribu, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@sayurnaikkapal.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Berlangganan Newsletter</h3>
            <p className="text-gray-200 mb-4">
              Dapatkan info terbaru tentang produk, cerita petani, dan promo menarik.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-sayur-blue"
              />
              <button 
                type="submit" 
                className="bg-sayur-blue hover:bg-sayur-blue-dark transition-colors px-4 py-2 rounded-md font-medium"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 SayurNaikKapal. Hak Cipta Dilindungi.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/kebijakan-privasi" className="text-sm hover:text-sayur-blue transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-ketentuan" className="text-sm hover:text-sayur-blue transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/faq" className="text-sm hover:text-sayur-blue transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
