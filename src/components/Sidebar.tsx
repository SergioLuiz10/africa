import React, { useState, useEffect } from 'react';
import logoleal from '../assets/logoleao.png';

interface SidebarProps {
  language: 'en' | 'pt';
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ language, isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    pt: {
      menuItems: [
        { id: 'manifesto', label: 'Manifesto' },
        { id: 'about', label: 'Quem Somos' },
        { id: 'project', label: 'Projeto' },
        { id: 'impact', label: 'Impacto' },
        { id: 'mentorship', label: 'Mentorias' },
        { id: 'programs', label: 'Programas' },
        { id: 'partners', label: 'Parceiros' },
        { id: 'dela', label: 'DeLá' },
        { id: 'favela', label: 'Favela Tech' },
        { id: 'kindezi', label: 'Kindezi BAL' },
        { id: 'cgbn', label: 'CGBW' },
        { id: 'clipping', label: 'Clipping' },
        { id: 'contact', label: 'Contato' }
      ]
    },
    en: {
      menuItems: [
        { id: 'manifesto', label: 'Manifest' },
        { id: 'about', label: 'About Us' },
        { id: 'project', label: 'Project' },
        { id: 'impact', label: 'Impact' },
        { id: 'mentorship', label: 'Mentorships' },
        { id: 'programs', label: 'Programs' },
        { id: 'partners', label: 'Partners' },
        { id: 'dela', label: 'DeLá' },
        { id: 'favela', label: 'Favela Tech' },
        { id: 'kindezi', label: 'Kindezi BAL' },
        { id: 'cgbn', label: 'CGBW' },
        { id: 'clipping', label: 'Clipping' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  };

  const t = content[language];

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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 w-64 h-screen overflow-y-auto bg-[#1A0900] text-white py-8 z-40
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:fixed
        `}
      >
        <div className="flex items-center justify-center mb-12 px-4">
          <img
            src={logoleal}
            alt="Logo"
            className="h-12 object-contain"
          />
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
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
