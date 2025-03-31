
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  language: string;
  setLanguage: (language: string) => void;
  heroSection?: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  language, 
  setLanguage,
  heroSection,
  className = "" 
}) => {
  // Set Kannada as default language
  useEffect(() => {
    // Only set language if not already set to a valid value
    if (!language || language === 'en') {
      setLanguage('kn');
    }
  }, [language, setLanguage]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar language={language || 'kn'} setLanguage={setLanguage} />
      
      <main className={`flex-grow ${className}`}>
        {heroSection}
        <div className="container mx-auto px-4 py-12">
          {children}
        </div>
      </main>
      
      <Footer language={language || 'kn'} />
    </div>
  );
};

export default PageLayout;
