import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Topics from './components/Topics';
import Ventures from './components/Ventures';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-display text-white">
      <div className="text-[15vw] font-bold leading-none tracking-tighter animate-pulse">
        {percentage}%
      </div>
      <div className="text-xs font-mono mt-4 uppercase tracking-widest text-gray-500">
        Loading Experience
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Inject JSON-LD Schema for SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abraham Olvera",
      "url": "https://abrahamolvera.com",
      "sameAs": [
        "https://instagram.com/soyabraham.ia",
        "https://tiktok.com/@soyabraham.ia"
      ],
      "jobTitle": "Entrepreneur & AI Expert",
      "worksFor": [
        {
          "@type": "Organization",
          "name": "The AIgnc"
        },
        {
          "@type": "Organization",
          "name": "Avant Media"
        }
      ],
      "description": "Abraham Olvera is an AI expert, investor, and serial entrepreneur based in Dubai, helping professionals reallocate and leverage AI technology."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (loading) return <Preloader onComplete={() => setLoading(false)} />;

  return (
    <div className="relative font-sans bg-background text-slate-50 selection:bg-primary selection:text-white">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] mix-blend-overlay bg-noise"></div>
      
      <Navigation />
      
      {/* Main Content with Margin Bottom for Footer Reveal */}
      <main className="relative z-10 bg-background mb-[100vh] md:mb-[80vh] shadow-[0_50px_100px_rgba(0,0,0,1)]">
        <Hero />
        <Ventures />
        <Topics />
      </main>

      {/* Fixed Footer Reveal */}
      <div className="fixed bottom-0 left-0 right-0 z-0 h-[100vh] md:h-[80vh]">
        <Footer />
      </div>

      <ChatWidget />
    </div>
  );
};

export default App;