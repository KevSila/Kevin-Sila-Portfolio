import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-primary px-6 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/20 pb-8">
          <div className="space-y-3">
            <h2 className="text-textMuted text-[10px] font-medium uppercase tracking-[0.2em]">Engineering & Design</h2>
            <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Technical Projects</h3>
          </div>
          <p className="text-textDim text-xs md:text-sm max-w-sm leading-relaxed opacity-95 font-light">
            A showcase of production-ready web applications, automated logic layers, and exploratory data analytics repositories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-border/45 rounded-[2px] bg-white/[0.01] p-6 flex flex-col hover:bg-white/[0.02] hover:border-border/80 transition-all duration-300"
            >
              {/* Card Image banner */}
              <div className="mb-6 overflow-hidden rounded-[2px] h-48 bg-secondary/40 border border-border/45 relative select-none">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-55 group-hover:opacity-90 group-hover:scale-101 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded-[2px] border border-border/60 text-white text-[8px] font-mono font-medium uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Card Description */}
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-white text-lg font-medium tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-textDim text-xs md:text-sm leading-relaxed font-light opacity-95">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map(tech => (
                    <span 
                      key={tech} 
                      className="text-textDim text-[8px] font-mono font-medium uppercase tracking-widest px-2.5 py-1 bg-white/[0.02] rounded-[2px] border border-border/40 hover:border-border hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="flex items-center gap-5 mt-8 pt-4 border-t border-border/10">
                {project.links.map(link => (
                  <a 
                    key={link.label} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-textDim text-[10px] font-semibold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {link.type === 'github' ? <Github size={12} /> : <ExternalLink size={12} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
