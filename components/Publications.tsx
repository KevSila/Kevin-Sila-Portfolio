
import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { PUBLICATIONS } from '../constants.ts';

const Publications: React.FC = () => {
  return (
    <section className="py-24 bg-primary px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-20 text-center">
          <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Publications</h2>
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Writing & Philosophy</h3>
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
              transition={{ delay: index * 0.1 }}
              className="group tech-border p-8 block hover:bg-neutral-900/40 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-sm group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <BookOpen size={20} />
                  </div>
                  <ArrowRight size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{pub.category}</span>
                  <h4 className="text-white text-xl font-bold">{pub.title}</h4>
                  <p className="text-textDim text-sm leading-relaxed">
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
