import { motion } from 'framer-motion';
import ContactSection from './components/ContactSection';
import SocialLinks from './components/SocialLinks';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Walisinghe Harischandra School</title>
        <meta name="description" content="Get in touch with Walisinghe Harischandra School. Find our location, phone, email, and social media links." />
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
            සම්බන්ධ වන්න
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gold mb-6"
          >
            Contact Us
          </motion.p>
          
          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <SocialLinks size="lg" />
          </motion.div>
        </div>
      </motion.section>

      <ContactSection />
    </>
  );
};

export default Contact;
