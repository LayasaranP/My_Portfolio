
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';

const Index = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <Navigation />
      
      {/* Enhanced background with blur effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-cyan-500/5 backdrop-blur-md" />
        
        {/* Additional blur layers for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/8 rounded-full blur-2xl animate-float" />
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Index;
