
import React from 'react';
import { translations } from '@/lib/translations';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  // Make sure we have a valid translation, defaulting to English if necessary
  const t = translations[language] || translations['en'] || {};
  
  // Define fallback texts if translations are not available
  const fallbackTexts = {
    heroTitle: "Farming's Digital Revolution",
    heroTagline: "Smart Solutions for Modern Agriculture",
    heroDescription: "Leverage advanced technology to optimize your farming operations, increase yields, and achieve sustainable growth."
  };
  
  return (
    <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-agro-50/80 to-white/90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-agro-100 border border-agro-200 text-agro-700 text-sm font-medium mb-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
            AgroXpert
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight animate-slide-up" style={{ animationDelay: '300ms' }}>
            {t.heroTitle || fallbackTexts.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '400ms' }}>
            {t.heroTagline || fallbackTexts.heroTagline}
          </p>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 animate-slide-up" style={{ animationDelay: '500ms' }}>
            {t.heroDescription || fallbackTexts.heroDescription}
          </p>
          
          <div className="pt-16 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Agriculture field" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart farming" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="hidden md:block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Harvest" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="pt-12 max-w-md mx-auto flex justify-center">
            <div className="w-1/3 h-1 rounded-full bg-agro-200 animate-pulse-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
