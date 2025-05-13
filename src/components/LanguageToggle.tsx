import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, toggleLanguage }) => {
  return (
    <button 
      onClick={toggleLanguage} 
      className="flex items-center space-x-1 text-sm font-medium"
    >
      <Globe size={18} />
      <span>{currentLanguage === 'pt' ? 'PT' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;