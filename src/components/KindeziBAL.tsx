import React from "react";

interface KindeziBALProps {
  language: string;
}

const KindeziBAL: React.FC<KindeziBALProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Kindezi BAL",
      subtitle: "Empoderar é cuidar. Cuidar é revolucionar.",
      paragraphs: [
        "Em Salvador, onde pulsa o coração negro do Brasil, acontecerá o Kindezi BAL, um movimento que vai além da formação em tecnologia...",
        "Inspirado na filosofia africana do Kindezi — o ato comunitário de cuidar, ensinar e guiar as novas gerações...",
        "É aqui, nas quebradas de Salvador, que começará essa revolução tecnológica potente...",
        "Formaremos as primeiras dez. Depois, serão cem. Mil. E incontáveis. Seremos muitas...",
      ],
    },
    en: {
      title: "Kindezi BAL",
      subtitle: "Empowering is caring. Caring is revolution.",
      paragraphs: [
        "In Salvador, where the Black heart of Brazil beats, Kindezi BAL will take place...",
        "Inspired by the African philosophy of Kindezi — the communal act of caring for, teaching, and guiding...",
        "Here, in the outskirts of Salvador, this powerful tech revolution begins...",
        "We’ll form the first ten. Then a hundred. A thousand. Countless. We’ll be many...",
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section
      id="kindezi"
      className="py-20 bg-[#8a3d14] relative overflow-hidden min-h-[720px]"
    >
      <div className="container mx-auto px-4 max-w-7xl h-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-lg text-white">{t.subtitle}</p>
        </div>

        {/* Carrossel de Texto com fade nas bordas e mais margem */}
        <div className="relative w-full mt-20">
          {/* Fade lateral esquerdo */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#8a3d14] to-transparent z-20 pointer-events-none"></div>
          {/* Fade lateral direito */}
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#8a3d14] to-transparent z-20 pointer-events-none"></div>

          {/* Carrossel */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee space-x-8">
              {[...t.paragraphs, ...t.paragraphs].map((paragraph, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-lg bg-white text-[#4a2c1a] border-l-4 border-orange-500 rounded-2xl p-6 text-lg shadow-md"
                >
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Tailwind custom animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default KindeziBAL  ;
