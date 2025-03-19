
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
      text: "Technology that understands the soil, the sky, and the soul of farming.",
      author: "Dr. Maria Gonzalez, Agricultural Scientist",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Sustainable farming is not just about today's harvest, but tomorrow's landscape.",
      author: "Eco Farming Initiative",
      image: "https://images.unsplash.com/photo-1625757505736-91815e64be12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Smart agriculture means better yields, better lives, better future.",
      author: "John Peterson, Farm Innovation Expert",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      text: "Data-driven decisions transform farming from an art to a science.",
      author: "Tech for Agriculture Foundation",
      image: "https://images.unsplash.com/photo-1592982573971-2c0c74c4e1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-agro-50/50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div 
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-agro-800 mb-6">
                "{quotes[currentQuoteIndex].text}"
              </p>
              <p className="text-lg text-agro-700">— {quotes[currentQuoteIndex].author}</p>
            
              <div className="flex mt-8">
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
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-10' : 'opacity-100 transform translate-y-0'
              }`}
            >
              <img 
                src={quotes[currentQuoteIndex].image} 
                alt={quotes[currentQuoteIndex].author} 
                className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
