import React from 'react';
import { Leaf, Droplet, Wind, Globe, TreePine } from 'lucide-react';
import imagemdela2 from '../assets/imagemdela2.jpg'
import americacgbw from '../assets/americacgbw.jpg'

interface CGBNProps {
  language: string;
}

const CGBN: React.FC<CGBNProps> = ({ language }) => {
 const content = {
  pt: {
    title: 'CGBW',
    subtitle: 'Circle Global Business Women',
    intro: 'O Circle Global Business Women (CGBW) é uma rede internacional de mulheres de negócios comprometida com o fortalecimento da presença feminina negra no cenário econômico global. Fundada no continente africano, a iniciativa atua como ponte entre mulheres líderes da África e da diáspora, promovendo parcerias estratégicas, capacitação, intercâmbio de experiências e oportunidades reais de expansão de negócios.',
    mission: 'Empoderar mulheres empreendedoras por meio do acesso a conhecimento, mercado, conexões internacionais e visibilidade global.',
    areas: {
      title: 'Áreas de atuação',
      list: [
        {
          title: 'Conexões estratégicas',
          description: 'Promoção de parcerias entre líderes africanas e da diáspora para fomentar negócios globais',
          icon: <Globe className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Capacitação',
          description: 'Formações e mentorias voltadas ao desenvolvimento de competências empreendedoras',
          icon: <Leaf className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Expansão de mercado',
          description: 'Criação de oportunidades concretas para internacionalização de negócios liderados por mulheres negras',
          icon: <TreePine className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Visibilidade e liderança',
          description: 'Eventos e ações para destacar a atuação de mulheres negras no cenário econômico global',
          icon: <Wind className="w-8 h-8 text-green-600" />
        }
      ]
    },
    ecosystems: {
      title: 'Impacto internacional',
      list: [
        {
          name: 'Brasil',
          description: 'Fortalecimento do afroempreendedorismo e expansão da rede na América Latina',
          image: imagemdela2,
        },
        {
          name: 'America',
          description: 'Território originário da rede, onde se concentram ações de liderança e inovação',
          image: americacgbw,
        },
        {
          name: 'Diáspora',
          description: 'Presença ativa em diversos países, conectando mulheres negras globalmente',
          image: 'https://images.pexels.com/photos/3064070/pexels-photo-3064070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
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
    intro: 'Circle Global Business Women (CGBW) is an international network of businesswomen committed to strengthening the presence of Black women in the global economic landscape. Founded on the African continent, the initiative acts as a bridge between women leaders in Africa and the diaspora, fostering strategic partnerships, training, experience exchange, and real business expansion opportunities.',
    mission: 'To empower women entrepreneurs through access to knowledge, markets, international connections, and global visibility.',
    areas: {
      title: 'Areas of action',
      list: [
        {
          title: 'Strategic connections',
          description: 'Fostering partnerships between African and diaspora leaders to support global business growth',
          icon: <Globe className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Training & mentorship',
          description: 'Programs focused on developing entrepreneurial skills and leadership',
          icon: <Leaf className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Market expansion',
          description: 'Creating real opportunities for the internationalization of Black women-led businesses',
          icon: <TreePine className="w-8 h-8 text-green-600" />
        },
        {
          title: 'Visibility & leadership',
          description: 'Events and campaigns to highlight Black women’s leadership in global economics',
          icon: <Wind className="w-8 h-8 text-green-600" />
        }
      ]
    },
    ecosystems: {
      title: 'International impact',
      list: [
        {
          name: 'Brazil',
          description: 'Strengthening Black women entrepreneurship and expanding the network in Latin America',
          image: imagemdela2,
        },
        {
          name: 'America',
          description: 'Birthplace of the network, focusing on leadership and innovation actions',
          image: americacgbw,
        },
        {
          name: 'Diaspora',
          description: 'Active presence in several countries, connecting Black women globally',
          image: 'https://images.pexels.com/photos/3064070/pexels-photo-3064070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
        }
      ]
    },
    projects: {
      title: 'Featured initiatives',
      list: [
        'Leadership forums for Black women',
        'Mentorship programs with international entrepreneurs',
        'Global visibility economic events',
        'Training and international exchange programs'
      ]
    },
    join: 'Join the network as a member'
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