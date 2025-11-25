import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Cinematic Background Blurs */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
            
            {/* Status Pill */}
            <div className="mb-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Based in Dubai</span>
                </div>
            </div>

            {/* Main Title - Massive Typography */}
            <h1 className="font-display font-extrabold text-[12vw] leading-[0.8] tracking-tighter text-white mix-blend-difference mb-8">
                FUTURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]">
                    ARCHITECT
                </span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light mb-12 leading-relaxed">
                Building the next generation of <span className="text-white font-medium">AI-first companies</span>. 
                Helping you navigate the digital evolution from Dubai to the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                <a 
                    href="#ventures" 
                    className="flex-1 group relative overflow-hidden rounded-full bg-white text-black px-8 py-4 font-bold transition-transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                    <span>My Ventures</span>
                    <Icons.TrendingUp size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                    href="#contact" 
                    className="flex-1 rounded-full border border-white/20 bg-transparent px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 text-center backdrop-blur-sm"
                >
                    Contact Me
                </a>
            </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block text-xs font-mono text-gray-600">
          <p>SCROLL TO EXPLORE</p>
          <div className="h-12 w-px bg-gray-800 mt-4 mx-auto"></div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block">
           <div className="w-32 h-32 rounded-full border border-gray-800 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                  <text className="text-[10px] uppercase font-bold tracking-widest fill-gray-500">
                      <textPath href="#curve">
                          Abraham Olvera • AI • Innovation •
                      </textPath>
                  </text>
              </svg>
           </div>
      </div>
    </section>
  );
};

export default Hero;