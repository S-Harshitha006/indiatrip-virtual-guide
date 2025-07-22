import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import { touristPlaces, TouristPlace } from "@/data/touristPlaces";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-india.jpg";

const Index = () => {
  const [filteredPlaces, setFilteredPlaces] = useState<TouristPlace[]>(touristPlaces);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredPlaces(touristPlaces);
      return;
    }
    
    const filtered = touristPlaces.filter(place =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.location.toLowerCase().includes(query.toLowerCase()) ||
      place.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="India Tourism" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Discover
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Incredible India
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Explore the land of diverse cultures, magnificent monuments, and breathtaking landscapes
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>28 States to Explore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-secondary" />
                  <span>1000+ Destinations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span>UNESCO World Heritage Sites</span>
                </div>
              </div>
              
              {user && (
                <div className="mb-4 text-primary">
                  Welcome back, {user.name}! 👋
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Top Tourist Places */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Top Tourist Places in India
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular destinations that showcase India's rich heritage and natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
          
          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No places found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Years of History</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">28</div>
              <div className="text-muted-foreground">States & Territories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">40</div>
              <div className="text-muted-foreground">UNESCO Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Happy Visitors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
