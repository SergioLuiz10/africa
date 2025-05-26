import React from "react";
import { Target, Flag, Lightbulb, MapPin, Link2 } from "lucide-react";

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
        'A escolha da África do Sul como destino do África 360 é estratégica e simbólica. O país é a segunda maior economia do continente africano e possui uma infraestrutura avançada, especialmente em cidades como Joanesburgo e Cidade do Cabo. Além disso, a África do Sul abriga uma vibrante cena afroempreendedora e é sede de importantes instituições ligadas ao panafricanismo e à cultura da diáspora. Com uma população de mais de 60 milhões de pessoas e uma crescente classe média negra, o país representa um ambiente fértil para trocas comerciais, culturais e espirituais. Joanesburgo, por exemplo, é considerada o maior centro financeiro da África Subsaariana. A África do Sul também lidera debates sobre identidade africana, justiça social e reconciliação, temas centrais ao nosso projeto. Por isso, iniciar por lá é semear a reconexão ancestral num território que vive intensamente os desafios e as conquistas do continente. É o ponto de partida ideal para construir pontes entre o Brasil e o futuro da África.',
      timelineTitle: 'Linha do Tempo'
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
        'Choosing South Africa as the destination for Africa 360 is both strategic and symbolic. The country is the second-largest economy on the African continent and has advanced infrastructure, especially in cities like Johannesburg and Cape Town. Additionally, South Africa is home to a vibrant Afro-entrepreneurial scene and hosts key institutions connected to Pan-Africanism and diaspora culture. With a population of over 60 million and a growing Black middle class, the country offers fertile ground for commercial, cultural, and spiritual exchanges. Johannesburg, for example, is considered the largest financial center in Sub-Saharan Africa. South Africa also leads discussions on African identity, social justice, and reconciliation — topics central to our project. Starting there means sowing ancestral reconnection in a land that intensely lives the challenges and achievements of the continent. It is the ideal starting point for building bridges between Brazil and Africa’s future.',
      timelineTitle: 'Timeline'
    }
  };

  const t = content[language as keyof typeof content];

  const timeline = [
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-300" />,
      title: language === 'pt' ? 'Concepção do Projeto' : 'Project Conception',
      description:
        language === 'pt'
          ? 'Criação da iniciativa África 360 com foco em transformar o turismo africano através de conexões autênticas, sustentabilidade e valorização cultural.'
          : 'Creation of the Africa 360 initiative focused on transforming African tourism through authentic connections, sustainability, and cultural appreciation.'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-300" />,
      title: language === 'pt' ? 'Definição da Visão e Missão' : 'Vision and Mission Definition',
      description:
        language === 'pt'
          ? 'Visão: Transformar a experiência do turismo africano. Missão: Facilitar experiências que beneficiem comunidades locais e promovam a compreensão intercultural.'
          : 'Vision: Transform African tourism. Mission: Create experiences that benefit local communities and foster cross-cultural understanding.'
    },
    {
      icon: <Flag className="w-6 h-6 text-orange-300" />,
      title: language === 'pt' ? 'Escolha da África do Sul' : 'Choosing South Africa',
      description:
        language === 'pt'
          ? 'País estratégico e simbólico com infraestrutura avançada, liderança em debates culturais e sede de importantes instituições panafricanas.'
          : 'A strategic and symbolic country with advanced infrastructure, leadership in cultural debates, and home to key Pan-African institutions.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-300" />,
      title: language === 'pt' ? 'Início em Joanesburgo' : 'Launch in Johannesburg',
      description:
        language === 'pt'
          ? 'Centro financeiro da África Subsaariana. Ponto de partida ideal para semear a reconexão ancestral e construir pontes entre África e Brasil.'
          : 'Sub-Saharan Africa’s financial hub. The ideal starting point for sowing ancestral reconnection and building bridges between Africa and Brazil.'
    },
    {
      icon: <Link2 className="w-6 h-6 text-orange-300" />,
      title: language === 'pt' ? 'Expansão e Conexão com o Brasil' : 'Expansion and Connection with Brazil',
      description:
        language === 'pt'
          ? 'Fortalecimento de laços culturais, espirituais e comerciais entre a diáspora africana e o continente, promovendo justiça social e identidade africana.'
          : 'Strengthening cultural, spiritual, and commercial ties between the African diaspora and the continent, promoting social justice and African identity.'
    }
  ];

  return (
    <>
      <section id="project" className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">{t.title}</h2>
            <p className="text-xl text-amber-100">{t.subtitle}</p>
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

          <div className="bg-white p-8 rounded-xl shadow-md mb-16">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{t.whySouthAfricaTitle}</h3>
            <p className="text-lg text-gray-700">{t.whySouthAfricaText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">{t.timelineTitle}</h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`mb-16 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-[#78350f] border border-orange-300 shadow-lg rounded-xl p-6 relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#78350f] border-4 border-orange-500 rounded-full w-12 h-12 flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-center text-white mt-6 mb-2">{item.title}</h4>
                    <p className="text-amber-100 text-center">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
