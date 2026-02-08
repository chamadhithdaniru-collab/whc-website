import { motion } from 'framer-motion';
import schoolLogo from '@/assets/school-logo-official.png';

const SchoolVideoIntro = () => {

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-dark via-primary to-primary-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={schoolLogo}
                alt="School Logo"
                className="w-20 h-20 rounded-full border-4 border-gold/30 shadow-xl bg-white object-contain relative z-10"
              />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            අපගේ පාසල
          </h2>
          <p className="text-xl md:text-2xl text-gold font-display mb-3">
            Our School Campus
          </p>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            අනුරාධපුර නුවර අභිමානය වූ වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලයේ සුන්දර පරිසරය
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-primary-foreground/20 to-gold/30 rounded-3xl blur-xl opacity-50" />
          <div className="absolute -inset-[2px] bg-gradient-to-r from-gold via-primary-foreground/50 to-gold rounded-2xl" />

         {/* Video Player - Cloudinary Direct Link */}
<div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
  <video 
    className="w-full aspect-video"
    controls
    playsInline
    poster="https://res.cloudinary.com/dpr1jsnbq/video/upload/so_0/f_auto,q_auto/school_intro_ojni1g.jpg"
  >
    <source 
      src="https://res.cloudinary.com/dpr1jsnbq/video/upload/f_auto,q_auto/school_intro_ojni1g.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
</div>
</motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { icon: '🏛️', title: 'සුන්දර ගොඩනැගිලි', subtitle: 'Modern Buildings' },
            { icon: '🌳', title: 'හරිත පරිසරය', subtitle: 'Green Environment' },
            { icon: '📚', title: 'නවීන පහසුකම්', subtitle: 'Modern Facilities' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/20 hover:border-gold/50 transition-colors"
            >
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <h3 className="text-primary-foreground font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gold text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolVideoIntro;
