import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { touristPlaces, TouristPlace } from "@/data/touristPlaces";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Car, 
  Train, 
  Plane, 
  Utensils, 
  Ticket, 
  ArrowLeft,
  Camera,
  Globe
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [place, setPlace] = useState<TouristPlace | null>(null);

  useEffect(() => {
    const foundPlace = touristPlaces.find(p => p.id === id);
    if (foundPlace) {
      setPlace(foundPlace);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  const handleBookTicket = () => {
    toast({
      title: "Booking Initiated",
      description: "Redirecting to booking platform...",
    });
    // In a real app, this would redirect to a booking platform
  };

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Places
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-elegant">
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{place.name}</h1>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{place.location}</span>
                </div>
              </div>
            </div>

            {/* 360° View */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>360° Virtual Tour</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src={place.streetViewUrl}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use your mouse to navigate the 360° view
                </p>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {place.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">{place.description}</p>
              </CardContent>
            </Card>

            {/* History & Culture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{place.history}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{place.culture}</p>
                </CardContent>
              </Card>
            </div>

            {/* Local Foods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5" />
                  <span>Famous Local Foods</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {place.localFoods.map((food, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {food}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Car className="h-5 w-5" />
                  <span>How to Reach</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Distance: {place.distance}</span>
                  </div>
                  {place.travelOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      {option.includes("Train") && <Train className="h-5 w-5 mt-0.5 text-primary" />}
                      {option.includes("Flight") && <Plane className="h-5 w-5 mt-0.5 text-primary" />}
                      {option.includes("Car") && <Car className="h-5 w-5 mt-0.5 text-primary" />}
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Ticket className="h-5 w-5" />
                  <span>Book Your Visit</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {place.ticketPrice}
                  </div>
                  <p className="text-sm text-muted-foreground">Entry Fee</p>
                </div>
                
                <Button 
                  onClick={handleBookTicket}
                  className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Ticket className="h-4 w-4 mr-2" />
                  Book Tickets
                </Button>
                
                <div className="text-xs text-muted-foreground text-center">
                  Secure booking • Instant confirmation
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9!2d${place.coordinates.lng}!3d${place.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1234567890123`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  {place.location}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;