import React from "react";
import { Leaf, Droplet, Wind, Globe, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import imagemdela2 from "../assets/imagemdela2.jpg";
import americacgbw from "../assets/imagemdela.jpg";
import SINDI from "../assets/Sindi.jpg";

interface CGBNProps {
  language: string;
}

const CGBN: React.FC<CGBNProps> = ({ language }) => {
  const content = {
    pt: {
      title: "CGBW",
      subtitle: "Circle Global Business Women",
      blocks: [
        {
          icon: <Globe className="w-8 h-8 text-orange-400" />,
          title: "Rede internacional de mulheres",
          description:
            "O Circle Global Business Women (CGBW) é uma rede internacional comprometida com o fortalecimento da presença feminina negra no cenário econômico global, atuando como ponte entre líderes africanas e da diáspora.",
        },
        {
          icon: <Leaf className="w-8 h-8 text-orange-400" />,
          title: "Missão do CGBW",
          description:
            "Empoderar mulheres empreendedoras com acesso a conhecimento, mercado, conexões internacionais e visibilidade global.",
        },
        {
          icon: <TreePine className="w-8 h-8 text-orange-400" />,
          title: "Presença no Brasil",
          description:
            "A liderança de Dijara Santos marca a chegada da rede na América Latina, conectando empreendedoras negras brasileiras e africanas.",
        },
        {
          icon: <Wind className="w-8 h-8 text-orange-400" />,
          title: "Ações em Destaque",
          description:
            "Fóruns, eventos internacionais, mentorias e programas de intercâmbio que fortalecem o afroempreendedorismo feminino.",
        },
      ],
      figures: [
        {
          name: "Dijara Santos",
          role: "Presidenta do CGBW no Brasil",
          image: imagemdela2,
        },
        {
          name: "Lucia Stanislas",
          role: "Presidenta do CGBW na América",
          image: americacgbw,
        },
        {
          name: "Sindiswa Mzamo",
          role: "Presidenta Global do CGBW",
          image: SINDI,
        },
      ],
    },
    en: {
      title: "CGBW",
      subtitle: "Circle Global Business Women",
      blocks: [
        {
          icon: <Globe className="w-8 h-8 text-orange-400" />,
          title: "International Women’s Network",
          description:
            "CGBW is a global businesswomen’s network dedicated to strengthening the presence of Black women in the economic arena, bridging leaders from Africa and the diaspora.",
        },
        {
          icon: <Leaf className="w-8 h-8 text-orange-400" />,
          title: "CGBW Mission",
          description:
            "To empower entrepreneurial women through access to knowledge, markets, international connections, and global visibility.",
        },
        {
          icon: <TreePine className="w-8 h-8 text-orange-400" />,
          title: "Presence in Brazil",
          description:
            "The leadership of Dijara Santos marks the expansion of CGBW into Latin America, connecting Brazilian and African Black women entrepreneurs.",
        },
        {
          icon: <Wind className="w-8 h-8 text-orange-400" />,
          title: "Featured Actions",
          description:
            "Forums, international events, mentoring, and exchange programs that empower Black women entrepreneurs.",
        },
      ],
      figures: [
        {
          name: "Dijara Santos",
          role: "CGBW President in Brazil",
          image: imagemdela2,
        },
        {
          name: "Lucia Stanislas",
          role: "CGBW President in America",
          image: americacgbw,
        },
        {
          name: "Sindiswa Mzamo",
          role: "Global President of CGBW",
          image: SINDI,
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="cgbn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-2">{t.title}</h2>
          <p className="text-lg text-gray-700">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.blocks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-amber-900 text-white p-6 rounded-xl border-l-4 border-orange-400 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-orange-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-amber-900">
          Lideranças em Destaque
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {t.figures.map((fig, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={fig.image}
                alt={fig.name}
                className="w-full h-80 object-cover object-top"
              />
              <div className="bg-amber-900 p-4 text-center">
                <h4 className="text-white text-lg font-bold mb-1">
                  {fig.name}
                </h4>
                <p className="text-orange-100 text-sm">{fig.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CGBN;
