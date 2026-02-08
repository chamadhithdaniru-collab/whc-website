import { BookOpen, FlaskConical, Calculator, Palette, Cpu, Languages } from 'lucide-react';
import libraryImg from './assets/library.jpg';
import labImg from './assets/lab.jpg';

const AcademicsSection = () => {
  const streams = [
    { icon: FlaskConical, title: 'විද්‍යා අංශය', titleEn: 'Science', color: 'bg-blue-500' },
    { icon: Calculator, title: 'ගණිත අංශය', titleEn: 'Mathematics', color: 'bg-green-500' },
    { icon: BookOpen, title: 'වාණිජ අංශය', titleEn: 'Commerce', color: 'bg-amber-500' },
    { icon: Palette, title: 'කලා අංශය', titleEn: 'Arts', color: 'bg-purple-500' },
    { icon: Cpu, title: 'තාක්ෂණ අංශය', titleEn: 'Technology', color: 'bg-red-500' },
  ];

  const languages = [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Chinese', flag: '🇨🇳' },
    { name: 'Korean', flag: '🇰🇷' },
    { name: 'German', flag: '🇩🇪' },
  ];

  return (
    <section id="academics" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            අධ්‍යාපනය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">අධ්‍යාපන වැඩසටහන්</span>
          </h2>
          <p className="section-subtitle">
            ද්විතීයික අධ්‍යාපනය සිට උසස් පෙළ දක්වා සම්පූර්ණ අධ්‍යාපනයක්
          </p>
        </div>

        {/* Education Levels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 text-center card-hover">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary-dark" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">ද්විතීයික අංශය</h3>
            <p className="text-gold font-medium mb-4">Secondary Section</p>
            <p className="text-muted-foreground">
              6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා අ.පො.ස. සාමාන්‍ය පෙළ අධ්‍යාපනය
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 text-center card-hover">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">උසස් පෙළ අංශය</h3>
            <p className="text-gold font-medium mb-4">Advanced Level</p>
            <p className="text-muted-foreground">
              12 සහ 13 ශ්‍රේණි සඳහා අ.පො.ස. උසස් පෙළ අධ්‍යාපනය
            </p>
          </div>
        </div>

        {/* A/L Streams */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            උසස් පෙළ විෂය ධාරා
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {streams.map((stream, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-soft card-hover"
              >
                <div className={`w-10 h-10 rounded-full ${stream.color} flex items-center justify-center`}>
                  <stream.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{stream.title}</p>
                  <p className="text-xs text-muted-foreground">{stream.titleEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative group rounded-2xl overflow-hidden">
            <img src={libraryImg} alt="පුස්තකාලය" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold text-primary-foreground">නවීන පුස්තකාලය</h4>
                <p className="text-primary-foreground/80">Modern Library</p>
              </div>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden">
            <img src={labImg} alt="විද්‍යාගාරය" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold text-primary-foreground">විද්‍යා පරීක්ෂණාගාර</h4>
                <p className="text-primary-foreground/80">Science Laboratories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Foreign Languages */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Languages className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">විදේශ භාෂා</h3>
          </div>
          <p className="text-center text-muted-foreground mb-8">
            අපගේ සිසුන්ට ජාත්‍යන්තර මට්ටමේ අවස්ථා සඳහා සූදානම් කරමින් විදේශ භාෂා ඉගෙනීමේ අවස්ථාව
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-5 py-3 bg-secondary rounded-full"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium text-secondary-foreground">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
