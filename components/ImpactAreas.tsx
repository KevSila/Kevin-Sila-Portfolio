import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMPACT_AREAS } from '../constants.ts';
import { ShieldCheck, Network, Cpu, Compass, HardHat, Award } from 'lucide-react';

const ImpactAreas: React.FC = () => {
  const [activeTab, setActiveTab] = useState(IMPACT_AREAS[0].id);

  // Map icons to each of the 6 areas
  const getIcon = (id: string, size = 16) => {
    switch (id) {
      case 'research-evidence':
        return <ShieldCheck size={size} />;
      case 'ai-automation':
        return <Cpu size={size} />;
      case 'digital-transformation':
        return <Network size={size} />;
      case 'community-leadership':
        return <Compass size={size} />;
      case 'operations-bi':
        return <HardHat size={size} />;
      case 'strategy-docs':
        return <ClipboardListIcon size={size} />;
      default:
        return <Award size={size} />;
    }
  };

  const activeArea = IMPACT_AREAS.find((area) => area.id === activeTab) || IMPACT_AREAS[0];

  return (
    <section id="impact-areas" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.2em]">Expertise Core</h2>
            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Impact Areas</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            A comprehensive mapping of my multi-disciplinary capabilities and systems engineering engagements.
          </p>
        </div>

        {/* Tab Layout Container */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Navigation Tabs (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
              {IMPACT_AREAS.map((area) => {
                const isActive = area.id === activeTab;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`flex items-center gap-4 px-6 py-3.5 rounded-[2px] text-left transition-all duration-300 border ${
                      isActive
                        ? 'bg-white text-black border-white shadow-[0_4px_24px_rgba(255,255,255,0.05)]'
                        : 'bg-white/[0.01] text-textDim border-border/40 hover:text-white hover:border-border/80'
                    }`}
                  >
                    <div className={isActive ? 'text-black' : 'text-white opacity-80'}>
                      {getIcon(area.id, 14)}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest leading-none">
                      {area.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Panel (col-span-8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Description Banner - cleaner, higher layout balance */}
                <div className="bg-white/[0.01] border border-border/45 p-8 rounded-[2px] space-y-3">
                  <h4 className="text-textMuted text-[10px] font-semibold uppercase tracking-widest">Capability Scope</h4>
                  <p className="text-white text-lg md:text-xl font-light tracking-normal leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>

                {/* Cards List */}
                <div className="space-y-6">
                  {activeArea.cards.map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="p-8 border border-border/45 bg-white/[0.01] rounded-[2px] transition-all hover:bg-white/[0.02] hover:border-border/80 group"
                    >
                      <div className="space-y-4">
                        {/* Header Details */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-1.5">
                            <h5 className="text-white text-lg md:text-xl font-medium tracking-tight">{card.title}</h5>
                            {(card.role || card.organizations) && (
                              <p className="text-textDim text-xs font-light">
                                {card.role && <span className="text-white font-medium opacity-90">{card.role}</span>}
                                {card.organizations && <span className="opacity-75"> — {card.organizations}</span>}
                              </p>
                            )}
                          </div>
                          {card.year && (
                            <span className="text-textMuted text-[9px] font-mono whitespace-nowrap bg-white/5 border border-border/40 px-2.5 py-1 rounded-[2px]">
                              {card.year}
                            </span>
                          )}
                        </div>

                        {/* Details Description */}
                        {card.details && (
                          <p className="text-textDim text-sm leading-relaxed font-light opacity-95 pt-4 border-t border-border/10">
                            {card.details}
                          </p>
                        )}

                        {/* Special case for Strategy & Docs - display as bullet columns if it is the Strategy area */}
                        {activeArea.id === 'strategy-docs' && i === 0 && (
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 pt-4 border-t border-border/10">
                            {[
                              'Concept Notes', 'Project Proposals', 'Budgets', 'Work Plans',
                              'Monitoring Reports', 'Research Reports', 'Daily Field Reports',
                              'Technical Documentation', 'Training Materials', 'Digital Strategy Documents',
                              'Brand Style Guides', 'SOP process documentation'
                            ].map((docName) => (
                              <div key={docName} className="flex items-center gap-2 text-textDim text-xs font-light">
                                <span className="w-1 h-1 bg-white/40 rounded-full" />
                                <span>{docName}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tags list */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono tracking-wider text-textMuted border border-border/40 px-2 py-0.5 bg-white/[0.01] rounded-[2px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

// Internal ClipboardListIcon
const ClipboardListIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-clipboard-list"
  >
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M12 11h4"/>
    <path d="M12 16h4"/>
    <path d="M8 11h.01"/>
    <path d="M8 16h.01"/>
  </svg>
);

export default ImpactAreas;
