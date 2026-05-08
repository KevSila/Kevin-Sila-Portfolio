
import React from 'react';
import { Mail, MapPin, Linkedin, Github, ArrowUpRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-neutral-900/50 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Collaboration</h2>
              <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tight">Open for <br /> discussion.</h3>
            </div>
            <p className="text-textDim text-lg max-w-sm leading-relaxed">
              Interested in development, research, AI automation, and systems-focused collaborations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-widest opacity-50">Direct</h4>
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                  <Mail size={16} className="opacity-50" />
                  <span className="text-sm font-medium">{CONTACT_INFO.email}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                  <MessageSquare size={16} className="opacity-50" />
                  <span className="text-sm font-medium">WhatsApp</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-widest opacity-50">Presence</h4>
              <div className="space-y-4">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                  <Linkedin size={16} className="opacity-50" />
                  <span className="text-sm font-medium">LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                  <Github size={16} className="opacity-50" />
                  <span className="text-sm font-medium">GitHub</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-textDim text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Kevin Yumbya Sila</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <MapPin size={12} />
              {CONTACT_INFO.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
