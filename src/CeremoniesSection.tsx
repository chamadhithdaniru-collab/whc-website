import { motion } from 'framer-motion';
import { Flag, Users, Award, Calendar } from 'lucide-react';
import flagCeremony1 from './assets/flag-ceremony-1.png';
import flagCeremony2 from './assets/flag-ceremony-2.png';
import principalCeremony from './assets/principal-ceremony.png';
import teachersCeremony from './assets/teachers-ceremony.png';
import ceremonyGround from './assets/ceremony-ground.png';
import teachersAssembly from './assets/teachers-assembly.png';
import saluteCeremony from './assets/salute-ceremony.png';
import studentsWorship from './assets/students-worship.png';
import ceremonialItems from './assets/ceremonial-items.png';
import ceremonialProcession from './assets/ceremonial-procession.png';
import traditionalDrum from './assets/traditional-drum.png';
import buddhistProcession from './assets/buddhist-procession.png';

const CeremoniesSection = () => {
  const ceremonyImages = [
    { src: flagCeremony1, title: 'ජාතික කොඩිය ඔසවමින්', titleEn: 'National Flag Hoisting' },
    { src: buddhistProcession, title: 'බෞද්ධ පෙරහැර', titleEn: 'Buddhist Procession' },
    { src: studentsWorship, title: 'සිසු වන්දනාව', titleEn: 'Students Worship' },
    { src: flagCeremony2, title: 'පාසල් කොඩිය සමඟ', titleEn: 'With School Flag' },
    { src: traditionalDrum, title: 'සාම්ප්‍රදායික බෙර වාදනය', titleEn: 'Traditional Drum Performance' },
    { src: ceremonialItems, title: 'උත්සව භාණ්ඩ රැගෙන', titleEn: 'Ceremonial Items Procession' },
    { src: principalCeremony, title: 'ගරු ආරක්ෂක නිලධාරීන් සමඟ', titleEn: 'With Defense Officials' },
    { src: ceremonialProcession, title: 'ධාතු කරඬුව රැගෙන', titleEn: 'Sacred Relic Procession' },
    { src: teachersCeremony, title: 'ගුරු මණ්ඩලය', titleEn: 'Teaching Staff Assembly' },
    { src: ceremonyGround, title: 'උත්සව පිටිය', titleEn: 'Ceremony Ground' },
    { src: teachersAssembly, title: 'ගුරු මණ්ඩල එක්රැස්වීම', titleEn: 'Teachers Assembly' },
    { src: saluteCeremony, title: 'සම්මාන පිළිගැනීම', titleEn: 'Honor Salute Ceremony' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Flag className="w-4 h-4" />
            සිහසෙන 2024
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">පාසල් උත්සව සමරමු</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            69වන සංවත්සරික සිහසෙන උත්සවයේ අමතක නොවන මොහොත
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Celebrating Sihasena '24 - 69th Anniversary Ceremony
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-royal group"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={flagCeremony2}
              alt="Sihasena 2024 - Flag Ceremony"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-gold font-semibold">සැප්තැම්බර් 2024</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full">
                  <Award className="w-4 h-4 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">69th Anniversary</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                සිහසෙන '24
              </h3>
              <p className="text-primary-foreground/90 text-lg max-w-2xl">
                ජාතික කොඩිය ඔසවමින් අපේ ගරු විදුහල්පතිතුමා හා ආරක්ෂක නිලධාරීන් සමඟ පැවති උත්සව මොහොත
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ceremony Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {ceremonyImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer card-hover ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 3 ? 'h-64 md:h-full' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground font-bold">{image.title}</p>
                  <p className="text-gold text-sm">{image.titleEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-6 bg-card rounded-2xl shadow-elegant">
            <Flag className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-muted-foreground text-sm">කොඩි ඔසවමින්</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-elegant">
            <Users className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-2xl font-bold text-foreground">206</p>
            <p className="text-muted-foreground text-sm">ගුරු මණ්ඩලය</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-elegant">
            <Award className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-2xl font-bold text-foreground">5311</p>
            <p className="text-muted-foreground text-sm">සිසු දරුවන්</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl shadow-elegant">
            <Calendar className="w-10 h-10 mx-auto text-primary mb-3" />
            <p className="text-2xl font-bold text-foreground">69</p>
            <p className="text-muted-foreground text-sm">වසර ගණන</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremoniesSection;
