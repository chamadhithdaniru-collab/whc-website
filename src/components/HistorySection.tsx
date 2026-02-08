import { Calendar, Milestone, Star, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import schoolBanner from './assets/school-banner.png';

const HistorySection = () => {
  const timeline = [
    {
      year: '1955',
      title: 'පාසල ආරම්භය',
      description: 'බිනර මස 07 වැනි දින ඩී.බී.ජයතිලක මහතාගේ නායකත්වයෙන් ආරම්භ විය. අනුරාධපුර මැදි විදුහලේ ප්‍රාථමික අංශයක් ලෙස සිසුන් 200 දෙනෙකුගෙන් ආරම්භ කරන ලදී.',
      icon: Calendar,
    },
    {
      year: '1957',
      title: 'නව ගොඩනැගිල්ල',
      description: 'දිනෙන් දින සිසුන් වැඩිවීමත් සමග ඩී.බී.ජයතිලක මහතාගේ ප්‍රධානයෙන් නව ගොඩනැගිල්ලක් ඉදි කිරීමට යෙදුණි.',
      icon: Building,
    },
    {
      year: '1981',
      title: 'ස්වාධීන පාසලක් ලෙස',
      description: 'බ්‍රහ්මචාරී වලිසිංහ හරිස්චන්ද්‍ර නාමයෙන් පිදුම් ලබමින් ස්වාධීන විදුහලක් බවට පත් විය.',
      icon: Milestone,
    },
    {
      year: 'වර්තමානය',
      title: 'ප්‍රමුඛ ජාතික පාසල',
      description: 'ගුරුවරුන් 206 දෙනෙකුගෙන් සමන්විත කාර්ය මණ්ඩලයක් සේවය කරයි. සිසුන් 5311 දෙනෙකුට සේවය කරන අනුරාධපුරයේ ප්‍රමුඛතම පාසලක් බවට පත්ව ඇත.',
      icon: Star,
    },
  ];

  return (
    <section id="history" className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අපගේ ඉතිහාසය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">පාසල් ඉතිහාසය</span>
          </h2>
          <p className="section-subtitle">
            1955 සිට අද දක්වා වූ ගමන් මඟ
          </p>
        </motion.div>

        {/* Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <img 
              src={schoolBanner} 
              alt="Walisinghe Harischandra College" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Harischandra Tribute */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                බ්‍රහ්මචාරී වලිසිංහ හරිශ්චන්ද්‍ර
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                උතුරු මැද පළාතේ අනුරාධපුර වැව් බැදි රාජ්‍යයේ ස්වභාව සෞන්දර්යයෙන් අනූන සුන්දර පරිසරයක පිහිටි 
                අප පාසල නැණ ගුණ සපිරි පුරවැසියන් සිය දහස් ගණනක් රට දැයට තිළිණ කළ කීර්තිමත් පාසලකි.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                වලිසිංහ හරිස්චන්ද්‍ර ශ්‍රීමතාණන්ගේ සංකල්පයක් යටතේ වලිසිංහ මාතාව ගමන් ඇරභනුයේ 
                අනුරාධපුර මැදි විදුහලේ ප්‍රාතමික අංශයක් ලෙසිනි.
              </p>

              {/* Quote */}
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-gold">
                <p className="text-primary font-medium italic text-lg">
                  "විදු නැණ මනස පුබුදයි"
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  "Education Enlightens the Mind"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card rounded-2xl p-6 card-hover inline-block max-w-lg">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-2xl font-bold text-gold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-6 h-6 rounded-full bg-gold border-4 border-background shadow-gold z-10" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
