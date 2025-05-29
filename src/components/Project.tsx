import React from "react";
import { motion } from "framer-motion";
import imagemAfrica from "../assets/Movvvlogo.png"; // Ex: MOV
import imagemCuriosidades from "../assets/Movvvlogo.png"; // Ex: MOV

interface SouthAfricaProps {
  language: string;
}

const SouthAfricaSection: React.FC<SouthAfricaProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Por que a escolha da África do Sul?",
      reason: `A escolha da África do Sul como destino do África 360 é estratégica e simbólica. O país é a segunda maior economia do continente africano e possui uma infraestrutura avançada, especialmente em cidades como Joanesburgo e Cidade do Cabo. Além disso, a África do Sul abriga uma vibrante cena afroempreendedora e é sede de importantes instituições ligadas ao panafricanismo e à cultura da diáspora. Com uma população de mais de 60 milhões de pessoas e uma crescente classe média negra, o país representa um ambiente fértil para trocas comerciais, culturais e espirituais. Joanesburgo, por exemplo, é considerada o maior centro financeiro da África Subsaariana. A África do Sul também lidera debates sobre identidade africana, justiça social e reconciliação, temas centrais ao nosso projeto. Por isso, iniciar por lá é semear a reconexão ancestral num território que vive intensamente os desafios e as conquistas do continente. É o ponto de partida ideal para construir pontes entre o Brasil e o futuro da África.`,
      factsTitle: "Curiosidades sobre a África do Sul",
      facts: [
        "Tem 11 línguas oficiais – um dos países mais diversos linguisticamente do mundo.",
        "A Table Mountain é uma das Novas Sete Maravilhas da Natureza.",
        "É lar do Kruger Park, um dos maiores safáris do mundo.",
        "Joanesburgo abriga a maior floresta urbana do planeta.",
        "Sede do Parlamento Pan-Africano.",
      ],
    },
    en: {
      title: "Why South Africa?",
      reason:
        "South Africa is one of the most developed economies in Africa, with great potential for cultural, academic, and economic exchange. The choice strengthens Brazilian presence in a globally influential and culturally rich country.",
      factsTitle: "Fun Facts About South Africa",
      facts: [
        "It has 11 official languages – one of the most linguistically diverse countries in the world.",
        "Table Mountain is one of the New Seven Wonders of Nature.",
        "Home to Kruger Park, one of the largest safari parks in the world.",
        "Johannesburg hosts the world’s largest urban forest.",
        "Seat of the Pan-African Parliament.",
      ],
    },
  };

  const t = content[language as "pt" | "en"];

  return (
    <section className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 - Texto longo */}
          <motion.div
            className="bg-[#f4e3d7] rounded-xl overflow-hidden shadow-sm border border-orange-200 transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={imagemAfrica}
              alt="África do Sul"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-3">
                {language === "pt"
                  ? "Conexão Estratégica"
                  : "Strategic Connection"}
              </h3>
              <p className="text-[#4b2e1e] text-sm leading-relaxed whitespace-pre-line">
                {t.reason}
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Curiosidades */}
          <motion.div
            className="bg-[#f4e3d7] rounded-xl overflow-hidden shadow-sm border border-orange-200 transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={imagemCuriosidades}
              alt="Curiosidades da África do Sul"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-3">
                {t.factsTitle}
              </h3>
              <ul className="list-disc list-inside text-[#4b2e1e] text-sm space-y-2">
                {t.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SouthAfricaSection;
