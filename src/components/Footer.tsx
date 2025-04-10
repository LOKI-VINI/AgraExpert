
import React from 'react';
import { Twitter, Facebook, Instagram, Github, Mail, PhoneCall, MapPin } from 'lucide-react';
import { translations } from '@/lib/translations';
import { Link } from 'react-router-dom';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  // Ensure we have a valid language code
  const safeLanguage = language || 'kn';
  
  // Make sure we have a valid translation object by defaulting to 'en' if the requested language isn't available
  const t = translations[safeLanguage] || translations['en'] || {};
  
  // Default footer text as fallbacks
  const defaultFooter = {
    footerDescription: "Your partner in sustainable agriculture, providing innovative solutions for a better tomorrow.",
    company: "Company",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contactUs: "Contact Us",
    usefulLinks: "Useful Links",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    address: "123 AgriTech Lane, Farmville, India",
    phone: "+91 9876543210",
    emailAddress: "info@agroxpert.com",
    allRightsReserved: "© 2024 AgroXpert. All Rights Reserved.",
    followUs: "Follow Us"
  };

  const footerLinks = {
    company: [
      { name: t.aboutUs || defaultFooter.aboutUs, href: "#about-us" },
      { name: t.services || defaultFooter.services, href: "#services" },
      { name: t.blog || defaultFooter.blog, href: "#blog" },
      { name: t.contactUs || defaultFooter.contactUs, href: "#contact" },
    ],
    useful: [
      { name: t.privacyPolicy || defaultFooter.privacyPolicy, href: "#privacy" },
      { name: t.termsOfService || defaultFooter.termsOfService, href: "#terms" },
    ]
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-agro-300">AgroXpert</h2>
            <p className="text-gray-400 mb-4">
              {t.footerDescription || defaultFooter.footerDescription}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-agro-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-agro-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-agro-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-agro-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agro-300">
              {t.company || defaultFooter.company}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-agro-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agro-300">
              {t.usefulLinks || defaultFooter.usefulLinks}
            </h3>
            <ul className="space-y-2">
              {footerLinks.useful.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-agro-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-agro-300">
              {t.contactUs || defaultFooter.contactUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-agro-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {t.address || defaultFooter.address}
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 text-agro-300 flex-shrink-0" />
                <span className="text-gray-400">
                  {t.phone || defaultFooter.phone}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-agro-300 flex-shrink-0" />
                <span className="text-gray-400">
                  {t.emailAddress || defaultFooter.emailAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            {t.allRightsReserved || defaultFooter.allRightsReserved}
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              {t.followUs || defaultFooter.followUs}: 
              <a href="#" className="text-agro-300 ml-2 hover:underline">Twitter</a>,
              <a href="#" className="text-agro-300 ml-2 hover:underline">Facebook</a>,
              <a href="#" className="text-agro-300 ml-2 hover:underline">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
