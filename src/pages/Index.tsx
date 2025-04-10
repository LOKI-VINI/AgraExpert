
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuotesSection from '@/components/QuotesSection';
import FeedbackForm from '@/components/FeedbackForm';
import FeatureSection from '@/components/FeatureSection';
import HomeFaqSection from '@/components/HomeFaqSection';

const Index: React.FC = () => {
  // Set Kannada as default language
  const [language, setLanguage] = useState('kn');
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Add a loading indicator with a subtle fade-in effect
  if (!loaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-agro-700"></div>
          <p className="mt-4 text-agro-700 animate-pulse">Loading AgroXpert...</p>
        </div>
      </div>
    );
  }
  
  return (
    <PageLayout language={language} setLanguage={setLanguage}>
      <div className="bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <Hero language={language} />
      </div>
      <FeatureSection language={language} />
      <div className="bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <QuotesSection language={language} />
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-opacity-70">
        <TestimonialsSection language={language} />
      </div>
      <HomeFaqSection language={language} />
      <div className="bg-gradient-to-b from-white to-agro-50">
        <FeedbackForm language={language} />
      </div>
    </PageLayout>
  );
};

export default Index;
