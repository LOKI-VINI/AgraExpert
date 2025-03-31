
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  language: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  language,
  delay 
}) => {
  // Ensure we have a valid language code
  const safeLanguage = language || 'kn';
  
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[safeLanguage] || translations['en'] || {};
  
  // Default button text as fallback
  const exploreFeatureText = t.exploreFeature || "Explore Feature";
  
  // For GreenVita, use a direct route; for others, use hash links
  const linkPath = id === 'greenvita' ? '/greenvita' : 
                  id === 'soilxpert' ? '/soilxpert' :
                  id === 'agriverse' ? '/agriverse' :
                  id === 'yieldmart' ? '/yieldmart' :
                  id === 'agrigear' ? '/agrigear' :
                  id === 'skycast' ? '/skycast' : `#${id}`;
  
  return (
    <div 
      id={id}
      className="feature-card bg-white rounded-xl shadow-sm p-6 flex flex-col h-full"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: 'slide-up 0.6s ease-out forwards'
      }}
    >
      <div className="mb-4 p-2 bg-agro-50 w-fit rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link to={linkPath} className="mt-auto">
        <Button variant="outline" className="w-full border-agro-200 text-agro-700 hover:bg-agro-50 transition-all">
          {exploreFeatureText} <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </Link>
    </div>
  );
};

export default FeatureCard;
