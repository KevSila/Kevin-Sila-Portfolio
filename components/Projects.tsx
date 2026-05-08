
import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-primary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Engineering</h2>
            <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Technical Projects</h3>
          </div>
          <p className="text-textDim text-xs max-w-xs leading-relaxed opacity-70">
            Internal systems, AI integrations, and structural implementations built with modern stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group tech-border rounded-sm bg-neutral-900/40 p-6 flex flex-col hover:bg-neutral-900/60 transition-colors"
            >
              <div className="mb-6 overflow-hidden rounded-sm h-48 bg-neutral-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-white text-xl font-bold">{project.title}</h4>
                  <p className="text-textDim text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-textDim text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                {project.links.map(link => (
                  <a 
                    key={link.label} 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                  >
                    {link.type === 'github' ? <Github size={14} /> : <ExternalLink size={14} />}
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
