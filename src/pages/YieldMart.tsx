
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import YieldMartHero from '@/components/YieldMart/YieldMartHero';
import BuyerRegistration from '@/components/YieldMart/BuyerRegistration';
import FarmerView from '@/components/YieldMart/FarmerView';
import PriceUpdates from '@/components/YieldMart/PriceUpdates';

const YieldMart: React.FC = () => {
  const [language, setLanguage] = useState('en');
  
  return (
    <PageLayout 
      language={language} 
      setLanguage={setLanguage}
      heroSection={<YieldMartHero language={language} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <BuyerRegistration language={language} />
        <FarmerView language={language} />
      </div>
      
      <PriceUpdates language={language} />
    </PageLayout>
  );
};

export default YieldMart;
