import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for global collaborations
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Developer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Media Strategist
            </span>
          </h1>
          
          <p className="text-lg text-textDim max-w-lg">
            I thrive at the intersection of technology, leadership, and innovation. 
            Based in Nairobi, leveraging data and code to drive impactful change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accentHover text-white font-medium transition-all transform hover:scale-105"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary border border-slate-700 hover:border-slate-500 text-textLight font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual/Image Area */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
             {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-slate-700 rounded-2xl transform rotate-6 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Kevin Sila Workspace" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6">
                 <p className="text-white font-bold">Kevin Yumbya Sila</p>
                 <p className="text-accent text-sm">Nairobi Based Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;