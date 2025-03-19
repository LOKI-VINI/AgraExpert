
import React, { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

interface QuotesSectionProps {
  language: string;
}

const QuotesSection: React.FC<QuotesSectionProps> = ({ language }) => {
  const t = translations[language];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const quotes = [
    {
      text: "The future of farming is in our hands. AgroXpert makes it smarter, greener, and more profitable.",
      author: "AgroXpert Team"
    },
    {
      text: "Technology that understands the soil, the sky, and the soul of farming.",
      author: "Dr. Maria Gonzalez, Agricultural Scientist"
    },
    {
      text: "Revolutionizing agriculture means empowering farmers with knowledge and tools.",
      author: "John Peterson, Farm Innovation Expert"
    },
    {
      text: "Sustainable farming is not just about today's harvest, but tomorrow's landscape.",
      author: "Eco Farming Initiative"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-agro-50">
      <div className="absolute inset-0 bg-quotes-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
          }`}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-agro-800 mb-6">
            "{quotes[currentQuoteIndex].text}"
          </p>
          <p className="text-lg text-agro-700">— {quotes[currentQuoteIndex].author}</p>
        </div>
        
        <div className="flex justify-center mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${
                currentQuoteIndex === index ? 'bg-agro-600 scale-125' : 'bg-agro-300'
              }`}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentQuoteIndex(index);
                  setIsAnimating(false);
                }, 500);
              }}
              aria-label={`View quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
