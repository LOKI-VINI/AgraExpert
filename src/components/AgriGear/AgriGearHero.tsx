
import React from 'react';
import { translations } from '@/lib/translations';

interface AgriGearHeroProps {
  language: string;
}

const AgriGearHero: React.FC<AgriGearHeroProps> = ({ language }) => {
  // Ensure we use a valid language or fallback to English
  const validLanguage = translations[language] ? language : 'en';
  const t = translations[validLanguage];
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627577274043-74294e57f8dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-agro-50/80 to-white/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-agro-100 border border-agro-200 text-agro-700 text-sm font-medium mb-4 animate-fade-in">
            AgriGear
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {t.agrigearHeroTitle}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
            {t.agrigearHeroDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgriGearHero;
