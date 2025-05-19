import React from 'react';
import leoaMulher from '../assets/Leao.jpg'; // ajuste se necessário

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Sobre o Projeto África 360',
      description: 'O Africa 360 é uma plataforma de intercâmbio, formação e reconexão criada para impulsionar o afroempreendedorismo brasileiro por meio da inovação, da ancestralidade e da conexão global.'
    },
    en: {
      title: 'About Africa 360 Project',
      description: 'Africa 360 is a platform for exchange, training, and reconnection created to boost Brazilian Black entrepreneurship through innovation, ancestry, and global connection.'
    }
  };

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

        {/* Texto à esquerda e imagem à direita */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-12">
          {/* Texto resumido */}
          <div className="bg-[#f4e3d7] p-8 rounded-xl shadow-md animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 text-[#7b4c2c]">Dijara Santos – Liderança Negra Global</h3>
            <p className="text-[#4b2e1e] leading-relaxed">
              CEO do Africa 360, Dijara é uma mulher negra, médica veterinária e referência na internacionalização de afroempreendedores. Com mais de 12 anos de atuação no Brasil e em países africanos, lidera iniciativas que conectam cultura, inovação e mercado para impulsionar a economia negra global.
            </p>
            <p className="text-[#4b2e1e] mt-4 leading-relaxed">
              Reconhecida internacionalmente, foi nomeada presidenta do CGBW no Brasil e realiza eventos como o Fancy Africa, fortalecendo marcas afrocentradas e redes econômicas da diáspora.
            </p>
          </div>

          {/* Imagem maior à direita */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-amber-300 scale-105">
            <img
              src={leoaMulher}
              alt="Dijara e leoa"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
