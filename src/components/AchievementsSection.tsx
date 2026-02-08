import { Trophy, Music, Users, Medal, Star, Mic2, Award, BookOpen, Beaker, Globe, Sparkles, Calendar, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import quizTeam from '@/assets/quiz-team.png';
import debateWinner from '@/assets/debate-winner.png';
import sportsAchievements from '@/assets/sports-achievements.png';
import choirTeam from '@/assets/choir-team.png';
import footballTeam from '@/assets/football-team.png';
import musicTeam from '@/assets/music-team.png';
import sihasaraTeam from '@/assets/sihasara-team.png';
import danceTeam from '@/assets/dance-team.png';
import dayOfGriffins from '@/assets/day-of-griffins.png';
import anniversary69 from '@/assets/anniversary-69.png';
import languageWinner from '@/assets/language-winner.png';
import scienceTeam from '@/assets/science-team.png';
import englishWinner from '@/assets/english-winner.png';
import leoClub from '@/assets/leo-club.png';
import walkOfGriffins from '@/assets/walk-of-griffins.png';
import presidentGoldAward from '@/assets/president-gold-award.png';
import artsFestivalWinners from '@/assets/arts-festival-winners.png';
const AchievementsSection = () => {
  const achievements = [
    {
      src: artsFestivalWinners,
      title: '35වන උතුරු මැද කලා උළෙල 2025',
      titleEn: '35th North Central Arts Festival 2025',
      category: 'සිංහල නිබන්ධනය, චිත්‍ර, ආර්ථික විද්‍යාව - ප්‍රථම ස්ථාන',
      categoryEn: 'Sinhala Essay, Art, Economics - 1st Places',
      icon: Palette,
      gradient: 'from-pink-500/80'
    },
    {
      src: presidentGoldAward,
      title: "ජනාධිපති ස්වර්ණ සම්මානය 2025",
      titleEn: "President's Gold Award - World Tourism Day 2025",
      category: 'Sanduni Sandeepani - Innovation Competition',
      categoryEn: "President's Gold Award",
      icon: Sparkles,
      gradient: 'from-yellow-600/80'
    },
    {
      src: languageWinner,
      title: 'සමස්ත ලංකා දෙවන ජාතික භාෂා තරඟාවලිය 2025',
      titleEn: 'All Island National Language Competition 2025',
      category: 'දෙවන ස්ථානය - දමිළ අංශය',
      categoryEn: 'Second Place - Tamil Section',
      icon: BookOpen,
      gradient: 'from-amber-500/80'
    },
    {
      src: scienceTeam,
      title: 'සමස්ත ලංකා ගෘහ ආර්ථික විද්‍යා තරඟාවලිය 2025',
      titleEn: 'All Island Home Economics Competition 2025',
      category: 'ගෘහ විද්‍යා අංශය',
      categoryEn: 'Home Science Department',
      icon: Beaker,
      gradient: 'from-emerald-500/80'
    },
    {
      src: englishWinner,
      title: 'All-Island English Day Competition 2025',
      titleEn: 'Storytelling Event - 2nd Place',
      category: 'Grade 11-B - Bimaya Rupasinghe',
      categoryEn: 'Second Place',
      icon: Globe,
      gradient: 'from-sky-500/80'
    },
    {
      src: quizTeam,
      title: 'ජාතික ගිහිපෙත බලකාය ප්‍රශ්න තරඟාවලිය 2025',
      titleEn: 'National Quiz Competition 2025',
      category: 'ප්‍රථම ස්ථානය',
      categoryEn: 'First Place',
      icon: Trophy,
      gradient: 'from-yellow-500/80'
    },
    {
      src: debateWinner,
      title: 'ස්වර්ණවාහිනී "භාෂා" නාට්‍ය තරඟාවලිය',
      titleEn: 'Swarnawahini Bhasha Drama Competition',
      category: 'ශූරතාවය',
      categoryEn: 'Championship',
      icon: Star,
      gradient: 'from-purple-500/80'
    },
    {
      src: sportsAchievements,
      title: 'සමස්ත ලංකා පාසල් ක්‍රීඩා 2024',
      titleEn: 'All Island School Sports 2024',
      category: 'ජූඩෝ, මලල ක්‍රීඩා, ටයිකොන්ඩෝ',
      categoryEn: 'Judo, Athletics, Taekwondo',
      icon: Medal,
      gradient: 'from-red-500/80'
    },
    {
      src: choirTeam,
      title: 'උතුරු මැද පළාත් ගායනා තරඟාවලිය 2024',
      titleEn: 'North Central Provincial Singing Competition 2024',
      category: 'ප්‍රථම ස්ථානය - ජ්‍යෙෂ්ඨ බාලක ගායනා',
      categoryEn: 'First Place - Senior Boys Choir',
      icon: Mic2,
      gradient: 'from-blue-500/80'
    },
    {
      src: leoClub,
      title: 'ලියෝ සමාජය 2023-24',
      titleEn: 'Leo Club Board of Directors 2023-24',
      category: 'ශිෂ්‍ය නායකත්වය',
      categoryEn: 'Student Leadership',
      icon: Users,
      gradient: 'from-violet-500/80'
    },
    {
      src: footballTeam,
      title: 'උතුරු මැද පළාත් පාපන්දු උළෙල 2024',
      titleEn: 'North Central Province Football Festival 2024',
      category: 'ප්‍රථම ස්ථානය - U-20',
      categoryEn: 'First Place - Under 20',
      icon: Trophy,
      gradient: 'from-green-500/80'
    },
    {
      src: musicTeam,
      title: 'උතුරු මැද පළාත් සංගීත තරඟාවලිය 2024',
      titleEn: 'North Central Provincial Music Competition 2024',
      category: 'ඒකල බටනල, සමුහ වාදන, ඒකල තබ්ලා - ප්‍රථම ස්ථාන',
      categoryEn: 'Multiple First Places',
      icon: Music,
      gradient: 'from-orange-500/80'
    },
    {
      src: sihasaraTeam,
      title: 'සිහසර 2024 - මාධ්‍ය දිනය',
      titleEn: 'Sihasara 2024 - International Media Day',
      category: 'ශූරතාවය',
      categoryEn: 'Championship',
      icon: Star,
      gradient: 'from-indigo-500/80'
    },
    {
      src: danceTeam,
      title: 'උතුරු මැද පළාත් නර්තන තරඟාවලිය',
      titleEn: 'North Central Provincial Dance Competition',
      category: 'ප්‍රථම ස්ථානය - සංවලා වන්නම',
      categoryEn: 'First Place',
      icon: Award,
      gradient: 'from-teal-500/80'
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            🏆 අපගේ ජයග්‍රහණ
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">සාර්ථකත්ව සහ ජයග්‍රහණ</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            අපගේ දරුවන්ගේ දක්ෂතාවයන් හා ජයග්‍රහණ ජාතික හා පළාත් මට්ටමින් ශ්‍රී ලංකාවම ආඩම්බර කර ඇත
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Our students' achievements at national and provincial levels have made Sri Lanka proud
          </p>
        </div>

        {/* 70th Anniversary Walk of Griffins Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group shadow-royal">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-[450px]">
              <img 
                src={walkOfGriffins}
                alt="Walk of Griffins - 70th Anniversary"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60 md:to-transparent" />
            </div>
            <div className="relative h-72 md:h-[450px]">
              <img 
                src={dayOfGriffins}
                alt="Day of Griffins"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/60 md:to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/95 via-primary/60 to-primary/30 p-6">
              <div className="text-center">
                <p className="text-gold text-lg md:text-xl font-medium mb-2 animate-pulse">🎉 1955 - 2025</p>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2">
                  70<sup>වන</sup> සංවත්සරය
                </h3>
                <h4 className="text-2xl md:text-4xl font-bold text-gold mb-2">
                  Walk of Griffins
                </h4>
                <p className="text-primary-foreground/90 text-lg md:text-xl">
                  70 Years of Excellence - Celebrating Legacy
                </p>
                <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                  <div className="px-6 py-2 bg-gold/20 backdrop-blur-sm rounded-full inline-flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    <p className="text-gold font-semibold">12th September 2025</p>
                  </div>
                  <div className="px-6 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full inline-block">
                    <p className="text-primary-foreground font-semibold">School Main Gate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 69th Anniversary Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <div className="relative h-64 md:h-80">
            <img 
              src={anniversary69}
              alt="69th Anniversary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30 flex flex-col items-center justify-center p-6">
              <div className="text-center">
                <p className="text-gold text-sm md:text-lg font-medium mb-2">🏆 1955 - 2024</p>
                <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-2">
                  69<sup>වන</sup> සංවත්සරය - Day of Griffins
                </h3>
                <div className="mt-3 px-6 py-2 bg-gold/20 backdrop-blur-sm rounded-full inline-block">
                  <p className="text-gold font-semibold">Honour to the Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-royal transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={achievement.src}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${achievement.gradient} to-transparent opacity-60`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/95 backdrop-blur-sm rounded-full">
                  <achievement.icon className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-primary">{achievement.categoryEn}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-bold text-foreground mb-1 line-clamp-2 leading-tight">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {achievement.titleEn}
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="text-xs text-gold font-medium">{achievement.category}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <achievement.icon className="w-8 h-8 text-gold" />
                    <span className="text-gold font-bold">{achievement.categoryEn}</span>
                  </div>
                  <h4 className="text-primary-foreground font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-primary-foreground/80 text-sm">{achievement.titleEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary to-primary-dark rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Medal className="w-16 h-16 mx-auto text-gold mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              2024 වසරේ ජයග්‍රහණ සාරාංශය
            </h3>
            <p className="text-primary-foreground/80">Summary of Achievements - 2024</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">15+</p>
              <p className="text-primary-foreground font-medium">ජාතික මට්ටමේ ත්‍යාග</p>
              <p className="text-primary-foreground/70 text-sm">National Awards</p>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">30+</p>
              <p className="text-primary-foreground font-medium">පළාත් මට්ටමේ ත්‍යාග</p>
              <p className="text-primary-foreground/70 text-sm">Provincial Awards</p>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">8</p>
              <p className="text-primary-foreground font-medium">ක්‍රීඩා ශූරතා</p>
              <p className="text-primary-foreground/70 text-sm">Sports Championships</p>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">12</p>
              <p className="text-primary-foreground font-medium">සංස්කෘතික ශූරතා</p>
              <p className="text-primary-foreground/70 text-sm">Cultural Championships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
