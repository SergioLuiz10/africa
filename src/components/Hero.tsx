import React, { useEffect, useRef } from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

interface HeroProps {
  language: 'en' | 'pt';
  onLanguageChange?: (lang: 'en' | 'pt') => void;
}

const Hero: React.FC<HeroProps> = ({ language, onLanguageChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

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

  const t = content[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      { r: 120, g: 60, b: 30 },
      { r: 200, g: 100, b: 35 },
      { r: 140, g: 70, b: 40 },
      { r: 180, g: 90, b: 45 }
    ];

    const numCircles = 12;

    type Circle = {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: { r: number; g: number; b: number };
      alpha: number;
    };

    const circles: Circle[] = [];

    for (let i = 0; i < numCircles; i++) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 200 + 100,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: colors[colorIndex],
        alpha: Math.random() * 0.15 + 0.05
      });
    }

    const drawBackground = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#3b1d10';
      ctx.fillRect(0, 0, width, height);

      for (let circle of circles) {
        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x < -circle.radius) circle.x = width + circle.radius;
        if (circle.x > width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = height + circle.radius;
        if (circle.y > height + circle.radius) circle.y = -circle.radius;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.alpha})`;
        ctx.fill();
      }

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 10 - 5;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }

      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(drawBackground);
    };

    drawBackground();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleLanguageToggle = () => {
    if (onLanguageChange) {
      onLanguageChange(language === 'pt' ? 'en' : 'pt');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>

      <div className="absolute inset-0 bg-pattern opacity-10"></div>

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

export default Hero;
