import { Star, Sparkles, Telescope, Moon, Users, Mic2, Rocket, FlaskConical, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

import starcampTeacher from '@/assets/starcamp-teacher.png';
import starcampBand from '@/assets/starcamp-band.png';
import starcampLighting from '@/assets/starcamp-lighting.png';
import starcampGuest from '@/assets/starcamp-guest.png';
import starcampSpeech from '@/assets/starcamp-speech.png';
import starcampPerformance from '@/assets/starcamp-performance.png';
import starcampStudents from '@/assets/starcamp-students.png';
import starcampTelescope1 from '@/assets/starcamp-telescope1.png';
import starcampTelescope2 from '@/assets/starcamp-telescope2.png';
import starcampTelescope3 from '@/assets/starcamp-telescope3.png';
import starcampStudentNotes from '@/assets/starcamp-student-notes.png';
import starcampTeacherSpeech from '@/assets/starcamp-teacher-speech.png';
import starcampStudentPresenter from '@/assets/starcamp-student-presenter.png';
import starcampStudentQuestion from '@/assets/starcamp-student-question.png';
import starcampStagePresenter from '@/assets/starcamp-stage-presenter.png';
import starcampTeacherClapping from '@/assets/starcamp-teacher-clapping.png';
import starcampStudentListening from '@/assets/starcamp-student-listening.png';
import starcampSolarSystem from '@/assets/starcamp-solar-system.png';
import starcampRocketModel from '@/assets/starcamp-rocket-model.png';
import starcampScienceDemo from '@/assets/starcamp-science-demo.png';

const StarCampSection = () => {
  const highlights = [
    { icon: Telescope, title: 'දුරේක්ෂ නිරීක්ෂණ', subtitle: 'Telescope Observations' },
    { icon: Moon, title: 'තාරකා විද්‍යාව', subtitle: 'Astronomy Learning' },
    { icon: Users, title: 'සිසු සහභාගීත්වය', subtitle: 'Student Participation' },
    { icon: Mic2, title: 'විශේෂ දේශන', subtitle: 'Special Lectures' },
  ];

  const mainGallery = [
    { src: starcampTelescope1, title: 'දුරේක්ෂ නිරීක්ෂණ', subtitle: 'Stargazing Session' },
    { src: starcampTelescope2, title: 'තාරකා අධ්‍යයනය', subtitle: 'Astronomy Study' },
    { src: starcampTelescope3, title: 'රාත්‍රී නිරීක්ෂණ', subtitle: 'Night Observation' },
  ];

  const eventGallery = [
    { src: starcampLighting, title: 'ආරම්භක උත්සවය', subtitle: 'Opening Ceremony' },
    { src: starcampSpeech, title: 'ප්‍රධාන දේශනය', subtitle: 'Keynote Speech' },
    { src: starcampPerformance, title: 'සිසු දක්ෂතා', subtitle: 'Student Performance' },
    { src: starcampStudents, title: 'සිසු සහභාගීත්වය', subtitle: 'Student Gathering' },
    { src: starcampGuest, title: 'ආරාධිත අමුත්තෝ', subtitle: 'Special Guests' },
    { src: starcampBand, title: 'බෑන්ඩ් කණ්ඩායම', subtitle: 'Band Team' },
  ];

  const scienceProjects = [
    { src: starcampSolarSystem, title: 'සූර්ය ග්‍රහ මණ්ඩලය', subtitle: 'Solar System Model', accent: 'from-orange-500 to-yellow-500' },
    { src: starcampRocketModel, title: 'රොකට් ආකෘතිය', subtitle: 'Sri Lankan Rocket Model', accent: 'from-blue-500 to-cyan-500' },
    { src: starcampScienceDemo, title: 'විද්‍යා ප්‍රදර්ශනය', subtitle: 'Science Demonstration', accent: 'from-purple-500 to-pink-500' },
  ];

  const presentations = [
    { src: starcampTeacherSpeech, title: 'ගුරු දේශනය', subtitle: 'Teacher Lecture' },
    { src: starcampStudentPresenter, title: 'සිසු ඉදිරිපත් කිරීම', subtitle: 'Student Presentation' },
    { src: starcampStagePresenter, title: 'වේදිකා ඉදිරිපත් කිරීම', subtitle: 'Stage Performance' },
    { src: starcampStudentQuestion, title: 'ප්‍රශ්න විමසීම', subtitle: 'Q&A Session' },
  ];

  const audienceMoments = [
    { src: starcampStudentNotes, title: 'සටහන් ලිවීම', subtitle: 'Taking Notes' },
    { src: starcampStudentListening, title: 'අවධානයෙන් සවන්දීම', subtitle: 'Active Listening' },
    { src: starcampTeacherClapping, title: 'අගය කිරීම', subtitle: 'Appreciation' },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#1a1f3c] to-[#0a1128]">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6"
          >
            <div className="relative">
              <Sparkles className="w-10 h-10 text-yellow-400 absolute -top-2 -left-2" />
              <Star className="w-12 h-12 text-yellow-300 fill-yellow-300" />
              <Sparkles className="w-8 h-8 text-blue-400 absolute -bottom-1 -right-1" />
            </div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-purple-500/20 text-yellow-300 rounded-full text-sm font-bold mb-4 border border-yellow-500/30"
          >
            ✨ විශේෂ සිදුවීම ✨
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
            STAR CAMP 2024
          </h2>
          <p className="text-xl md:text-2xl text-blue-200/80 mb-4">
            තාරකා විද්‍යා කඳවුර
          </p>
          <p className="text-blue-300/60 max-w-2xl mx-auto">
            අපගේ පාසලට පමණක් සීමා වූ විශේෂ තාරකා විද්‍යා කඳවුර - 
            විශ්වය ගවේෂණය කරන අපූර්ව අත්දැකීමක්
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-center group hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
            >
              <item.icon className="w-10 h-10 mx-auto mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              <h4 className="font-bold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-blue-200/70">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Telescope Gallery - Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <Telescope className="w-8 h-8 mx-auto text-blue-400 mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              දුරේක්ෂ නිරීක්ෂණ
            </h3>
            <p className="text-blue-300/70">Telescope Observations Under the Stars</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mainGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-blue-300">{item.subtitle}</p>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-blue-400 rounded-full blur-sm"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Science Projects Section - NEW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-orange-400" />
              <FlaskConical className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              විද්‍යා ව්‍යාපෘති
            </h3>
            <p className="text-blue-300/70">Creative Science Projects & Models</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scienceProjects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.accent} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-bold mb-2`}>
                      ව්‍යාපෘතිය
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-blue-200/80">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presentations & Lectures Section - NEW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <Mic2 className="w-8 h-8 mx-auto text-pink-400 mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              දේශන සහ ඉදිරිපත් කිරීම්
            </h3>
            <p className="text-blue-300/70">Lectures & Student Presentations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {presentations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-pink-500/50 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-pink-300">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Audience Moments - NEW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <BookOpen className="w-8 h-8 mx-auto text-green-400 mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              සිසු අත්දැකීම්
            </h3>
            <p className="text-blue-300/70">Student Experiences & Learning Moments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audienceMoments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-green-500/50 transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                      <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Live Moment</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-teal-200/80">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Star className="w-8 h-8 mx-auto text-yellow-400 fill-yellow-400 mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              උත්සව අවස්ථා
            </h3>
            <p className="text-blue-300/70">Event Highlights & Celebrations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {eventGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden"
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-52 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-white text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-yellow-300">{item.subtitle}</p>
                </div>
                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-white/90 italic mb-4">
                "තාරකා අතර ඇවිදින්නට, විශ්වයේ අසීමිත රහස් සොයන්නට 
                Star Camp 2024 අපට මං පාදා දුන්නේය."
              </p>
              <footer className="text-blue-300">
                — වාලිසිංහ හරිශ්චන්ද්‍ර විද්‍යාලය
              </footer>
            </blockquote>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-3xl font-bold text-yellow-400">500+</p>
                <p className="text-sm text-blue-200/70">සිසුන්</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-3xl font-bold text-yellow-400">24</p>
                <p className="text-sm text-blue-200/70">පැය</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-3xl font-bold text-yellow-400">∞</p>
                <p className="text-sm text-blue-200/70">අත්දැකීම්</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StarCampSection;
