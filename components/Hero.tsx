
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none translate-y-1/4 -translate-x-1/4" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-accent text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-inner">
            <Sparkles className="w-4 h-4" />
            Empowering Digital Innovation
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            Build. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-sky-400">
              Strategize.
            </span>
            <br />
            Deliver.
          </h1>
          
          <p className="text-xl text-textDim max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Kevin Yumbya Sila — A Nairobi-based developer and media strategist transforming complex data into seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-accent hover:bg-accentHover text-white font-bold transition-all transform hover:scale-[1.03] shadow-xl shadow-accent/20 active:scale-95"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://kevsiladesigns.netlify.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-accent/40 text-white font-bold transition-all"
            >
              Design Portfolio
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 pt-6 opacity-60">
             <div className="text-center">
               <p className="text-white font-black text-2xl tracking-tighter">5+</p>
               <p className="text-[10px] uppercase font-bold text-textDim">Exp. Years</p>
             </div>
             <div className="h-8 w-px bg-slate-700"></div>
             <div className="text-center">
               <p className="text-white font-black text-2xl tracking-tighter">20+</p>
               <p className="text-[10px] uppercase font-bold text-textDim">Projects</p>
             </div>
             <div className="h-8 w-px bg-slate-700"></div>
             <div className="text-center">
               <p className="text-white font-black text-2xl tracking-tighter">100%</p>
               <p className="text-[10px] uppercase font-bold text-textDim">Commitment</p>
             </div>
          </div>
        </div>

        {/* Visual/Image Area */}
        <div className="relative group">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Animated Glow Backdrops */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative h-full w-full bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/50 transform transition-transform duration-700 group-hover:scale-[1.01] group-hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Kevin Sila" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              
              {/* Content Info Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-sm bg-primary/30 border-t border-slate-700/50">
                 <p className="text-white font-black text-2xl tracking-tight mb-1">Kevin Yumbya Sila</p>
                 <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                   <p className="text-accent font-bold text-sm tracking-widest uppercase">Lead Strategist & Dev</p>
                 </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-5 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform hidden sm:block">
               <p className="text-primary font-black text-lg leading-tight">Based in<br/><span className="text-accent">Nairobi, KE</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
