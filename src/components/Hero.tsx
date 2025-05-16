import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logoAfrica.png';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
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
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brown-800 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 py-20 max-w-full">
        <div className="mx-auto text-center w-full max-w-screen-sm px-2">
          <img
            src={logo}
            alt="África 360"
            className="mx-auto w-48 sm:w-64 md:w-72 lg:w-80 mb-8 animate-fade-in max-w-full"
          />
          <p className="text-xl sm:text-2xl mb-4 text-orange-400 font-medium animate-slide-up break-words">
            {t.subtitle}
          </p>
          <p className="text-base sm:text-xl mb-8 text-white/90 animate-slide-up delay-100 px-2 break-words">
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

export default Hero;