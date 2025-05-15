
import React, { useState } from 'react';

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
  const [activePhoto, setActivePhoto] = useState<FarmerPhoto | null>(null);

  const handlePhotoClick = (photo: FarmerPhoto) => {
    setActivePhoto(photo);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-cover bg-center" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}>
      {/* Interactive photo points */}
      <div className="absolute inset-0">
        <div className="absolute top-[25%] left-[30%] cursor-pointer" onClick={() => handlePhotoClick(farmerPhotos[0])}>
          <div className="w-4 h-4 bg-sayur-green rounded-full animate-pulse shadow-lg relative">
            <div className="absolute -inset-1 bg-sayur-green rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-[45%] left-[60%] cursor-pointer" onClick={() => handlePhotoClick(farmerPhotos[1])}>
          <div className="w-4 h-4 bg-sayur-green rounded-full animate-pulse shadow-lg relative">
            <div className="absolute -inset-1 bg-sayur-green rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-[65%] left-[20%] cursor-pointer" onClick={() => handlePhotoClick(farmerPhotos[2])}>
          <div className="w-4 h-4 bg-sayur-green rounded-full animate-pulse shadow-lg relative">
            <div className="absolute -inset-1 bg-sayur-green rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-[75%] left-[70%] cursor-pointer" onClick={() => handlePhotoClick(farmerPhotos[3])}>
          <div className="w-4 h-4 bg-sayur-green rounded-full animate-pulse shadow-lg relative">
            <div className="absolute -inset-1 bg-sayur-green rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
      </div>
      
      {/* Photo info overlay */}
      {activePhoto && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-all duration-300">
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
            <button 
              className="mt-3 px-3 py-1 bg-sayur-green text-white rounded-md text-sm"
              onClick={() => setActivePhoto(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-lg font-medium">Petani dari Kepulauan Seribu</p>
        <p className="text-sm opacity-80">Klik titik pada peta untuk melihat detail</p>
      </div>
    </div>
  );
};

export default FarmerPhotoMap;
