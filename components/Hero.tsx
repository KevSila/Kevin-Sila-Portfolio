import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { BRANDING, METRICS, CONTACT_INFO } from '../constants.ts';
import { ArrowRight, Github, FileText } from 'lucide-react';

const Counter: React.FC<{ targetValue: string; start: boolean }> = ({ targetValue, start }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasPlus = targetValue.includes('+');
  const numberPart = parseInt(targetValue, 10);

  useEffect(() => {
    if (!start || isNaN(numberPart)) return;
    
    let isMounted = true;
    const duration = 1600; // 1.6 seconds for extremely smooth count
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isMounted) return;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for premium slow down at the end: easeOutQuart
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);
      
      setDisplayValue(Math.floor(easedProgress * numberPart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numberPart);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      isMounted = false;
    };
  }, [start, numberPart]);

  if (isNaN(numberPart)) {
    return <span>{targetValue}</span>;
  }

  return (
    <span>
      {displayValue}
      {hasPlus && '+'}
    </span>
  );
};

const Hero: React.FC = () => {
  const [isMetricsVisible, setIsMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMetricsVisible(true);
          observer.disconnect(); // Animate once only
        }
      },
      { threshold: 0.1 }
    );
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handlePrintCV = () => {
    window.print();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-10 relative overflow-hidden bg-primary/95">
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Core Profile Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-10"
          >
            {/* Title & Eyebrow */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-accent/5 border border-accent/10 whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="text-textDim text-[9px] font-medium uppercase tracking-[0.25em]">Available for Engagements</span>
              </div>
              <h1 className="text-textLight text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] select-none">
                {BRANDING.name}
              </h1>
              <p className="text-textDim text-xs md:text-sm font-light uppercase tracking-[0.18em] leading-relaxed max-w-4xl pt-1">
                {BRANDING.title}
              </p>
            </div>

            {/* Core Statements */}
            <div className="space-y-5 max-w-3xl">
              <h2 className="text-textLight text-xl md:text-2xl font-normal leading-relaxed tracking-tight">
                {BRANDING.heroStatement}
              </h2>
              <p className="text-textDim text-sm md:text-base leading-relaxed opacity-90 font-light">
                {BRANDING.heroDescription}
              </p>
            </div>

            {/* Domain Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'ICT & Website Support',
                'Research & Evidence Systems',
                'AI & Automation',
                'Data & Dashboards',
                'Digital Media & Campaigns',
                'Youth & Community Programs',
                'Strategy & Documentation'
              ].map((domain) => (
                <span 
                  key={domain} 
                  className="px-3.5 py-1.5 bg-secondary border border-border/80 rounded-[2px] text-textDim hover:border-accent hover:text-textLight transition-all text-[9.5px] font-medium uppercase tracking-widest"
                >
                  {domain}
                </span>
              ))}
            </div>

            {/* Actions CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#impact-areas" 
                onClick={(e) => handleClick(e, '#impact-areas')}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all hover:opacity-90 active:scale-98 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
              >
                View Impact Areas
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accentSoft hover:bg-accentSoft/80 text-textLight text-[10px] font-bold uppercase tracking-[0.2em] rounded-[2px] transition-all border border-border"
              >
                <Github size={13} />
                View GitHub
              </a>
            </div>

          </motion.div>
          
          {/* Visual abstract column (col-span-4) */}
          <div className="lg:col-span-4 hidden lg:flex justify-end pr-8">
            <div className="relative w-64 h-64 rounded-sm border border-border/80 flex items-center justify-center overflow-hidden bg-secondary/[0.1]">
              <div className="absolute inset-1 border border-dashed border-border/40 rounded-sm" />
              <div className="absolute w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" />
              <div className="text-center space-y-2 p-8 z-10 selection:bg-transparent">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-textLight/60 font-normal">SYSTEMS CLARITY</span>
                <p className="text-xs text-textMuted italic leading-relaxed opacity-80">"Systemic clarity follows the subtraction of the unnecessary."</p>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Metrics Strip */}
        <motion.div 
          ref={metricsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-6 pt-16 border-t border-border/30"
        >
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isMetricsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-2 p-5 bg-secondary border border-border/40 hover:border-border rounded-[2px] transition-all"
            >
              <div className="text-textLight text-3xl font-bold tracking-tight group-hover:text-accent transition-colors flex items-baseline gap-1">
                <Counter targetValue={metric.value} start={isMetricsVisible} />
              </div>
              <p className="text-textLight text-[10px] font-medium uppercase tracking-widest leading-snug">
                {metric.label}
              </p>
              <p className="text-textMuted text-[9px] font-light leading-normal opacity-80 block">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-0" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default Hero;
