import React from 'react';
import { Leaf, Droplet, Wind, Globe, TreePine } from 'lucide-react';
import imagemdela2 from '../assets/imagemdela2.jpg';
import americacgbw from '../assets/imagemdela.jpg';
import SINDI from '../assets/Sindi.jpg';

interface CGBNProps {
  language: string;
}

const CGBN: React.FC<CGBNProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'CGBW',
      subtitle: 'Circle Global Business Women',
      intro:
        'O Circle Global Business Women (CGBW) é uma rede internacional de mulheres de negócios comprometida com o fortalecimento da presença feminina negra no cenário econômico global. Fundada no continente africano, a iniciativa atua como ponte entre mulheres líderes da África e da diáspora, promovendo parcerias estratégicas, capacitação, intercâmbio de experiências e oportunidades reais de expansão de negócios.',
      mission:
        'Empoderar mulheres empreendedoras por meio do acesso a conhecimento, mercado, conexões internacionais e visibilidade global.',
      areas: {
        title: 'Áreas de atuação',
        list: [
          {
            title: 'Conexões estratégicas',
            description:
              'Promoção de parcerias entre líderes africanas e da diáspora para fomentar negócios globais',
            icon: <Globe className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Capacitação',
            description:
              'Formações e mentorias voltadas ao desenvolvimento de competências empreendedoras',
            icon: <Leaf className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Expansão de mercado',
            description:
              'Criação de oportunidades concretas para internacionalização de negócios liderados por mulheres negras',
            icon: <TreePine className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Visibilidade e liderança',
            description:
              'Eventos e ações para destacar a atuação de mulheres negras no cenário econômico global',
            icon: <Wind className="w-8 h-8 text-orange-200" />
          }
        ]
      },
      ecosystems: {
        title: 'Impacto internacional',
        list: [
          {
            name: 'Dijara Santos',
            description: language === 'pt'
              ? 'Presidente do CGBW no Brasil'
              : 'CGBW President in Brazil',
            image: imagemdela2
          },
          {
            name: 'Lucia Stanislas',
            description: language === 'pt'
              ? 'Presidente do CGBW na América'
              : 'CGBW President in America',
            image: americacgbw
          },
          {
            name: 'Sindiswa Mzamo',
            description: language === 'pt'
              ? 'Presidente Global do Circle of Global Business Women'
              : 'Global President at Circle of Global Business Women',
            image: SINDI
          }
        ]
      },
      projects: {
        title: 'Ações em destaque',
        list: [
          'Encontros e fóruns de lideranças femininas negras',
          'Mentorias com empresárias de diferentes países',
          'Eventos internacionais de visibilidade econômica',
          'Programas de intercâmbio e capacitação global'
        ]
      },
      join: 'Junte-se à rede como associada'
    },
    en: {
      title: 'CGBW',
      subtitle: 'Circle Global Business Women',
      intro:
        'The Circle Global Business Women (CGBW) is an international network of businesswomen committed to strengthening the presence of Black women in the global economic landscape...',
      mission:
        'To empower entrepreneurial women through access to knowledge, markets, international connections, and global visibility.',
      areas: {
        title: 'Areas of activity',
        list: [
          {
            title: 'Strategic connections',
            description: 'Promotion of partnerships between African and diaspora leaders to foster global business',
            icon: <Globe className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Training',
            description: 'Training and mentoring focused on the development of entrepreneurial skills',
            icon: <Leaf className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Market expansion',
            description: 'Creation of concrete opportunities for internationalization of Black women-led businesses',
            icon: <TreePine className="w-8 h-8 text-orange-200" />
          },
          {
            title: 'Visibility and leadership',
            description: 'Events and actions to highlight the role of Black women in the global economic landscape',
            icon: <Wind className="w-8 h-8 text-orange-200" />
          }
        ]
      },
      ecosystems: {
        title: 'International impact',
        list: [
          {
            name: 'Dijara Santos',
            description: 'CGBW President in Brazil',
            image: imagemdela2
          },
          {
            name: 'Lucia Stanislas',
            description: 'CGBW President in America',
            image: americacgbw
          },
          {
            name: 'Sindiswa Mzamo',
            description: 'Global President at Circle of Global Business Women',
            image: SINDI
          }
        ]
      },
      projects: {
        title: 'Featured actions',
        list: [
          'Meetings and forums of Black women leaders',
          'Mentoring with businesswomen from different countries',
          'International events for economic visibility',
          'Global training and exchange programs'
        ]
      },
      join: 'Join the network as a member'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="cgbn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-700">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-4 mt-[-40px] md:items-stretch">
          <div>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">{t.intro}</p>

            <div className="bg-amber-900 p-6 rounded-lg shadow-md mt-28 mb-28">
              <p className="text-lg italic text-orange-100 leading-relaxed">{t.mission}</p>
            </div>

            <h3 className="text-xl font-bold mt-24 mb-6 text-gray-900">{t.projects.title}</h3>
            <ul className="space-y-3 mb-8">
              {t.projects.list.map((project, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <Droplet className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-gray-700">{project}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-300"
              >
                {t.join}
              </a>
            </div>
          </div>

          <div>
<div className="grid grid-cols-1 gap-6">
  {t.ecosystems.list.map((ecosystem, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-xl shadow-md"
    >
      <div className="relative">
<img
  src={ecosystem.image}
  alt={ecosystem.name}
  className={`w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105 brightness-110 ${
    ecosystem.name === 'Sindiswa Mzamo' ? 'object-[center_14%]' : 'object-top'
  }`}
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
              <div
                key={index}
                className="bg-amber-900 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white text-center">{area.title}</h4>
                <p className="text-orange-100 text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CGBN;
