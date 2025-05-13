import React from 'react';
import { BookOpen, Users, Target, Briefcase, MessageSquare } from 'lucide-react';

interface MentorshipProps {
  language: string;
}

const Mentorship: React.FC<MentorshipProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Programa de Mentoria',
      subtitle: 'Desenvolvimento profissional e pessoal para afroempreendedores',
      areas: [
        {
          icon: <BookOpen className="w-8 h-8 text-orange-500" />,
          title: 'Letramento Racial',
          description: 'Compreensão profunda da identidade e contexto racial'
        },
        {
          icon: <Users className="w-8 h-8 text-orange-500" />,
          title: 'Liderança',
          description: 'Desenvolvimento de habilidades de liderança e gestão'
        },
        {
          icon: <Target className="w-8 h-8 text-orange-500" />,
          title: 'Marca Pessoal',
          description: 'Construção e fortalecimento da sua marca pessoal'
        },
        {
          icon: <Briefcase className="w-8 h-8 text-orange-500" />,
          title: 'Modelagem de Negócios',
          description: 'Estratégias para estruturação e crescimento do negócio'
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
          title: 'Comunicação e Oratória',
          description: 'Aperfeiçoamento das habilidades de comunicação'
        }
      ]
    },
    en: {
      title: 'Mentorship Program',
      subtitle: 'Professional and personal development for Afro-entrepreneurs',
      areas: [
        {
          icon: <BookOpen className="w-8 h-8 text-orange-500" />,
          title: 'Racial Literacy',
          description: 'Deep understanding of racial identity and context'
        },
        {
          icon: <Users className="w-8 h-8 text-orange-500" />,
          title: 'Leadership',
          description: 'Development of leadership and management skills'
        },
        {
          icon: <Target className="w-8 h-8 text-orange-500" />,
          title: 'Personal Branding',
          description: 'Building and strengthening your personal brand'
        },
        {
          icon: <Briefcase className="w-8 h-8 text-orange-500" />,
          title: 'Business Modeling',
          description: 'Strategies for business structuring and growth'
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
          title: 'Communication',
          description: 'Enhancement of communication skills'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="mentorship" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.areas.map((area, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;