import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
          
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Icon/Dot on Timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary p-6 rounded-xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-lg">{item.role}</span>
                </div>
                {item.company && <div className="text-accent text-sm font-medium mb-2">{item.company}</div>}
                <time className="block mb-3 text-xs font-medium uppercase text-textDim tracking-widest">
                  {item.year}
                </time>
                <ul className="list-disc list-outside pl-4 space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm">{desc}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;