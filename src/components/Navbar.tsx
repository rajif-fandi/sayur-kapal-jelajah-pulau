
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-sayur-green flex items-center justify-center">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h20"/>
                <path d="M12 2v20"/>
                <path d="M20 16c-1.39-1.86-5.23-1.75-10-1.97"/>
                <path d="M4 16c1.39-1.86 5.23-1.75 10-1.97"/>
              </svg>
            </div>
            <span className="font-poppins font-bold text-xl text-sayur-green">SayurNaikKapal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-sayur-green transition-colors">
              Beranda
            </Link>
            <Link to="/produk" className="font-medium hover:text-sayur-green transition-colors">
              Produk
            </Link>
            <Link to="/pelacakan" className="font-medium hover:text-sayur-green transition-colors">
              Pelacakan Kapal
            </Link>
            <Link to="/cerita" className="font-medium hover:text-sayur-green transition-colors">
              Cerita Petani
            </Link>
            <Link to="/tentang" className="font-medium hover:text-sayur-green transition-colors">
              Tentang Kami
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/keranjang">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-sayur-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Link to="/masuk">
              <Button variant="outline" className="border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
                Masuk
              </Button>
            </Link>
            <Link to="/daftar">
              <Button className="bg-sayur-green hover:bg-sayur-green-dark text-white">
                Daftar
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white px-4 py-2 shadow-lg transition-all duration-300",
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-3 py-3">
            <Link to="/" className="font-medium p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Beranda
            </Link>
            <Link to="/produk" className="font-medium p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Produk
            </Link>
            <Link to="/pelacakan" className="font-medium p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Pelacakan Kapal
            </Link>
            <Link to="/cerita" className="font-medium p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Cerita Petani
            </Link>
            <Link to="/tentang" className="font-medium p-2 hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Tentang Kami
            </Link>
            <div className="flex items-center justify-between pt-3 border-t">
              <Link to="/keranjang" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-sayur-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </Link>
              <div className="space-x-2">
                <Link to="/masuk" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
                    Masuk
                  </Button>
                </Link>
                <Link to="/daftar" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="bg-sayur-green hover:bg-sayur-green-dark text-white">
                    Daftar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
