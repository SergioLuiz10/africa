import React, { useState } from "react"; // Adicionado useState
import { motion, AnimatePresence } from "framer-motion"; // Adicionado motion e AnimatePresence
import { Globe2 } from "lucide-react"; // Importar Globe2 para o ícone

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
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0, 
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === t.paragraphs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? t.paragraphs.length - 1 : prevIndex - 1
    );
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

        {/* ALTERADO: Layout para carrossel de item único */}
        <div className="relative flex flex-col items-center justify-center bg-transparent max-w-6xl mx-auto">
          {/* Botão ANTERIOR */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
          >
            ←
          </button>

          {/* Container do Slide (ÁREA ONDE O TEXTO APARECE) */}
          <div className="w-full max-w-4xl h-[450px] flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="absolute inset-0 w-full h-full p-8 flex flex-col justify-center items-center mx-auto bg-white border border-white/50 rounded-2xl shadow-sm" // ESTILO DO CARD
              >
                {/* Ícone no topo do card */}
                <div className="mb-4 flex justify-center">
                  <Globe2 className="w-12 h-12 text-orange-600" /> {/* Ajuste cor se precisar */}
                </div>
                {/* Texto do parágrafo original */}
                <p className="text-gray-700 text-xl leading-relaxed text-center break-words max-w-2xl mx-auto">
                  {t.paragraphs[currentIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botão PRÓXIMO */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
          >
            →
          </button>

          {/* Indicadores de slide (pontinhos) */}
          <div className="flex justify-center mt-4 space-x-2">
            {t.paragraphs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 w-2 rounded-full ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                } transition-colors duration-200`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KindeziBAL;