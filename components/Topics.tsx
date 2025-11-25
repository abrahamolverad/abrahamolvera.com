import React from 'react';
import { TOPICS, Icons } from '../constants';

const Topics: React.FC = () => {
  return (
    <section id="topics" className="py-32 bg-background relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display font-bold text-4xl mb-16 text-gray-500 uppercase tracking-widest text-sm">Expertise & Focus</h2>
        
        <div className="space-y-4">
          {TOPICS.map((topic, index) => (
            <div 
              key={topic.id}
              className="group relative border-b border-white/10 hover:border-white/30 transition-colors py-10 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-8">
                      <span className="font-mono text-gray-600 text-lg">0{index + 1}</span>
                      <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-300 group-hover:text-white group-hover:pl-4 transition-all duration-300">
                        {topic.title}
                      </h3>
                  </div>
                  
                  <div className="flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-10 group-hover:translate-x-0">
                      <p className="text-gray-400 max-w-xs text-sm text-right hidden md:block">
                          {topic.description}
                      </p>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                          <Icons.TrendingUp className="rotate-45" size={20} />
                      </div>
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