import React from "react";
import parceiro1 from "../assets/ParceiroOne.png"; // Ex: Global Logo
import parceiro2 from "../assets/ParceiroTwo.png"; // Ex: King Levi
import parceiro3 from "../assets/Movvvlogo.png"; // Ex: MOV
import parceiro4 from "../assets/LogoOo.png"; // Ex: Logo O
import parceiro5 from "../assets/Logo1.png"; // Ex: Logo 1

interface PartnersProps {
  language: string;
}

const Partners: React.FC<PartnersProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Nossos Parceiros",
      subtitle: "Organizações que tornaram o Projeto África 360 possível",
      message:
        "Estamos orgulhosos de trabalhar com parceiros comprometidos com o desenvolvimento sustentável da África.",
      joinTitle: "Torne-se um Parceiro",
      joinText: "Junte-se a nós nesta jornada de impacto e transformação.",
      joinButton: "Entre em Contato",
    },
    en: {
      title: "Our Partners",
      subtitle: "Organizations that made Project Africa 360 possible",
      message:
        "We are proud to work with partners committed to the sustainable development of Africa.",
      joinTitle: "Become a Partner",
      joinText: "Join us on this journey of impact and transformation.",
      joinButton: "Get in Touch",
    },
  };

  const t = content[language as keyof typeof content];

  const partners = [
    { name: "MOV", image: parceiro3 },
    { name: "Global Logo", image: parceiro1 },
    { name: "King Levi", image: parceiro2 },
    { name: "Logo O", image: parceiro4 },
    { name: "Logo 1", image: parceiro5 },
  ];

  // Duplicado para efeito contínuo (manter se quiser loop)
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Carrossel contínuo com animação */}
        <div className="overflow-hidden w-full mb-16">
          <div className="flex w-[200%] gap-6 animate-loopScroll">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-xl shadow-md p-6 h-44 w-64 flex items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">{t.message}</p>
        </div>

        <div className="max-w-2xl mx-auto bg-amber-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3 text-white">{t.joinTitle}</h3>
          <p className="text-white mb-6">{t.joinText}</p>
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
