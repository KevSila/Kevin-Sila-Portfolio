import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-primary to-primary pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-accent text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for global collaborations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Developer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">
              Media Strategist
            </span>
          </h1>
          
          <p className="text-lg text-textDim max-w-lg leading-relaxed">
            I thrive at the intersection of technology, leadership, and innovation. 
            Based in Nairobi, I leverage data and code to drive impactful change for brands and communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-accent hover:bg-accentHover text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual/Image Area */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto group">
             {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-slate-700 rounded-3xl transform rotate-6 translate-x-4 translate-y-4 transition-transform group-hover:rotate-3 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
                alt="Kevin Sila Workspace" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                 <p className="text-white font-bold text-xl">Kevin Yumbya Sila</p>
                 <p className="text-accent font-medium">Nairobi Based Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;