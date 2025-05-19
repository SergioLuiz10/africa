import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    pt: {
      rights: '© 2025 Projeto África 360. Todos os direitos reservados.',
      links: [
        { label: 'Início', href: '#home' },
        { label: 'Sobre', href: '#about' },
        { label: 'Programas', href: '#programs' },
        { label: 'Impacto', href: '#impact' },
        { label: 'Parceiros', href: '#partners' },
        { label: 'Contato', href: '#contact' },
        { label: 'Manifesto', href: '#manifesto' },
        { label: 'Projeto', href: '#project' },
        { label: 'DeLá', href: '#dela' },
        { label: 'Favela', href: '#favela' },
        { label: 'CGBW', href: '#cgbn' },
        { label: 'Kindezi BAL', href: '#kindezi' },
        { label: 'Clipping', href: '#clipping' },
        { label: 'Patrocínio', href: '#sponsorship' }
      ],
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso'
    },
    en: {
      rights: '© 2025 Project Africa 360. All rights reserved.',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Programs', href: '#programs' },
        { label: 'Impact', href: '#impact' },
        { label: 'Partners', href: '#partners' },
        { label: 'Contact', href: '#contact' },
        { label: 'Manifesto', href: '#manifesto' },
        { label: 'Project', href: '#project' },
        { label: 'DeLá', href: '#dela' },
        { label: 'Favela', href: '#favela' },
        { label: 'CGBW', href: '#cgbn' },
        { label: 'Kindezi BAL', href: '#kindezi' },
        { label: 'Clipping', href: '#clipping' },
        { label: 'Sponsorship', href: '#sponsorship' }
      ],
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '', delay: 0 },
    { icon: <Twitter size={20} />, url: '', delay: 0.1 },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/africa.360/?hl=pt-br', delay: 0.2 },
    { icon: <Linkedin size={20} />, url: '', delay: 0.3 }
  ];

  const t = content[language as keyof typeof content];

  return (
    <footer ref={footerRef} className="bg-brown-900 text-white py-12 scroll-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <span className="text-3xl font-bold text-gradient">África 360</span>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors p-2 bg-brown-800 rounded-full hover-scale animate-slide-in-right"
                style={{ animationDelay: `${social.delay}s` }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-brown-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center mb-6 gap-6">
            {t.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-orange-400 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0 animate-slide-in-left">
              {t.rights}
            </div>
            <div className="flex space-x-6 animate-slide-in-right">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover-scale">
                {t.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover-scale">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
