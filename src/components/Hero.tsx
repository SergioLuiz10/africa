import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe
} from 'lucide-react';
import logo from '../assets/Africa360-Logotipo-Negativo.png';
import backgroundImage from '../assets/Background.png';
import favela from '../assets/FavelaTech-Logotipo-Negativo.png';
import dela from '../assets/Delaaa.png';
import pais from '../assets/Paises.png';
import ELAsemfundo from '../assets/Elasemfund.png';

interface HeroProps {
  language: 'en' | 'pt';
  onLanguageChange?: (lang: 'en' | 'pt') => void;
}

const Hero: React.FC<HeroProps> = ({ language, onLanguageChange }) => {
  const content = {
    pt: {
      description: 'Uma jornada de negócios, ancestralidade e inovação',
    },
    en: {
      description: 'A journey of business, ancestry, and innovation',
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="text-center relative z-10 flex flex-col items-center justify-center -mt-10">
        <img
          src={logo}
          alt="África 360"
           className="mx-auto w-64 sm:w-72 md:w-80 animate-pulse mb-6"
        />

        <p className="text-base sm:text-xl text-white/90 px-2 animate-fadeIn delay-100 mb-4">
          {t.description}
        </p>

        <img
          src={pais}
          alt="Países"
          className="mx-auto w-72 sm:w-80 md:w-[360px] animate-float"
        />
      </div>

      {/* Logos laterais */}
      <img
        src={dela}
        alt="De Lá"
        className="absolute bottom-4 left-4 w-24 sm:w-28 animate-bounce"
      />

      <img
        src={favela}
        alt="Favela Tech"
        className="absolute top-4 left-4 w-24 sm:w-28 animate-bounce"
      />

      {/* Imagem da mulher reposicionada para evitar sobreposição */}
      <img
        src={ELAsemfundo}
        alt="Imagem mulher"
        className="absolute bottom-0 right-[-40px] translate-x-[10%] max-h-[90%] w-auto object-contain pointer-events-none select-none z-0"
      />
    </section>
  );
};

export default Hero;
