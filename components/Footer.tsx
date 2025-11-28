import React from 'react';
import { Icons, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full h-full flex flex-col justify-center bg-[#020202] relative overflow-hidden">
      
      {/* Background Video/Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <span className="text-primary font-mono uppercase tracking-[0.3em] text-sm mb-8 animate-pulse">
            Start Your Journey
        </span>

        <h2 className="font-display font-black text-[12vw] leading-[0.8] text-white mb-12 tracking-tighter mix-blend-difference">
            HABLEMOS
        </h2>

        <div className="flex flex-col items-center gap-8 mb-16">
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light">
                Dubai es el futuro. La IA es el vehículo. <br/>
                <span className="text-white font-medium">¿Estás listo para subirte?</span>
            </p>
            <a 
                href="mailto:contact@abrahamolvera.com" 
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
            >
                <span className="relative z-10">Enviar Correo</span>
                <Icons.Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
        </div>

        <div className="flex gap-12">
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-2 duration-300">
               <Icons.Instagram size={28} />
             </a>
             <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-2 duration-300">
               <Icons.TikTok size={28} />
             </a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-2 duration-300">
               <Icons.Briefcase size={28} />
             </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between text-[10px] font-mono text-gray-700 uppercase tracking-widest">
          <span>&copy; 2024 Abraham Olvera</span>
          <span>Designed for the Future</span>
      </div>
    </footer>
  );
};

export default Footer;