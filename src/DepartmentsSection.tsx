import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Calculator, 
  Palette, 
  Briefcase, 
  Wrench,
  Languages,
  Trophy,
  Music,
  Monitor,
  BookOpen,
  HeartPulse,
  Users,
  Megaphone,
  Flag,
  TreePine,
  Heart
} from 'lucide-react';

const DepartmentsSection = () => {
  const academicStreams = [
    { icon: FlaskConical, name: 'විද්‍යා අංශය', nameEn: 'Science Stream', color: 'from-blue-500 to-cyan-500' },
    { icon: Calculator, name: 'ගණිත අංශය', nameEn: 'Mathematics Stream', color: 'from-purple-500 to-pink-500' },
    { icon: Palette, name: 'කලා අංශය', nameEn: 'Arts Stream', color: 'from-orange-500 to-red-500' },
    { icon: Briefcase, name: 'වානිජ අංශය', nameEn: 'Commerce Stream', color: 'from-green-500 to-emerald-500' },
    { icon: Wrench, name: 'තාක්ෂණවේදය අංශය', nameEn: 'Technology Stream', color: 'from-indigo-500 to-blue-500' },
  ];

  const departments = [
    { icon: Languages, name: 'ඉංග්‍රීසි අංශය', nameEn: 'English Unit' },
    { icon: Trophy, name: 'ක්‍රීඩා අංශය', nameEn: 'Sports Unit' },
    { icon: Music, name: 'සෞන්දර්යය අංශය', nameEn: 'Aesthetic Unit' },
    { icon: Megaphone, name: 'මාධ්‍ය ඒකකය', nameEn: 'Media Unit' },
    { icon: Monitor, name: 'පරිගණක ඒකකය', nameEn: 'Computer Unit' },
    { icon: BookOpen, name: 'පුස්තකාලය', nameEn: 'Library' },
    { icon: HeartPulse, name: 'ප්‍රථමාධාර ඒකකය', nameEn: 'First Aid Unit' },
  ];

  const activities = [
    { icon: Trophy, name: 'ක්‍රීඩා' },
    { icon: Users, name: 'සමිති සමාගම්' },
    { icon: Flag, name: 'ශිෂ්‍ය භට' },
    { icon: Users, name: 'බාලදක්ෂ' },
    { icon: TreePine, name: 'පරිසර නියමු' },
    { icon: Heart, name: 'සුභ සාධන කටයුතු' },
    { icon: Megaphone, name: 'විවාද කණ්ඩායම' },
    { icon: Music, name: 'සාහිත්‍ය උත්සව' },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අධ්‍යාපන අංශ
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">අධ්‍යාපනික කටයුතු</span>
          </h2>
          <p className="section-subtitle">
            Academic Departments & Extracurricular Activities
          </p>
        </motion.div>

        {/* Academic Streams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            උසස් පෙළ විෂය ධාරා | A/L Streams
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {academicStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-foreground mb-1">{stream.name}</p>
                <p className="text-xs text-muted-foreground">{stream.nameEn}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            විශේෂ ඒකක | Special Units
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-gold/30 text-center transition-all"
              >
                <dept.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium text-foreground">{dept.name}</p>
                <p className="text-xs text-muted-foreground">{dept.nameEn}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-gold/5 border border-gold/20"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            විෂය බාහිර කටයුතු | Extracurricular Activities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-gold/50 transition-all"
              >
                <activity.icon className="w-4 h-4 text-gold" />
                <span className="text-sm text-foreground">{activity.name}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed"
          >
            විවිධ ආගමික වැඩ සටහන්, නායකත්ව පුහුණු වැඩ සටහන්, රථ නියාමක කණ්ඩායම්, 
            අධ්‍යාපනික ප්‍රදර්ශන, සිංහල අලුත් අවුරුදු උත්සව ආදිය සාර්ථක ලෙස ක්‍රියාත්මක කරයි.
          </motion.p>
        </motion.div>

        {/* Vision Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
            <p className="text-lg md:text-xl font-medium italic mb-4">
              "අභියෝග ජයගත හැකි නිර්මාණශීලී දරුවෙක්..."
            </p>
            <p className="text-sm text-primary-foreground/80">
              "A creative child who can overcome challenges..."
            </p>
            <p className="mt-4 text-gold font-bold">
              — පාසලේ දැක්ම | School Vision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
