import React, { useState, useEffect } from 'react';
import { Icons, SOCIAL_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className={`pointer-events-auto transition-all duration-500 ease-out border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-100' 
          : 'bg-transparent border-transparent scale-105'
      }`}>
        {/* Logo Icon Only */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="cursor-pointer group relative"
        >
          <div className="w-10 h-10 bg-white text-black font-display font-bold text-xl flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            A
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
            {['Expertise', 'Ventures', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
                >
                    {item}
                </button>
            ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Icons.Instagram size={18} />
             </a>
             <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Icons.TikTok size={18} />
             </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;