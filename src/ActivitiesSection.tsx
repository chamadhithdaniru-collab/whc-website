import { Trophy, Music, Users, Volleyball, Medal, Star, Drum } from 'lucide-react';
import { motion } from 'framer-motion';
import cricketBigMatch from './assets/cricket-big-match.png';
import fireDance1 from './assets/fire-dance-1.png';
import fireDance2 from './assets/fire-dance-2.png';
import bandTeam from './assets/band-team.png';
import bandPerformance from './assets/band-performance.png';

const ActivitiesSection = () => {
  const sports = [
    'ක්‍රිකට්', 'බැඩ්මින්ටන්', 'මලල ක්‍රීඩා', 'පාපන්දු', 
    'වොලිබෝල්', 'නෙට්බෝල්', 'කරාතේ', 'මේස පන්දු'
  ];

  const clubs = [
    { icon: Music, name: 'සංගීත සමාජය' },
    { icon: Users, name: 'නාට්‍ය සමාජය' },
    { icon: Star, name: 'බෞද්ධ සමාජය' },
    { icon: Trophy, name: 'කණ්ඩායම් ක්‍රීඩා' },
    { icon: Drum, name: 'බෑන්ඩ් කණ්ඩායම' },
  ];

  return (
    <section id="activities" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            සිසු ජීවිතය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">ක්‍රියාකාරකම් සහ ක්‍රීඩා</span>
          </h2>
          <p className="section-subtitle">
            අධ්‍යාපනයට සමගාමීව සමාජ, සංස්කෘතික සහ ක්‍රීඩා ක්‍රියාකාරකම්
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sports */}
          <div>
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img 
                src={cricketBigMatch} 
                alt="Big Match - ක්‍රිකට්" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                    <Volleyball className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground">ක්‍රීඩා</h3>
                    <p className="text-gold">Sports Activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-muted-foreground mb-6">
                අපගේ සිසුන් බැඩ්මින්ටන්, මලල ක්‍රීඩා, ක්‍රිකට් ඇතුළු ක්‍රීඩා 
                ගණනාවකින් ජාතික හා පළාත් මට්ටමින් ජයග්‍රහණ ලබා ඇත.
              </p>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cultural Activities */}
          <div>
            <div className="relative rounded-3xl overflow-hidden mb-8 group">
              <img 
                src={fireDance1} 
                alt="Fire Dance Performance - ගිනි නර්තනය" 
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground">සංස්කෘතික කටයුතු</h3>
                    <p className="text-gold">Cultural Activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src={fireDance2} 
                  alt="Fire Dance Performance" 
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-muted-foreground mb-6">
                සිංහල සංස්කෘතිය හා බෞද්ධ සම්ප්‍රදාය ආරක්ෂා කරමින් නර්තන, 
                සංගීත, නාට්‍ය ඇතුළු සංස්කෘතික ක්‍රියාකාරකම් පවත්වාගෙන යනු ලැබේ.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {clubs.map((club, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-xl"
                  >
                    <club.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">{club.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* School Band Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              <Drum className="w-4 h-4" />
              බෑන්ඩ් කණ්ඩායම
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              School Band Team
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src={bandTeam} 
                alt="School Band Team" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary-foreground">බෑන්ඩ් කණ්ඩායම 2024</h4>
                  <p className="text-gold">School Band Team - HSM 2024</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src={bandPerformance} 
                alt="Band Performance" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary-foreground">ක්‍රීඩා උළෙල පෙරහැර</h4>
                  <p className="text-gold">Sports Day Parade Performance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Highlight */}
        <div className="bg-gradient-to-r from-primary via-primary to-primary-dark rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Medal className="w-16 h-16 mx-auto text-gold mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              අපගේ ජයග්‍රහණ
            </h3>
            <p className="text-primary-foreground/80">Our Achievements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl font-bold text-gold mb-2">50+</p>
              <p className="text-primary-foreground">ජාතික මට්ටමේ ත්‍යාග</p>
              <p className="text-primary-foreground/70 text-sm">National Awards</p>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl font-bold text-gold mb-2">100+</p>
              <p className="text-primary-foreground">පළාත් මට්ටමේ ත්‍යාග</p>
              <p className="text-primary-foreground/70 text-sm">Provincial Awards</p>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl font-bold text-gold mb-2">200+</p>
              <p className="text-primary-foreground">විශේෂ ත්‍යාග</p>
              <p className="text-primary-foreground/70 text-sm">Special Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
