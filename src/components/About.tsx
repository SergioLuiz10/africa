import React from 'react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
const content = {
  pt: {
    title: 'Sobre o Projeto África 360',
    description: 'O Africa 360 é uma plataforma de intercâmbio, formação e reconexão criada para impulsionar o afroempreendedorismo brasileiro por meio da inovação, da ancestralidade e da conexão global.',
    mission: 'Nossa Missão',
    missionText: 'Fortalecer a presença negra no ecossistema de inovação, conectando cultura, negócios e tecnologia em experiências transformadoras entre o Brasil e o continente africano.',
    vision: 'Nossa Visão',
    visionText: 'Ser uma ponte entre passado e futuro, entre Brasil e África, formando uma comunidade negra global vibrante, colaborativa e com propósito.',
    values: 'Nossos Valores',
    valuesList: [
      'Ancestralidade',
      'Inovação',
      'Pertencimento',
      'Transformação Social',
      'Conexão Global'
    ]
  },
  en: {
    title: 'About Africa 360 Project',
    description: 'Africa 360 is a platform for exchange, training, and reconnection created to boost Brazilian Black entrepreneurship through innovation, ancestry, and global connection.',
    mission: 'Our Mission',
    missionText: 'To strengthen the Black presence in the innovation ecosystem by connecting culture, business, and technology in transformative experiences between Brazil and the African continent.',
    vision: 'Our Vision',
    visionText: 'To be a bridge between past and future, between Brazil and Africa, building a global Black community that is vibrant, collaborative, and purposeful.',
    values: 'Our Values',
    valuesList: [
      'Ancestry',
      'Innovation',
      'Belonging',
      'Social Transformation',
      'Global Connection'
    ]
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