import React from 'react';
import { Heart, MessageCircle, Users, Brain } from 'lucide-react';

interface ProgramsProps {
  language: string;
}

const Programs: React.FC<ProgramsProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Programas',
      subtitle: 'Dignidade Menstrual',
      blocks: [
        {
          icon: <Heart className="w-12 h-12 text-orange-600" />,
          title: 'Saúde e Informação',
          description: 'Plataforma com vídeos, artigos e consultas sobre saúde menstrual, nutrição e bem-estar feminino.'
        },
        {
          icon: <MessageCircle className="w-12 h-12 text-orange-600" />,
          title: 'Acolhimento e Orientação',
          description: 'Chats ao vivo e fóruns com especialistas para tirar dúvidas e combater tabus.'
        },
        {
          icon: <Brain className="w-12 h-12 text-orange-600" />,
          title: 'Tecnologia a Favor',
          description: 'IA personalizada, rastreamento do ciclo, desafios gamificados e recomendações inteligentes.'
        },
        {
          icon: <Users className="w-12 h-12 text-orange-600" />,
          title: 'Empreendedorismo e Renda',
          description: 'Capacitação para produção e venda de absorventes ecológicos, com cursos e mentorias.'
        }
      ]
    },
    en: {
      title: 'Programs',
      subtitle: 'Menstrual Dignity',
      blocks: [
        {
          icon: <Heart className="w-12 h-12 text-orange-600" />,
          title: 'Health & Education',
          description: 'Platform with videos, articles, and teleconsultations on menstrual health and nutrition.'
        },
        {
          icon: <MessageCircle className="w-12 h-12 text-orange-600" />,
          title: 'Support & Guidance',
          description: 'Live chats and forums with experts to clarify doubts and break taboos.'
        },
        {
          icon: <Brain className="w-12 h-12 text-orange-600" />,
          title: 'Technology for Good',
          description: 'AI-based content, cycle tracker, gamified challenges, and personalized learning.'
        },
        {
          icon: <Users className="w-12 h-12 text-orange-600" />,
          title: 'Entrepreneurship & Income',
          description: 'Training for producing eco-friendly pads and support for menstrual business ideas.'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="programs" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-orange-100">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.blocks.map((program, index) => (
            <div 
              key={index} 
              className="bg-[#f4e3d7] rounded-xl p-8 shadow-sm border border-orange-200 transition-transform hover:scale-105"
            >
              <div className="mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-700">{program.title}</h3>
              <p className="text-[#4b2e1e]">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
