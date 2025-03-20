
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuotesSection from '@/components/QuotesSection';
import FaqSection from '@/components/FaqSection';
import FeedbackForm from '@/components/FeedbackForm';

const Index: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loaded) {
    return <div className="min-h-screen bg-white"></div>;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar language={language} setLanguage={setLanguage} />
      <div className="bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <Hero language={language} />
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <QuotesSection language={language} />
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-opacity-70">
        <TestimonialsSection language={language} />
      </div>
      <div className="bg-gradient-to-b from-agro-50 to-white">
        <FaqSection language={language} />
      </div>
      <div className="bg-gradient-to-b from-white to-agro-50">
        <FeedbackForm language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Index;
