
import React, { useState, useEffect } from 'react';

interface FarmerPhoto {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

const farmerPhotos: FarmerPhoto[] = [
  {
    id: 1,
    name: "Pak Joko",
    location: "Pulau Pari",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Petani kangkung dan bayam organik"
  },
  {
    id: 2,
    name: "Bu Siti",
    location: "Pulau Tidung",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Petani tomat dan cabai"
  },
  {
    id: 3,
    name: "Pak Budi",
    location: "Pulau Harapan",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Petani wortel dan sawi"
  },
  {
    id: 4,
    name: "Bu Ani",
    location: "Pulau Tidung",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Petani sayuran organik"
  }
];

const FarmerPhotoMap: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState<FarmerPhoto | null>(null);

  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhotoIndex((prevIndex) => (prevIndex + 1) % farmerPhotos.length);
    }, 5000); // Change photo every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update caption when photo changes
    setActivePhoto(farmerPhotos[activePhotoIndex]);
  }, [activePhotoIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Photo slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {farmerPhotos.map((photo, index) => (
          <div 
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activePhotoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={photo.image} 
              alt={photo.name} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
        {activePhoto && (
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg text-white border border-white/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white" 
                   style={{ backgroundImage: `url(${activePhoto.image})` }}></div>
              <div>
                <h3 className="font-bold text-lg">{activePhoto.name}</h3>
                <p className="text-sm opacity-90">{activePhoto.location}</p>
              </div>
            </div>
            <p className="text-sm">{activePhoto.description}</p>
          </div>
        )}
      </div>
      
      {/* Photo indicator dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {farmerPhotos.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${
              index === activePhotoIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setActivePhotoIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FarmerPhotoMap;
