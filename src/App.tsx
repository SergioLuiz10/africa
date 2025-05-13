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
import Membership from './components/Mentorship';
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

function App() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar fixa */}
      <div className="fixed top-0 left-0 h-full w-64 z-40">
        <Sidebar language={language} />
      </div>

      {/* Conteúdo principal com margem para o menu fixo */}
      <main className="flex-1 ml-64">
        {/* Botão de troca de idioma fixo no topo */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageToggle
            currentLanguage={language}
            toggleLanguage={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          />
        </div>

        {/* Seções com IDs para navegação via Sidebar */}
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

        {/* Conteúdo adicional */}
        <Destinations language={language} />
        <Experiences language={language} />
        <Gallery language={language} />
        <Programs language={language} />
        <Partners language={language} />
        <Impact language={language} />
        <Membership language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </main>
    </div>
  );
}

export default App;
