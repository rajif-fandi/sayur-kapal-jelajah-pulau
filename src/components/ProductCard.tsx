
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingCart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  return (
    <div className={cn("bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", className)}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
          {originalPrice && (
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
