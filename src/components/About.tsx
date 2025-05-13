import React from 'react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Sobre o Projeto África 360',
      description: 'O África 360 é uma iniciativa inovadora que busca apresentar o continente africano em sua totalidade, revelando sua diversidade cultural, riqueza natural e potencial de desenvolvimento.',
      mission: 'Nossa Missão',
      missionText: 'Promover uma visão abrangente e autêntica da África, desmistificando estereótipos e celebrando a riqueza cultural do continente através de programas educacionais, culturais e de desenvolvimento sustentável.',
      vision: 'Nossa Visão',
      visionText: 'Construir pontes entre a África e o mundo, facilitando intercâmbios culturais e econômicos que contribuam para o desenvolvimento sustentável do continente africano.',
      values: 'Nossos Valores',
      valuesList: ['Autenticidade', 'Respeito Cultural', 'Sustentabilidade', 'Inovação', 'Colaboração']
    },
    en: {
      title: 'About Project Africa 360',
      description: 'Africa 360 is an innovative initiative that seeks to present the African continent in its entirety, revealing its cultural diversity, natural richness, and development potential.',
      mission: 'Our Mission',
      missionText: 'To promote a comprehensive and authentic vision of Africa, demystifying stereotypes and celebrating the cultural richness of the continent through educational, cultural, and sustainable development programs.',
      vision: 'Our Vision',
      visionText: 'To build bridges between Africa and the world, facilitating cultural and economic exchanges that contribute to the sustainable development of the African continent.',
      values: 'Our Values',
      valuesList: ['Authenticity', 'Cultural Respect', 'Sustainability', 'Innovation', 'Collaboration']
    }
  };

  // Use o idioma especificado se existir, caso contrário use português como padrão
  const defaultLanguage = 'pt';
  const selectedLanguage = Object.keys(content).includes(language) ? language : defaultLanguage;
  const t = content[selectedLanguage as keyof typeof content];

  return (
    <section id="about" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-50">{t.title}</h2>
          <p className="text-xl text-amber-100 leading-relaxed">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* Mission */}
          <div className="bg-amber-100 rounded-xl p-8 shadow-sm border border-amber-300 transition-transform hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.mission}</h3>
            <p className="text-amber-900">{t.missionText}</p>
          </div>

          {/* Vision */}
          <div className="bg-amber-200 rounded-xl p-8 shadow-sm border border-amber-300 transition-transform hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.vision}</h3>
            <p className="text-amber-900">{t.visionText}</p>
          </div>

          {/* Values */}
          <div className="bg-amber-100 rounded-xl p-8 shadow-sm border border-amber-300 transition-transform hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">{t.values}</h3>
            <ul className="space-y-2 text-amber-900">
              {t.valuesList.map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;