import React from 'react';
import { Mail, MapPin, Linkedin, Github, ArrowUpRight, MessageSquare, BookOpen } from 'lucide-react';
import { CONTACT_INFO } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-neutral-900/10 px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Pitch column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.25em]">Collaboration</h2>
              <h3 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Open for <br /> Partnership.
              </h3>
            </div>
            <p className="text-textDim text-sm md:text-base max-w-md leading-relaxed opacity-95 font-light">
              Open for collaboration in research systems, AI automation, digital transformation, data workflows, operations intelligence, and community-centered technology.
            </p>
          </div>

          {/* Links columns */}
          <div className="grid sm:grid-cols-2 gap-12">
            
            {/* Direct contact info */}
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">Communications</h4>
              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center gap-3 text-white hover:text-white transition-colors group"
                >
                  <Mail size={13} className="text-white opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-mono font-medium tracking-tight text-white/90 group-hover:text-white">{CONTACT_INFO.email}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>
                
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="flex items-center gap-3 text-white hover:text-white transition-colors group"
                >
                  <MessageSquare size={13} className="text-white opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white">WhatsApp Messages</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>

                <div className="flex items-center gap-3 text-textMuted text-[10.5px] font-mono leading-none pt-2">
                  <MapPin size={13} className="text-white opacity-40" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Platform links */}
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">Network Handles</h4>
              <div className="space-y-3.5">
                <a 
                  href={CONTACT_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-textDim hover:text-white transition-colors group"
                >
                  <Linkedin size={13} className="opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-medium text-white/90 group-hover:text-white">LinkedIn Profile</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>

                <a 
                  href={CONTACT_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-textDim hover:text-white transition-colors group"
                >
                  <Github size={13} className="opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-medium text-white/90 group-hover:text-white font-mono">github/KevSila</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>

                <a 
                  href={CONTACT_INFO.authorHub} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-textDim hover:text-white transition-colors group"
                >
                  <BookOpen size={13} className="opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-medium text-white/90 group-hover:text-white">Author Hub</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>

                <a 
                  href={CONTACT_INFO.designPortfolio} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-textDim hover:text-white transition-colors group"
                >
                  <BookOpen size={13} className="opacity-60 group-hover:opacity-100" />
                  <span className="text-xs font-medium text-white/90 group-hover:text-white">Design Portfolio</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Brand Bottom Footer block */}
        <div className="mt-24 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-textMuted text-[10px] font-mono uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Kevin Yumbya Sila — All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="text-white/60 font-semibold text-[9px]">Systems Builder</span>
            <span className="opacity-30">|</span>
            <span className="text-white/40 text-[9px]">Nairobi, Kenya</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
