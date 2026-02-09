import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import schoolLogo from './assets/school-logo-official.png';
import { useLanguage } from './contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.academics', path: '/academics' },
    { nameKey: 'nav.achievements', path: '/achievements' },
    { nameKey: 'nav.activities', path: '/activities' },
    { nameKey: 'nav.gallery', path: '/gallery' },
    { nameKey: 'nav.news', path: '/news' },
    { nameKey: 'nav.contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'si' ? 'en' : 'si');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-xl shadow-elegant py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={schoolLogo} 
              alt={t('school.fullName')} 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-royal object-contain bg-white"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="hidden sm:block">
              <p className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}>
                {t('school.name')}
              </p>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}>
                {t('school.college')}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 px-2 py-1 ${
                  isActive(item.path)
                    ? isScrolled 
                      ? 'text-primary' 
                      : 'text-gold'
                    : isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-primary-foreground hover:text-gold'
                }`}
              >
                {t(item.nameKey)}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground' 
                  : 'bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'si' ? 'EN' : 'සිං'}
            </motion.button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;