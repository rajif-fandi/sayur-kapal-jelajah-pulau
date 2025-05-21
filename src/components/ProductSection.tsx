
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

// Sample product data with original images
const products = [
  {
    id: 'p1',
    name: 'Bayam Organik',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
    location: 'Pulau Pari',
    weight: '250g',
    badge: 'Organik'
  },
  {
    id: 'p2',
    name: 'Tomat Segar',
    price: 12000,
    originalPrice: 0,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    location: 'Pulau Tidung',
    weight: '500g',
    badge: ''
  },
  {
    id: 'p3',
    name: 'Wortel Lokal',
    price: 9000,
    originalPrice: 0,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=600&q=80',
    location: 'Pulau Harapan',
    weight: '500g',
    badge: ''
  },
  {
    id: 'p4',
    name: 'Kangkung Hidroponik',
    price: 8000,
    originalPrice: 10000,
    image: 'https://images.unsplash.com/photo-1604575590348-7862fd835427?auto=format&fit=crop&w=600&q=80',
    location: 'Pulau Pramuka',
    weight: '200g',
    badge: 'Hidroponik'
  }
];

// Product categories
const categories = [
  'Semua', 'Sayuran Daun', 'Sayuran Buah', 'Umbi-umbian', 'Organik', 'Hidroponik'
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Sayuran Segar dari Pulau</h2>
          <p className="text-gray-600 max-w-2xl">
            Pilih dari berbagai sayuran segar yang dipetik langsung dari kebun petani pulau dan dikirim ke rumah Anda.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/produk">
            <Button variant="outline" className="border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white">
              Lihat Semua Produk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            variant={activeCategory === category ? 'default' : 'outline'}
            className={
              activeCategory === category 
                ? 'bg-sayur-green hover:bg-sayur-green-dark text-white' 
                : 'border-gray-300 hover:border-sayur-green hover:text-sayur-green'
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
