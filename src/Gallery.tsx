import { motion } from 'framer-motion';
import GallerySection from './components/GallerySection';
import VideosSection from './components/VideosSection';
import CeremoniesSection from './components/CeremoniesSection';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Walisinghe Harischandra School</title>
        <meta name="description" content="View photos and videos from Walisinghe Harischandra School events, celebrations, and daily life." />
      </Helmet>
      
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            ගැලරිය
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gold"
          >
            Photos & Videos
          </motion.p>
        </div>
      </motion.section>

      <CeremoniesSection />
      <GallerySection />
      <VideosSection />
    </>
  );
};

export default Gallery;
