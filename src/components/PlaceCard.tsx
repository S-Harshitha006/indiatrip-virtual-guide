import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Star } from "lucide-react";
import { TouristPlace } from "@/data/touristPlaces";
import { useNavigate } from "react-router-dom";

interface PlaceCardProps {
  place: TouristPlace;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/place/${place.id}`);
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-warm hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-lg mb-1">{place.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            {place.location}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold text-primary">{place.ticketPrice}</span>
          </div>
          
          <Button 
            onClick={handleExplore}
            size="sm"
            className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            <Camera className="h-4 w-4 mr-1" />
            Explore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;