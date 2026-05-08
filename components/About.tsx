
import React from 'react';
import { motion } from 'motion/react';
import { TECHNICAL_STACK, EDUCATION, CURRENTLY_EXPLORING } from '../constants.ts';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-primary px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-white text-3xl font-bold tracking-tight uppercase tracking-[0.2em] text-xs">Background</h2>
              <div className="space-y-6 text-textDim text-lg leading-relaxed">
                <p>
                  With a <span className="text-white">B.Sc. in Mathematics and Computer Science</span> from Kenyatta University, my approach to development is rooted in algorithmic logic and systems thinking.
                </p>
                <p>
                  I specialize in the implementation of data research and technical tools. Whether processing national health expenditures or building AI-driven productivity software, my focus is on <span className="text-white">building architectures that solve real-world operational problems.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest text-accent">Systems Development</h4>
                <p className="text-textDim text-xs leading-relaxed">Building scalable web applications with a focus on performant structure and clean logic.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest text-accent">AI & Automation</h4>
                <p className="text-textDim text-xs leading-relaxed">Developing custom pipelines and intelligent helpers to automate manual technical workflows.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest text-accent">Data Research</h4>
                <p className="text-textDim text-xs leading-relaxed">Coordinating large-scale data collection and financial disaggregation using industry standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest text-accent">Digital Operations</h4>
                <p className="text-textDim text-xs leading-relaxed">Building communication systems and search-optimized web platforms with measurable goals.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-white text-3xl font-bold tracking-tight uppercase tracking-[0.2em] text-xs">Technical Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Languages</h4>
                  <div className="flex flex-col gap-1">
                    {TECHNICAL_STACK.languages.map(lang => (
                      <span key={lang} className="text-textDim text-sm font-mono">{lang}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Frameworks</h4>
                  <div className="flex flex-col gap-1">
                    {TECHNICAL_STACK.frameworks.map(fw => (
                      <span key={fw} className="text-textDim text-sm font-mono">{fw}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Tools & Analytics</h4>
                  <div className="flex flex-col gap-1">
                    {TECHNICAL_STACK.dataResearch.map(tool => (
                      <span key={tool} className="text-textDim text-sm font-mono">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 space-y-12">
             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
                <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50 tracking-[0.2em]">Education</h3>
                <div className="space-y-8">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-2 border-l border-white/10 pl-4 py-1">
                      <p className="text-white font-medium text-sm leading-tight">{edu.degree}</p>
                      <p className="text-textDim text-xs">{edu.institution}</p>
                      <div className="flex justify-between items-center pt-1 font-mono text-[9px] opacity-70">
                        <span className="text-accent">{edu.grade}</span>
                        <span className="text-textDim">{edu.year.split(' ').pop()}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm space-y-4">
                <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50 tracking-[0.2em]">Currently Exploring</h3>
                <div className="flex flex-wrap gap-2">
                  {CURRENTLY_EXPLORING.map((item, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-textDim py-1 px-2 bg-white/5 rounded-full border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
             </div>

             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm space-y-4">
                <h3 className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50 tracking-[0.2em]">Philosophy</h3>
                <p className="text-textDim text-xs leading-relaxed font-serif italic opacity-80">
                  "Systemic clarity follows the subtraction of the unnecessary."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
