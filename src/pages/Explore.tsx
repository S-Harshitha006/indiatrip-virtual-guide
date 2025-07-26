import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid3X3, Map } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StateCard from "@/components/StateCard";
import DidYouKnow from "@/components/DidYouKnow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { statesData, StateData } from "@/data/statesData";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const navigate = useNavigate();

  const filteredStates = statesData.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.famousPlaces.some(place => 
      place.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    state.localFoods.some(food => 
      food.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  const closeModal = () => {
    setSelectedState(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
          >
            Explore India
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Discover the incredible diversity of India's states, from majestic palaces to serene backwaters
          </motion.p>
          
          {/* Search and Filter */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search states, places, or foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20">
                All States ({statesData.length})
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                North India
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                South India
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                Coastal States
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Did You Know Section */}
      <div className="container mx-auto px-4">
        <DidYouKnow />
      </div>

      {/* States Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredStates.map((state, index) => (
              <StateCard
                key={state.id}
                state={state}
                index={index}
                onClick={() => handleStateClick(state)}
              />
            ))}
          </motion.div>

          {filteredStates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No states found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* State Detail Modal */}
      {selectedState && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="shadow-2xl">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={selectedState.image}
                  alt={selectedState.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h2 className="text-3xl font-bold">{selectedState.name}</h2>
                  <p className="text-lg opacity-90">Capital: {selectedState.capital}</p>
                </div>
                <Button
                  onClick={closeModal}
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4"
                >
                  ✕
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">About</h3>
                    <p className="text-muted-foreground mb-4">{selectedState.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Area</span>
                        <p className="font-semibold">{selectedState.area}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Population</span>
                        <p className="font-semibold">{selectedState.population}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Famous Places</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedState.famousPlaces.map((place, i) => (
                          <Badge key={i} variant="secondary">{place}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Local Foods</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedState.localFoods.map((food, i) => (
                          <Badge key={i} variant="outline">{food}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Festivals</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedState.festivals.map((festival, i) => (
                          <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20">
                            {festival}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    onClick={() => navigate("/booking")}
                    className="bg-gradient-primary text-white hover:opacity-90"
                  >
                    Plan Your Visit
                  </Button>
                  <Button variant="outline">
                    View on Map
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Explore;