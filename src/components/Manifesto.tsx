import React, { useEffect, useRef } from "react";
import { ScrollText, Quote } from "lucide-react";
import imagemManifesto from "../assets/MANI-34.jpg";

interface ManifestoProps {
  language: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    pt: {
      title: "Mánifesto Africa 360",
      subtitle: "Por Inteiro. Por Inteiros.",
      introduction:
        "Somos filhos da diáspora, netos de reis e rainhas, herdeiros de civilizações que construíram ciência, arte, espiritualidade e resistência.",
      principles: [
        {
          title: "Conexão",
          content:
            "O Africa 360 nasce do desejo profundo de reconectar, resgatar e reinventar a África que vive em nós — em cada ritmo, em cada prato, em cada negócio que prospera, em cada moda que afirma, em cada história que se levanta.",
        },
        {
          title: "Visão Circular",
          content:
            "Somos uma plataforma de visão circular: olhamos para o passado com respeito, para o presente com coragem e para o futuro com estratégia.",
        },
        {
          title: "Cultura Viva",
          content:
            "Celebramos a cultura afro-brasileira, reverberamos a inovação dos negócios negros, contamos a beleza da moda que veste identidade, e exaltamos a gastronomia que carrega sabor e memória.",
        },
        {
          title: "Força em Movimento",
          content:
            "Africa 360 é uma rede viva. É Salvador como capital afro do Brasil. É Moçambique na passarela. É Joanesburgo com sua força criativa. É a Bahia de corpo, alma e propósito.",
        },
      ],
      quote:
        "Somos conexão. Somos legado. Somos pretos em movimento — com voz, com sonho, com estratégia e com poder.",
      quoteAuthor: "Equipe Africa 360",
    },
    en: {
      title: "Africa 360 Manifesto",
      subtitle: "Fully. As Wholes.",
      introduction:
        "We are children of the diaspora, grandchildren of kings and queens, heirs to civilizations that built science, art, spirituality, and resistance.",
      principles: [
        {
          title: "Connection",
          content:
            "Africa 360 is born from the deep desire to reconnect, reclaim, and reinvent the Africa that lives within us — in every rhythm, every dish, every thriving business, every empowering fashion, every story that rises.",
        },
        {
          title: "Circular Vision",
          content:
            "We are a platform with a circular vision: we look to the past with respect, to the present with courage, and to the future with strategy.",
        },
        {
          title: "Living Culture",
          content:
            "We celebrate Afro-Brazilian culture, amplify Black business innovation, showcase fashion that wears identity, and exalt cuisine that carries flavor and memory.",
        },
        {
          title: "Strength in Motion",
          content:
            "Africa 360 is a living network. It is Salvador as the Afro capital of Brazil. It is Mozambique on the runway. It is Johannesburg with its creative power. It is Bahia in body, soul, and purpose.",
        },
      ],
      quote:
        "We are connection. We are legacy. We are Black in motion — with voice, with dreams, with strategy, and with power.",
      quoteAuthor: "Africa 360 Team",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="py-20 bg-amber-900 scroll-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-gray-100">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-slide-in-left">
            <ScrollText className="w-16 h-16 text-orange-500 mb-6" />
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              {t.introduction}
            </p>

            <div className="space-y-6">
              {t.principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-l-4 border-orange-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-[#4a2c1a]">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700">{principle.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 animate-slide-in-right">
            <div className="bg-gray-100 p-8 rounded-xl shadow-md relative">
              <Quote className="w-12 h-12 text-orange-300 absolute -top-6 -left-6" />
              <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <p className="text-right font-medium text-[#4a2c1a]">
                — {t.quoteAuthor}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                <img
                  src={imagemManifesto}
                  alt="African landscape"
                  className="w-full h-auto"
                />
                <div className="bg-[#4a2c1a] py-4 text-center">
                  <h3 className="text-white text-2xl font-semibold animate-fade-in">
                    Turma Mario Nelson Carvalho
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
