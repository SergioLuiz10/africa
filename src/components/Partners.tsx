import React from 'react';
import parceiro1 from '../assets/parceiro1.png';
import parceiro2 from '../assets/parceiro2.jpg';

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

  const partners = [
    { name: 'Parceiro 1', image: parceiro1 },
    { name: 'Parceiro 2', image: parceiro2 },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
<div className="flex justify-center gap-8 mb-16 flex-wrap">
  {partners.map((partner, index) => (
    <div 
      key={index} 
      className="bg-[#f4e3d7] rounded-lg p-6 shadow-sm flex items-center justify-center h-56 w-80 hover:shadow-md transition-all"
    >
      <img 
        src={partner.image} 
        alt={partner.name} 
        className="max-h-40 max-w-full object-contain" 
      />
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
