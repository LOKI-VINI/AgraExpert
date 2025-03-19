
import React from 'react';
import { Check, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  const t = translations[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-9 px-3 text-sm">
          <Globe className="h-4 w-4 opacity-70" />
          <span className="hidden sm:inline">{t.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 animate-fade-in">
        <DropdownMenuItem 
          className="flex items-center justify-between cursor-pointer" 
          onClick={() => setLanguage('en')}
        >
          {t.english}
          {language === 'en' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center justify-between cursor-pointer" 
          onClick={() => setLanguage('es')}
        >
          {t.spanish}
          {language === 'es' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center justify-between cursor-pointer" 
          onClick={() => setLanguage('fr')}
        >
          {t.french}
          {language === 'fr' && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
