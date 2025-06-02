import React, { useRef } from "react";
import { motion } from "framer-motion";

interface SouthAfricaProps {
  language: string;
}

const SouthAfricaSection: React.FC<SouthAfricaProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Por que a escolha da África do Sul?",
      reasonParagraphs: [
        "A escolha da África do Sul como destino do África 360 é estratégica e simbólica.",
        "O país é a segunda maior economia do continente africano e possui uma infraestrutura avançada, especialmente em cidades como Joanesburgo e Cidade do Cabo.",
        "Além disso, a África do Sul abriga uma vibrante cena afroempreendedora e é sede de importantes instituições ligadas ao panafricanismo e à cultura da diáspora.",
        "Com uma população de mais de 60 milhões de pessoas e uma crescente classe média negra, o país representa um ambiente fértil para trocas comerciais, culturais e espirituais.",
        "Joanesburgo, por exemplo, é considerada o maior centro financeiro da África Subsaariana.",
        "A África do Sul também lidera debates sobre identidade africana, justiça social e reconciliação, temas centrais ao nosso projeto.",
        "Por isso, iniciar por lá é semear a reconexão ancestral num território que vive intensamente os desafios e as conquistas do continente.",
        "É o ponto de partida ideal para construir pontes entre o Brasil e o futuro da África.",
      ],
    },
    en: {
      title: "Why South Africa?",
      reasonParagraphs: [
        "South Africa is one of the most developed economies in Africa, and the choice of this destination for Africa 360 is both strategic and symbolic.",
        "It has advanced infrastructure, especially in cities like Johannesburg and Cape Town.",
        "It hosts a vibrant Afro-entrepreneurial scene and major institutions linked to Pan-Africanism and diaspora culture.",
        "With over 60 million people and a growing Black middle class, it offers fertile ground for cultural, spiritual, and commercial exchange.",
        "Johannesburg is the financial capital of Sub-Saharan Africa.",
        "The country also leads conversations on African identity, social justice, and reconciliation — central topics to our project.",
        "Starting there is about sowing ancestral reconnection in a land deeply marked by both challenges and triumphs.",
        "It’s the ideal starting point to build bridges between Brazil and Africa’s future.",
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
    <section className="py-20 bg-amber-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.title}
          </h2>
        </motion.div>

        {/* Carrossel com setas */}
        <div className="relative">
          {/* Botões de navegação */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#7c4c1e] hover:bg-[#5c3716] text-white p-3 rounded-full shadow-md"
          >
            ←
          </button>
          <div
            ref={carouselRef}
            className="flex gap-6 snap-x snap-mandatory overflow-x-auto px-14 pb-4 scroll-smooth"
          >
            {t.reasonParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[400px] bg-[#f4e3d7] rounded-xl p-6 shadow-sm border border-orange-200 snap-center transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-[#4b2e1e] text-sm leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#7c4c1e] hover:bg-[#5c3716] text-white p-3 rounded-full shadow-md"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SouthAfricaSection;
