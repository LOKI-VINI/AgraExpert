
import React, { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

interface WeatherSearchProps {
  language: string;
  onSearch: (location: string) => void;
  isLoading: boolean;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ language, onSearch, isLoading }) => {
  const t = translations[language];
  const [searchInput, setSearchInput] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {t.searchLocationTitle}
      </h2>
      
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={t.searchLocationPlaceholder}
            className="pl-10"
          />
        </div>
        
        <Button type="submit" className="bg-agro-600 hover:bg-agro-700 text-white" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.searching}
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              {t.search}
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => onSearch('Delhi, India')} className="text-xs">Delhi</Button>
        <Button variant="outline" size="sm" onClick={() => onSearch('Mumbai, India')} className="text-xs">Mumbai</Button>
        <Button variant="outline" size="sm" onClick={() => onSearch('Bangalore, India')} className="text-xs">Bangalore</Button>
        <Button variant="outline" size="sm" onClick={() => onSearch('Chennai, India')} className="text-xs">Chennai</Button>
        <Button variant="outline" size="sm" onClick={() => onSearch('Kolkata, India')} className="text-xs">Kolkata</Button>
      </div>
    </div>
  );
};

export default WeatherSearch;
