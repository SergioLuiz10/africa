import React from 'react';

interface PartnersProps {
  language: string;
}

const Partners: React.FC<PartnersProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Nossos Parceiros',
      subtitle: 'Organizações que tornaram o Projeto África 360 possível',
      message: 'Estamos orgulhosos de trabalhar com parceiros comprometidos com o desenvolvimento sustentável da África.',
      joinTitle: 'Torne-se um Parceiro',
      joinText: 'Junte-se a nós nesta jornada de impacto e transformação.',
      joinButton: 'Entre em Contato'
    },
    en: {
      title: 'Our Partners',
      subtitle: 'Organizations that made Project Africa 360 possible',
      message: 'We are proud to work with partners committed to the sustainable development of Africa.',
      joinTitle: 'Become a Partner',
      joinText: 'Join us on this journey of impact and transformation.',
      joinButton: 'Get in Touch'
    }
  };

  const t = content[language as keyof typeof content];

  // Placeholder partner logos (using colored rectangles as placeholders)
  const partners = [
    { name: 'Partner 1', color: 'bg-blue-500' },
    { name: 'Partner 2', color: 'bg-green-500' },
    { name: 'Partner 3', color: 'bg-orange-500' },
    { name: 'Partner 4', color: 'bg-purple-500' },
    { name: 'Partner 5', color: 'bg-red-500' },
    { name: 'Partner 6', color: 'bg-teal-500' },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-all"
            >
              <div className={`${partner.color} w-16 h-8 rounded opacity-70`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">{t.message}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-orange-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3 text-orange-800">{t.joinTitle}</h3>
          <p className="text-orange-700 mb-6">{t.joinText}</p>
          <a 
            href="#contact" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-full transition-colors font-medium"
          >
            {t.joinButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;