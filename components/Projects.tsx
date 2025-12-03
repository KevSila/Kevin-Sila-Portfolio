import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-textDim max-w-xl text-lg">
              A selection of my work in web development, system architecture, and digital strategy.
            </p>
          </div>
          <a href="https://github.com/kevsila" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white flex items-center gap-2 transition-colors">
            View all projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col h-full bg-secondary rounded-2xl border border-slate-700 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    {project.repo && (
                      <a href={project.repo} className="p-2 bg-primary rounded-full hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700" title="View Code">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="p-2 bg-primary rounded-full hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700" title="View Project">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-textDim mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/50 border border-slate-700 rounded-md text-xs font-medium text-slate-300">
                      {tech}
                    </span>
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