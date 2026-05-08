
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
            <span className="text-primary font-black text-[10px] leading-none">KS</span>
          </div>
          <span className="text-white font-bold tracking-tight text-sm uppercase">Kevin Sila</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-textDim hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-200 transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-primary border-b border-border p-6 md:hidden flex flex-col gap-5 items-center"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-textDim hover:text-white text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
