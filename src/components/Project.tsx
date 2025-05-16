import React from 'react';
import { Target, Flag } from 'lucide-react';

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
      whySouthAfricaTitle: 'Por que a escolha da África do Sul',
      whySouthAfricaText:
        'A escolha da África do Sul como destino do África 360 é estratégica e simbólica. O país é a segunda maior economia do continente africano e possui uma infraestrutura avançada, especialmente em cidades como Joanesburgo e Cidade do Cabo. Além disso, a África do Sul abriga uma vibrante cena afroempreendedora e é sede de importantes instituições ligadas ao panafricanismo e à cultura da diáspora. Com uma população de mais de 60 milhões de pessoas e uma crescente classe média negra, o país representa um ambiente fértil para trocas comerciais, culturais e espirituais. Joanesburgo, por exemplo, é considerada o maior centro financeiro da África Subsaariana. A África do Sul também lidera debates sobre identidade africana, justiça social e reconciliação, temas centrais ao nosso projeto. Por isso, iniciar por lá é semear a reconexão ancestral num território que vive intensamente os desafios e as conquistas do continente. É o ponto de partida ideal para construir pontes entre o Brasil e o futuro da África.'
    },
    en: {
      title: 'The Project',
      subtitle: 'Our mission to connect cultures and promote sustainable tourism',
      vision: 'Our vision',
      visionText: 'To transform the African tourism experience through authentic connections, sustainability, and cultural appreciation.',
      mission: 'Our mission',
      missionText: 'To facilitate tourism experiences that benefit local communities, preserve cultural heritage, and promote cross-cultural understanding.',
      whySouthAfricaTitle: 'Why South Africa',
      whySouthAfricaText:
        'Choosing South Africa as the destination for Africa 360 is both strategic and symbolic. The country is the second-largest economy on the African continent and has advanced infrastructure, especially in cities like Johannesburg and Cape Town. Additionally, South Africa is home to a vibrant Afro-entrepreneurial scene and hosts key institutions connected to Pan-Africanism and diaspora culture. With a population of over 60 million and a growing Black middle class, the country offers fertile ground for commercial, cultural, and spiritual exchanges. Johannesburg, for example, is considered the largest financial center in Sub-Saharan Africa. South Africa also leads discussions on African identity, social justice, and reconciliation — topics central to our project. Starting there means sowing ancestral reconnection in a land that intensely lives the challenges and achievements of the continent. It is the ideal starting point for building bridges between Brazil and Africa’s future.'
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

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
            {t.whySouthAfricaTitle}
          </h3>
          <p className="text-lg text-gray-700">{t.whySouthAfricaText}</p>
        </div>
      </div>
    </section>
  );
};

export default Project;
