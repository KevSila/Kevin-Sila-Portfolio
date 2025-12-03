import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary border-t border-slate-700 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* CTA Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's build something <br />
              <span className="text-accent">great together.</span>
            </h2>
            <p className="text-textDim mb-8 max-w-md">
              Whether you have a project in mind, need a digital strategy audit, 
              or just want to chat about tech—I'm available.
            </p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" /> Say Hello
            </a>
          </div>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-textDim hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-textDim">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-textDim">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
               <h4 className="text-white font-semibold mb-4">Connect</h4>
               <div className="flex gap-4">
                 <a href={CONTACT_INFO.linkedin} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-textDim hover:bg-accent hover:text-white transition-all">
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a href={CONTACT_INFO.github} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-textDim hover:bg-accent hover:text-white transition-all">
                   <Github className="w-5 h-5" />
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kevin Yumbya Sila. All rights reserved. 🇰🇪
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
             <span>Empowering brands through technology.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;