import React from "react";
import imagemLOGo from "../assets/favela.png.jpg";
import { Lightbulb, Rocket, Users, Brain } from "lucide-react";
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl border border-orange-300"
          >
            <img
              src={imagemLOGo}
              alt="Favela Tech"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Favela;
