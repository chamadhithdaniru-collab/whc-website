import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import schoolLogo from './assets/school-logo-official.png';
import SocialLinks from './SocialLinks';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.academics', path: '/academics' },
    { nameKey: 'nav.achievements', path: '/achievements' },
    { nameKey: 'nav.gallery', path: '/gallery' },
    { nameKey: 'nav.news', path: '/news' },
    { nameKey: 'nav.contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{
        clipPath: 'ellipse(60% 100% at 50% 0%)'
      }} />

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              {/* INCREASED LOGO SIZE HERE (w-32 h-32) */}
              <motion.img 
                src={schoolLogo} 
                alt={t('school.fullName')} 
                className="w-32 h-32 rounded-full shadow-royal object-contain bg-white p-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div>
                <h3 className="text-2xl font-bold">{t('school.fullName')}</h3>
                <p className="text-gold text-lg">Walisinghe Harischandra College</p>
                <p className="text-primary-foreground/70 text-sm">{t('school.location')}</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Motto */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
              <p className="text-gold font-bold text-lg">{t('school.motto')}</p>
              <p className="text-primary-foreground/80 text-sm">Knowledge Awakens the Mind</p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-primary-foreground/70 mb-3">{t('footer.connectWithUs')}</p>
              <SocialLinks size="md" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {t(link.nameKey)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li>
                <p className="font-medium text-primary-foreground">{t('footer.address')}</p>
                <p>{t('school.location')}</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">{t('footer.phone')}</p>
                <p>0252 235 451</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">{t('footer.email')}</p>
                <a 
                  href="mailto:info@walisinghecollege.com" 
                  className="hover:text-gold transition-colors"
                >
                  info@walisinghecollege.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Walisinghe Harischandra School. All rights reserved.
              <span className="block md:inline"> {t('footer.rights')}</span>
            </p>

            {/* DEVELOPER CREDIT ADDED HERE */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm bg-black/20 px-4 py-2 rounded-full border border-white/5"
            >
              <span className="text-primary-foreground/60">Developed by</span>
               <span className="text-primary-foreground/90 font-medium">
                by <span className="text-gold">Daniru Chamadhith & Nadun Kumarathunge</span> (School Student)
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;