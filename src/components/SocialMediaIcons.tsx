import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialMediaIconsProps {
  className?: string;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ className = '' }) => {
  const iconSize = 20;
  
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={iconSize} strokeWidth={1.5} />
      </a>
      
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={iconSize} strokeWidth={1.5} />
      </a>
      
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} strokeWidth={1.5} />
      </a>
      
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} strokeWidth={1.5} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;