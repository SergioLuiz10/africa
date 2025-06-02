import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2 } from "lucide-react"; // Importando o ícone Globe2

interface SouthAfricaProps {
  language: string;
}

const SouthAfricaSection: React.FC<SouthAfricaProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Por que a escolha da África do Sul?",
      reasonParagraphs: [
        "A escolha da África do Sul como destino do África 360 é estratégica e simbólica. O país é a segunda maior economia do continente africano e possui uma infraestrutura avançada, especialmente em cidades como Joanesburgo e Cidade do Cabo.",
        "Além disso, a África do Sul abriga uma vibrante cena afroempreendedora e é sede de importantes instituições ligadas ao panafricanismo e à cultura da diáspora. Com uma população de mais de 60 milhões de pessoas e uma crescente classe média negra, o país representa um ambiente fértil para trocas comerciais, culturais e espirituais.",
        "Joanesburgo, por exemplo, é considerada o maior centro financeiro da África Subsaariana. A África do Sul também lidera debates sobre identidade africana, justiça social e reconciliação, temas centrais ao nosso projeto.",
        "Por isso, iniciar por lá é semear a reconexão ancestral num território que vive intensamente os desafios e as conquistas do continente. É o ponto de partida ideal para construir pontes entre o Brasil e o futuro da África.",
      ],
    },
    en: {
      title: "Why South Africa?",
      reasonParagraphs: [
        "South Africa is one of the most developed economies in Africa, and the choice of this destination for Africa 360 is both strategic and symbolic. It has advanced infrastructure, especially in cities like Johannesburg and Cape Town.",
        "It hosts a vibrant Afro-entrepreneurial scene and major institutions linked to Pan-Africanism and diaspora culture. With over 60 million people and a growing Black middle class, it offers fertile ground for cultural, spiritual, and commercial exchange.",
        "Johannesburg is the financial capital of Sub-Saharan Africa. The country also leads conversations on African identity, social justice, and reconciliation — central topics to our project.",
        "Starting there is about sowing ancestral reconnection in a land deeply marked by both challenges and triumphs. It’s the ideal starting point to build bridges between Brazil and Africa’s future.",
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
      prevIndex === t.reasonParagraphs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? t.reasonParagraphs.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      className="py-20 relative overflow-hidden bg-amber-900 bg-cover bg-center bg-no-repeat"
    >
      
      <div className="container mx-auto px-4 relative z-10"> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            {t.title}
          </h2>
        </motion.div>

        <div className="relative flex flex-col items-center justify-center bg-transparent max-w-6xl mx-auto">
          <button
            onClick={handlePrevious}
            className="absolute left-4 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 bg-[#7c4c1e] hover:bg-[#5c3716] text-white p-3 rounded-full shadow-md"
          >
            ←
          </button>
          
          <div className="w-full max-w-5xl h-[450px] flex items-center justify-center relative">
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
                className="absolute inset-0 w-full h-full p-8 flex flex-col justify-center items-center mx-auto bg-white border border-orange-200 rounded-2xl shadow-sm" 
              >
                {/* Ícone no topo */}
                <div className="mb-4 flex justify-center">
                  <Globe2 className="w-12 h-12 text-orange-600" />
                </div>
                {/* Texto original do parágrafo, agora dentro da caixa branca e com cor cinza */}
                <p className="text-gray-700 text-xl leading-relaxed text-center break-words max-w-2xl mx-auto"> 
                  {t.reasonParagraphs[currentIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 bg-[#7c4c1e] hover:bg-[#5c3716] text-white p-3 rounded-full shadow-md"
          >
            →
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {t.reasonParagraphs.map((_, idx) => ( 
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

export default SouthAfricaSection;