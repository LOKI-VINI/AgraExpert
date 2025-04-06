
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AgriGearHero from '@/components/AgriGear/AgriGearHero';
import TrainingLibrary from '@/components/AgriGear/TrainingLibrary';
import EquipmentRentalV2 from '@/components/AgriGear/EquipmentRentalV2';
import { translations } from '@/lib/translations';

const AgriGear: React.FC = () => {
  const [language, setLanguage] = useState('en'); // Setting English as default for safety
  
  useEffect(() => {
    // If you need to do any language-specific initializations
    // Make sure we're using a supported language
    if (language && !translations[language]) {
      console.warn(`Language '${language}' not found in translations, falling back to English`);
      setLanguage('en');
    }
  }, [language]);
  
  // Ensure we always pass a valid language
  const safeLanguage = translations[language] ? language : 'en';
  
  return (
    <PageLayout 
      language={safeLanguage} 
      setLanguage={setLanguage}
      heroSection={<AgriGearHero language={safeLanguage} />}
    >
      <div className="space-y-16">
        <EquipmentRentalV2 language={safeLanguage} />
        <TrainingLibrary language={safeLanguage} />
      </div>
    </PageLayout>
  );
};

export default AgriGear;
