
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
