
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkyCastHero from '@/components/SkyCast/SkyCastHero';
import WeatherDisplay from '@/components/SkyCast/WeatherDisplay';
import WeatherSearch from '@/components/SkyCast/WeatherSearch';
import WeatherAlerts from '@/components/SkyCast/WeatherAlerts';

const SkyCast: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [location, setLocation] = useState('Delhi, India');
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Get user's location on initial load if allowed
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        console.log("Got user location:", position.coords);
        // In a real app, we would use reverse geocoding to get location name
      },
      (error) => {
        console.log("Geolocation error:", error);
      }
    );
  }, []);

  const handleLocationSearch = (searchLocation: string) => {
    setIsLoading(true);
    console.log("Searching for location:", searchLocation);
    
    // Simulate API call delay
    setTimeout(() => {
      setLocation(searchLocation);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow">
        <SkyCastHero language={language} />
        
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            <WeatherSearch 
              language={language} 
              onSearch={handleLocationSearch} 
              isLoading={isLoading}
            />
            
            <WeatherDisplay 
              language={language} 
              location={location} 
              isLoading={isLoading} 
            />
            
            <WeatherAlerts 
              language={language} 
              location={location} 
            />
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default SkyCast;
