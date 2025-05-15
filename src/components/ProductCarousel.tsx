
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
  autoSlide?: boolean;
  interval?: number;
  showControls?: boolean;
  aspectRatio?: number;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  autoSlide = true,
  interval = 5000,
  showControls = true,
  aspectRatio = 4/3,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (!autoSlide) return;
    
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(slideInterval);
  }, [autoSlide, images.length, interval]);
  
  return (
    <Carousel className={className}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.id}>
            <AspectRatio ratio={aspectRatio} className="bg-muted">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {showControls && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
      
      {/* Image indicator dots */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? 'bg-sayur-green' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
