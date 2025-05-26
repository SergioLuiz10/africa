import React from "react";
import { Heart, MessageCircle, Users, Brain } from "lucide-react";

interface ProgramsProps {
  language: string;
}

const Programs: React.FC<ProgramsProps> = ({ language }) => {
  const content = {
    pt: {
      title: "Programas",
      subtitle: "Dignidade menstrual",
      blocks: [
        {
          icon: <Heart className="w-12 h-12 text-orange-600" />,
          title: "Saúde e Informação",
          description:
            "Oferece suporte, educação e acolhimento por meio de uma biblioteca rica com vídeos, artigos e podcasts sobre saúde menstrual, nutrição, higiene, bem-estar e doenças ginecológicas.",
        },
        {
          icon: <MessageCircle className="w-12 h-12 text-orange-600" />,
          title: "Acolhimento e Comunidade",
          description:
            "Portal de teleorientação com médicos, enfermeiros e educadores menstruais, chats ao vivo e fóruns por idade e país para troca de experiências e fortalecimento coletivo.",
        },
        {
          icon: <Brain className="w-12 h-12 text-orange-600" />,
          title: "Tecnologia e Engajamento",
          description:
            "Uso de inteligência artificial para personalização de conteúdo, rastreamento do ciclo, gamificação e desafios semanais com recompensas.",
        },
        {
          icon: <Users className="w-12 h-12 text-orange-600" />,
          title: "Empreendedorismo e Sustentabilidade",
          description:
            "Capacitação para produção e venda de absorventes ecológicos, com cursos e mentorias, unindo geração de renda à dignidade menstrual.",
        },
      ],
    },
    en: {
      title: "Programs",
      subtitle: "Menstrual Dignity",
      blocks: [
        {
          icon: <Heart className="w-12 h-12 text-orange-600" />,
          title: "Health & Information",
          description:
            "Offers support, education, and care through a rich library of videos, articles, and podcasts on menstrual health, nutrition, hygiene, wellness, and gynecological conditions.",
        },
        {
          icon: <MessageCircle className="w-12 h-12 text-orange-600" />,
          title: "Support & Community",
          description:
            "Tele-guidance portal with doctors, nurses, and menstrual educators, live chats, and forums segmented by age and country for experience sharing and collective empowerment.",
        },
        {
          icon: <Brain className="w-12 h-12 text-orange-600" />,
          title: "Technology & Engagement",
          description:
            "Artificial intelligence for content personalization, cycle tracking, gamification, and weekly challenges with rewards.",
        },
        {
          icon: <Users className="w-12 h-12 text-orange-600" />,
          title: "Entrepreneurship & Sustainability",
          description:
            "Training to produce and sell eco-friendly pads, with courses and mentorships, connecting income generation to menstrual dignity.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="programs" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t.title}
          </h2>
          <p className="text-xl text-orange-100 font-semibold">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.blocks.map((program, index) => (
            <div
              key={index}
              className="bg-[#f4e3d7] rounded-xl p-8 shadow-sm border border-orange-200 transition-transform hover:scale-105"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-orange-700">
                {program.title}
              </h3>
              <p className="text-[#4b2e1e] text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
