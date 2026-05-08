
import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden bg-primary">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              Kevin <br /> Yumbya Sila
            </h1>
            <p className="text-textDim text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
              Developer — AI Automation Builder — Data & Research Analyst
            </p>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-textDim text-base md:text-lg leading-relaxed">
              Developer and systems-focused problem solver building AI workflows, digital tools, research systems, and automation solutions across development, analytics, and operational strategy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all hover:bg-neutral-200 active:scale-95"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity border-b border-white/20 pb-1"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default Hero;
