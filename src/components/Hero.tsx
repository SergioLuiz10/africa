import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'África 360',
      subtitle: 'Brasil • África do Sul',
      description: 'Uma jornada de negócios, ancestralidade e inovação',
      cta: 'Saiba Mais',
    },
    en: {
      title: 'Africa 360',
      subtitle: 'Brazil • South Africa',
      description: 'A journey of business, ancestry, and innovation',
      cta: 'Learn More',
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brown-800"
    style={{backgroundImage: "url("}}>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            {t.title}
          </h1>
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