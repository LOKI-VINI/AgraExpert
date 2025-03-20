
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
        <DropdownMenuLabel>Indian Languages</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('en')}
          >
            {t.english}
            {language === 'en' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('hi')}
          >
            {t.hindi}
            {language === 'hi' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('ta')}
          >
            {t.tamil}
            {language === 'ta' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('te')}
          >
            {t.telugu}
            {language === 'te' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('bn')}
          >
            {t.bengali}
            {language === 'bn' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('mr')}
          >
            {t.marathi}
            {language === 'mr' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center justify-between cursor-pointer" 
            onClick={() => setLanguage('kn')}
          >
            {t.kannada}
            {language === 'kn' && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
