import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      programs: 'Programas',
      impact: 'Impacto',
      mentorship: 'Mentoria',
      contact: 'Contato',
    },
    en: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      impact: 'Impact',
      mentorship: 'Mentorship',
      contact: 'Contact',
    }
  };

  const t = translations[currentLanguage as keyof typeof translations];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brown-800/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">África 360</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-orange-400 transition-colors">{t.home}</a>
          <a href="#about" className="text-white hover:text-orange-400 transition-colors">{t.about}</a>
          <a href="#programs" className="text-white hover:text-orange-400 transition-colors">{t.programs}</a>
          <a href="#impact" className="text-white hover:text-orange-400 transition-colors">{t.impact}</a>
          <a href="#mentorship" className="text-white hover:text-orange-400 transition-colors">{t.mentorship}</a>
          <a href="#contact" className="text-white hover:text-orange-400 transition-colors">{t.contact}</a>
          <LanguageToggle currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <LanguageToggle currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brown-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.home}</a>
            <a href="#about" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.about}</a>
            <a href="#programs" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.programs}</a>
            <a href="#impact" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.impact}</a>
            <a href="#mentorship" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.mentorship}</a>
            <a href="#contact" className="text-white hover:text-orange-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{t.contact}</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;