import React, { useState, useEffect } from 'react';
import { Globe, ChevronRight } from 'lucide-react';

interface SidebarProps {
  language: string;
}

const Sidebar: React.FC<SidebarProps> = ({ language }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const content = {
    pt: {
      menuItems: [
        { id: 'manifesto', label: 'Manifesto' },
        { id: 'about', label: 'Quem Somos' },
        { id: 'project', label: 'Projeto' },
        { id: 'dela', label: 'Dela' },
        { id: 'favela', label: 'Favela' },
        { id: 'CGBW', label: 'CGBW' },
        { id: 'kindezi', label: 'kindezi BAL' },
        { id: 'clipping', label: 'Clipping' },
        { id: 'sponsorship', label: 'Patrocínio' }
      ]
    },
    en: {
      menuItems: [
        { id: 'manifest', label: 'Manifest' },
        { id: 'about', label: 'About Us' },
        { id: 'project', label: 'Project' },
        { id: 'dela', label: 'Dela' },
        { id: 'favela', label: 'Favela' },
        { id: 'CGBW', label: 'CGBW' },
        { id: 'kindezi', label: 'kindezi BAL' },
        { id: 'clipping', label: 'Clipping' },
        { id: 'sponsorship', label: 'Sponsorship' }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 w-64 h-screen overflow-y-auto bg-[#1A0900] text-white py-8 z-40
          transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:relative
        `}
      >
        <div className="flex items-center justify-center mb-12 px-4">
          <Globe className="w-10 h-10 text-orange-500" />
          <h1 className="text-2xl font-bold ml-2">AfricaTrip</h1>
        </div>

        <nav>
          <ul className="space-y-1">
            {t.menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`
                    flex items-center pl-8 py-3 pr-4 hover:bg-orange-900/30 transition-colors duration-300
                    ${activeSection === item.id ? 'text-orange-500 border-l-4 border-orange-500 pl-7' : ''}
                  `}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="mr-2 w-2 h-2 rounded-full bg-orange-500 opacity-70"></span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
