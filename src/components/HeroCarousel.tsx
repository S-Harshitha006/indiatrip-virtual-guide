import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { touristPlaces } from "@/data/touristPlaces";
import { MapPin, Camera, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {touristPlaces.map((place, index) => (
            <CarouselItem key={place.id} className="h-full">
              <div className="relative h-full">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Explore
                        <span className="block bg-gradient-primary bg-clip-text text-transparent">
                          India
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-white/90">
                        {place.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{place.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Camera className="h-5 w-5 text-secondary" />
                          <span>360° View Available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-accent" />
                          <span>{place.ticketPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Place name overlay */}
                <div className="absolute bottom-6 right-6">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{place.name}</h3>
                      <p className="text-sm text-white/80">{place.location}</p>
                    </div>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {touristPlaces.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;