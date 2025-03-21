
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AgriGearHero from '@/components/AgriGear/AgriGearHero';
import TrainingLibrary from '@/components/AgriGear/TrainingLibrary';
import EquipmentRental from '@/components/AgriGear/EquipmentRental';

const AgriGear: React.FC = () => {
  const [language, setLanguage] = useState('en');
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow">
        <AgriGearHero language={language} />
        
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-16">
            <TrainingLibrary language={language} />
            <EquipmentRental language={language} />
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default AgriGear;
