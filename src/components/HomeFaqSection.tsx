
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
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[language] || translations['en'];
  
  const defaultFaqs = [
    {
      question: "What is AgroXpert and how does it help farmers?",
      answer: "AgroXpert is a comprehensive digital platform that helps farmers optimize their operations through data-driven insights. Our suite of tools includes soil analysis, disease detection, weather forecasting, equipment management, marketplace access, and a farming community."
    },
    {
      question: "How accurate are the soil testing recommendations from SoilXpert?",
      answer: "SoilXpert uses advanced AI algorithms trained on thousands of soil samples to provide recommendations with over 90% accuracy. Our system continuously improves as more farmers use it, leading to increasingly precise suggestions for your specific soil conditions."
    },
    {
      question: "Can I sell my produce directly to buyers through YieldMart?",
      answer: "Yes! YieldMart connects you directly with verified buyers who have registered their interest in purchasing agricultural products. You can browse their offers, contact them directly, and negotiate the best price for your produce without intermediaries."
    },
    {
      question: "Is AgroXpert available in my local language?",
      answer: "AgroXpert supports multiple Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and Kannada, in addition to English. We're committed to making our platform accessible to farmers across diverse linguistic backgrounds."
    },
    {
      question: "How can I get started with AgroXpert?",
      answer: "Getting started is easy! Simply create an account, explore our features, and begin with the tools most relevant to your current farming needs. Our intuitive interface is designed to be user-friendly, even for those with limited technical experience."
    }
  ];
  
  const faqs = [
    {
      question: t.faqQuestion1 || defaultFaqs[0].question,
      answer: t.faqAnswer1 || defaultFaqs[0].answer
    },
    {
      question: t.faqQuestion2 || defaultFaqs[1].question,
      answer: t.faqAnswer2 || defaultFaqs[1].answer
    },
    {
      question: t.faqQuestion3 || defaultFaqs[2].question,
      answer: t.faqAnswer3 || defaultFaqs[2].answer
    },
    {
      question: t.faqQuestion4 || defaultFaqs[3].question,
      answer: t.faqAnswer4 || defaultFaqs[3].answer
    },
    {
      question: t.faqQuestion5 || defaultFaqs[4].question,
      answer: t.faqAnswer5 || defaultFaqs[4].answer
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.homeFaqTitle || 'Frequently Asked Questions'}</h2>
          <p className="text-gray-600">{t.homeFaqDescription || 'Common questions about AgroXpert and how our platform can help your farming business.'}</p>
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
