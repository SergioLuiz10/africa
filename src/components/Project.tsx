import React from 'react';
import { Target, Calendar, Users, Flag } from 'lucide-react';

interface ProjectProps {
  language: string;
}

const Project: React.FC<ProjectProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'O Projeto',
      subtitle: 'Nossa missão de conectar culturas e promover o turismo sustentável',
      vision: 'Nossa visão',
      visionText: 'Transformar a experiência do turismo africano através de conexões autênticas, sustentabilidade e valorização cultural.',
      mission: 'Nossa missão',
      missionText: 'Facilitar experiências turísticas que beneficiem as comunidades locais, preservem o patrimônio cultural e promovam a compreensão intercultural.',
      timeline: 'Nossa jornada',
      timelineEvents: [
        {
          year: '2015',
          title: 'Início da ideia',
          description: 'Concepção inicial do projeto após viagens exploratórias pela África Oriental.'
        },
        {
          year: '2018',
          title: 'Primeiras parcerias',
          description: 'Estabelecimento de relacionamentos com comunidades locais e operadores de turismo.'
        },
        {
          year: '2020',
          title: 'Lançamento oficial',
          description: 'Início das operações com foco em destinos na Tanzânia, Quênia e África do Sul.'
        },
        {
          year: '2023',
          title: 'Expansão continental',
          description: 'Ampliação para novos destinos incluindo Marrocos, Gana e Namíbia.'
        }
      ],
      goals: 'Nossos objetivos',
      goalsList: [
        'Empoderar comunidades locais através do turismo',
        'Preservar e promover o patrimônio cultural africano',
        'Criar experiências autênticas e transformadoras',
        'Minimizar o impacto ambiental do turismo',
        'Fomentar o entendimento intercultural'
      ]
    },
    en: {
      title: 'The Project',
      subtitle: 'Our mission to connect cultures and promote sustainable tourism',
      vision: 'Our vision',
      visionText: 'To transform the African tourism experience through authentic connections, sustainability, and cultural appreciation.',
      mission: 'Our mission',
      missionText: 'To facilitate tourism experiences that benefit local communities, preserve cultural heritage, and promote cross-cultural understanding.',
      timeline: 'Our journey',
      timelineEvents: [
        {
          year: '2015',
          title: 'Initial concept',
          description: 'Initial conception of the project after exploratory travels throughout East Africa.'
        },
        {
          year: '2018',
          title: 'First partnerships',
          description: 'Establishment of relationships with local communities and tourism operators.'
        },
        {
          year: '2020',
          title: 'Official launch',
          description: 'Start of operations focusing on destinations in Tanzania, Kenya, and South Africa.'
        },
        {
          year: '2023',
          title: 'Continental expansion',
          description: 'Expansion to new destinations including Morocco, Ghana, and Namibia.'
        }
      ],
      goals: 'Our goals',
      goalsList: [
        'Empower local communities through tourism',
        'Preserve and promote African cultural heritage',
        'Create authentic and transformative experiences',
        'Minimize environmental impact of tourism',
        'Foster cross-cultural understanding'
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="project" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Target className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.vision}</h3>
            <p className="text-lg text-gray-700">{t.visionText}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Flag className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.mission}</h3>
            <p className="text-lg text-gray-700">{t.missionText}</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{t.timeline}</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-1/2 w-1 h-full bg-orange-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {t.timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 hidden md:block"></div>
                    
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2">
                          {event.year}
                        </span>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h4>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center mb-6">
            <Users className="w-10 h-10 text-orange-500 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">{t.goals}</h3>
          </div>
          
          <ul className="grid md:grid-cols-2 gap-4">
            {t.goalsList.map((goal, index) => (
              <li key={index} className="flex items-center p-4 bg-orange-50 rounded-lg">
                <div className="mr-4 w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-800">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;