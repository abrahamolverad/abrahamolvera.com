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
                    <a href={venture.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <div className="w-full h-full border border-white/10 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-white/20 bg-[#080808]">
                            
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${venture.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            {/* Text Content */}
                            <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <span className="font-mono text-xs border border-white/20 px-3 py-1 rounded-full text-gray-300 backdrop-blur-md">0{index + 1}</span>
                                    <h3 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-8 mb-6 leading-none text-white">
                                        {venture.name}
                                    </h3>
                                    <p className="text-lg md:text-xl leading-relaxed max-w-md text-gray-400">
                                        {venture.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-8">
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                                        venture.status === 'Active' ? 'bg-white text-black' : 'bg-white/10 text-white'
                                    }`}>
                                        {venture.status === 'Active' ? 'Live Now' : venture.status}
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white hover:text-black text-white">
                                        <Icons.TrendingUp size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Visual/Mockup Area */}
                            <div className="relative flex-1 overflow-hidden flex items-center justify-center p-8 bg-[#050505]">
                                 {/* Custom Visuals based on ID */}
                                 {venture.id === 'rok-ai' ? (
                                    <div className="w-full max-w-[450px] aspect-[16/10] bg-[#0c0c0e] rounded-lg border border-[#333] shadow-2xl flex flex-col overflow-hidden relative group-hover:transform group-hover:scale-105 transition-transform duration-700">
                                        {/* Mockup Header - IBKR Style */}
                                        <div className="h-6 bg-[#1e1e20] border-b border-[#333] flex items-center px-2 justify-between">
                                            <div className="text-[9px] text-gray-400 font-mono font-bold">TWS (Mosaic) - ROK-AI PORTFOLIO</div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                                <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1 flex text-[9px] font-mono text-gray-300">
                                            {/* Ticker List */}
                                            <div className="w-1/4 border-r border-[#333] bg-[#111] flex flex-col">
                                                <div className="p-2 border-b border-[#333] bg-[#1a1a1a] text-xs font-bold text-white">Watchlist</div>
                                                <div className="p-1 flex justify-between bg-[#1f1f23] border-b border-[#333]"><span className="text-purple-400">NVDA</span> <span className="text-green-500">+3.2%</span></div>
                                                <div className="p-1 flex justify-between border-b border-[#333]"><span className="text-purple-400">TSLA</span> <span className="text-red-500">-1.1%</span></div>
                                                <div className="p-1 flex justify-between border-b border-[#333]"><span className="text-purple-400">AMD</span> <span className="text-green-500">+0.8%</span></div>
                                                <div className="p-1 flex justify-between border-b border-[#333]"><span className="text-purple-400">PLTR</span> <span className="text-green-500">+5.4%</span></div>
                                            </div>
                                            
                                            {/* Main Chart Area */}
                                            <div className="flex-1 flex flex-col bg-[#0c0c0e]">
                                                <div className="h-1/2 border-b border-[#333] p-2 relative">
                                                    <div className="absolute top-2 left-2 z-10">
                                                        <div className="text-white font-bold text-lg">SPY <span className="text-xs font-normal text-gray-400">SPDR S&P 500</span></div>
                                                        <div className="text-green-500 text-sm">445.20 ▲ 1.2%</div>
                                                    </div>
                                                    {/* Chart Visual */}
                                                    <svg className="absolute inset-0 w-full h-full opacity-80" preserveAspectRatio="none">
                                                         <defs>
                                                            <linearGradient id="gradMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
                                                                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
                                                                <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                        <path d="M0 80 L20 78 L40 60 L60 65 L80 40 L100 50 L120 30 L140 35 L160 15 L180 20 L200 5 L220 10 L240 0" 
                                                            fill="none" stroke="#a855f7" strokeWidth="1.5" />
                                                        <path d="M0 80 L20 78 L40 60 L60 65 L80 40 L100 50 L120 30 L140 35 L160 15 L180 20 L200 5 L220 10 L240 0 V 150 H 0 Z" 
                                                            fill="url(#gradMetallic)" />
                                                    </svg>
                                                    <div className="absolute bottom-2 right-2 flex gap-1">
                                                        <div className="px-1 bg-purple-900/50 rounded border border-purple-500/30">1D</div>
                                                        <div className="px-1 bg-[#222] rounded">1W</div>
                                                    </div>
                                                </div>
                                                
                                                {/* PnL and Stats */}
                                                <div className="flex-1 p-2 grid grid-cols-2 gap-2">
                                                    <div className="bg-[#111] border border-[#333] p-2 rounded">
                                                        <div className="text-gray-500 text-[8px] uppercase">Unrealized PnL</div>
                                                        <div className="text-green-500 font-bold text-sm">+$12,450.00</div>
                                                    </div>
                                                    <div className="bg-[#111] border border-[#333] p-2 rounded">
                                                        <div className="text-gray-500 text-[8px] uppercase">Daily PnL</div>
                                                        <div className="text-green-500 font-bold text-sm">+$890.20</div>
                                                    </div>
                                                    <div className="col-span-2 bg-[#111] border border-[#333] p-2 rounded flex justify-between items-center">
                                                        <div>
                                                            <div className="text-gray-500 text-[8px]">Buying Power</div>
                                                            <div className="text-white font-bold">$140,200.00</div>
                                                        </div>
                                                        <div className="text-purple-400 text-xs">ROK-AI BOT ACTIVE ●</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 ) : venture.id === 'the-aignc' ? (
                                    // The AIgnc Visual - Intimidating n8n Workflow
                                    <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none"></div>
                                        
                                        {/* n8n Style Workflow SVG */}
                                        <svg width="340" height="240" viewBox="0 0 340 240" className="drop-shadow-2xl">
                                            <defs>
                                                <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                                                    <polygon points="0 0, 6 2, 0 4" fill="#64748b" />
                                                </marker>
                                            </defs>
                                            
                                            {/* Connection Lines (Bezier Curves) */}
                                            {/* Trigger -> Router */}
                                            <path d="M60 120 C 90 120, 90 120, 110 120" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                            
                                            {/* Router -> AI */}
                                            <path d="M150 120 C 170 120, 170 80, 190 80" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                            
                                            {/* Router -> DB */}
                                            <path d="M150 120 C 170 120, 170 160, 190 160" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                            
                                            {/* AI -> End */}
                                            <path d="M230 80 C 250 80, 250 100, 270 110" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                            
                                            {/* DB -> End */}
                                            <path d="M230 160 C 250 160, 250 130, 270 130" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />

                                            {/* Nodes */}
                                            
                                            {/* Trigger Node */}
                                            <g transform="translate(20, 100)">
                                                <rect width="40" height="40" rx="10" fill="#f59e0b" stroke="#fff" strokeWidth="1" strokeOpacity="0.1" />
                                                <path d="M20 12 L28 20 L20 28 M12 20 L28 20" stroke="white" strokeWidth="2" transform="scale(0.8) translate(5,5)" />
                                            </g>
                                            
                                            {/* Router Node (Switch) */}
                                            <g transform="translate(110, 100)">
                                                <rect width="40" height="40" rx="10" fill="#3b82f6" stroke="#fff" strokeWidth="1" strokeOpacity="0.1" />
                                                <circle cx="20" cy="20" r="4" fill="white" />
                                                <circle cx="28" cy="12" r="2" fill="white" opacity="0.5" />
                                                <circle cx="28" cy="28" r="2" fill="white" opacity="0.5" />
                                            </g>
                                            
                                            {/* OpenAI Node */}
                                            <g transform="translate(190, 60)">
                                                <rect width="40" height="40" rx="10" fill="#10b981" stroke="#fff" strokeWidth="1" strokeOpacity="0.1" />
                                                <path d="M14 14 H26 V26 H14 Z" stroke="white" strokeWidth="2" fill="none" />
                                                <text x="20" y="36" textAnchor="middle" fontSize="6" fill="white" fontFamily="monospace" fontWeight="bold">LLM</text>
                                            </g>

                                            {/* Database Node */}
                                            <g transform="translate(190, 140)">
                                                <rect width="40" height="40" rx="10" fill="#8b5cf6" stroke="#fff" strokeWidth="1" strokeOpacity="0.1" />
                                                <path d="M12 14 C12 11, 28 11, 28 14 V26 C28 29, 12 29, 12 26 Z" stroke="white" strokeWidth="2" fill="none" />
                                                <path d="M12 20 C12 23, 28 23, 28 20" stroke="white" strokeWidth="2" fill="none" />
                                            </g>
                                            
                                            {/* Output Node */}
                                            <g transform="translate(270, 100)">
                                                <rect width="40" height="40" rx="10" fill="#ef4444" stroke="#fff" strokeWidth="1" strokeOpacity="0.1" />
                                                <path d="M20 12 V28 M12 20 H28" stroke="white" strokeWidth="2" transform="rotate(45 20 20)" />
                                            </g>
                                            
                                            {/* Floating Labels */}
                                            <text x="20" y="90" fontSize="8" fill="#94a3b8" fontFamily="monospace">WEBHOOK</text>
                                            <text x="190" y="50" fontSize="8" fill="#94a3b8" fontFamily="monospace">GENERATE</text>
                                        </svg>
                                    </div>
                                 ) : (
                                    // Avant Mediax Visual - Dark Mode, Social & Design Icons
                                    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                                        
                                        {/* Floating Icons Background */}
                                        <div className="absolute top-4 left-0 animate-float text-white/20">
                                            <Icons.Instagram size={32} />
                                        </div>
                                        <div className="absolute top-10 right-4 animate-float text-white/20" style={{ animationDelay: '1s' }}>
                                            <Icons.TikTok size={28} />
                                        </div>
                                        <div className="absolute bottom-10 left-4 animate-float text-white/20" style={{ animationDelay: '2s' }}>
                                            <Icons.PenTool size={30} />
                                        </div>
                                        <div className="absolute bottom-6 right-8 animate-float text-white/20" style={{ animationDelay: '1.5s' }}>
                                            <Icons.Image size={30} />
                                        </div>
                                        <div className="absolute top-1/2 left-4 animate-float text-white/20" style={{ animationDelay: '0.5s' }}>
                                            <Icons.Layers size={24} />
                                        </div>

                                        {/* Central Phone Mockup */}
                                        <div className="relative z-10 w-32 h-56 border-2 border-white/20 bg-black rounded-[2rem] shadow-2xl flex flex-col items-center p-2 group-hover:scale-105 transition-transform duration-500 hover:border-white/50">
                                            {/* Phone Notch */}
                                            <div className="w-12 h-4 bg-black border-b border-white/10 rounded-b-lg absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                                            
                                            {/* Screen Content */}
                                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0a0a0a] flex flex-col pt-6 relative">
                                                {/* Header */}
                                                <div className="flex items-center justify-between px-3 mb-2">
                                                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                                    <div className="text-[6px] font-mono text-white/50">AVANT.MEDIAX</div>
                                                </div>

                                                {/* Profile Area */}
                                                <div className="flex flex-col items-center mb-4">
                                                     <div className="w-10 h-10 rounded-full border border-white/20 bg-gradient-to-tr from-gray-800 to-black mb-2"></div>
                                                     <div className="w-16 h-2 bg-white/20 rounded-full mb-1"></div>
                                                     <div className="w-10 h-1.5 bg-white/10 rounded-full"></div>
                                                </div>

                                                {/* Grid */}
                                                <div className="grid grid-cols-2 gap-1 px-2">
                                                    <div className="aspect-square bg-white/5 rounded-md hover:bg-white/10 transition-colors"></div>
                                                    <div className="aspect-square bg-white/5 rounded-md hover:bg-white/10 transition-colors"></div>
                                                    <div className="aspect-square bg-white/5 rounded-md hover:bg-white/10 transition-colors"></div>
                                                    <div className="aspect-square bg-white/5 rounded-md hover:bg-white/10 transition-colors"></div>
                                                </div>

                                                {/* Floating Action Button */}
                                                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                                    <Icons.Send size={12} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 group-hover:bg-white/10 transition-colors duration-700"></div>
                                    </div>
                                 )}
                            </div>
                        </div>
                    </a>
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