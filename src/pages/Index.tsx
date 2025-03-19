
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuotesSection from '@/components/QuotesSection';

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
    <div className="flex flex-col min-h-screen bg-custom-pattern">
      <NavBar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <QuotesSection language={language} />
      <TestimonialsSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
