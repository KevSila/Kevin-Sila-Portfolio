import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList } from 'lucide-react';
import { RESEARCH_SYSTEM_CARDS } from '../constants.ts';

const Research: React.FC = () => {
  return (
    <section id="research-systems" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-white/[0.02] border border-border/45">
            <ClipboardList size={11} className="text-white opacity-80" />
            <span className="text-textDim text-[9px] font-medium uppercase tracking-[0.2em]">Scientific & Health Inquiries</span>
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Research Systems</h3>
          <p className="text-textDim text-sm md:text-base leading-relaxed font-light opacity-95">
            Leading field coordinators, managing nationwide digital survey implementations (CAPI/ODK), and streamlining complex administrative data collection.
          </p>
        </div>

        {/* Research Cards List */}
        <div className="space-y-12">
          {RESEARCH_SYSTEM_CARDS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-dashed border-border/45 p-8 hover:bg-white/[0.01] hover:border-border/80 transition-all rounded-[2px] space-y-6 bg-white/[0.005]"
            >
              {/* Header block with Role, Org & Year */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/10 pb-4">
                <div className="space-y-1.5">
                  <span className="text-white text-[10px] font-semibold uppercase tracking-widest block opacity-75">
                    {item.role}
                  </span>
                  <h4 className="text-white text-lg md:text-xl font-medium tracking-tight">{item.title}</h4>
                </div>
                <span className="text-textMuted text-[9px] font-mono font-medium bg-white/5 px-2.5 py-1 border border-border/45 rounded-[2px] inline-block self-start md:self-auto uppercase">
                  {item.year}
                </span>
              </div>

              {/* Research Scope & Impact columns */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h5 className="text-white text-[10px] font-semibold uppercase tracking-widest opacity-60">Systemic Scope</h5>
                  <p className="text-textDim text-xs md:text-sm leading-relaxed font-light opacity-95">
                    {item.scope}
                  </p>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-border/10 pt-4 md:pt-0 md:pl-6">
                  <h5 className="text-white text-[10px] font-semibold uppercase tracking-widest opacity-80">Field Impact</h5>
                  <p className="text-textDim text-xs md:text-sm leading-relaxed italic font-light opacity-95">
                    {item.impact}
                  </p>
                </div>
              </div>

              {/* Tools & Methods row */}
              <div className="space-y-3 pt-4 border-t border-border/10">
                <h5 className="text-textMuted text-[10px] font-semibold uppercase tracking-widest">Tools & Methods</h5>
                <div className="flex flex-wrap gap-2">
                  {item.toolsMethods.map((tool) => (
                    <span 
                      key={tool}
                      className="text-[9px] font-mono text-textLight bg-secondary px-2.5 py-1 border border-border/45 rounded-[2px] hover:border-border hover:bg-neutral-900 transition-all leading-none"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags block */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-border/5">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[8px] font-mono uppercase tracking-widest text-textMuted/70 px-2 py-0.5 rounded-[2px] bg-white/5 border border-border/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Research;
