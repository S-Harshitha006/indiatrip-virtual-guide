import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import HeroCarousel from "@/components/HeroCarousel";
import { touristPlaces, TouristPlace } from "@/data/touristPlaces";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Star, Users } from "lucide-react";

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
      
      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* Welcome Message */}
      {user && (
        <section className="py-8 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl font-semibold text-primary">
              Welcome back, {user.name}! 👋
            </div>
            <p className="text-muted-foreground mt-2">Ready to explore more amazing destinations?</p>
          </div>
        </section>
      )}

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
