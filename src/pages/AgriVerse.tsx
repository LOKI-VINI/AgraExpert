
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AgriVerseHero from '@/components/AgriVerse/AgriVerseHero';
import ForumCategories from '@/components/AgriVerse/ForumCategories';
import PostCreation from '@/components/AgriVerse/PostCreation';
import PostsList from '@/components/AgriVerse/PostsList';
import UserProfile from '@/components/AgriVerse/UserProfile';
import { translations } from '@/lib/translations';

const AgriVerse = () => {
  const [language, setLanguage] = useState('en');
  const [activeCategory, setActiveCategory] = useState('expertTips');
  const [sortOption, setSortOption] = useState('mostRecent');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <main className="flex-grow">
        <AgriVerseHero language={language} />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <ForumCategories 
                language={language} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
              
              <PostCreation language={language} category={activeCategory} />
              
              <PostsList 
                language={language} 
                category={activeCategory} 
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
            </div>
            
            <div className="lg:w-1/4">
              <UserProfile language={language} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default AgriVerse;
