
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import AgriVerseHero from '@/components/AgriVerse/AgriVerseHero';
import ForumCategories from '@/components/AgriVerse/ForumCategories';
import PostCreation from '@/components/AgriVerse/PostCreation';
import PostsList from '@/components/AgriVerse/PostsList';
import UserProfile from '@/components/AgriVerse/UserProfile';

const AgriVerse = () => {
  const [language, setLanguage] = useState('en');
  const [activeCategory, setActiveCategory] = useState('expertTips');
  const [sortOption, setSortOption] = useState('mostRecent');
  
  return (
    <PageLayout 
      language={language} 
      setLanguage={setLanguage}
      heroSection={<AgriVerseHero language={language} />}
      className="bg-gray-50"
    >
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
    </PageLayout>
  );
};

export default AgriVerse;
