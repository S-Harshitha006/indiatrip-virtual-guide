import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Globe, 
  Award, 
  Github, 
  Linkedin, 
  Mail,
  Code,
  Smartphone,
  Palette
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const About = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [statesCount, setStatesCount] = useState(0);
  const [placesCount, setPlacesCount] = useState(0);

  // Animated counters
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    animateCounter(15420, setVisitorCount);
    animateCounter(28, setStatesCount);
    animateCounter(150, setPlacesCount);
  }, []);

  const technologies = [
    { name: "React", icon: Code, color: "bg-blue-500" },
    { name: "TypeScript", icon: Code, color: "bg-blue-600" },
    { name: "Tailwind CSS", icon: Palette, color: "bg-cyan-500" },
    { name: "Framer Motion", icon: Smartphone, color: "bg-purple-500" },
    { name: "WebXR", icon: Globe, color: "bg-green-500" },
    { name: "Three.js", icon: Globe, color: "bg-orange-500" }
  ];

  const teamMembers = [
    {
      name: "Arjun Kumar",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=150&h=150&fit=crop&crop=face",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rahul Patel",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Explore India
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the incredible beauty, rich culture, and diverse heritage of India through our immersive 
            digital platform. From the snow-capped Himalayas to the sun-kissed beaches of Kerala, 
            experience India like never before.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{visitorCount.toLocaleString()}+</div>
              <div className="text-muted-foreground">Happy Explorers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">{statesCount}</div>
              <div className="text-muted-foreground">States Covered</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">{placesCount}+</div>
              <div className="text-muted-foreground">Tourist Places</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To make India's incredible destinations accessible to everyone through cutting-edge technology. 
                We believe that virtual exploration can inspire real travel and help preserve our cultural heritage 
                for future generations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-secondary" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most comprehensive virtual tourism platform for India, 
                fostering cultural appreciation and sustainable tourism through immersive digital experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-accent" />
                <span>Technologies Used</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`${tech.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm font-medium">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:team@exploreindia.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">360° Virtual Tours</h3>
                <p className="text-muted-foreground">
                  Immersive VR experiences compatible with Oculus and other VR headsets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
                <p className="text-muted-foreground">
                  Explore India state by state with detailed information and beautiful imagery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Responsive</h3>
                <p className="text-muted-foreground">
                  Perfect experience across all devices - mobile, tablet, and desktop.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:team@exploreindia.com"
                  className="flex items-center space-x-2 text-primary hover:underline"
                >
                  <Mail className="h-5 w-5" />
                  <span>team@exploreindia.com</span>
                </a>
                <a
                  href="https://github.com/exploreindia"
                  className="flex items-center space-x-2 text-primary hover:underline"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;