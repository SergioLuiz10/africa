import React from 'react';
import { BookOpen, Globe, Users, Lightbulb } from 'lucide-react';

interface ProgramsProps {
  language: string;
}

const Programs: React.FC<ProgramsProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Nossos Programas',
      subtitle: 'Conheça as iniciativas que compõem o Projeto África 360',
      programs: [
        {
          icon: <BookOpen className="w-12 h-12 text-orange-500" />,
          title: 'Educação Cultural',
          description: 'Programas educacionais que promovem o conhecimento sobre a história, cultura e tradições africanas.',
        },
        {
          icon: <Globe className="w-12 h-12 text-blue-500" />,
          title: 'Turismo Sustentável',
          description: 'Iniciativas que fomentam o turismo responsável e sustentável em diversos países africanos.',
        },
        {
          icon: <Users className="w-12 h-12 text-green-500" />,
          title: 'Intercâmbio Cultural',
          description: 'Programas de intercâmbio que conectam pessoas de diferentes partes do mundo com comunidades africanas.',
        },
        {
          icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
          title: 'Inovação e Desenvolvimento',
          description: 'Apoio a projetos inovadores que contribuem para o desenvolvimento socioeconômico das comunidades africanas.',
        }
      ]
    },
    en: {
      title: 'Our Programs',
      subtitle: 'Discover the initiatives that make up Project Africa 360',
      programs: [
        {
          icon: <BookOpen className="w-12 h-12 text-orange-500" />,
          title: 'Cultural Education',
          description: 'Educational programs that promote knowledge about African history, culture, and traditions.',
        },
        {
          icon: <Globe className="w-12 h-12 text-blue-500" />,
          title: 'Sustainable Tourism',
          description: 'Initiatives that promote responsible and sustainable tourism in various African countries.',
        },
        {
          icon: <Users className="w-12 h-12 text-green-500" />,
          title: 'Cultural Exchange',
          description: 'Exchange programs that connect people from different parts of the world with African communities.',
        },
        {
          icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
          title: 'Innovation and Development',
          description: 'Support for innovative projects that contribute to the socioeconomic development of African communities.',
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;