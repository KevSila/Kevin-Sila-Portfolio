import React from 'react';
import { motion } from 'motion/react';
import { BRANDING, CATEGORIZED_SKILLS, EDUCATION } from '../constants.ts';
import { Check, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Biography</h2>
            <h3 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">About Me</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            A systems coordinator and builder turning complexity into operational clarity.
          </p>
        </div>

        {/* Narrative & Identity Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography & Core Identity Bullets (col-span-8) */}
          <div className="lg:col-span-8 space-y-12">
            
            <div className="space-y-6 text-textDim text-sm md:text-base leading-relaxed opacity-95">
              <p className="text-textLight text-lg font-light tracking-normal leading-relaxed">
                {BRANDING.aboutText1}
              </p>
              <p className="font-light">
                {BRANDING.aboutText2}
              </p>
            </div>

            {/* Core Identity Bullet Points */}
            <div className="space-y-5">
              <h4 className="text-textLight text-[11px] font-semibold uppercase tracking-[0.2em]">Core Identity</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {BRANDING.coreIdentity.map((item) => (
                  <div key={item} className="flex items-center gap-3.5 p-4 bg-secondary border border-border/40 rounded-[2px] transition-colors hover:bg-accentSoft hover:border-border/80">
                    <div className="w-5 h-5 rounded-full bg-accentSoft flex items-center justify-center text-textLight/70">
                      <Check size={11} />
                    </div>
                    <span className="text-textLight text-xs font-medium tracking-wide opacity-90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Education Sidebar Panel (col-span-4) */}
          <div className="lg:col-span-4 space-y-6 bg-secondary p-8 border border-border/40 rounded-[2px]">
            <div className="flex items-center gap-3 text-textLight pb-4 border-b border-border/20">
              <GraduationCap size={16} className="opacity-80" />
              <h4 className="text-textLight text-xs font-semibold uppercase tracking-[0.2em]">Education</h4>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="space-y-2">
                  <span className="text-textMuted text-[9px] font-mono whitespace-nowrap bg-accentSoft px-2.5 py-0.5 rounded-[2px] border border-border/40">
                    {edu.year}
                  </span>
                  <h5 className="text-textLight text-sm font-medium leading-normal pt-1">{edu.degree}</h5>
                  <p className="text-textDim text-xs leading-snug font-light">{edu.institution}</p>
                  {edu.grade && (
                    <p className="text-xs text-textLight opacity-80 font-normal">{edu.grade}</p>
                  )}
                  {edu.description && (
                    <p className="text-textMuted text-[10.5px] leading-relaxed font-light">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Organized Skills Grid */}
        <div className="space-y-8 pt-12 border-t border-border/20">
          <div className="space-y-2">
            <h4 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.2em]">Competencies</h4>
            <h5 className="text-textLight text-xl md:text-2xl font-semibold tracking-tight">Structured Domain Skills</h5>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIZED_SKILLS.map((cat) => (
              <div key={cat.category} className="p-6 bg-secondary hover:bg-accentSoft border border-border/45 rounded-[2px] transition-all space-y-4">
                <span className="text-textLight text-[10px] font-semibold uppercase tracking-widest block border-b border-border/20 pb-2.5 opacity-90">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[10px] font-mono text-textDim px-2.5 py-1 bg-primary rounded-[2px] border border-border/40 hover:border-border hover:text-textLight transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
