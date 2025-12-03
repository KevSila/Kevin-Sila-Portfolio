import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, FileText, Layout } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'figma': return <Layout className="w-4 h-4" />;
      case 'doc': return <FileText className="w-4 h-4" />;
      case 'live': return <ExternalLink className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getButtonClass = (type: string) => {
    switch (type) {
      case 'github': return 'bg-slate-800 text-white hover:bg-slate-700';
      case 'figma': return 'bg-purple-900/30 text-purple-200 border-purple-800 hover:bg-purple-900/50';
      case 'doc': return 'bg-blue-900/30 text-blue-200 border-blue-800 hover:bg-blue-900/50';
      default: return 'bg-primary text-slate-300 hover:text-white hover:bg-slate-700';
    }
  };

  return (
    <section id="projects" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-textDim max-w-xl text-lg">
              A selection of my work in web development, system architecture, data analytics, and published literature.
            </p>
          </div>
          <a href="https://github.com/kevsila" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white flex items-center gap-2 transition-colors">
            View GitHub Profile <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col h-full bg-secondary rounded-2xl border border-slate-700 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-xs font-bold text-accent uppercase tracking-wider border border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-textDim mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/50 border border-slate-700 rounded-md text-[10px] font-medium text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50 mt-auto">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border border-transparent transition-all ${getButtonClass(link.type)}`}
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