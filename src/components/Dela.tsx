import React from "react";
import imagemdela from "../assets/asminascontent 11.jpg";
import { motion } from "framer-motion";

interface DelaProps {
  language: "pt" | "en";
}

const Dela: React.FC<DelaProps> = ({ language }) => {
  const content = {
    pt: {
      title: "DeLá",
      subtitle: "Ecossistema de impulsão para afroempreendedores",
      intro:
        "A DeLá é uma empresa que nasce do compromisso com o fortalecimento econômico da população negra. Mais do que uma marca, é um ecossistema de impulsão para afroempreendedores, criado com propósito, visão global e respeito às raízes.",
      mission:
        "Com foco na capacitação e internacionalização de negócios liderados por pessoas negras, a DeLá promove iniciativas que conectam empreendedores a oportunidades reais, tanto no Brasil quanto em países da diáspora africana.",
      approach:
        "A atuação da DeLá se baseia na valorização da ancestralidade como força propulsora de inovação. É por meio da escuta ativa, da formação crítica e do estímulo à liderança preta que a empresa transforma ideias em movimentos, negócios em legados e histórias em potência econômica.",
      vision:
        "Acreditamos que internacionalizar um negócio é também internacionalizar uma narrativa. Por isso, a DeLá constrói pontes de acesso, diálogo e crescimento, reconhecendo o lugar do afroempreendedor no centro da mudança.",
      project:
        "O Africa 360, projeto estruturado pela DeLá, é uma das principais ações desse compromisso — um programa que conecta, forma e inspira afroempreendedores a expandirem seus negócios em conexão com o continente africano e a diáspora.",
      conclusion:
        "Com estratégia, afeto e visão de futuro, a DeLá transforma trajetórias negras em referências globais.",
    },
    en: {
      title: "DeLá",
      subtitle: "Empowerment ecosystem for Afro-entrepreneurs",
      intro:
        "DeLá is a company born from a commitment to the economic empowerment of Black communities. More than a brand, it is an empowerment ecosystem for Afro-entrepreneurs, created with purpose, global vision, and deep respect for ancestral roots.",
      mission:
        "With a focus on the training and internationalization of Black-led businesses, DeLá promotes initiatives that connect entrepreneurs with real opportunities in both Brazil and African diaspora countries.",
      approach:
        "DeLá’s approach is grounded in valuing ancestry as a driving force for innovation. Through active listening, critical education, and Black leadership development, the company turns ideas into movements, businesses into legacies, and stories into economic power.",
      vision:
        "We believe that internationalizing a business also means internationalizing a narrative. That’s why DeLá builds bridges of access, dialogue, and growth, placing Afro-entrepreneurs at the center of change.",
      project:
        "Africa 360, a program structured by DeLá, is one of the main initiatives of this commitment — a project that connects, trains, and inspires Afro-entrepreneurs to expand their businesses in connection with the African continent and the diaspora.",
      conclusion:
        "With strategy, care, and a future-focused vision, DeLá turns Black trajectories into global references.",
    },
  };

  const t = content[language];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const paragraphs = [
    t.intro,
    t.mission,
    t.approach,
    t.vision,
    t.project,
    t.conclusion,
  ];

  return (
    <section id="dela" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-gray-100">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl border-l-4 border-orange-500 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg mt-48"
          >
            <img
              src={imagemdela}
              alt="African women artisans"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dela;
