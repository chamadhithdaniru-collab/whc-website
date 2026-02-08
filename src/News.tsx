import { motion } from 'framer-motion';
import NewsSection from '@/components/NewsSection';
import { Helmet } from 'react-helmet-async';

const News = () => {
  return (
    <>
      <Helmet>
        <title>News | Walisinghe Harischandra School</title>
        <meta name="description" content="Stay updated with the latest news and announcements from Walisinghe Harischandra College." />
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
            පුවත්
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gold"
          >
            News & Updates
          </motion.p>
        </div>
      </motion.section>

      <NewsSection />
    </>
  );
};

export default News;
