import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getRandomFunFact } from "@/data/funFacts";

const DidYouKnow = () => {
  const [funFact, setFunFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadNewFact = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFunFact(getRandomFunFact());
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadNewFact();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto my-8"
    >
      <Card className="p-6 bg-gradient-primary/10 border-primary/20 shadow-elegant">
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ rotate: isLoading ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Lightbulb className="h-8 w-8 text-primary" />
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                Did You Know?
              </h3>
              <Button
                onClick={loadNewFact}
                disabled={isLoading}
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            
            <motion.p
              key={funFact}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              {funFact || "Loading amazing fact..."}
            </motion.p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DidYouKnow;