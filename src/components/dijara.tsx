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
      subtitle: "Liderança Negra em Movimento Global",
      slides: [
        {
          img: dijara1,
          text:
            "Dijara Santos é uma mulher negra, mãe solo, médica veterinária formada pela Universidade do Estado da Bahia e CEO do projeto Africa 360...",
        },
        {
          img: dijara2,
          text:
            "Com mais de 12 anos de experiência como empreendedora e formadora de profissionais, atua na criação de soluções em educação...",
        },
        {
          img: dijara3,
          text:
            "Além disso, é realizadora do Fancy Africa Brasil, um evento de moda internacional que celebra o luxo, a identidade e o empreendedorismo afrocentrado...",
        },
        {
          img: dijara4,
          text:
            "Através do Africa 360, Dijara visa se consolidar como referência na internacionalização de afroempreendedores...",
        },
      ],
    },
    en: {
      name: "Dijara Santos",
      subtitle: "Black Leadership in Global Movement",
      slides: [
        {
          img: dijara1,
          text:
            "Dijara Santos is a Black woman, single mother, veterinarian graduated from the State University of Bahia and CEO of the Africa 360 project...",
        },
        {
          img: dijara2,
          text:
            "With over 12 years of experience as an entrepreneur and educator, she develops solutions in education, innovation, and market access...",
        },
        {
          img: dijara3,
          text:
            "She is also the founder of Fancy Africa Brasil, an international fashion event celebrating luxury, identity, and Afrocentric entrepreneurship...",
        },
        {
          img: dijara4,
          text:
            "Through Africa 360, Dijara aims to become a reference in the internationalization of Black entrepreneurship...",
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

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10 items-center bg-[#78350f] p-6 rounded-xl shadow-lg border-l-4 border-orange-400 max-w-5xl w-full"
            >
              <img
                src={t.slides[current].img}
                alt="Dijara"
                className="w-full max-w-sm mx-auto rounded-xl shadow-md"
              />
              <p className="text-white text-sm md:text-base leading-relaxed text-orange-100">
                {t.slides[current].text}
              </p>
            </motion.div>
          </AnimatePresence>

          <button onClick={nextSlide} className="absolute right-0 p-2">
            <ArrowRight className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DijaraSection;
