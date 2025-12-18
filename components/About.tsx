
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';
import { Wrench, Code, Palette, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const designTools = ['Figma', 'Adobe XD', 'Canva', 'Photoshop', 'WordPress', 'Elementor'];
  const devSkills = ['Python', 'JavaScript', 'SQL', 'PHP', 'Laravel', 'React', 'Tailwind CSS'];

  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                The Story So Far
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Architecting Digital <span className="text-accent">Experiences</span>
              </h2>
              <p className="text-textDim text-lg leading-relaxed mb-6">
                With a dual background in Mathematics and Computer Science, I bridge the gap between logical architecture and creative visual storytelling. My approach is data-driven yet user-centric.
              </p>
              <p className="text-textDim leading-relaxed">
                Currently focused on building scalable web solutions and crafting cohesive brand identities. Beyond the screen, I lead community initiatives that leverage technology for social good, mentoring the next generation of digital leaders in Kenya.
              </p>
            </div>

            {/* Design Portfolio Callout */}
            <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl flex flex-col sm:flex-row items-center gap-6 group hover:bg-accent/10 transition-colors">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <Palette className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-white font-bold text-lg mb-1">Looking for my creative work?</h4>
                <p className="text-textDim text-sm mb-3">Explore my freelance digital media designs and brand assets.</p>
                <a 
                  href="https://kevsiladesigns.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent font-bold text-sm hover:underline group"
                >
                  Visit Design Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4 text-white font-bold">
                  <Wrench className="w-5 h-5 text-accent" />
                  <span>Design Toolkit</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {designTools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-white font-bold">
                  <Code className="w-5 h-5 text-accent" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {devSkills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chart Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="w-full aspect-square bg-primary/40 backdrop-blur-md rounded-3xl border border-slate-700 p-8 shadow-2xl">
              <h3 className="text-center text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm opacity-60">Skill Proficiency Index</h3>
              <ResponsiveContainer width="100%" height="85%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="none" />
                  <Radar
                    name="Kevin's Skills"
                    dataKey="A"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    fill="#0ea5e9"
                    fillOpacity={0.2}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #1e293b', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#0ea5e9', fontSize: '12px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-[10px] text-textDim uppercase font-bold tracking-tighter">Core Competency</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
