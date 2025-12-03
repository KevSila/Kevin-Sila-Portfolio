import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
          
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Icon/Dot on Timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mt-1 md:mt-0">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary p-6 rounded-xl border border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-slate-600">
                <div className="flex flex-col mb-3">
                  <span className="font-bold text-white text-lg leading-tight">{item.role}</span>
                  {item.company && <span className="text-accent text-sm font-medium mt-1">{item.company}</span>}
                </div>
                
                <time className="block mb-4 text-xs font-medium uppercase text-textDim tracking-widest bg-slate-800/50 w-fit px-2 py-1 rounded">
                  {item.year}
                </time>
                
                <ul className="list-disc list-outside pl-4 space-y-2 mb-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed">{desc}</li>
                  ))}
                </ul>

                {item.image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-slate-700/50 group-hover:border-accent/30 transition-colors">
                    <img 
                      src={item.image} 
                      alt={`Highlight from ${item.company}`} 
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;