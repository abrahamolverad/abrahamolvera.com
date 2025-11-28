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
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 pointer-events-none mix-blend-difference">
      <div className={`pointer-events-auto transition-all duration-700 ease-luxury px-8 py-3 rounded-full flex items-center gap-12 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border border-white/10' 
          : 'bg-transparent border border-transparent'
      }`}>
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="cursor-pointer font-display font-bold text-xl tracking-tighter text-white"
        >
          AO.
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'ventures', label: 'Proyectos' },
              { id: 'topics', label: 'Expertise' },
              { id: 'contact', label: 'Contacto' }
            ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-[0.2em]"
                >
                    {item.label}
                </button>
            ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 border-l border-white/20 pl-6">
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
               <Icons.Instagram size={18} />
             </a>
             <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
               <Icons.TikTok size={18} />
             </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;