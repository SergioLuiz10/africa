import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
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
      ],
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-3xl font-bold text-orange-500">África 360</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors p-2 bg-gray-800 rounded-full">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors p-2 bg-gray-800 rounded-full">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors p-2 bg-gray-800 rounded-full">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors p-2 bg-gray-800 rounded-full">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center mb-6 gap-6">
            {t.links.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              {t.rights}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                {t.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
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