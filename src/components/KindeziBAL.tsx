import React, { useRef } from "react";

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

  const t = content[language as "pt" | "en"];
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="kindezi"
      className="py-32 bg-[#8a3d14] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Título centralizado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-lg text-white">{t.subtitle}</p>
        </div>

        {/* Carrossel manual com cards alinhados à esquerda */}
        <div className="relative flex items-center justify-start ml-0 md:ml-8">
          {/* Botão Esquerdo */}
          <button
            onClick={() => scroll("left")}
            className="z-20 absolute left-0 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
          >
            ←
          </button>

          {/* Carrossel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-16 md:px-24 py-4 ml-12"
          >
            {t.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[50%] md:min-w-[400px] bg-white text-[#4a2c1a] border-l-4 border-orange-500 rounded-2xl p-6 text-sm md:text-base snap-center shadow-md"
              >
                {paragraph}
              </div>
            ))}
          </div>

          {/* Botão Direito */}
          <button
            onClick={() => scroll("right")}
            className="z-20 absolute right-0 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default KindeziBAL;
