import { motion } from "framer-motion";
import { MapPin, Users, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StateData } from "@/data/statesData";

interface StateCardProps {
  state: StateData;
  index: number;
  onClick: () => void;
}

const StateCard = ({ state, index, onClick }: StateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 shadow-elegant hover:shadow-glow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={state.image}
            alt={state.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{state.name}</h3>
            <div className="flex items-center gap-1 text-sm opacity-90">
              <MapPin className="h-3 w-3" />
              <span>{state.capital}</span>
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardDescription className="text-sm line-clamp-2">
            {state.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{state.area}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{state.population}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Famous Places</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {state.famousPlaces.slice(0, 3).map((place, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {place}
                  </Badge>
                ))}
                {state.famousPlaces.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{state.famousPlaces.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StateCard;