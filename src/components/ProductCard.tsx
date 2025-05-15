
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingCart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCarousel from './ProductCarousel';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  location: string;
  weight: string;
  badge?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  location,
  weight,
  badge,
  className,
}) => {
  // Generate multiple images for the carousel based on the main image
  const productImages = [
    { id: `${id}-1`, url: image, alt: name },
    { id: `${id}-2`, url: image.replace(/\?\w+/, '?variant=1'), alt: `${name} - variant 1` },
    { id: `${id}-3`, url: image.replace(/\?\w+/, '?variant=2'), alt: `${name} - variant 2` },
  ];

  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", className)}>
      <div className="relative h-48 overflow-hidden">
        <ProductCarousel 
          images={productImages} 
          aspectRatio={4/3}
          autoSlide={true}
          interval={7000}
          showControls={false}
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-sayur-green text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-1 text-xs text-gray-500 mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </div>
        <Link to={`/produk/${id}`}>
          <h3 className="font-medium text-lg hover:text-sayur-green transition-colors">{name}</h3>
        </Link>
        <div className="flex items-baseline mt-1 mb-3 space-x-2">
          <span className="font-bold text-lg">Rp {price.toLocaleString()}</span>
          {originalPrice && originalPrice > 0 && (
            <span className="text-sm text-gray-400 line-through">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xs text-gray-500">/ {weight}</span>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Keranjang
          </Button>
          <Button 
            size="sm"
            className="bg-sayur-green hover:bg-sayur-green-dark"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
