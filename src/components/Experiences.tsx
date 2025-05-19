import React from 'react';
import { Compass, Camera, Utensils, Users } from 'lucide-react';

interface ExperiencesProps {
  language: string;
}

const Experiences: React.FC<ExperiencesProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Experiências Únicas',
      subtitle: 'Descubra o que a África tem de melhor para oferecer',
      experiences: [
        {
          icon: <Compass className="w-8 h-8 text-orange-500" />,
          title: 'Aventuras',
          description: 'Safáris, trilhas e expedições emocionantes'
        },
        {
          icon: <Camera className="w-8 h-8 text-orange-500" />,
          title: 'Fotografia',
          description: 'Paisagens deslumbrantes e momentos únicos'
        },
        {
          icon: <Utensils className="w-8 h-8 text-orange-500" />,
          title: 'Gastronomia',
          description: 'Sabores autênticos da culinária africana'
        },
        {
          icon: <Users className="w-8 h-8 text-orange-500" />,
          title: 'Cultura',
          description: 'Imersão nas tradições e costumes locais'
        }
      ]
    },
    en: {
      title: 'Unique Experiences',
      subtitle: 'Discover the best Africa has to offer',
      experiences: [
        {
          icon: <Compass className="w-8 h-8 text-orange-500" />,
          title: 'Adventures',
          description: 'Safaris, trails, and exciting expeditions'
        },
        {
          icon: <Camera className="w-8 h-8 text-orange-500" />,
          title: 'Photography',
          description: 'Stunning landscapes and unique moments'
        },
        {
          icon: <Utensils className="w-8 h-8 text-orange-500" />,
          title: 'Gastronomy',
          description: 'Authentic flavors of African cuisine'
        },
        {
          icon: <Users className="w-8 h-8 text-orange-500" />,
          title: 'Culture',
          description: 'Immersion in local traditions and customs'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-[#f4e3d7] rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                {experience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;