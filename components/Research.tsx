
import React from 'react';
import { motion } from 'motion/react';
import { Search, Database, Globe } from 'lucide-react';
import { RESEARCH_WORK } from '../constants.ts';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-primary px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 mb-16">
          <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Operations</h2>
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Research Systems</h3>
        </div>

        <div className="space-y-12">
          {RESEARCH_WORK.map((research, index) => (
            <motion.div
              key={research.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group tech-dashed-border p-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-accent" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{research.organization}</span>
                  </div>
                  <h4 className="text-white text-xl md:text-2xl font-bold">{research.title}</h4>
                </div>
                <span className="text-textDim text-sm font-mono">{research.year}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {research.methodology.map(method => (
                  <span key={method} className="text-[9px] font-bold uppercase tracking-widest text-accent px-2 py-1 bg-accent/5 border border-accent/10 rounded-sm">
                    {method}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {research.description.map((item, i) => (
                  <li key={i} className="text-textDim text-sm leading-relaxed flex gap-3 italic">
                    <span className="text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
