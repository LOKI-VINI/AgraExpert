
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AgriGearHero from '@/components/AgriGear/AgriGearHero';
import TrainingLibrary from '@/components/AgriGear/TrainingLibrary';
import EquipmentRental from '@/components/AgriGear/EquipmentRental';

const AgriGear: React.FC = () => {
  const [language, setLanguage] = useState('kn'); // Setting Kannada as default
  
  useEffect(() => {
    // If you need to do any language-specific initializations
  }, [language]);
  
  return (
    <PageLayout 
      language={language} 
      setLanguage={setLanguage}
      heroSection={<AgriGearHero language={language} />}
    >
      <div className="space-y-16">
        <TrainingLibrary language={language} />
        <EquipmentRental language={language} />
      </div>
    </PageLayout>
  );
};

export default AgriGear;
