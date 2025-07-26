import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface RecentPlace {
  id: string;
  name: string;
  location: string;
  image: string;
  viewedAt: string;
}

const RecentlyViewed = () => {
  const [recentPlaces, setRecentPlaces] = useState<RecentPlace[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) {
      setRecentPlaces(JSON.parse(stored));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("recentlyViewed");
    setRecentPlaces([]);
  };

  const removePlace = (id: string) => {
    const updated = recentPlaces.filter(place => place.id !== id);
    setRecentPlaces(updated);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
  };

  if (recentPlaces.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto my-8"
    >
      <Card className="border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Recently Viewed</CardTitle>
          </div>
          <Button
            onClick={clearHistory}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPlaces.slice(0, 6).map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/place/${place.id}`)}
              >
                <div className="flex gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-200 hover:shadow-md">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                      {place.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {place.location}
                    </p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {new Date(place.viewedAt).toLocaleDateString()}
                    </Badge>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      removePlace(place.id);
                    }}
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecentlyViewed;