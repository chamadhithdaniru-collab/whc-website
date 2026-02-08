import { motion } from 'framer-motion';
import AcademicsSection from './components/AcademicsSection';
import VisionSection from './components/VisionSection';
import { Helmet } from 'react-helmet-async';

const Academics = () => {
  return (
    <>
      <Helmet>
        <title>Academics | Walisinghe Harischandra School</title>
        <meta name="description" content="Explore academic programs, vision, and educational excellence at Walisinghe Harischandra School Anuradhapura." />
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
            අධ්‍යාපනය
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gold"
          >
            Academics & Education
          </motion.p>
        </div>
      </motion.section>

      <VisionSection />
      <AcademicsSection />
    </>
  );
};

export default Academics;
