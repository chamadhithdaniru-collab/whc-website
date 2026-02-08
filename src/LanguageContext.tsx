import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'si' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { si: 'මුල් පිටුව', en: 'Home' },
  'nav.academics': { si: 'අධ්‍යාපනය', en: 'Academics' },
  'nav.achievements': { si: 'ජයග්‍රහණ', en: 'Achievements' },
  'nav.activities': { si: 'ක්‍රියාකාරකම්', en: 'Activities' },
  'nav.gallery': { si: 'ගැලරිය', en: 'Gallery' },
  'nav.news': { si: 'පුවත්', en: 'News' },
  'nav.contact': { si: 'සම්බන්ධ වන්න', en: 'Contact' },

  // School Info
  'school.name': { si: 'වලිසිංහ හරිශ්චන්ද්‍ර', en: 'Walisinghe Harischandra' },
  'school.college': { si: 'මහා විද්‍යාලය', en: 'College' },
  'school.fullName': { si: 'වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය', en: 'Walisinghe Harischandra College' },
  'school.motto': { si: 'විදු නැණ මනස පුබුදයි', en: 'Knowledge Awakens the Mind' },
  'school.location': { si: 'A12, අනුරාධපුරය, ශ්‍රී ලංකාව', en: 'A12, Anuradhapura, Sri Lanka' },

  // Hero Section
  'hero.slide1.title': { si: 'වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය', en: 'Walisinghe Harischandra College' },
  'hero.slide1.subtitle': { si: 'Walisinghe Harischandra College', en: 'Anuradhapura, Sri Lanka' },
  'hero.slide1.tagline': { si: 'විදු නැණ මනස පුබුදයි', en: 'Knowledge Awakens the Mind' },
  'hero.slide2.title': { si: 'අධ්‍යාපන විශිෂ්ටත්වය', en: 'Excellence in Education' },
  'hero.slide2.subtitle': { si: 'Excellence in Education Since 1955', en: 'Since 1955' },
  'hero.slide2.tagline': { si: 'අනුරාධපුරයේ ප්‍රමුඛතම ජාතික පාසල', en: 'Leading National School in Anuradhapura' },
  'hero.slide3.title': { si: 'අනාගත නායකයින්', en: 'Future Leaders' },
  'hero.slide3.subtitle': { si: 'Building Future Leaders', en: 'Building Tomorrow\'s Leaders' },
  'hero.slide3.tagline': { si: 'ඉවසීමෙන් දැනුම ලබා, නුවණින් ලෝකය දිනමු', en: 'Learn with patience, conquer the world with wisdom' },
  'hero.slide4.title': { si: 'එකමුතුකම සහ විශිෂ්ටත්වය', en: 'Unity & Excellence' },
  'hero.slide4.subtitle': { si: 'Unity & Excellence', en: 'Together We Achieve' },
  'hero.slide4.tagline': { si: 'සිසු සිසුවියන්ගේ දෙවන නිවස', en: 'A Second Home for Students' },
  'hero.cta.about': { si: 'අපි ගැන දැනගන්න', en: 'Learn About Us' },
  'hero.cta.contact': { si: 'සම්බන්ධ වන්න', en: 'Contact Us' },

  // About Section
  'about.badge': { si: 'අපි ගැන', en: 'About Us' },
  'about.title': { si: 'පාසල හැඳින්වීම', en: 'School Introduction' },
  'about.subtitle': { si: 'ශ්‍රී ලංකාවේ ප්‍රාචීන අගනුවර අනුරාධපුරයේ හදවතේ පිහිටි ප්‍රමුඛතම ජාතික පාසල', en: 'A leading national school located in the heart of Sri Lanka\'s ancient capital, Anuradhapura' },
  'about.para1': { 
    si: 'ශ්‍රී ලංකාවේ ප්‍රාචීන අගනුවර වූ අනුරාධපුරයේ හදවතේ පිහිටි වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය, නුවරගම් පාළාත - නැගෙනහිර කොට්ඨාශයට අයත් වන අතර, උතුරු මැද පළාතේ අනුරාධපුර අධ්‍යාපන කලාපයට අයත් වේ.', 
    en: 'Walisinghe Harischandra College is located in the heart of Anuradhapura, Sri Lanka\'s ancient capital. It belongs to the Nuwaragam Palatha - East division and the Anuradhapura Education Zone of the North Central Province.' 
  },
  'about.para2': { 
    si: '1955 සැප්තැම්බර් 07 වන දින ශ්‍රී ලාංකික ඉතිහාසයේ ප්‍රකට චරිතයක් වූ දිවංගත වලිසිංහ හරිශ්චන්ද්‍ර තුමාගේ නාමයෙන් ආරම්භ කරන ලදී. ජයතිලක මහතාගේ නායකත්වය යටතේ ගුරුවරුන් 03 දෙනෙකු සමඟ සිසුන් 42 දෙනෙකුට තනි ගොඩනැගිල්ලක සේවය ආරම්භ විය.', 
    en: 'Founded on September 7, 1955, the school was named after the late Walisinghe Harischandra, a prominent figure in Sri Lankan history. Under the leadership of Mr. Jayatilaka, it started with just 3 teachers and 42 students in a single building.' 
  },
  'about.para3': { 
    si: 'වර්තමානයේ අජිත් ප්‍රියන්ත වඩුගේ මහතාගේ විදුහල්පති තනතුර යටතේ ගුරුවරුන් 205 දෙනෙකුගෙන් සමන්විත කාර්ය මණ්ඩලයක් සේවය කරන අතර, සිසුන් 5647 දෙනෙකුට අධ්‍යාපනය ලබා දෙමින් පළාත් අධ්‍යාපන දෙපාර්තමේන්තුවට අයත් විශාලතම හා ජනප්‍රියම පාසල් අතර ඉදිරියෙන්ම සිටී.', 
    en: 'Currently, under the leadership of Principal D. Ranasinghe, the school has a staff of 205 teachers and educates 5,647 students, making it one of the largest and most popular schools under the Provincial Department of Education.' 
  },
  'about.streams': { si: 'අධ්‍යාපන ධාරා', en: 'Education Streams' },
  'about.languages': { si: 'භාෂා අධ්‍යාපනය', en: 'Language Education' },
  'about.stat.students': { si: 'සිසුන්', en: 'Students' },
  'about.stat.teachers': { si: 'ගුරුවරුන්', en: 'Teachers' },
  'about.stat.years': { si: 'වසර', en: 'Years' },
  'about.stat.classrooms': { si: 'පන්ති කාමර', en: 'Classrooms' },

  // Footer
  'footer.quickLinks': { si: 'ඉක්මන් සබැඳි', en: 'Quick Links' },
  'footer.contact': { si: 'සම්බන්ධතා', en: 'Contact' },
  'footer.address': { si: 'ලිපිනය:', en: 'Address:' },
  'footer.phone': { si: 'දුරකථනය:', en: 'Phone:' },
  'footer.email': { si: 'විද්‍යුත් තැපෑල:', en: 'Email:' },
  'footer.connectWithUs': { si: 'අප සමඟ සම්බන්ධ වන්න:', en: 'Connect with us:' },
  'footer.description': { 
    si: '1955 වසරේ සිට අධ්‍යාපන විශිෂ්ටත්වයේ සංකේතයක් ලෙස ක්‍රියාත්මක වන වලිසිංහ හරිශ්චන්ද්‍ර මහා විද්‍යාලය, ශ්‍රී ලංකාවේ ප්‍රමුඛතම ජාතික පාසල්වලින් එකකි.', 
    en: 'Since 1955, Walisinghe Harischandra College has been a symbol of educational excellence and is one of Sri Lanka\'s leading national schools.' 
  },
  'footer.rights': { si: 'සියලුම හිමිකම් ඇවිරිණි.', en: 'All rights reserved.' },

  // Common
  'common.learnMore': { si: 'තව දැනගන්න', en: 'Learn More' },
  'common.viewAll': { si: 'සියල්ල බලන්න', en: 'View All' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('si');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
