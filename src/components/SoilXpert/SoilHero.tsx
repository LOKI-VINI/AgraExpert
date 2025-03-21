
import React from 'react';
import { translations } from '@/lib/translations';
import { Leaf, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SoilHeroProps {
  language: string;
}

const SoilHero: React.FC<SoilHeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            d="M0,0 Q50,100 100,0 V100 H0 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 text-white font-medium">
              <Leaf className="h-5 w-5" />
              <span>SoilXpert</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {t.soilxpertHeroTitle || "Unlock Your Soil's Potential with AI Insights"}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              {t.soilxpertHeroDescription || "Advanced soil testing, personalized crop recommendations, and yield prediction using AI-driven analysis."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-green-800 hover:bg-white/90">
                {t.getStarted || "Get Started"}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                {t.learnMore || "Learn More"}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="p-4">
                  <BarChart className="h-32 w-32 text-white opacity-80" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {[1, 2, 3, 4, 5, 6].map(item => (
                      <div key={item} className="h-12 rounded-lg bg-white/20" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilHero;
