import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
import leoClub from '@/assets/leo-club.png';
import studentsFlowers from '@/assets/students-flowers.png';
import happyStudents from '@/assets/happy-students.png';
import teachers from '@/assets/teachers.png';
import ceremonial from '@/assets/ceremonial.png';
import bandTeam from '@/assets/band-team.png';
import studentBoy from '@/assets/student-boy.png';
import languageWinner from '@/assets/language-winner.png';
import scienceTeam from '@/assets/science-team.png';
import englishWinner from '@/assets/english-winner.png';
// New images
import studentsParade from '@/assets/students-parade.png';
import anniversaryCake from '@/assets/anniversary-cake.png';
import teachersWalk from '@/assets/teachers-walk.png';
import studentsCeremony from '@/assets/students-ceremony.png';
import studentsWalking from '@/assets/students-walking.png';
import bandPerformance from '@/assets/band-performance.png';
import honorGuard from '@/assets/honor-guard.png';
import walkOfGriffinsEvent from '@/assets/walk-of-griffins-event.png';
import schoolEntrance from '@/assets/school-entrance.jpg';
import studentAssembly from '@/assets/student-assembly.jpg';
// Ceremony images
import flagCeremony1 from '@/assets/flag-ceremony-1.png';
import flagCeremony2 from '@/assets/flag-ceremony-2.png';
import principalCeremony from '@/assets/principal-ceremony.png';
import teachersCeremony from '@/assets/teachers-ceremony.png';
import ceremonyGround from '@/assets/ceremony-ground.png';
import teachersAssembly from '@/assets/teachers-assembly.png';
import saluteCeremony from '@/assets/salute-ceremony.png';
// Cultural ceremony images
import studentsWorship from '@/assets/students-worship.png';
import ceremonialItems from '@/assets/ceremonial-items.png';
import ceremonialProcession from '@/assets/ceremonial-procession.png';
import traditionalDrum from '@/assets/traditional-drum.png';
import buddhistProcession from '@/assets/buddhist-procession.png';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: schoolEntrance, title: 'පාසල් ප්‍රවේශය', titleEn: 'School Entrance' },
    { src: buddhistProcession, title: 'බෞද්ධ පෙරහැර', titleEn: 'Buddhist Procession' },
    { src: flagCeremony2, title: 'සිහසෙන - ධජාරෝහණය', titleEn: 'Sihasena - Flag Hoisting' },
    { src: studentAssembly, title: 'සිසු එක්රැස්වීම', titleEn: 'Student Assembly - Morning Parade' },
    { src: studentsWorship, title: 'සිසු වන්දනාව', titleEn: 'Students Worship' },
    { src: traditionalDrum, title: 'සාම්ප්‍රදායික බෙර වාදනය', titleEn: 'Traditional Drum Performance' },
    { src: flagCeremony1, title: 'ජාතික කොඩිය ඔසවමින්', titleEn: 'National Flag Hoisting' },
    { src: ceremonialItems, title: 'උත්සව භාණ්ඩ රැගෙන', titleEn: 'Ceremonial Items Procession' },
    { src: studentsParade, title: 'සිසු පෙරහැර', titleEn: 'Students Parade with School Emblem' },
    { src: ceremonialProcession, title: 'ධාතු කරඬුව රැගෙන', titleEn: 'Sacred Relic Procession' },
    { src: saluteCeremony, title: 'සම්මාන පිළිගැනීම', titleEn: 'Honor Salute Ceremony' },
    { src: bandPerformance, title: 'බෑන්ඩ් කණ්ඩායම - ක්‍රීඩා උළෙල', titleEn: 'Band Performance - Sports Day' },
    { src: bandTeam, title: 'බෑන්ඩ් කණ්ඩායම', titleEn: 'School Band Team' },
    { src: principalCeremony, title: 'විදුහල්පතිතුමා සමඟ', titleEn: 'With Principal' },
    { src: teachersCeremony, title: 'ගුරු මණ්ඩලය', titleEn: 'Teaching Staff Assembly' },
    { src: teachersAssembly, title: 'ගුරු මණ්ඩල එක්රැස්වීම', titleEn: 'Teachers Assembly' },
    { src: ceremonyGround, title: 'උත්සව පිටිය', titleEn: 'Ceremony Ground' },
    { src: anniversaryCake, title: 'සංවත්සර සැමරුම', titleEn: 'Anniversary Celebration' },
    { src: anniversary69, title: '69වන සංවත්සරය', titleEn: '69th Anniversary' },
    { src: teachersWalk, title: 'ගුරු මණ්ඩලය', titleEn: 'Teachers Walk' },
    { src: studentsCeremony, title: 'සිසු උත්සවය', titleEn: 'Students Ceremony' },
    { src: studentsWalking, title: 'අපේ සිසු දරුවන්', titleEn: 'Our Students Walking' },
    { src: honorGuard, title: 'ආචාර කොරිඩෝව', titleEn: 'Honor Guard Corridor' },
    { src: walkOfGriffinsEvent, title: 'Walk of Griffins', titleEn: 'Walk of Griffins 2024' },
    { src: studentsFlowers, title: 'අපේ සිසුන්', titleEn: 'Our Students' },
    { src: happyStudents, title: 'සතුටු මොහොත', titleEn: 'Happy Moments' },
    { src: leoClub, title: 'ලියෝ සමාජය 2023-24', titleEn: 'Leo Club Board 2023-24' },
    { src: quizTeam, title: 'ප්‍රශ්න තරඟාවලිය - ජාතික ශූරයන්', titleEn: 'Quiz Team - National Champions' },
    { src: choirTeam, title: 'ගායනා කණ්ඩායම', titleEn: 'Choir Team' },
    { src: teachers, title: 'ගුරු මණ්ඩලය', titleEn: 'Teaching Staff' },
    { src: ceremonial, title: 'උත්සව', titleEn: 'Ceremonies' },
    { src: studentBoy, title: 'අපේ සිසු දරුවන්', titleEn: 'Our Students' },
    { src: sportsAchievements, title: 'ක්‍රීඩා ජයග්‍රහණ', titleEn: 'Sports Achievements' },
    { src: footballTeam, title: 'පාපන්දු කණ්ඩායම', titleEn: 'Football Team' },
    { src: musicTeam, title: 'සංගීත කණ්ඩායම', titleEn: 'Music Team' },
    { src: danceTeam, title: 'නර්තන කණ්ඩායම', titleEn: 'Dance Team' },
    { src: sihasaraTeam, title: 'සිහසර 2024', titleEn: 'Sihasara 2024' },
    { src: dayOfGriffins, title: 'Day of Griffins', titleEn: 'Day of Griffins 2024' },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ගැලරිය
          </span>
          <h2 className="section-title text-foreground">
            <span className="gold-underline">ඡායාරූප ගැලරිය</span>
          </h2>
          <p className="section-subtitle">
            අපගේ පාසලේ සුන්දර මතකයන් සහ සිදුවීම්
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group card-hover ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? 'h-64 md:h-full' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-bold">{image.title}</p>
                  <p className="text-gold text-sm">{image.titleEn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-primary-foreground hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-3 bg-primary-foreground/20 rounded-full text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain"
              />
              <div className="text-center mt-6">
                <p className="text-primary-foreground text-xl font-bold">{images[selectedImage].title}</p>
                <p className="text-gold">{images[selectedImage].titleEn}</p>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-3 bg-primary-foreground/20 rounded-full text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto">
              {images.slice(0, 12).map((_, index) => (
                <button 
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                    index === selectedImage ? 'bg-gold w-6' : 'bg-primary-foreground/40'
                  }`}
                />
              ))}
              {images.length > 12 && (
                <span className="text-primary-foreground/60 text-xs">+{images.length - 12}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;