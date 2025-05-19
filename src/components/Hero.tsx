import React from 'react';
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe
} from 'lucide-react';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/Apresentação-África360_v3.png';

interface HeroProps {
  language: 'en' | 'pt';
  onLanguageChange?: (lang: 'en' | 'pt') => void;
}

const Hero: React.FC<HeroProps> = ({ language, onLanguageChange }) => {
  const content = {
    pt: {
      subtitle: 'Brasil • África do Sul',
      description: 'Uma jornada de negócios, ancestralidade e inovação',
      cta: 'Saiba Mais',
    },
    en: {
      subtitle: 'Brazil • South Africa',
      description: 'A journey of business, ancestry, and innovation',
      cta: 'Learn More',
    },
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    if (onLanguageChange) {
      onLanguageChange(language === 'pt' ? 'en' : 'pt');
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#3b1d10',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Menu de idioma e redes sociais */}
      <div className="fixed top-0 right-0 z-50 p-4 flex items-center gap-4 bg-[#3b1d10]/80 backdrop-blur-sm rounded-bl-lg">
        <button
          onClick={handleLanguageToggle}
          className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
          title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
          <Globe size={20} />
          <span className="text-sm font-medium">{language.toUpperCase()}</span>
        </button>

        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10 py-20 max-w-full">
        <div className="mx-auto text-center w-full max-w-screen-sm px-2">
          <img
            src={logo}
            alt="África 360"
            className="mx-auto w-48 sm:w-64 md:w-72 lg:w-80 mb-8 animate-logoPulse max-w-full"
          />
         <p className="text-xl sm:text-2xl mb-4 text-orange-400 font-medium animate-float break-words">
  {t.subtitle}
</p>
<p className="text-base sm:text-xl mb-8 text-white/90 animate-wave delay-100 px-2 break-words">
  {t.description}
</p>
 
          <a
            href="#about"
            className="group inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-all transform hover:scale-105 text-base sm:text-lg font-medium"
          >
            {t.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
