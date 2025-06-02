import React, { useState, useEffect } from "react";
import imagemLOGo from "../assets/favela.png.jpg";
import imagemLOGo1 from "../assets/favelatech1 - Copia.jpg";
import imagemLOGo2 from "../assets/favelatech2 - Copia.jpg";
import imagemLOGo3 from "../assets/favelatech3.jpg";
import imagemLOGo4 from "../assets/favelatech4.jpg";
import imagemLOGo5 from "../assets/favelatech5.jpg";

import {
  Lightbulb,
  Rocket,
  Users,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface FavelaProps {
  language: string;
}

const Favela: React.FC<FavelaProps> = ({ language }) => {
  const content = {
    pt: {
      titleMain: "Favela Tech",
      subtitle: "Tecnologia que transforma realidades",
      highlights: [
        {
          title: "Capacitação",
          icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
          text: "A Favela Tech oferece formações acessíveis e práticas em programação, design, marketing, inovação e negócios, com foco na geração de renda para jovens negros periféricos.",
        },
        {
          title: "Protagonismo Negro",
          icon: <Rocket className="w-8 h-8 text-orange-400" />,
          text: "Mais do que técnica, a Favela Tech promove liderança e protagonismo negro na tecnologia, conectando talentos das favelas a oportunidades reais no mercado de trabalho e startups.",
        },
        {
          title: "Transformação Social",
          icon: <Users className="w-8 h-8 text-orange-400" />,
          text: "A Favela Tech forma líderes, fomenta ideias e impulsiona transformações sociais, criando tecnologia com identidade e pertencimento.",
        },
        {
          title: "Futuro em Mãos Negras",
          icon: <Brain className="w-8 h-8 text-orange-400" />,
          text: "Jovens negros periféricos não apenas consomem tecnologia — eles a criam, moldam e reinventam quando têm acesso, apoio e visibilidade.",
        },
      ],
    },
    en: {
      titleMain: "Favela Tech",
      subtitle: "Technology that transforms realities",
      highlights: [
        {
          title: "Training",
          icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
          text: "Favela Tech provides accessible, practical training in coding, design, marketing, innovation, and entrepreneurship, focused on income generation for underserved Black youth.",
        },
        {
          title: "Black Leadership",
          icon: <Rocket className="w-8 h-8 text-orange-400" />,
          text: "Beyond technical skills, Favela Tech fosters Black leadership in technology, connecting favela talent with real opportunities in the job market and startup ecosystem.",
        },
        {
          title: "Social Impact",
          icon: <Users className="w-8 h-8 text-orange-400" />,
          text: "Favela Tech builds leaders, nurtures ideas, and drives social change, delivering tech with identity and a sense of belonging.",
        },
        {
          title: "Black Futures",
          icon: <Brain className="w-8 h-8 text-orange-400" />,
          text: "Underserved Black youth don’t just consume tech — they create, shape, and reinvent it when given access, support, and visibility.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  const images = [
    imagemLOGo,
    imagemLOGo1,
    imagemLOGo2,
    imagemLOGo3,
    imagemLOGo4,
    imagemLOGo5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="favela" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-amber-900 mb-2">
            {t.titleMain}
          </h2>
          <p className="text-xl text-gray-600 font-medium">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {t.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-amber-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-orange-400"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-orange-100 text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-xl border border-orange-300">
            <img
              src={images[currentIndex]}
              alt={`Favela Tech ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-orange-100"
            >
              <ChevronLeft className="text-orange-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-orange-100"
            >
              <ChevronRight className="text-orange-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favela;
