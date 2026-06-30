import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, ClipboardCheck, Briefcase, FileSignature, CheckCircle2 } from 'lucide-react';

const Engagement: React.FC = () => {
  const models = [
    {
      title: 'Subcontracting',
      desc: 'Partnering with lead consultants, agencies, or research firms to execute specific project components.'
    },
    {
      title: 'Short & Long-term Consultancy',
      desc: 'Targeted support for field surveys, database setups, systems integration, or documentation sprints.'
    },
    {
      title: 'Part-time Retainers',
      desc: 'Ongoing fractional support (WordPress updates, campaigns monitoring, data cleaning, SEO management).'
    },
    {
      title: 'Program Co-facilitation',
      desc: 'Coordinating regional survey operations, training field teams, or leading youth community workshops.'
    }
  ];

  const compliance = [
    {
      title: 'Vendor-Ready Status',
      desc: 'Registered business entity basics, tax-compliant capacity, and active KRA PIN.'
    },
    {
      title: 'Professional Logistics',
      desc: 'Operates with dedicated professional workstations, communications setups, and secure cloud backups.'
    },
    {
      title: 'Institutional Experience',
      desc: 'Experienced working with national agencies (NSDCC), NGOs, research companies, and global institutions (UNAIDS).'
    },
    {
      title: 'Structured Governance',
      desc: 'Uses formal onboarding, written Service Level Agreements (SLAs), detailed timesheets, and professional itemized invoices.'
    }
  ];

  const handleContactScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="engagements" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Collaboration Model</h2>
            <h3 className="text-textLight text-3xl md:text-4xl font-semibold tracking-tight">Available For Engagements</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            Providing structured, compliant, and highly accountable contracting structures for organizations and lead consultants.
          </p>
        </div>

        {/* Info Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column: Engagement Models */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/10 pb-3">
              <Briefcase size={16} className="text-textLight" />
              <h4 className="text-textLight text-xs font-semibold uppercase tracking-[0.18em]">Flexible Engagement Models</h4>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {models.map((model, idx) => (
                <div 
                  key={model.title}
                  className="p-5 bg-secondary border border-border/40 rounded-[2px] space-y-2 hover:bg-accentSoft hover:border-border/80 transition-all duration-300"
                >
                  <h5 className="text-textLight text-sm font-semibold tracking-tight">{model.title}</h5>
                  <p className="text-textDim text-xs font-light leading-relaxed">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Procurement / Compliance */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/10 pb-3">
              <ClipboardCheck size={16} className="text-textLight" />
              <h4 className="text-textLight text-xs font-semibold uppercase tracking-[0.18em]">Procurement & Vendor Readiness</h4>
            </div>

            <div className="space-y-4">
              {compliance.map((item, idx) => (
                <div key={item.title} className="flex gap-4 p-4 bg-secondary border border-border/30 rounded-[2px] hover:border-border hover:bg-accentSoft transition-all">
                  <div className="mt-0.5 text-accent opacity-85">
                    <CheckCircle2 size={13} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-textLight text-xs font-semibold uppercase tracking-wider">{item.title}</h5>
                    <p className="text-textDim text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bar with CTA */}
        <div className="bg-secondary border border-border/40 rounded-[2px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-textLight text-base font-medium tracking-tight">Need to request a services scope or draft sub-contract?</h4>
            <p className="text-textDim text-xs font-light max-w-xl">
              I support structured vendor questionnaires, supply references, and generate customized project scopes aligned with institutional requirements.
            </p>
          </div>
          <button
            onClick={handleContactScroll}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] hover:bg-accent/90 active:scale-98 transition-all shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
          >
            Initiate Engagement Proposal
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Engagement;
