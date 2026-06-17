import React from 'react';
import { motion } from 'motion/react';
import { BRANDING } from '../constants.ts';

const Philosophy: React.FC = () => {
  return (
    <section id="approach" className="pt-16 pb-20 bg-primary px-6 relative overflow-hidden border-t border-white/[0.02]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        
        {/* Section Label */}
        <div className="space-y-3">
          <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Guiding Principle</h2>
          <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">My Approach</h3>
        </div>

        {/* Large Aesthetic Quote - Calmer, airier, and highly elegant */}
        <div className="max-w-3xl mx-auto py-10 px-4 border-y border-border/10">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-2xl md:text-4xl font-light tracking-wide leading-relaxed italic opacity-95"
          >
            "{BRANDING.philosophyQuote}"
          </motion.p>
        </div>

        {/* Supporting Narrative */}
        <p className="text-textDim text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-90 font-light">
          {BRANDING.philosophySupport}
        </p>

        {/* Decorative Grid Marker */}
        <div className="flex justify-center gap-2 selection:bg-transparent pt-2">
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span className="w-1.5 h-1.5 bg-white/45 rounded-full" />
          <span className="w-1 h-1 bg-white/20 rounded-full" />
        </div>

      </motion.div>

      {/* Background Graphic Accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Philosophy;
