import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  School, 
  Users, 
  BookOpen, 
  Hash, 
  Mountain, 
  Building2, 
  FileText,
  Vote,
  Hospital,
  Mail,
  Shield
} from 'lucide-react';

const SchoolInfoSection = () => {
  const schoolInfo = [
    { icon: School, label: 'පාසලේ නම', value: 'අ/වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය', labelEn: 'School Name' },
    { icon: Calendar, label: 'ආරම්භ කළ වර්ෂය', value: '1955 සැප්තැම්බර්', labelEn: 'Year Established' },
    { icon: FileText, label: 'පාසල් වර්ගය', value: '1 AB සුපිරි', labelEn: 'School Type' },
    { icon: Hash, label: 'පාසල් අංකය', value: '01536', labelEn: 'School Number' },
    { icon: Hash, label: 'සංගණන අංකය', value: '19182', labelEn: 'Census Number' },
    { icon: Mountain, label: 'භූමි ප්‍රමාණය', value: 'අක්කර 05', labelEn: 'Land Area' },
    { icon: BookOpen, label: 'අධ්‍යාපන කොට්ටාසය', value: 'නැගෙනහිර නුවරගම් පළාත', labelEn: 'Education Division' },
    { icon: MapPin, label: 'අධ්‍යාපන කලාපය', value: 'අනුරාධපුර', labelEn: 'Education Zone' },
    { icon: Building2, label: 'ග්‍රාම සේවක කොට්ටාසය', value: '249-1 පියවර, අනුරාධපුර', labelEn: 'GN Division' },
    { icon: Building2, label: 'ප්‍රාදේශීය ලේකම් කොට්ටාසය', value: 'නැගෙනහිර නුවරගම් පළාත', labelEn: 'DS Division' },
    { icon: Vote, label: 'මැතිවරණ කොට්ටාසය', value: 'නැගෙනහිර - අනුරාධපුර - 16', labelEn: 'Electoral Division' },
    { icon: MapPin, label: 'දිස්ත්‍රීක්කය', value: 'අනුරාධපුර', labelEn: 'District' },
    { icon: MapPin, label: 'පළාත', value: 'උතුරු මැද පළාත', labelEn: 'Province' },
    { icon: Building2, label: 'පළාත් පාලන බල ප්‍රදේශය', value: 'අනුරාධපුර මහ නගර සභාව', labelEn: 'Local Authority' },
    { icon: Shield, label: 'ආසන්නතම පොලිස් ස්ථානය', value: 'මූලස්ථාන පොලීසිය, අනුරාධපුර', labelEn: 'Nearest Police Station' },
    { icon: Mail, label: 'තැපැල් කාර්‍යාලය', value: 'ප්‍රධාන තැපැල් කාර්‍යලය, අනුරාධපුර', labelEn: 'Post Office' },
    { icon: Hospital, label: 'ආසන්නම රෝහල', value: 'අනුරාධපුර ශික්ෂණ රෝහල', labelEn: 'Nearest Hospital' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            පාසල් තොරතුරු
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">විස්තරාත්මක තොරතුරු</span>
          </h2>
          <p className="section-subtitle">
            School Information & Details
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {schoolInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-xl p-5 border border-border/50 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-gold/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-xs text-muted-foreground/60 mb-2">{info.labelEn}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-gold/5 border border-gold/20">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  206
                </motion.p>
                <p className="text-muted-foreground">ආචාර්ය මණ්ඩලය</p>
                <p className="text-xs text-muted-foreground/60">Teaching Staff</p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-gold mb-2"
                >
                  5311
                </motion.p>
                <p className="text-muted-foreground">සිසු දරුවන්</p>
                <p className="text-xs text-muted-foreground/60">Students</p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  13
                </motion.p>
                <p className="text-muted-foreground">අනධ්‍යන කාර්ය මණ්ඩලය</p>
                <p className="text-xs text-muted-foreground/60">Non-Academic Staff</p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-gold mb-2"
                >
                  70+
                </motion.p>
                <p className="text-muted-foreground">වසර</p>
                <p className="text-xs text-muted-foreground/60">Years of Excellence</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolInfoSection;
