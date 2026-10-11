import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Zap, Building2, Workflow } from 'lucide-react';

const Silatech: React.FC = () => {
  const serviceTags = [
    'Business Systems',
    'Research Operations',
    'AI-assisted Workflows',
    'Operational Intelligence',
    'Digital Transformation'
  ];

  const pillars = [
    {
      title: 'Digital Capability',
      icon: <Zap size={14} />,
      desc: 'Building practical digital tools, connected workflows, and data structures around the way a team actually works.'
    },
    {
      title: 'Operational Logic',
      icon: <Workflow size={14} />,
      desc: 'Turning fragmented processes and records into clear workflows, controls, reporting, and decision visibility.'
    },
    {
      title: 'Institutional Readiness',
      icon: <Building2 size={14} />,
      desc: 'Supporting adoption through testing, documentation, training, handover, and evidence-based improvement.'
    }
  ];

  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="silatech" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Consulting Platform</h2>
            <h3 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">Silatech Growth Partners</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            My founder-led consulting platform for practical business systems, research operations, and digital transformation.
          </p>
        </div>

        {/* Feature Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <span className="text-[9px] font-mono tracking-widest text-textMuted bg-accentSoft border border-border/40 px-2.5 py-1 rounded-[2px] inline-block uppercase">
                Founder-led Consulting Platform
              </span>
              <p className="text-textLight text-lg md:text-xl font-light leading-relaxed">
                Silatech Growth Partners is my registered sole proprietorship, formalised in 2026 after I began delivering independent freelance work in 2024. It designs and implements business systems, AI-assisted workflows, operational reporting, and digital tools for SMEs, NGOs, and growing organisations.
              </p>
              <p className="text-textDim text-sm font-light leading-relaxed">
                The work starts with the operating problem, then connects workflow design, structured data, software, testing, documentation, and handover into a system people can realistically adopt.
              </p>
            </div>

            {/* Service Tags */}
            <div className="space-y-3 pt-2">
              <h4 className="text-textLight text-xs font-semibold uppercase tracking-[0.15em]">Strategic Capabilities</h4>
              <div className="flex flex-wrap gap-2">
                {serviceTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wider text-textLight bg-accentSoft border border-border/60 hover:border-accent/30 px-3.5 py-1 rounded-[2px] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleCTA}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all hover:bg-accent/90 active:scale-98 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
              >
                Partner with Silatech
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-secondary border border-border/40 rounded-[2px] space-y-2 hover:border-border transition-all"
              >
                <div className="flex items-center gap-3 text-textLight">
                  <div className="w-6.5 h-6.5 bg-accentSoft border border-border/60 flex items-center justify-center rounded-[2px] text-textLight">
                    {pillar.icon}
                  </div>
                  <h4 className="text-textLight text-xs font-semibold uppercase tracking-wider">{pillar.title}</h4>
                </div>
                <p className="text-textDim text-xs font-light leading-relaxed pl-9">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Silatech;
