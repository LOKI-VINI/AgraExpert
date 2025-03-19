
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { translations } from '@/lib/translations';

interface NavBarProps {
  language: string;
  setLanguage: (language: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.soilxpert, href: '#soilxpert', feature: true },
    { name: t.greenvita, href: '#greenvita', feature: true },
    { name: t.skycast, href: '#skycast', feature: true },
    { name: t.agrigear, href: '#agrigear', feature: true },
    { name: t.yieldmart, href: '#yieldmart', feature: true },
    { name: t.agriverse, href: '#agriverse', feature: true },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2 text-primary font-semibold text-xl"
            onClick={closeMenu}
          >
            <span className="text-agro-700 font-bold tracking-tight">AgroXpert</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors nav-link ${
                  link.feature ? 'text-agro-700 hover:text-agro-800' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu} 
              className="ml-1 p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        } glass-nav`}
      >
        <div className="container mx-auto px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md hover:bg-secondary/50 transition-colors ${
                link.feature ? 'text-agro-700 hover:text-agro-800' : 'text-foreground/80 hover:text-primary'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
