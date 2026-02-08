import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, X } from 'lucide-react';
import schoolLogo from './assets/school-logo-official.png';

interface AnthemPlayerProps {
  autoPlay?: boolean;
}

const AnthemPlayer = ({ autoPlay = false }: AnthemPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showIntro, setShowIntro] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (autoPlay && showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        handlePlay();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, showIntro]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Auto-play blocked, user interaction needed
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const skipIntro = () => {
    setShowIntro(false);
  };

  if (!showPlayer) return null;

  return (
    <>
      <audio ref={audioRef} src="/audio/school-anthem.mp3" preload="auto" />

      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Logo Animation */}
            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative inline-block mb-8"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gold/40 blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <img
                  src={schoolLogo}
                  alt="School Logo"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-gold/50 bg-white object-contain relative z-10"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              >
                වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl md:text-3xl text-gold font-display mb-6"
              >
                විදු නැණ මනස පුබුදයි
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-center justify-center gap-2 text-primary-foreground/80"
              >
                <Music className="w-5 h-5 animate-pulse" />
                <span>පාසල් ගීය ආරම්භ වෙමින්...</span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={skipIntro}
                className="mt-8 px-6 py-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Skip →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Player */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: showIntro ? 4.5 : 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card rounded-2xl p-4 shadow-elegant flex items-center gap-4 backdrop-blur-xl bg-background/90 border border-gold/20"
        >
          {/* Album Art */}
          <motion.div
            className="relative w-14 h-14 shrink-0"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={schoolLogo}
              alt="School Anthem"
              className="w-full h-full rounded-full object-contain bg-white shadow-lg border-2 border-gold/30"
            />
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gold/50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-foreground text-sm truncate">පාසල් ගීය</p>
            <p className="text-xs text-muted-foreground truncate">School Anthem</p>
            
            {/* Progress Bar */}
            <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold to-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-muted-foreground" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePlay}
              className="p-3 rounded-full bg-gradient-to-br from-gold to-primary text-primary-foreground shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPlayer(false)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnthemPlayer;
