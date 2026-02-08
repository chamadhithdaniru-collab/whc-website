import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import schoolEntrance from '@/assets/school-entrance.jpg';
import studentAssembly from '@/assets/student-assembly.jpg';
import schoolGateGolden from '@/assets/school-gate-golden.jpg';
import studentsAtGate from '@/assets/students-at-gate.jpg';
import schoolLogo from '@/assets/school-logo-official.png';
import SocialLinks from './SocialLinks';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: schoolGateGolden,
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      taglineKey: 'hero.slide1.tagline',
    },
    {
      image: studentsAtGate,
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      taglineKey: 'hero.slide2.tagline',
    },
    {
      image: schoolEntrance,
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      taglineKey: 'hero.slide3.tagline',
    },
    {
      image: studentAssembly,
      titleKey: 'hero.slide4.title',
      subtitleKey: 'hero.slide4.subtitle',
      taglineKey: 'hero.slide4.tagline',
    },
  ];

  // Ensure currentSlide is always valid
  const safeCurrentSlide = currentSlide >= slides.length ? 0 : currentSlide;
  const currentSlideData = slides[safeCurrentSlide];

  useEffect(() => {
    // Reset to 0 if current slide is out of bounds
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === safeCurrentSlide ? 1 : 0,
            scale: index === safeCurrentSlide ? 1 : 1.1 
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slide.image} 
            alt="School Campus" 
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary-dark/90" />
        </motion.div>
      ))}

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-48 h-48 bg-gold/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* School Logo */}
          <motion.div 
            className="mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/30 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img 
                src={schoolLogo} 
                alt={t('school.fullName')} 
                className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full shadow-2xl border-4 border-gold/30 bg-white object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            key={`title-${safeCurrentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary-foreground text-shadow-lg"
          >
            {t(currentSlideData.titleKey)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            key={`subtitle-${safeCurrentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gold font-display mb-6"
          >
            {t(currentSlideData.subtitleKey)}
          </motion.p>

          {/* Tagline */}
          <motion.p 
            key={`tagline-${safeCurrentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/90 mb-10"
          >
            {t(currentSlideData.taglineKey)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link 
              to="/academics"
              className="px-8 py-4 bg-gold text-primary-dark font-semibold rounded-full shadow-gold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t('hero.cta.about')}
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-full backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center"
          >
            <SocialLinks size="md" className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full" />
          </motion.div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <motion.button 
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <motion.button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === safeCurrentSlide 
                    ? 'bg-gold w-8' 
                    : 'bg-primary-foreground/40 hover:bg-primary-foreground/60 w-3'
                }`}
              />
            ))}
          </div>

          <motion.button 
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-3 bg-gold rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
