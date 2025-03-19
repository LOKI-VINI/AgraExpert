
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  language: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  language,
  delay = 0
}) => {
  const t = translations[language];
  
  return (
    <div
      id={id}
      className="feature-card h-full"
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0, 
        animation: 'fade-in 0.4s ease-out forwards',
        animationDelay: `${delay}ms`
      }}
    >
      <Card className="h-full border border-border/60 bg-white/60 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="bg-agro-100/70 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="pt-1 pb-6">
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-agro-700 font-medium hover:text-agro-800 hover:bg-transparent group"
          >
            <span>{t.exploreFeature}</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeatureCard;
