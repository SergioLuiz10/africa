import React from "react";
import dijaraImage from "../assets/DijaraaaaSem.png";
import { motion } from "framer-motion";

interface Dijara {
  language: "pt" | "en";
}

const DijaraSection: React.FC<Dijara> = ({ language }) => {
  const content = {
    pt: {
      name: "Dijara Santos",
      subtitle: "Liderança Negra em Movimento Global",
      paragraphs: [
        "Dijara Santos é uma mulher negra, mãe solo, médica veterinária formada pela Universidade do Estado da Bahia e CEO do projeto Africa 360, uma das iniciativas mais potentes de internacionalização de afroempreendedores no Brasil. Dijara construiu sua trajetória com coragem, visão estratégica e um propósito claro: abrir caminhos para que mais pessoas negras possam acessar oportunidades globais de negócios.",
        "Com mais de 12 anos de experiência como empreendedora e formadora de profissionais, atua na criação de soluções em educação, inovação e mercado para jovens periféricos e afroempreendedores. Sua atuação vai além do território nacional: hoje, está presente em quatro países africanos (África do Sul, Lesotho, Angola e Moçambique). Em 2024, foi nomeada pela primeira-dama do Reino de Lesotho, Sindiswa Mzamo, como Presidenta do Circle Global Business Women (CGBW) no Brasil – uma rede internacional de mulheres de negócios que conecta líderes do continente africano à diáspora, fomentando parcerias econômicas, culturais e sociais.",
        "Além disso, é realizadora do Fancy Africa Brasil, um evento de moda internacional em parceria com o estilista e líder cultural King Levi, que celebra o luxo, a identidade e o empreendedorismo afrocentrado por meio da moda. O evento, que une passarelas, negócios e ancestralidade, tem como missão valorizar criadores negros e promover a circulação de marcas afro em um circuito global.",
        "Através do Africa 360, Dijara visa se consolidar como referência na internacionalização de afroempreendedores, posicionando o Brasil como elo estratégico entre inovação, cultura e economia negra global. Sua liderança é uma combinação rara de sensibilidade, potência e estratégia — e está redesenhando o futuro de forma coletiva, inclusiva e afrocentrada.",
      ],
    },
    en: {
      name: "Dijara Santos",
      subtitle: "Black Leadership in Global Movement",
      paragraphs: [
        "Dijara Santos is a Black woman, single mother, veterinarian graduated from the State University of Bahia and CEO of the Africa 360 project, one of the most powerful initiatives for the internationalization of Black entrepreneurs in Brazil. Dijara built her path with courage, strategic vision, and a clear purpose: to open pathways for more Black people to access global business opportunities.",
        "With over 12 years of experience as an entrepreneur and educator, she develops solutions in education, innovation, and market access for marginalized youth and Black entrepreneurs. Her impact extends beyond national borders — today, she is active in four African countries (South Africa, Lesotho, Angola, and Mozambique). In 2024, she was appointed by the First Lady of the Kingdom of Lesotho, Sindiswa Mzamo, as President of the Circle Global Business Women (CGBW) in Brazil — an international network of businesswomen connecting African leaders to the diaspora and fostering economic, cultural, and social partnerships.",
        "She is also the founder of Fancy Africa Brasil, an international fashion event in partnership with designer and cultural leader King Levi. The event celebrates luxury, identity, and Afrocentric entrepreneurship through fashion. It combines runways, business, and ancestry, aiming to uplift Black creators and promote the circulation of Afro brands in global markets.",
        "Through Africa 360, Dijara aims to become a reference in the internationalization of Black entrepreneurship, positioning Brazil as a strategic bridge between innovation, culture, and the global Black economy. Her leadership is a rare blend of sensitivity, power, and strategy — reshaping the future in a collective, inclusive, and Afrocentric way.",
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-[#603e2e] py-6 md:py-10" id="dijara">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            {t.name}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={dijaraImage}
              alt="Dijara Santos"
              className="w-[85%] max-w-sm rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="space-y-5">
            {t.paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#78350f] text-white p-5 rounded-xl shadow-md border-l-4 border-orange-400"
              >
                <p className="text-orange-100 text-sm leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DijaraSection;
