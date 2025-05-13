import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

interface SidebarProps {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentLanguage, toggleLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

const translations = {
  pt: {
    home: 'Quem Somos',
    about: 'Projeto',
    programs: 'Delá',
    impact: 'Favela',
    mentorship: 'CGBN',
    contact: 'kindezi BAL',
    collect: 'Clipping',
    sponsorships: 'Patrocínio',
    manifest: 'Manifesto'
  },
  en: {
    home: 'Home',
    about: 'Project',
    programs: 'Delá',
    impact: 'Favela',
    mentorship: 'CGBN',
    contact: 'kindezi BAL',
    collect: 'Clipping',
    sponsorships: 'Sponsorships',
    manifest: 'Manifest'
  }
};

  const t = translations[currentLanguage as keyof typeof translations];

  // Monitorar qual seção está ativa baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'impact', 'mentorship', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sidebar para desktop
  const desktopSidebar = (
    <div className="fixed top-0 left-0 h-full z-50 w-24 bg-brown-900 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        {/* Logo */}
        <div className="pt-8 pb-10">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
        </div>

        {/* Links de navegação vertical */}
        <nav className="flex-1 w-full">
          <div className="flex flex-col items-center space-y-6">
            <NavItem href="#home" section="home" activeSection={activeSection} text={t.home} />
            <NavItem href="#about" section="about" activeSection={activeSection} text={t.about} />
            <NavItem href="#programs" section="programs" activeSection={activeSection} text={t.programs} />
            <NavItem href="#impact" section="impact" activeSection={activeSection} text={t.impact} />
            <NavItem href="#mentorship" section="mentorship" activeSection={activeSection} text={t.mentorship} />
            <NavItem href="#contact" section="contact" activeSection={activeSection} text={t.contact} />
            <NavItem href="#collect" section="collect" activeSection={activeSection} text={t.collect} />
            <NavItem href="#sponsorships" section="sponsorships" activeSection={activeSection} text={t.sponsorships} />
            <NavItem href="#manifest" section="manifest" activeSection={activeSection} text={t.manifest} />

          </div>
        </nav>

        {/* Language toggle no fundo */}
        <div className="py-8">
          <LanguageToggle currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </div>
  );

  // Botão de menu móvel e sidebar para mobile
  const mobileSidebar = (
    <>
      {/* Botão de menu móvel */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-brown-800 p-2 rounded-full shadow-md"
        >
          {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div 
            className="fixed top-0 left-0 h-full w-64 bg-brown-900 shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="ml-3 text-lg font-medium text-white">África 360</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
                >
                  <X size={24} />
                </button>
              </div>

              
              <nav className="flex-1 py-6">
                <div className="flex flex-col px-6 space-y-4">
                  <MobileNavItem 
                    href="#home" 
                    section="home" 
                    activeSection={activeSection} 
                    text={t.home} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <MobileNavItem 
                    href="#about" 
                    section="about" 
                    activeSection={activeSection} 
                    text={t.about} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <MobileNavItem 
                    href="#programs" 
                    section="programs" 
                    activeSection={activeSection} 
                    text={t.programs} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <MobileNavItem 
                    href="#impact" 
                    section="impact" 
                    activeSection={activeSection} 
                    text={t.impact} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <MobileNavItem 
                    href="#mentorship" 
                    section="mentorship" 
                    activeSection={activeSection} 
                    text={t.mentorship} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <MobileNavItem 
                    href="#contact" 
                    section="contact" 
                    activeSection={activeSection} 
                    text={t.contact} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                  />
                </div>
              </nav>

              
              <div className="p-6 border-t border-brown-700">
                <LanguageToggle currentLanguage={currentLanguage} toggleLanguage={toggleLanguage} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      
      <div className="hidden md:block">
        {desktopSidebar}
      </div>

      
      <div className="md:hidden">
        {mobileSidebar}
      </div>

     
      <div className="hidden md:block ml-24 transition-all duration-300"></div>
    </>
  );
};


interface NavItemProps {
  href: string;
  section: string;
  activeSection: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, section, activeSection, text }) => {
  const isActive = section === activeSection;
  
  return (
    <a 
      href={href} 
      className="group flex flex-col items-center w-full py-2 relative"
    >
      {isActive && <div className="absolute left-0 w-1 h-10 bg-orange-500 rounded-r-full"></div>}
      <div 
        className={`w-2 h-2 rounded-full mb-1 ${isActive ? 'bg-orange-500' : 'bg-brown-600 group-hover:bg-brown-500'}`}
      ></div>
      <span 
        className={`text-xs ${isActive ? 'font-medium text-orange-500' : 'text-brown-400 group-hover:text-brown-300'}`}
      >
        {text}
      </span>
    </a>
  );
};

// Componente de item de navegação para mobile
interface MobileNavItemProps {
  href: string;
  section: string;
  activeSection: string;
  text: string;
  onClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, section, activeSection, text, onClick }) => {
  const isActive = section === activeSection;
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`py-2 relative pl-4 ${
        isActive 
          ? 'text-orange-500 font-medium border-l-2 border-orange-500' 
          : 'text-brown-300 border-l-2 border-transparent hover:border-brown-700 hover:text-brown-200'
      }`}
    >
      {text}
    </a>
  );
};

export default Sidebar;