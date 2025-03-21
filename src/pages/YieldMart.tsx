
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import YieldMartHero from '@/components/YieldMart/YieldMartHero';
import BuyerRegistration from '@/components/YieldMart/BuyerRegistration';
import FarmerView from '@/components/YieldMart/FarmerView';
import PriceUpdates from '@/components/YieldMart/PriceUpdates';

const YieldMart: React.FC = () => {
  const [language, setLanguage] = useState('en');
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow">
        <YieldMartHero language={language} />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <BuyerRegistration language={language} />
            <FarmerView language={language} />
          </div>
          
          <PriceUpdates language={language} />
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default YieldMart;
