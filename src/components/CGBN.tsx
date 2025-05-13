import React from 'react';
import { Leaf, Droplet, Wind, Globe, TreePine } from 'lucide-react';

interface CGBNProps {
  language: string;
}

const CGBN: React.FC<CGBNProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'CGBN',
      subtitle: 'Centro Global de Biodiversidade Natural',
      intro: 'O Centro Global de Biodiversidade Natural (CGBN) é nossa iniciativa dedicada à preservação dos ecossistemas africanos através da pesquisa, educação e turismo sustentável.',
      mission: 'Promover a conservação da biodiversidade africana através da pesquisa científica, educação ambiental e práticas de turismo que protejam os ecossistemas naturais.',
      areas: {
        title: 'Áreas de atuação',
        list: [
          {
            title: 'Pesquisa científica',
            description: 'Realizamos e apoiamos pesquisas sobre biodiversidade, ecologia e conservação',
            icon: <Globe className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Educação ambiental',
            description: 'Programas educativos para comunidades locais, escolas e visitantes',
            icon: <Leaf className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Conservação de habitats',
            description: 'Projetos de proteção e restauração de ecossistemas naturais',
            icon: <TreePine className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Ecoturismo',
            description: 'Experiências turísticas que financiam a conservação e educação',
            icon: <Wind className="w-8 h-8 text-green-600" />
          }
        ]
      },
      ecosystems: {
        title: 'Ecossistemas protegidos',
        list: [
          {
            name: 'Savanas',
            description: 'Vastas planícies abertas que abrigam grandes mamíferos e uma diversidade surpreendente de espécies',
            image: 'https://images.pexels.com/photos/259417/pexels-photo-259417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          },
          {
            name: 'Florestas tropicais',
            description: 'Densas florestas com extraordinária biodiversidade e espécies endêmicas',
            image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          },
          {
            name: 'Zonas úmidas',
            description: 'Pântanos, deltas e lagos que são habitat essencial para aves aquáticas e muitas outras espécies',
            image: 'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          }
        ]
      },
      projects: {
        title: 'Projetos atuais',
        list: [
          'Monitoramento de populações de elefantes em parques nacionais',
          'Reflorestamento de áreas degradadas em margens de rios',
          'Programas de conservação comunitária com povos indígenas',
          'Pesquisa sobre impactos das mudanças climáticas na biodiversidade local'
        ]
      },
      join: 'Participe como voluntário'
    },
    en: {
      title: 'CGBN',
      subtitle: 'Global Center for Natural Biodiversity',
      intro: 'The Global Center for Natural Biodiversity (GCNB) is our initiative dedicated to preserving African ecosystems through research, education, and sustainable tourism.',
      mission: 'To promote the conservation of African biodiversity through scientific research, environmental education, and tourism practices that protect natural ecosystems.',
      areas: {
        title: 'Areas of action',
        list: [
          {
            title: 'Scientific research',
            description: 'We conduct and support research on biodiversity, ecology, and conservation',
            icon: <Globe className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Environmental education',
            description: 'Educational programs for local communities, schools, and visitors',
            icon: <Leaf className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Habitat conservation',
            description: 'Projects for protection and restoration of natural ecosystems',
            icon: <TreePine className="w-8 h-8 text-green-600" />
          },
          {
            title: 'Ecotourism',
            description: 'Tourism experiences that fund conservation and education',
            icon: <Wind className="w-8 h-8 text-green-600" />
          }
        ]
      },
      ecosystems: {
        title: 'Protected ecosystems',
        list: [
          {
            name: 'Savannas',
            description: 'Vast open plains that host large mammals and a surprising diversity of species',
            image: 'https://images.pexels.com/photos/259417/pexels-photo-259417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          },
          {
            name: 'Rainforests',
            description: 'Dense forests with extraordinary biodiversity and endemic species',
            image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          },
          {
            name: 'Wetlands',
            description: 'Swamps, deltas, and lakes that are essential habitat for water birds and many other species',
            image: 'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
          }
        ]
      },
      projects: {
        title: 'Current projects',
        list: [
          'Monitoring elephant populations in national parks',
          'Reforestation of degraded areas along riverbanks',
          'Community conservation programs with indigenous peoples',
          'Research on climate change impacts on local biodiversity'
        ]
      },
      join: 'Join as a volunteer'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="cgbn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mb-8">
              <p className="text-lg italic text-gray-700">
                {t.mission}
              </p>
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-900">{t.projects.title}</h3>
            <ul className="space-y-3 mb-8">
              {t.projects.list.map((project, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Droplet className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{project}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300"
              >
                {t.join}
              </a>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-6">
              {t.ecosystems.list.map((ecosystem, index) => (
                <div key={index} className="group overflow-hidden rounded-xl shadow-md">
                  <div className="relative h-64">
                    <img 
                      src={ecosystem.image} 
                      alt={ecosystem.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{ecosystem.name}</h4>
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {ecosystem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{t.areas.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.areas.list.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">{area.title}</h4>
                <p className="text-gray-600 text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CGBN;