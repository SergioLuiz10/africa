import React from "react";
import { motion } from "framer-motion";
import leoaMulher from "../assets/africasul.png";

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Sobre o Projeto África 360",
      description:
        "O Africa 360 é uma plataforma de intercâmbio, formação e reconexão criada para impulsionar o afroempreendedorismo brasileiro por meio da inovação, da ancestralidade e da conexão global. Unimos cultura, negócios e tecnologia em experiências transformadoras entre o Brasil e o continente africano, com foco na África do Sul.\n\nAcreditamos que ancestralidade e tecnologia não se opõem: elas se complementam. Por isso, nossas iniciativas unem tradição e modernidade, história e estratégia, comunidade e escala.\n\nLevamos afroempreendedores para viverem imersões internacionais, conectando-os com startups, hubs de inovação, líderes africanos e experiências culturais que transformam não só negócios, mas vidas.\n\nTambém desenvolvemos formações técnicas e práticas no Brasil para jovens negros de comunidades periféricas, ampliando seu acesso ao mercado de trabalho e ao empreendedorismo com base em direitos, pertencimento e impacto social.\n\nO Africa 360 é movimento. É ponte entre passado e futuro, entre Brasil e África, entre o que somos e o que podemos ser. Somos uma comunidade em expansão que acredita no poder de uma economia negra global, vibrante, colaborativa e cheia de propósito.",
    },
    en: {
      title: "About Africa 360 Project",
      description:
        "Africa 360 is a platform for exchange, training, and reconnection created to boost Brazilian Black entrepreneurship through innovation, ancestry, and global connection. We unite culture, business, and technology in transformative experiences between Brazil and the African continent, with a focus on South Africa.\n\nWe believe that ancestry and technology are not opposites: they complement each other. That’s why our initiatives combine tradition and modernity, history and strategy, community and scale.\n\nWe take Black entrepreneurs on international immersion programs, connecting them with startups, innovation hubs, African leaders, and cultural experiences that transform not only businesses but lives.\n\nWe also develop technical and practical training programs in Brazil for Black youth from underserved communities, expanding their access to the job market and entrepreneurship based on rights, belonging, and social impact.\n\nAfrica 360 is movement. It is a bridge between past and future, between Brazil and Africa, between who we are and who we can become. We are an expanding community that believes in the power of a global Black economy — vibrant, collaborative, and full of purpose.",
    },
  };

  const defaultLanguage = "pt";
  const selectedLanguage = Object.keys(content).includes(language)
    ? language
    : defaultLanguage;
  const t = content[selectedLanguage as keyof typeof content];

  return (
    <section
      id="about"
      className="py-20 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${leoaMulher})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="hidden md:block"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg ml-auto max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 drop-shadow-md">
              {t.title}
            </h2>
            <p className="text-xl text-stone-700 whitespace-pre-line drop-shadow-md">
              {t.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
