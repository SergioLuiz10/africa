import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2 } from "lucide-react";
import kindeziImage from "../assets/kindez.png";

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
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      isLoaded: 0.8, // Corrigido erro de digitação, era 'scale'
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
    <section id="kindezi" className="py-32 relative overflow-hidden">
      <img
        src={kindeziImage}
        alt="Kindezi background"
        className="absolute inset-0 w-full h-full object-cover object-[center_top] z-0"
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-5xl font-extrabold text-[#6d2b0c] mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-black">{t.subtitle}</p>
        </div>

      
        <div className="relative flex flex-col items-start justify-start bg-transparent"> 
          
         
          <div className="relative w-full max-w-lg h-[450px] flex items-center justify-center">
            
            
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
            >
              ←
            </button>

            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full h-full p-8 flex flex-col justify-center items-center bg-white border border-white/50 rounded-2xl shadow-sm"
              >
                <div className="mb-4 flex justify-center">
                  <Globe2 className="w-12 h-12 text-orange-600" />
                </div>
                <p className="text-gray-700 text-xl leading-relaxed text-center break-words">
                  {t.paragraphs[currentIndex]}
                </p>

                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center mt-4 space-x-2"> 
                  {t.paragraphs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentIndex ? "bg-black" : "bg-gray-400"
                      } transition-colors duration-200`}
                    ></button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

           
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#6d2b0c] hover:bg-[#5a230a] text-white p-3 rounded-full shadow-lg"
            >
              →
            </button>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default KindeziBAL;