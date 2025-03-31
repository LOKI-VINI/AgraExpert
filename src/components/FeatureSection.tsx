
import React from 'react';
import { Leaf, Heart, CloudSun, Cog, ShoppingCart, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { translations } from '@/lib/translations';

interface FeatureSectionProps {
  language: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ language }) => {
  // Ensure we have a valid language code
  const safeLanguage = language || 'kn';
  
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[safeLanguage] || translations['en'] || {};
  
  // Default feature text as fallbacks
  const defaultFeatures = {
    soilxpertTitle: "SoilXpert",
    soilxpertDescription: "AI-powered soil testing and crop recommendations tailored to your farm's unique conditions.",
    greenvitaTitle: "GreenVita",
    greenvitaDescription: "Monitor plant health and detect diseases early with our advanced image processing technology.",
    skycastTitle: "SkyCast",
    skycastDescription: "Hyperlocal weather forecasts and alerts customized for agricultural decision-making.",
    agrigearTitle: "AgriGear",
    agrigearDescription: "Smart equipment management and IoT solutions for precision agriculture.",
    yieldmartTitle: "YieldMart",
    yieldmartDescription: "Connect directly with buyers and get the best prices for your agricultural produce.",
    agriverseTitle: "AgriVerse",
    agriverseDescription: "Join our farming community to share knowledge, experiences, and build connections."
  };
  
  const features = [
    {
      id: 'soilxpert',
      title: t.soilxpertTitle || defaultFeatures.soilxpertTitle,
      description: t.soilxpertDescription || defaultFeatures.soilxpertDescription,
      icon: <Leaf className="h-6 w-6 text-agro-700" />,
      delay: 100
    },
    {
      id: 'greenvita',
      title: t.greenvitaTitle || defaultFeatures.greenvitaTitle,
      description: t.greenvitaDescription || defaultFeatures.greenvitaDescription,
      icon: <Heart className="h-6 w-6 text-agro-700" />,
      delay: 200
    },
    {
      id: 'skycast',
      title: t.skycastTitle || defaultFeatures.skycastTitle,
      description: t.skycastDescription || defaultFeatures.skycastDescription,
      icon: <CloudSun className="h-6 w-6 text-agro-700" />,
      delay: 300
    },
    {
      id: 'agrigear',
      title: t.agrigearTitle || defaultFeatures.agrigearTitle,
      description: t.agrigearDescription || defaultFeatures.agrigearDescription,
      icon: <Cog className="h-6 w-6 text-agro-700" />,
      delay: 400
    },
    {
      id: 'yieldmart',
      title: t.yieldmartTitle || defaultFeatures.yieldmartTitle,
      description: t.yieldmartDescription || defaultFeatures.yieldmartDescription,
      icon: <ShoppingCart className="h-6 w-6 text-agro-700" />,
      delay: 500
    },
    {
      id: 'agriverse',
      title: t.agriverseTitle || defaultFeatures.agriverseTitle,
      description: t.agriverseDescription || defaultFeatures.agriverseDescription,
      icon: <MessageSquare className="h-6 w-6 text-agro-700" />,
      delay: 600
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-agro-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.featuresTitle || "Our Features"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.featuresDescription || "Explore our suite of agricultural technology solutions designed to optimize your farming operations."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              language={safeLanguage}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
