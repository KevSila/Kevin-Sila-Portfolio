
import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <Certifications />
        <Publications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
