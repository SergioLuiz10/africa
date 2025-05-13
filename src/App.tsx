import React, { useState } from 'react';
import Header from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Mentorship from './components/Mentorship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<string>('pt');
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen">
      <Header currentLanguage={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Programs language={language} />
      <Impact language={language} />
      <Mentorship language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;