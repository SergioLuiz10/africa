import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

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
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={logo}
            alt="África 360"
            className="mx-auto w-64 md:w-80 mb-8 animate-fade-in"
          />
          <p className="text-2xl md:text-3xl mb-4 text-orange-400 font-medium animate-slide-up">
            {t.subtitle}
          </p>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up delay-100">
            {t.description}
          </p>
          <a
            href="#about"
            className="group inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg font-medium"
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
