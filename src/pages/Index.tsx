import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PlaceCard from "@/components/PlaceCard";
import HeroCarousel from "@/components/HeroCarousel";
import DidYouKnow from "@/components/DidYouKnow";
import RecentlyViewed from "@/components/RecentlyViewed";
import Footer from "@/components/Footer";
import { touristPlaces, TouristPlace } from "@/data/touristPlaces";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Star, Users, Compass, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [filteredPlaces, setFilteredPlaces] = useState<TouristPlace[]>(touristPlaces);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 bg-primary/5"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl font-semibold text-primary">
              Welcome back, {user.name}! 👋
            </div>
            <p className="text-muted-foreground mt-2">Ready to explore more amazing destinations?</p>
          </div>
        </motion.section>
      )}

      {/* Did You Know Section */}
      <div className="container mx-auto px-4">
        <DidYouKnow />
      </div>

      {/* Recently Viewed */}
      <div className="container mx-auto px-4">
        <RecentlyViewed />
      </div>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore India Your Way</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your adventure and discover the incredible diversity of India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
              onClick={() => navigate("/explore")}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Explore by States</h3>
              <p className="text-sm text-muted-foreground">Discover each state's unique culture, cuisine, and attractions</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Camera className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">360° VR Tours</h3>
              <p className="text-sm text-muted-foreground">Immerse yourself in virtual reality experiences</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
              onClick={() => navigate("/booking")}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Plan Your Trip</h3>
              <p className="text-sm text-muted-foreground">Book tickets and create your perfect itinerary</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Top Tourist Places */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Top Tourist Places in India
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular destinations that showcase India's rich heritage and natural beauty
            </p>
            <div className="flex justify-center mt-6">
              <Button 
                onClick={() => navigate("/explore")}
                variant="outline"
                className="hover:bg-primary/10"
              >
                View All States
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.slice(0, 8).map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <PlaceCard place={place} />
              </motion.div>
            ))}
          </div>
          
          {filteredPlaces.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-muted-foreground">
                No places found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="py-16 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Years of History</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">28</div>
              <div className="text-muted-foreground">States & Territories</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-accent mb-2">40</div>
              <div className="text-muted-foreground">UNESCO Sites</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Happy Visitors</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
