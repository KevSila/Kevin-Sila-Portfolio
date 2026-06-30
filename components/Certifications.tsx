import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants.ts';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-primary px-6 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.20em]">Certificates</h2>
          <h3 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">Technical Credentials</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 border border-border/45 rounded-[2px] flex items-start gap-4 bg-secondary hover:bg-accentSoft hover:border-border/80 transition-all"
            >
              <div className="p-2.5 bg-accentSoft rounded-[2px] text-textLight opacity-70">
                <Award size={15} />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-textLight text-sm font-medium leading-normal">{cert.title}</h4>
                <div className="flex justify-between items-center pt-1 border-t border-border/30">
                  <span className="text-textDim text-[10px] font-medium uppercase tracking-wider opacity-90">{cert.issuer}</span>
                  <span className="text-textMuted text-[10px] font-mono">{cert.year}</span>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-textLight text-[9px] font-bold uppercase tracking-widest pt-1.5 hover:text-accent transition-colors"
                  >
                    Verify <ExternalLink size={9} />
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

export default Certifications;
