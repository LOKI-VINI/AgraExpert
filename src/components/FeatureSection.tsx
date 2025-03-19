
import React from 'react';
import { Leaf, Heart, CloudSun, Cog, ShoppingCart, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { translations } from '@/lib/translations';

interface FeatureSectionProps {
  language: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ language }) => {
  const t = translations[language];
  
  const features = [
    {
      id: 'soilxpert',
      title: t.soilxpertTitle,
      description: t.soilxpertDescription,
      icon: <Leaf className="h-6 w-6 text-agro-700" />,
      delay: 100
    },
    {
      id: 'greenvita',
      title: t.greenvitaTitle,
      description: t.greenvitaDescription,
      icon: <Heart className="h-6 w-6 text-agro-700" />,
      delay: 200
    },
    {
      id: 'skycast',
      title: t.skycastTitle,
      description: t.skycastDescription,
      icon: <CloudSun className="h-6 w-6 text-agro-700" />,
      delay: 300
    },
    {
      id: 'agrigear',
      title: t.agrigearTitle,
      description: t.agrigearDescription,
      icon: <Cog className="h-6 w-6 text-agro-700" />,
      delay: 400
    },
    {
      id: 'yieldmart',
      title: t.yieldmartTitle,
      description: t.yieldmartDescription,
      icon: <ShoppingCart className="h-6 w-6 text-agro-700" />,
      delay: 500
    },
    {
      id: 'agriverse',
      title: t.agriverseTitle,
      description: t.agriverseDescription,
      icon: <MessageSquare className="h-6 w-6 text-agro-700" />,
      delay: 600
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-agro-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              language={language}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
