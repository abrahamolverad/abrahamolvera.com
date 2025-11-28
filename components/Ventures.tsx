import React, { useRef, useEffect, useState } from 'react';
import { VENTURES, Icons } from '../constants';

const Ventures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section hits top, 1 when section finishes
      const distance = height - windowHeight;
      const scrolled = -top;
      const progress = Math.min(Math.max(scrolled / distance, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reduced height from 400vh to 250vh for faster scrolling
  return (
    <section ref={sectionRef} id="ventures" className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center perspective-1000">
        
        {/* Section Header */}
        <div className="absolute top-12 left-6 md:left-20 z-20 transition-opacity duration-300" style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}>
           <h2 className="font-display font-bold text-4xl md:text-6xl text-white">PROYECTOS</h2>
           <p className="text-gray-400 mt-2 font-mono text-sm uppercase tracking-widest animate-pulse">Scroll to Explore &rarr;</p>
        </div>

        {/* Horizontal Container */}
        <div 
            ref={scrollRef}
            className="flex items-center gap-8 md:gap-16 px-[10vw] will-change-transform"
            style={{ 
                transform: `translateX(-${scrollProgress * 75}%)` // Faster movement ratio
            }}
        >
            {VENTURES.map((venture, index) => (
                <div 
                    key={venture.id}
                    className="relative flex-shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] group perspective-1000"
                >
                     {/* Card Content with 3D Rotate Effect on Hover */}
                    <div className="w-full h-full bg-[#080808] border border-white/10 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-white/20">
                        
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        {/* Text Content */}
                        <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-xs border border-white/20 px-3 py-1 rounded-full text-gray-300 backdrop-blur-md">0{index + 1}</span>
                                <h3 className="font-display font-bold text-4xl md:text-6xl mt-8 mb-6 text-white leading-none">
                                    {venture.name}
                                </h3>
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                                    {venture.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                                    venture.status === 'Active' ? 'bg-white text-black' : 'bg-white/10 text-white'
                                }`}>
                                    {venture.status === 'Active' ? 'Live Now' : venture.status}
                                </span>
                                <a href={venture.link || '#'} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                    <Icons.TrendingUp size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Image/Graphic Area */}
                        <div className="relative flex-1 bg-white/5 overflow-hidden flex items-center justify-center">
                             <div className={`absolute inset-0 bg-gradient-to-t ${venture.color} opacity-20 mix-blend-overlay`}></div>
                             
                             {/* Floating Icon */}
                             <div className="transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 text-white/10 group-hover:text-white/20 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                {index === 0 && <Icons.Mic size={200} />}
                                {index === 1 && <Icons.BrainCircuit size={200} />}
                                {index === 2 && <Icons.Sparkles size={200} />}
                             </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Call to Action Card */}
             <div className="relative flex-shrink-0 w-[85vw] md:w-[40vw] h-[60vh] md:h-[70vh] flex items-center justify-center bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                 <div className="text-center group-hover:scale-105 transition-transform duration-300">
                     <h3 className="font-display font-bold text-5xl text-white mb-6">¿Qué sigue?</h3>
                     <a href="#contact" className="inline-block border-b-2 border-primary text-2xl pb-2 text-gray-300 hover:text-white transition-colors">
                        Iniciemos un proyecto &rarr;
                     </a>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;