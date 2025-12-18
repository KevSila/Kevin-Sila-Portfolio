
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, FileText, Layout, Palette } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'figma': return <Layout className="w-4 h-4" />;
      case 'doc': return <FileText className="w-4 h-4" />;
      case 'live': return <ExternalLink className="w-4 h-4" />;
      case 'palette': return <Palette className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getButtonClass = (type: string) => {
    switch (type) {
      case 'github': return 'bg-slate-800 text-white hover:bg-slate-700';
      case 'figma': return 'bg-purple-900/30 text-purple-200 border-purple-800 hover:bg-purple-900/50';
      case 'doc': return 'bg-blue-900/30 text-blue-200 border-blue-800 hover:bg-blue-900/50';
      case 'palette': return 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/40';
      default: return 'bg-primary text-slate-300 hover:text-white hover:bg-slate-700';
    }
  };

  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
              My Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-textDim max-w-xl text-lg leading-relaxed">
              A comprehensive showcase of my work spanning web development, creative design, and strategic research.
            </p>
          </div>
          <a href="https://github.com/kevsila" target="_blank" rel="noopener noreferrer" className="group text-accent hover:text-white flex items-center gap-2 transition-all font-medium">
            Explore GitHub <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col h-full bg-secondary/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-lg rounded-lg text-[10px] font-bold text-accent uppercase tracking-wider border border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors tracking-tight">
                  {project.title}
                </h3>

                <p className="text-textDim mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-primary border border-slate-800 rounded text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-800 mt-auto">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-transparent transition-all shadow-sm active:scale-95 ${getButtonClass(link.type)}`}
                    >
                      {getIcon(link.type)}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
