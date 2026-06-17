import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Philosophy from './components/Philosophy.tsx';
import About from './components/About.tsx';
import ImpactAreas from './components/ImpactAreas.tsx';
import Research from './components/Research.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Publications from './components/Publications.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-primary selection:bg-accent selection:text-primary overflow-x-hidden">
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Sticky Top Navigation */}
      <Navbar />
      
      <main>
        {/* Cinematic Hero Block */}
        <Hero />
        
        {/* Core Philosophy Statement */}
        <Philosophy />
        
        {/* Personal Biography & Core Identifiers & Competencies */}
        <About />
        
        {/* Dynamic Multi-Tab Impact Areas Mapping */}
        <ImpactAreas />
        
        {/* Research Systems & Scientific Studies */}
        <Research />
        
        {/* Expanding Accordion Career Chronology */}
        <Experience />
        
        {/* High-Fidelity GitHub Technical Repositories */}
        <Projects />
        
        {/* Academic & Professional Certifications Grid */}
        <Certifications />
        
        {/* Literary Publications & Thought Leadership */}
        <Publications />
      </main>
      
      {/* Direct Communication & Collaboration Footer */}
      <Contact />
    </div>
  );
}

export default App;
