
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { translations } from '@/lib/translations';

interface HomeFaqSectionProps {
  language: string;
}

const HomeFaqSection: React.FC<HomeFaqSectionProps> = ({ language }) => {
  const t = translations[language];
  
  const faqs = [
    {
      question: t.faqQuestion1,
      answer: t.faqAnswer1
    },
    {
      question: t.faqQuestion2,
      answer: t.faqAnswer2
    },
    {
      question: t.faqQuestion3,
      answer: t.faqAnswer3
    },
    {
      question: t.faqQuestion4,
      answer: t.faqAnswer4
    },
    {
      question: t.faqQuestion5,
      answer: t.faqAnswer5
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.homeFaqTitle}</h2>
          <p className="text-gray-600">{t.homeFaqDescription}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left hover:text-agro-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqSection;
