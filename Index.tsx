import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SchoolVideoIntro from '@/components/SchoolVideoIntro';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import PrincipalSection from '@/components/PrincipalSection';
import SchoolInfoSection from '@/components/SchoolInfoSection';
import DepartmentsSection from '@/components/DepartmentsSection';
import AnthemPlayer from '@/components/AnthemPlayer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const [showAnthem] = useState(true);

  return (
    <>
      <Helmet>
        <title> Walisinghe Harischandra School</title>
        <meta name="description" content="Walisinghe Harischandra School, Anuradhapura - A leading national school in Sri Lanka since 1955. විදු නැණ මනස පුබුදයි" />
        <meta name="keywords" content="Walisinghe Harischandra School, Anuradhapura, Sri Lanka schools, national school" />
      </Helmet>
      
      {/* Anthem Player with Intro */}
      {showAnthem && <AnthemPlayer autoPlay={false} />}
      
      <HeroSection />
      <SchoolVideoIntro />
      <AboutSection />
      <PrincipalSection />
      <HistorySection />
      <SchoolInfoSection />
      <DepartmentsSection />
    </>
  );
};

export default Index;
