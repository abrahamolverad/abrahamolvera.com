import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Topics from './components/Topics';
import Ventures from './components/Ventures';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  
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

  return (
    <div className="relative font-sans bg-background text-slate-50 selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise"></div>
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Ventures />
        <Topics />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;