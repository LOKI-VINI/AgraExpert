
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AgriGearHero from '@/components/AgriGear/AgriGearHero';
import TrainingLibrary from '@/components/AgriGear/TrainingLibrary';
import EquipmentRentalV2 from '@/components/AgriGear/EquipmentRentalV2';

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
        <EquipmentRentalV2 language={language} />
        <TrainingLibrary language={language} />
      </div>
    </PageLayout>
  );
};

export default AgriGear;
