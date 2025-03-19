
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];
  
  return (
    <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-15 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-agro-50/90 to-white/95 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-agro-100 border border-agro-200 text-agro-700 text-sm font-medium mb-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
            AgroXpert
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight animate-slide-up" style={{ animationDelay: '300ms' }}>
            {t.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '400ms' }}>
            {t.heroTagline}
          </p>
          
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 animate-slide-up" style={{ animationDelay: '500ms' }}>
            {t.heroDescription}
          </p>
          
          <div className="text-2xl md:text-3xl font-serif italic text-agro-700 mt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            "Revolutionizing agriculture with AgroXpert"
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center animate-slide-up" style={{ animationDelay: '700ms' }}>
            <Button size="lg" className="bg-agro-600 hover:bg-agro-700 text-white">
              {t.getStarted}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-agro-200 hover:bg-agro-50"
            >
              {t.learnMore}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="pt-16 max-w-md mx-auto flex justify-center">
            <div className="w-1/3 h-1 rounded-full bg-agro-200 animate-pulse-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
