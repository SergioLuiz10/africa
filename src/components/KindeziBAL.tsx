import React from "react";

interface KindeziBALProps {
  language: string;
}

const KindeziBAL: React.FC<KindeziBALProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Kindezi BAL",
      subtitle: "Empoderar é cuidar. Cuidar é revolucionar.",
      paragraphs: [
        "Kindezi é um programa de formação que visa capacitar mulheres na área de tecnologia, inspirado no conceito africano de cuidado comunitário.",
        "Este projeto constrói uma comunidade de aprendizagem solidária e inspiradora para que mulheres prosperem na indústria tech, ainda dominada por homens.",
        "Com o apoio do Mwika Social Innovation Hub, a iniciativa impulsiona o protagonismo feminino e o impacto social nas periferias.",
        "Serão formadas inicialmente 10 mulheres de Salvador, com aulas de programação pela LillilT e desenvolvimento de habilidades pela Stroud Leadership Academy.",
        "Apoiado por Serena Williams, Kindezi mostra que inovação também nasce na quebrada e que, com cuidado e oportunidade, transformamos territórios inteiros.",
      ],
    },
    en: {
      title: "Kindezi BAL",
      subtitle: "Empowering is caring. Caring is revolution.",
      paragraphs: [
        "Kindezi is a training program designed to empower women in technology, inspired by the African concept of communal care.",
        "The project builds a supportive learning community where women can thrive in the tech industry — still largely male-dominated.",
        "With support from the Mwika Social Innovation Hub, it promotes female leadership and social impact in underserved areas.",
        "Initially, 10 women from Salvador will be trained in coding by LillilT and in problem-solving by Stroud Leadership Academy.",
        "Backed by Serena Williams, Kindezi proves that innovation rises from the margins — and with care and opportunity, entire communities are transformed.",
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="kindezi"
      className="py-20 bg-[#8a3d14] relative overflow-hidden min-h-[720px]"
    >
      <div className="container mx-auto px-4 max-w-7xl h-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-lg text-white">{t.subtitle}</p>
        </div>

        {/* Carrossel de Texto com fade nas bordas e mais margem */}
        <div className="relative w-full mt-20">
          {/* Fade lateral esquerdo */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#8a3d14] to-transparent z-20 pointer-events-none"></div>
          {/* Fade lateral direito */}
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#8a3d14] to-transparent z-20 pointer-events-none"></div>

          {/* Carrossel */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee space-x-8">
              {[...t.paragraphs, ...t.paragraphs].map((paragraph, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-lg bg-white text-[#4a2c1a] border-l-4 border-orange-500 rounded-2xl p-6 text-lg shadow-md"
                >
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        } 
      `}</style>
    </section>
  );
};

export default KindeziBAL;
