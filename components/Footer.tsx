import React from 'react';
import { Icons, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-20 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Hablemos del <br/> Futuro.</h2>
                <p className="text-gray-400 max-w-md">
                    Ya sea para potenciar tu empresa con IA, discutir oportunidades en Dubai o colaboraciones de marca.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
                <a href={`mailto:contact@abrahamolvera.com`} className="text-2xl md:text-3xl text-white hover:text-blue-400 transition-colors font-display font-medium border-b border-gray-800 pb-2 hover:border-blue-400">
                    contact@abrahamolvera.com
                </a>
                <div className="flex gap-4 mt-4">
                    <a href={SOCIAL_LINKS.instagram} className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-gray-800 transition-all">
                        <Icons.Instagram />
                    </a>
                    <a href={SOCIAL_LINKS.tiktok} className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all">
                        <Icons.TikTok />
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
            <p>&copy; {new Date().getFullYear()} Abraham Olvera. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-gray-400">Privacidad</a>
                <a href="#" className="hover:text-gray-400">Términos</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
