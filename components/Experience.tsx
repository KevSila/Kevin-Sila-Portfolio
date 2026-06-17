import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Plus, Minus, Building2 } from 'lucide-react';
import { EXPERIENCE } from '../constants.ts';

const Experience: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Divide the experience list (5 initial, rest expandable)
  const initialCount = 5;
  const initialExperience = EXPERIENCE.slice(0, initialCount);
  const remainingExperience = EXPERIENCE.slice(initialCount);

  return (
    <section id="experience" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-border/45 rounded-[2px]">
            <Building2 size={11} className="text-white opacity-80" />
            <span className="text-textDim text-[9px] font-medium uppercase tracking-[0.2em]">Chronology</span>
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Professional Journey</h3>
          <p className="text-textDim text-sm max-w-xl mx-auto leading-relaxed opacity-95 font-light">
            A comprehensive track record spanning engineering, academic research, community leadership, and business intelligence.
          </p>
        </div>

        {/* Timeline Line & Listings */}
        <div className="relative border-l border-border/25 space-y-12 pl-6 ml-4">
          
          {/* Initial 5 Experiences */}
          {initialExperience.map((item, index) => (
            <motion.div
              key={item.company + '-' + item.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline bubble node - clean white circle backplate, no excessive shadows */}
              <div className="absolute -left-[31px] top-2 w-2 h-2 rounded-full bg-white border border-primary group-hover:scale-125 transition-transform" />

              <div className="space-y-4 bg-white/[0.01] hover:bg-white/[0.02] border border-border/45 hover:border-border/80 rounded-[2px] p-6 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-white text-lg font-medium tracking-tight">{item.role}</h4>
                    <span className="text-white font-medium text-xs uppercase tracking-widest opacity-80">{item.company}</span>
                  </div>
                  <span className="text-textMuted text-[9px] font-mono leading-none border border-border/40 bg-white/5 px-2.5 py-1.5 rounded-[2px] self-start md:self-auto font-medium tracking-widest">
                    {item.year}
                  </span>
                </div>

                <ul className="space-y-2 pt-4 border-t border-border/10">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-textDim text-xs md:text-sm leading-relaxed flex gap-2.5 font-light">
                      <span className="text-textMuted/50 font-mono text-[9px] mt-1 select-none">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a 
                    href={item.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-textDim hover:text-white text-[9px] font-bold uppercase tracking-widest transition-colors pt-2"
                  >
                    <ExternalLink size={11} className="text-white opacity-60" />
                    {item.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Expandable Remaining Experiences */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 overflow-hidden"
              >
                {remainingExperience.map((item, index) => (
                  <motion.div
                    key={item.company + '-' + item.role}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group pt-4"
                  >
                    {/* Timeline bubble node */}
                    <div className="absolute -left-[31px] top-6 w-2 h-2 rounded-full bg-white border border-primary group-hover:scale-125 transition-transform" />

                    <div className="space-y-4 bg-white/[0.01] hover:bg-white/[0.02] border border-border/45 hover:border-border/80 rounded-[2px] p-6 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div className="space-y-1">
                          <h4 className="text-white text-lg font-medium tracking-tight">{item.role}</h4>
                          <span className="text-white font-medium text-xs uppercase tracking-widest opacity-80">{item.company}</span>
                        </div>
                        <span className="text-textMuted text-[9px] font-mono leading-none border border-border/40 bg-white/5 px-2.5 py-1.5 rounded-[2px] self-start md:self-auto font-medium tracking-widest">
                          {item.year}
                        </span>
                      </div>

                      <ul className="space-y-2 pt-4 border-t border-border/10">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-textDim text-xs md:text-sm leading-relaxed flex gap-2.5 font-light">
                            <span className="text-textMuted/50 font-mono text-[9px] mt-1 select-none">
                              {String(i + 1).padStart(2, '0')}.
                            </span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Accordion Expand Trigger */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-8 py-3.5 border border-border/45 hover:border-border bg-white/[0.01] hover:bg-white/[0.02] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all duration-300 shadow-[0_1px_3px_rgba(255,255,255,0.02)]"
          >
            {showAll ? (
              <>
                <Minus size={13} className="text-white opacity-85" />
                Collapse Career Timeline
              </>
            ) : (
              <>
                <Plus size={13} className="text-white opacity-85" />
                Review Full Career Timeline ({EXPERIENCE.length} Roles)
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;
