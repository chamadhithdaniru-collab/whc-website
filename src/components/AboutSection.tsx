import { Users, GraduationCap, Award, Building, Globe, BookOpen } from 'lucide-react';
import schoolGate from '@/assets/school-gate.png';
import schoolLogo from '@/assets/school-logo-official.png';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '5647+', labelKey: 'about.stat.students' },
    { icon: GraduationCap, value: '205+', labelKey: 'about.stat.teachers' },
    { icon: Award, value: '70', labelKey: 'about.stat.years' },
    { icon: Building, value: '50+', labelKey: 'about.stat.classrooms' },
  ];

  const languages = ['English', 'Korean', 'Hindi', 'French', 'Japanese', 'German', 'Chinese'];
  const streams = ['Science', 'Commerce', 'Arts', 'Technology'];

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('about.badge')}
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">{t('about.title')}</span>
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <img 
              src={schoolGate} 
              alt={t('school.fullName')} 
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Logo Overlay */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28">
              <img 
                src={schoolLogo} 
                alt={t('school.fullName')} 
                className="w-full h-full rounded-full shadow-xl bg-white object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('school.fullName')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.para1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.para2')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.para3')}
            </p>
            
            {/* Education Streams */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                {t('about.streams')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {streams.map((stream, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {stream}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-gold" />
                {t('about.languages')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
