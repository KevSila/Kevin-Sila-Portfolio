
import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '../constants.ts';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-20">
          <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Career Timeline</h2>
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Technical Track</h3>
        </div>

        <div className="space-y-16">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/5"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-white text-xl font-bold">{item.role}</h4>
                    <p className="text-accent text-sm font-bold uppercase tracking-widest">{item.company}</p>
                  </div>
                  <span className="text-textDim text-xs font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-sm">
                    {item.year}
                  </span>
                </div>

                <ul className="space-y-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-textDim text-sm leading-relaxed flex gap-3">
                      <span className="text-accent/40 font-mono mt-1 text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a 
                    href={item.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    {item.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
