
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Lightbulb, Wheat, CloudRain } from 'lucide-react';
import { translations } from '@/lib/translations';

interface ForumCategoriesProps {
  language: string;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ForumCategories: React.FC<ForumCategoriesProps> = ({ 
  language, 
  activeCategory, 
  setActiveCategory 
}) => {
  const t = translations[language];
  
  const categories = [
    {
      id: 'expertTips',
      name: t.expertTips,
      icon: <Lightbulb className="h-5 w-5 text-amber-500" />,
      description: 'Professional farming practices, expert advice, and proven tips'
    },
    {
      id: 'cropDiscussions',
      name: t.cropDiscussions,
      icon: <Wheat className="h-5 w-5 text-agro-600" />,
      description: 'Dedicated discussions for specific crops like maize, rice, wheat, and more'
    },
    {
      id: 'weatherUpdates',
      name: t.weatherUpdates,
      icon: <CloudRain className="h-5 w-5 text-blue-500" />,
      description: 'Share weather forecasts, seasonal alerts, and preventive measures'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{t.forumCategories}</h2>
      
      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="w-full justify-start mb-4 bg-gray-100 p-1 overflow-x-auto flex-nowrap">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-agro-700"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <p className="text-gray-600 text-sm">{category.description}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ForumCategories;
