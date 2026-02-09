import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import schoolLogo from '../assets/school-logo-official.png';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);
    
    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 800);
    
    const timer2 = setTimeout(() => {
      setIsTransitioning(false);
    }, 1600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden"
          >
            {/* Animated Background Elements */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 20, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute w-32 h-32 rounded-full bg-gold/20"
            />
            
            {/* Logo and Motto Container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* School Logo with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2 
                }}
                className="relative"
              >
                {/* Glowing Ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 0.5, 1],
                    scale: [0.8, 1.1, 1],
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold blur-lg"
                  style={{ transform: 'scale(1.2)' }}
                />
                
                {/* Logo Image */}
                <motion.img
                  src={schoolLogo}
                  alt="වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-contain bg-white shadow-2xl relative z-10 border-4 border-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </motion.div>

              {/* School Motto */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 text-2xl md:text-3xl font-bold text-gold text-center font-sinhala"
              >
                විදු නැණ මනස පුබුදයි
              </motion.p>

              {/* School Name */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-2 text-lg md:text-xl text-primary-foreground/90 text-center"
              >
                Walisinghe Harischandra College
              </motion.p>


            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
