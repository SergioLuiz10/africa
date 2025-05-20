import React from 'react';
import imagemLOGo from '../assets/favela.png.jpg';
import { Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface FavelaProps {
  language: string;
}

const Favela: React.FC<FavelaProps> = ({ language }) => {
  const content = {
    pt: {
      titleMain: 'Favela Tech',
      subtitle: 'Tecnologia que transforma realidades',
      highlights: [
        {
          title: 'Capacitação',
          icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
          text: 'Capacitação em tecnologia e inovação para jovens negros periféricos. A Favela Tech rompe barreiras sociais com ensino prático e acessível em áreas como programação e marketing.'
        },
        {
          title: 'Protagonismo',
          icon: <Rocket className="w-8 h-8 text-orange-400" />,
          text: 'Mais do que técnica, é protagonismo negro na tecnologia. A startup conecta talentos das favelas com o mercado, formando líderes e impulsionando transformações sociais reais.'
        }
      ]
    },
    en: {
      titleMain: 'Favela Tech',
      subtitle: 'Technology that Transforms Realities',
      highlights: [
        {
          title: 'Training',
          icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
          text: 'Training in technology and innovation for underserved Black youth. Favela Tech breaks barriers with accessible, hands-on education in programming, marketing, and more.'
        },
        {
          title: 'Leadership',
          icon: <Rocket className="w-8 h-8 text-orange-400" />,
          text: 'More than just technical skills—it’s about Black leadership in tech. The startup connects favela talents with real-world opportunities, forming leaders and driving social change.'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="favela" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Título centralizado */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-amber-900 mb-2">{t.titleMain}</h2>
          <p className="text-xl text-gray-600 font-medium">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto interativo */}
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
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-orange-100 text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Imagem lateral */}
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
