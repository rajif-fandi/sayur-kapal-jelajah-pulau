
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

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
    <Card className="overflow-hidden border-0 shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="h-52 md:h-full overflow-hidden relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
            <MapPin className="h-3 w-3 mr-1 text-sayur-blue" />
            <span className="text-xs text-sayur-blue-dark">{location}</span>
          </div>
        </div>
        <div className="p-5 flex flex-col">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <p className="text-gray-600 text-sm my-2 line-clamp-3">{story}</p>
          
          <div className="mt-auto">
            <div className="mb-3">
              <h4 className="text-xs font-medium text-gray-700 mb-1.5">Hasil Tani:</h4>
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
            
            <Link to={`/cerita/${id}`}>
              <Button variant="outline" size="sm" className="w-full border-sayur-blue text-sayur-blue hover:bg-sayur-blue hover:text-white">
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                Baca Cerita
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FarmerStoryCard;
