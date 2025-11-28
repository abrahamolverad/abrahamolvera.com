import React from 'react';
import { TOPICS, Icons } from '../constants';

const Topics: React.FC = () => {
  return (
    <section id="topics" className="py-40 bg-black relative z-20">
      <div className="container mx-auto px-6">
        <div className="mb-24 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-end">
             <h2 className="font-display font-bold text-5xl md:text-7xl text-white">
                AREAS DE<br/><span className="text-gray-500">EXPERTISE</span>
            </h2>
            <div className="flex items-center gap-2 text-gray-400 mt-8 md:mt-0">
                <Icons.BrainCircuit size={20} />
                <span className="font-mono text-sm uppercase tracking-widest">Knowledge Base</span>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {TOPICS.map((topic, index) => (
            <div 
              key={topic.id}
              className="group relative bg-[#0A0A0A] hover:bg-white hover:text-black transition-colors duration-500 ease-luxury rounded-2xl p-8 md:p-12 overflow-hidden border border-white/5"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                  <div className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-black/50 mb-4">0{index + 1}</span>
                      <h3 className="font-display font-bold text-4xl md:text-6xl mb-4">
                        {topic.title}
                      </h3>
                  </div>
                  <p className="max-w-md text-lg text-gray-400 group-hover:text-black/70 font-light leading-relaxed">
                      {topic.description}
                  </p>
                  
                  <div className="mt-8 md:mt-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <Icons.TrendingUp size={32} />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;