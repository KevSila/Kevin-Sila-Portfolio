import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Data-Driven Professional with a Passion for <span className="text-accent">Impact</span>
            </h2>
            <p className="text-textDim leading-relaxed">
              I am a professional with a strong background in Mathematics and Computer Science. 
              My expertise spans data analysis, digital media strategy, UX/UI design, and operational management.
            </p>
            <p className="text-textDim leading-relaxed">
              Passionate about empowering communities, I use digital tools to create meaningful solutions. 
              Whether it's building a Laravel-based staff portal or leading a national youth advocacy program, 
              I bring a blend of technical precision and strategic vision to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-primary rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white">5+</h3>
                <p className="text-sm text-textDim">Years Experience</p>
              </div>
              <div className="p-4 bg-primary rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white">20+</h3>
                <p className="text-sm text-textDim">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Chart Content */}
          <div className="w-full h-[400px] bg-primary rounded-2xl border border-slate-700 p-4 relative">
            <h3 className="text-center text-lg font-semibold text-white mb-2">Technical Proficiency</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="none" />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  fill="#0ea5e9"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#0ea5e9' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;