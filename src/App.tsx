import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Programs from './components/Programs';
import Partners from './components/Partners';
import Impact from './components/Impact';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import Manifesto from './components/Manifesto';
import Project from './components/Project';
import Dela from './components/Dela';
import Favela from './components/Favela';
import CGBN from './components/CGBN';
import KindeziBAL from './components/KindeziBAL';
import Clipping from './components/Clipping';
import Sponsorship from './components/Sponsorship';

import marca from './assets/imagem1.jpg';

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden flex relative">
      {/* Botão mobile para abrir sidebar */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Sidebar, mobile e desktop */}
      <Sidebar
        language={language}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Marca d'água */}
      <div
        className="fixed inset-0 bg-no-repeat bg-center bg-contain bg-fixed opacity-5 pointer-events-none z-0"
        style={{ backgroundImage: `url(${marca})` }}
      />

      {/* Conteúdo principal */}
      <main className="flex-1 w-full relative z-10 ml-0 lg:ml-64">
        {/* Botão de troca de idioma */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageToggle
            currentLanguage={language}
            toggleLanguage={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          />
        </div>

        {/* Seções */}
        <section id="hero"><Hero language={language} /></section>
        <section id="manifesto"><Manifesto language={language} /></section>
        <section id="about"><About language={language} /></section>
        <section id="project"><Project language={language} /></section>
        <section id="dela"><Dela language={language} /></section>
        <section id="favela"><Favela language={language} /></section>
        <section id="cgbn"><CGBN language={language} /></section>
        <section id="kindezi"><KindeziBAL language={language} /></section>
        <section id="clipping"><Clipping language={language} /></section>
        <section id="sponsorship"><Sponsorship language={language} /></section>
        <section id="destinations"><Destinations language={language} /></section>
        <section id="experiences"><Experiences language={language} /></section>
        <section id="gallery"><Gallery language={language} /></section>
        <section id="programs"><Programs language={language} /></section>
        <section id="partners"><Partners language={language} /></section>
        <section id="impact"><Impact language={language} /></section>
        <section id="mentorship"><Mentorship language={language} /></section>
        <section id="contact"><Contact language={language} /></section>
        <Footer language={language} />
      </main>
    </div>
  );
}

export default App;