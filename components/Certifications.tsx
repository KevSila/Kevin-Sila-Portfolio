
import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants.ts';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-primary px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Certificates</h2>
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Technical Credentials</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 tech-border rounded-sm flex items-start gap-4 hover:bg-neutral-900/40 transition-colors"
            >
              <div className="p-2 bg-white/5 rounded-sm text-accent">
                <Award size={18} />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-white text-sm font-bold leading-tight">{cert.title}</h4>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-textDim text-[10px] font-bold uppercase tracking-widest">{cert.issuer}</span>
                  <span className="text-textDim text-[10px] font-mono">{cert.year}</span>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-[9px] font-bold uppercase tracking-widest pt-2 hover:opacity-70"
                  >
                    Verify <ExternalLink size={10} />
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
