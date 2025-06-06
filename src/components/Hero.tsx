import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import logo from "../assets/Africa360-Logotipo-Negativo.png";
import backgroundImage from "../assets/Background.png";
import favela from "../assets/FavelaTech-Logotipo-Negativo.png";
import dela from "../assets/Delaaa.png";
import pais from "../assets/BANDEIRAS_separado.png";

interface HeroProps {
  language: "en" | "pt";
  onLanguageChange?: (lang: "en" | "pt") => void;
}

const Hero: React.FC<HeroProps> = ({ language, onLanguageChange }) => {
  const content = {
    pt: {
      description:
        "Reconexão Ancestral, Inovação e Internacionalização de Negócios",
    },
    en: {
      description:
        "Ancestral Reconnection, Innovation and Internationalization of Business",
    },
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    if (onLanguageChange) {
      onLanguageChange(language === "pt" ? "en" : "pt");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#8a5a3a",
        backgroundBlendMode: "soft-light",
      }}
    >
      {/* Menu de idioma e redes sociais */}
      <div className="fixed top-0 right-0 z-50 p-4 flex items-center gap-4 bg-[#3b1d10]/80 backdrop-blur-sm rounded-bl-lg">
        <button
          onClick={handleLanguageToggle}
          className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
          title={
            language === "pt" ? "Switch to English" : "Mudar para Português"
          }
        >
          <Globe size={22} />
          <span className="text-md font-medium">{language.toUpperCase()}</span>
        </button>

        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Twitter size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="text-center relative z-10 flex flex-col items-center justify-center mt-10">
        <img
          src={logo}
          alt="África 360"
          className="mx-auto w-72 sm:w-80 md:w-96 animate-pulse mb-8 mt-36"
        />

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 mb-8 drop-shadow-lg animate-fadeIn delay-100">
          {t.description}
        </p>

        <img
          src={pais}
          alt="Países"
          className="mx-auto w-80 sm:w-96 md:w-[400px] animate-float"
        />
      </div>

      {/* Logos laterais */}
      <img
        src={dela}
        alt="De Lá"
        className="absolute bottom-6 left-6 w-28 sm:w-32 animate-bounce"
      />

      <img
        src={favela}
        alt="Favela Tech"
        className="absolute bottom-6 right-6 w-28 sm:w-32 animate-bounce"
      />
    </section>
  );
};

export default Hero;
