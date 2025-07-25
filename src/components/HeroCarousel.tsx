import { useState, useEffect } from "react";
import { touristPlaces } from "@/data/touristPlaces";
import { MapPin, Camera, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % touristPlaces.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % touristPlaces.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + touristPlaces.length) % touristPlaces.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentPlace = touristPlaces[current];

  return (
    <section className="relative h-[80vh] overflow-hidden group">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {touristPlaces.map((place, index) => (
          <div
            key={place.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={place.image} 
              alt={place.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Interactive Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl text-white">
            <div className={`transition-all duration-700 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                Explore
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  India
                </span>
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-white/90 leading-relaxed">
                {currentPlace.description}
              </p>
              
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg">{currentPlace.location}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Camera className="h-6 w-6 text-secondary" />
                  <span className="text-lg">360° Experience</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="h-6 w-6 text-accent" />
                  <span className="text-lg">{currentPlace.ticketPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Place Info Card */}
      <div className={`absolute bottom-8 right-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
        <Card className="bg-white/15 backdrop-blur-md border-white/30 text-white shadow-2xl">
          <div className="p-6">
            <h3 className="font-bold text-2xl mb-2">{currentPlace.name}</h3>
            <p className="text-white/80 text-lg">{currentPlace.location}</p>
          </div>
        </Card>
      </div>

      {/* Interactive Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {touristPlaces.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full border-2 ${
              index === current 
                ? "w-12 h-4 bg-white border-white" 
                : "w-4 h-4 bg-white/30 border-white/50 hover:bg-white/60 hover:border-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;