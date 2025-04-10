
import React from 'react';
import { Check, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  // Always ensure we have a valid language by defaulting to 'kn' or 'en' if needed
  const safeLanguage = language || 'kn';
  
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[safeLanguage] || translations['en'] || {};
  
  // Default language labels as fallbacks
  const languageLabels = {
    language: t.language || "Language",
    english: t.english || "English",
    hindi: t.hindi || "Hindi",
    tamil: t.tamil || "Tamil",
    telugu: t.telugu || "Telugu",
    bengali: t.bengali || "Bengali",
    marathi: t.marathi || "Marathi",
    kannada: t.kannada || "Kannada"
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-9 px-3 text-sm">
          <Globe className="h-4 w-4 opacity-70" />
          <span className="hidden sm:inline">{languageLabels.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 animate-fade-in">
        <DropdownMenuLabel>Indian Languages</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('en')}
          >
            {languageLabels.english}
            {safeLanguage === 'en' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('hi')}
          >
            {languageLabels.hindi}
            {safeLanguage === 'hi' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('ta')}
          >
            {languageLabels.tamil}
            {safeLanguage === 'ta' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('te')}
          >
            {languageLabels.telugu}
            {safeLanguage === 'te' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('bn')}
          >
            {languageLabels.bengali}
            {safeLanguage === 'bn' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('mr')}
          >
            {languageLabels.marathi}
            {safeLanguage === 'mr' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('kn')}
          >
            {languageLabels.kannada}
            {safeLanguage === 'kn' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
