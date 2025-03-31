
import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import LanguageSelector from './LanguageSelector';
import { translations } from '@/lib/translations';
import { Link, useLocation } from 'react-router-dom';

interface NavBarProps {
  language: string;
  setLanguage: (language: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[language] || translations['en'];

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Make sure we have the navigation links defined even if some translations are missing
  const navLinks = [
    { name: t.home || 'Home', href: '/' },
    { name: t.soilxpert || 'SoilXpert', href: '/soilxpert' },
    { name: t.greenvita || 'GreenVita', href: '/greenvita' },
    { name: t.agriverse || 'AgriVerse', href: '/agriverse' },
    { name: t.yieldmart || 'YieldMart', href: '/yieldmart' },
    { name: t.agrigear || 'AgriGear', href: '/agrigear' },
    { name: t.skycast || 'SkyCast', href: '/skycast' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary font-semibold text-xl"
            onClick={closeMenu}
          >
            <span className="text-agro-700 font-bold tracking-tight">AgroXpert</span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors nav-link ${
                  location.pathname === link.href ? 'text-agro-700 font-semibold' : 'text-foreground/80 hover:text-agro-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <LanguageSelector language={language} setLanguage={setLanguage} />
              <Avatar className="h-8 w-8 border border-agro-200 cursor-pointer hover:ring-2 hover:ring-agro-300 transition-all">
                <AvatarFallback className="bg-agro-100 text-agro-700">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Avatar className="h-7 w-7 border border-agro-200 mr-2 cursor-pointer">
              <AvatarFallback className="bg-agro-100 text-agro-700">
                <User className="h-3 w-3" />
              </AvatarFallback>
            </Avatar>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu} 
              className="p-1"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        } glass-nav`}
      >
        <div className="container mx-auto px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md hover:bg-agro-50 transition-colors ${
                location.pathname === link.href ? 'text-agro-700 bg-agro-50/50' : 'text-foreground/80'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
