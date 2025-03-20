
import React from 'react';
import { translations } from '@/lib/translations';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface FaqSectionProps {
  language: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const t = translations[language];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-agro-800">
          <span className="inline-block border-b-2 border-agro-500 pb-2">{t.faqTitle}</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌿</span>
                  <span className="font-medium">{t.faq1Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq1Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌾</span>
                  <span className="font-medium">{t.faq2Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq2Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌱</span>
                  <span className="font-medium">{t.faq3Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq3Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌿</span>
                  <span className="font-medium">{t.faq4Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq4Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌾</span>
                  <span className="font-medium">{t.faq5Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq5Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌱</span>
                  <span className="font-medium">{t.faq6Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq6Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌿</span>
                  <span className="font-medium">{t.faq7Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq7Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌾</span>
                  <span className="font-medium">{t.faq8Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq8Answer}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="border-b border-agro-100">
              <AccordionTrigger className="text-left py-4 px-6 hover:bg-agro-50 hover:no-underline transition-colors">
                <div className="flex items-center">
                  <span className="text-agro-600 mr-2">🌱</span>
                  <span className="font-medium">{t.faq9Title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="py-4 px-6 text-muted-foreground">
                {t.faq9Answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
