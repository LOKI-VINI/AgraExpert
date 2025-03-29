
import React from 'react';
import { Cloud, Sun, Zap } from 'lucide-react';
import { translations } from '@/lib/translations';

interface SkyCastHeroProps {
  language: string;
}

const SkyCastHero: React.FC<SkyCastHeroProps> = ({ language }) => {
  const t = translations[language];
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-agro-50/80 to-white/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-agro-100 border border-agro-200 text-agro-700 text-sm font-medium mb-6 animate-fade-in shadow-sm">
            <Cloud className="w-5 h-5 mr-2" />
            <Sun className="w-5 h-5 mr-2" />
            <span className="font-bold text-lg">SkyCast</span>
            <Zap className="w-5 h-5 ml-2" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Real-Time Weather Insights for Smarter Farming
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
            Get accurate forecasts and timely alerts to plan your agricultural activities with confidence
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkyCastHero;
