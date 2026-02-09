import { motion } from 'framer-motion';
import { Quote, Phone, Mail, Award, Users, Star } from 'lucide-react';
import principalImg from '../assets/principal.jpg';
import deputyPrincipalImg from '../assets/deputy-principal.jpg';

const PrincipalSection = () => {
  const leaders = [
    {
      name: 'අජිත් ප්‍රියන්ත වඩුගේ',
      nameEn: 'Ajith Priyantha Waduge',
      title: 'විදුහල්පති',
      titleEn: 'Principal',
      image: principalImg,
      phone: '071-4393937',
      message: `ශ්‍රී ලාංකික ඓතිහාසික අභිමානයේ ආරම්භය අනුරාධපුර යැයි කීම නිවැරදිය. එම ඓතිහාසික අභිමානයන් එම අභිමානාශ්‍රයකමට තම දිවි පුදකළ වලිසිංහ ජන්ද ශ්‍රීමතාණන් අනුරාධපුර මහා බෝධින් වහන්සේගේන් හමන සුවඳින් ස්පර්ශය ලබන අනුරාධපුර වලිසිංහ හරිස්චන්ද්‍ර මහා විද්‍යාල ම වර්ෂයේ සැප්තැම්බර් 4 වන දිනට තම 69 වන සංවත්සරය සපුරන ලබන්නේ මැද පළාතේ අනුරාධපුර දිස්ත්‍රික්කයේ ප්‍රමුඛතම පාසලක් ලෙස බව ප්‍රකාශ කරනු ලබන්නේ හද පිරි සතුටිත් එවන් බූ අභිමානවත් මෙහෙයක් එහි වර්තමාන විදුහල්පති වශයේන් පාසලේ අතීතාවර්ජනය කෙටියෙන් හෝ කිරීම වැදගත් යැයි සිතමි.`,
    },
    {
      name: 'ජයන්ත දිසානායක',
      nameEn: 'Jayantha Dissanayaka',
      title: 'නියෝජ්‍ය විදුහල්පති',
      titleEn: 'Deputy Principal',
      image: deputyPrincipalImg,
      phone: '071-1091901',
      message: `අපගේ පාසල උතුරු මැද පළාතේ ඇති දිනිමත් පාසලකි. සිසුන් 5000ක් පමණ අප පාසල තුළ අධ්‍යාපනය හදාරන අතර අපගේ සිසු දරුවන් කළාප, පළාත් මෙන්ම ජාතික මට්ටමේ ජයග්‍රහණ රටයේකට උරුමකම් කියන අතර, පාසලෙන් බිහි වූ කීර්තිමත් ආදි සිසුන් ද බොහෝමයකි. අද වන විට බොහුත් රටේ ඉහළ නැන්වන තනතුරු දරමින් රට දැය වෙනුවෙන් සුවිශේෂ මෙහෙයක් ඉටු කරති. අප පාසල කොරතුරු තාක්ෂණ අංශයෙන් ද පසුගිය වසර පුරා විශාල දියුණුවක් අත්කරගෙන ඇ.ඒ.මෙන්ම අනුරාධපුර දිස්ත්‍රික්කයේ මුලින්ම තාක්ෂණික විද්‍යාගාරයක් ආරම්භ කළ පාසල වන්නේද අප පාසල.`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            පාසල් පරිපාලනය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">විදුහල්පති පණිවිඩය</span>
          </h2>
          <p className="section-subtitle">
            Messages from School Leadership
          </p>
        </motion.div>

        {/* Leaders Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`md:col-span-2 relative ${index % 2 === 1 ? 'md:col-start-4' : ''}`}
                >
                  <img
                    src={leader.image}
                    alt={leader.nameEn}
                    className="w-full h-full object-cover min-h-[350px] md:min-h-[450px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  
                  {/* Mobile Info */}
                  <div className="absolute bottom-6 left-6 md:hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-primary-foreground font-bold text-xl">{leader.title}</p>
                      <p className="text-gold">{leader.titleEn}</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`md:col-span-3 p-8 md:p-12 relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/20" />

                  {/* Desktop Title */}
                  <div className="hidden md:block mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-2xl font-bold text-foreground">{leader.title}</p>
                      <p className="text-gold font-medium">{leader.titleEn}</p>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground leading-relaxed mb-8"
                  >
                    <p>{leader.message}</p>
                  </motion.div>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pt-6 border-t border-border"
                  >
                    <p className="text-foreground font-bold text-lg">{leader.name}</p>
                    <p className="text-muted-foreground text-sm mb-3">{leader.nameEn}</p>
                    <p className="text-muted-foreground text-sm">
                      {leader.title}, වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය
                    </p>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{leader.phone}</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { icon: Star, text: 'ශ්‍රී ලංකාවේ හොඳම රජයේ පාසල් අතරින් එකක්' },
            { icon: Users, text: 'සිසුන් 5000කට වැඩි පිරිසකට සේවය' },
            { icon: Award, text: 'ගුරුවරුන් 206 දෙනෙකුගෙන් සමන්විත' },
            { icon: Award, text: '69 වසරක කීර්තිමත් ඉතිහාසය' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
            >
              <item.icon className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalSection;
