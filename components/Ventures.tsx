import React from 'react';
import { VENTURES, Icons } from '../constants';

const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-32 bg-surface relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
                <h2 className="font-display font-bold text-5xl md:text-7xl mb-4">Selected<br/>Works</h2>
                <div className="h-2 w-24 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-400 mt-6 md:mt-0 max-w-sm text-right">
                An ecosystem of companies bridging the gap between human creativity and artificial intelligence.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Main Large Card - The AIgnc */}
            <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                            <Icons.BrainCircuit className="text-blue-400" size={32} />
                        </div>
                        <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-4 py-2 rounded-full text-sm font-bold">Visit Site</a>
                    </div>
                    
                    <div>
                        <h3 className="font-display text-4xl font-bold mb-2">The AIgnc</h3>
                        <p className="text-gray-300 max-w-md">Global agency specializing in enterprise AI implementation and workflow automation.</p>
                    </div>
                </div>
            </div>

            {/* Tall Card - Rok-ai */}
            <div className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden bg-[#050505] border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
                <div className="absolute top-0 right-0 p-32 bg-purple-600/20 blur-[100px]"></div>

                <div className="relative z-10 p-10 h-full flex flex-col">
                    <div className="mb-auto">
                        <div className="p-3 w-fit bg-purple-500/10 rounded-xl mb-6">
                            <Icons.Mic className="text-purple-400" size={28} />
                        </div>
                        <h3 className="font-display text-4xl font-bold mb-4">Rok-ai</h3>
                        <div className="inline-block px-3 py-1 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase mb-6">Coming Soon</div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Unfiltered conversations about the singularity, digital evolution, and the future of humanity.
                        </p>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Latest Episode</p>
                                <p className="text-xs text-gray-500">Recording in progress...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Square Card - Avant Media */}
            <div className="md:col-span-1 group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black z-0"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                     <div className="p-3 w-fit bg-orange-500/10 rounded-xl">
                        <Icons.Sparkles className="text-orange-400" size={28} />
                    </div>
                    <div>
                        <h3 className="font-display text-3xl font-bold mb-2">Avant Media</h3>
                        <p className="text-gray-400 text-sm">High-impact media production house for the digital age.</p>
                    </div>
                </div>
            </div>

            {/* Square Card - Personal Branding */}
            <div className="md:col-span-1 group relative rounded-3xl overflow-hidden bg-white text-black border border-gray-200">
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <Icons.Instagram size={32} />
                        <Icons.TrendingUp size={32} />
                    </div>
                    <div>
                        <div className="text-5xl font-display font-extrabold mb-2">250K+</div>
                        <p className="font-medium opacity-80">Community across platforms</p>
                        <div className="flex gap-2 mt-4">
                             <a href="#" className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"><Icons.Instagram size={16}/></a>
                             <a href="#" className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"><Icons.TikTok size={16}/></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Ventures;