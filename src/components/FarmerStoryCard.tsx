
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FarmerStoryCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  story: string;
  products: string[];
}

const FarmerStoryCard: React.FC<FarmerStoryCardProps> = ({
  id,
  name,
  location,
  image,
  story,
  products
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow card-hover">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="h-64 md:h-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-gray-600 my-3 line-clamp-3">{story}</p>
          
          <div className="mt-2 mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Hasil Tani:</h4>
            <div className="flex flex-wrap gap-1">
              {products.map((product, index) => (
                <span 
                  key={index} 
                  className="bg-sayur-green/10 text-sayur-green-dark text-xs px-2 py-0.5 rounded-full"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto">
            <Link to={`/cerita/${id}`}>
              <Button variant="outline" className="w-full border-sayur-earth text-sayur-earth hover:bg-sayur-earth hover:text-white">
                Baca Cerita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerStoryCard;
