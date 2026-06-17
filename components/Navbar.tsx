import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Evaluates when section is clearly center-active
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; // spacing offsetting sticky menu height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/80 backdrop-blur-md border-b border-border/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3">
          <div className="w-6.5 h-6.5 bg-accent flex items-center justify-center rounded-[2px] transition-transform duration-200 hover:scale-103 shadow-[0_1px_3px_rgba(255,255,255,0.05)]">
            <span className="text-primary font-bold text-[9px] tracking-tight leading-none">KS</span>
          </div>
          <span className="text-textLight font-medium tracking-wide text-xs uppercase opacity-90">Kevin Sila</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 lg:gap-11">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleClick(e, link.href)}
                className={`relative py-1 cursor-pointer transition-colors duration-200 text-[10px] font-medium uppercase tracking-[0.2em] ${
                  isActive ? 'text-white' : 'text-textDim hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white origin-left"
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleClick(e, '#contact')}
            className="px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] hover:bg-neutral-200 active:scale-98 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label="Toggle Menu"
          className="md:hidden text-white/80 hover:text-white/100 transition-colors p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-border/80 p-6 md:hidden flex flex-col gap-4 items-center"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors py-1 ${
                    isActive ? 'text-white border-b border-white' : 'text-textDim hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
