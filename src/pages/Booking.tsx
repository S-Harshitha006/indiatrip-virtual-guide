import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { touristPlaces } from "@/data/touristPlaces";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Ticket, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: "1",
    date: ""
  });

  const placeId = searchParams.get("placeId");
  const place = touristPlaces.find(p => p.id === placeId);

  useEffect(() => {
    if (!place) {
      navigate("/");
    }
  }, [place, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed!",
      description: `Your tickets for ${place?.name} have been booked successfully.`,
    });
  };

  if (!place) {
    return <div>Loading...</div>;
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Booking Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><strong>Place:</strong> {place.name}</p>
                    <p><strong>Location:</strong> {place.location}</p>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Number of Tickets:</strong> {formData.tickets}</p>
                    <p><strong>Date of Visit:</strong> {formData.date}</p>
                    <p><strong>Total Amount:</strong> ₹{parseInt(place.ticketPrice.replace('₹', '').replace('/person', '')) * parseInt(formData.tickets)}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  A confirmation email has been sent to {formData.email}
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => navigate("/")}
                    variant="outline"
                    className="flex-1"
                  >
                    Back to Home
                  </Button>
                  <Button 
                    onClick={() => navigate(`/place/${place.id}`)}
                    className="flex-1"
                  >
                    View Place Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/place/${place.id}`)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to {place.name}
        </Button>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Ticket className="h-5 w-5" />
                  <span>Book Your Tickets</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tickets">Number of Tickets *</Label>
                      <Input
                        id="tickets"
                        name="tickets"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.tickets}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date of Visit *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    <Ticket className="h-4 w-4 mr-2" />
                    Confirm Booking
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">{place.name}</h3>
                  <p className="text-muted-foreground">{place.location}</p>
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Ticket Price:</span>
                    <span>{place.ticketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Tickets:</span>
                    <span>{formData.tickets}</span>
                  </div>
                  {formData.date && (
                    <div className="flex justify-between">
                      <span>Visit Date:</span>
                      <span>{formData.date}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total Amount:</span>
                    <span>₹{parseInt(place.ticketPrice.replace('₹', '').replace('/person', '')) * parseInt(formData.tickets)}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>• Tickets are non-refundable</p>
                  <p>• Please carry a valid ID</p>
                  <p>• Children above 5 years require tickets</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;