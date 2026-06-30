import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { PUBLICATIONS } from '../constants.ts';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-primary px-6 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-20 text-center">
          <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.20em]">Publications</h2>
          <h2 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">Writing & Philosophy</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub, index) => (
            <motion.a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-border/45 p-8 block bg-secondary hover:border-border/80 hover:bg-accentSoft transition-colors rounded-[2px]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-accentSoft rounded-[2px] text-textLight opacity-80 group-hover:bg-accent group-hover:text-primary transition-colors">
                    <BookOpen size={16} />
                  </div>
                  <ArrowUpRight size={14} className="text-textLight opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-textLight text-[10px] font-semibold uppercase tracking-widest opacity-75">{pub.category}</span>
                  <h4 className="text-textLight text-lg font-medium tracking-tight">{pub.title}</h4>
                  <p className="text-textDim text-sm leading-relaxed font-light opacity-95">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
