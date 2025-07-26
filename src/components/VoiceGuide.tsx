import { useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface VoiceGuideProps {
  text: string;
  title?: string;
  autoPlay?: boolean;
}

const VoiceGuide = ({ text, title = "Audio Guide", autoPlay = false }: VoiceGuideProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    if (speechSynthesis && text) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.rate = 0.9;
      newUtterance.pitch = 1;
      newUtterance.volume = 0.8;
      
      newUtterance.onstart = () => setIsPlaying(true);
      newUtterance.onend = () => setIsPlaying(false);
      newUtterance.onerror = () => setIsPlaying(false);
      
      setUtterance(newUtterance);
      
      if (autoPlay) {
        setTimeout(() => playAudio(), 1000);
      }
    }

    return () => {
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [text, speechSynthesis, autoPlay]);

  const playAudio = () => {
    if (speechSynthesis && utterance && !isPlaying) {
      speechSynthesis.speak(utterance);
    }
  };

  const pauseAudio = () => {
    if (speechSynthesis && isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-4 border border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
              transition={{ repeat: isPlaying ? Infinity : 0, duration: 1 }}
            >
              <Volume2 className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <h4 className="font-semibold text-sm">{title}</h4>
              <p className="text-xs text-muted-foreground">
                {isPlaying ? "Playing..." : "Click to listen"}
              </p>
            </div>
          </div>
          
          <Button
            onClick={toggleAudio}
            variant="ghost"
            size="sm"
            className="hover:bg-primary/10"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {isPlaying && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: text.length * 0.05 }}
            className="h-1 bg-primary rounded-full mt-3"
          />
        )}
      </Card>
    </motion.div>
  );
};

export default VoiceGuide;