import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dijara1 from "../assets/dijara1.jpg";
import dijara2 from "../assets/dijara2.jpg";
import dijara3 from "../assets/dijara3.jpg";
import dijara4 from "../assets/dijara4.jpg";

interface Dijara {
  language: "pt" | "en";
}

const DijaraSection: React.FC<Dijara> = ({ language }) => {
  const content = {
    pt: {
      name: "Dijara Santos",
      subtitle: "CEO - África 360",
      slides: [
        {
          img: dijara1,
          text: `Dijara Santos é uma mulher negra, mãe solo, médica veterinária formada pela Universidade do Estado da Bahia e CEO do projeto Africa 360, uma das iniciativas mais potentes de internacionalização de afroempreendedores no Brasil. Dijara construiu sua trajetória com coragem, visão estratégica e um propósito claro: abrir caminhos para que mais pessoas negras possam acessar oportunidades globais de negócios.`,
        },
        {
          img: dijara2,
          text: `Com mais de 12 anos de experiência como empreendedora e formadora de profissionais, atua na criação de soluções em educação, inovação e mercado para jovens periféricos e afroempreendedores. Sua atuação vai além do território nacional: hoje, está presente em quatro países africanos (África do Sul, Lesotho, Angola e Moçambique). Em 2024, foi nomeada pela primeira-dama do Reino de Lesotho, Sindiswa Mzamo, como Presidenta do Circle Global Business Women (CGBW) no Brasil – uma rede internacional de mulheres de negócios que conecta líderes do continente africano à diáspora, fomentando parcerias econômicas, culturais e sociais.`,
        },
        {
          img: dijara3,
          text: `Além disso, é realizadora do Fancy Africa Brasil, um evento de moda internacional em parceria com o estilista e líder cultural King Levi, que celebra o luxo, a identidade e o empreendedorismo afrocentrado por meio da moda. O evento, que une passarelas, negócios e ancestralidade, tem como missão valorizar criadores negros e promover a circulação de marcas afro em um circuito global.`,
        },
        {
          img: dijara4,
          text: `Através do Africa 360, Dijara visa se consolidar como referência na internacionalização de afroempreendedores, posicionando o Brasil como elo estratégico entre inovação, cultura e economia negra global. Sua liderança é uma combinação rara de sensibilidade, potência e estratégia — e está redesenhando o futuro de forma coletiva, inclusiva e afrocentrada.`,
        },
      ],
    },
    en: {
      name: "Dijara Santos",
      subtitle: "CEO - África 360",
      slides: [
        {
          img: dijara1,
          text: `Dijara Santos is a Black woman, single mother, veterinarian graduated from the State University of Bahia and CEO of the Africa 360 project, one of the most powerful initiatives for the internationalization of Black entrepreneurs in Brazil. She built her path with courage, strategic vision, and a clear purpose: to open doors for more Black people to access global business opportunities.`,
        },
        {
          img: dijara2,
          text: `With over 12 years of experience as an entrepreneur and professional trainer, she creates solutions in education, innovation, and market access for youth from the outskirts and Black entrepreneurs. Her work goes beyond Brazil — she's active in four African countries (South Africa, Lesotho, Angola, and Mozambique). In 2024, she was appointed by the First Lady of the Kingdom of Lesotho, Sindiswa Mzamo, as President of the Circle Global Business Women (CGBW) in Brazil — a global network of businesswomen connecting African leaders to the diaspora, fostering economic, cultural, and social partnerships.`,
        },
        {
          img: dijara3,
          text: `She is also the creator of Fancy Africa Brasil, an international fashion event in partnership with cultural leader and stylist King Levi, celebrating luxury, identity, and Afrocentric entrepreneurship through fashion. The event brings together runways, business, and ancestry with the mission of valuing Black creators and promoting the circulation of Afro brands in a global circuit.`,
        },
        {
          img: dijara4,
          text: `Through Africa 360, Dijara aims to become a reference in the internationalization of Black entrepreneurs, positioning Brazil as a strategic link between innovation, culture, and the global Black economy. Her leadership is a rare combination of sensitivity, power, and strategy — reshaping the future collectively, inclusively, and with an Afrocentric lens.`,
        },
      ],
    },
  };

  const t = content[language];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % t.slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + t.slides.length) % t.slides.length);

  return (
    <section className="bg-[#603e2e] py-10 px-4 md:px-10" id="dijara">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white">{t.name}</h2>
          <p className="mt-2 text-gray-300">{t.subtitle}</p>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={prevSlide} className="absolute left-0 p-2">
            <ArrowLeft className="text-white w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-10 items-center bg-[#78350f] p-6 rounded-xl shadow-lg border-l-4 border-orange-400 w-full"
              >
                <img
                  src={t.slides[current].img}
                  alt="Dijara"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-md"
                />
                <p className="text-white text-sm md:text-base leading-relaxed text-orange-100 whitespace-pre-line">
                  {t.slides[current].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextSlide} className="absolute right-0 p-2">
            <ArrowRight className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DijaraSection;
