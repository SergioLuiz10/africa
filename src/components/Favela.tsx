import React from 'react';
import imagemLOGo from '../assets/favela.png.jpg';

interface FavelaProps {
  language: string;
}

const Favela: React.FC<FavelaProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Favela Tech – Tecnologia que transforma realidades',
      paragraphs: [
        'A Favela Tech é a startup de impacto social da Delá, uma empresa comprometida com o fortalecimento do afroempreendedorismo e da capacitação de jovens negros periféricos. Criada com o propósito de romper barreiras sociais e promover inclusão real, a Favela Tech nasceu dentro das comunidades para potencializar talentos que, muitas vezes, são invisibilizados pelos grandes centros de inovação.',
        'Com foco no ensino de tecnologia e empreendedorismo, a Favela Tech oferece formações acessíveis e práticas em áreas como programação, design digital, marketing, inovação e desenvolvimento de negócios. Os cursos são pensados para a realidade da periferia, com linguagem simples, metodologias inovadoras e foco na geração de renda e autonomia financeira.',
        'Além de capacitar tecnicamente, a Favela Tech incentiva o protagonismo negro e periférico na tecnologia, criando pontes entre talentos das favelas e oportunidades reais no mercado de trabalho e no ecossistema de startups.',
        'A Delá acredita que onde há potência, deve haver investimento. Por isso, a Favela Tech vai além da educação tradicional: ela forma líderes, fomenta ideias e impulsiona transformações sociais a partir das margens. Jovens negros periféricos não apenas consomem tecnologia – eles também a criam, a moldam e a reinventam, quando têm acesso, apoio e visibilidade.',
        'Favela Tech é, acima de tudo, sobre pertencimento, tecnologia com identidade e o futuro nas mãos de quem sempre teve tudo para fazer história.'
      ]
    },
    en: {
      title: 'Favela Tech – Technology that Transforms Realities',
      paragraphs: [
        'Favela Tech is the social impact startup by Delá, a company committed to strengthening Afro-entrepreneurship and training Black youth from underserved communities. Created with the purpose of breaking social barriers and promoting real inclusion, Favela Tech was born inside the favelas to empower talents that are often overlooked by mainstream innovation hubs.',
        'Focusing on teaching technology and entrepreneurship, Favela Tech provides accessible, practical training in areas such as programming, digital design, marketing, innovation, and business development. The courses are designed for the realities of the periphery, using simple language, innovative methods, and a focus on income generation and financial independence.',
        'In addition to technical training, Favela Tech promotes Black and peripheral leadership in tech, creating bridges between favela-based talents and real opportunities in the job market and startup ecosystem.',
        'Delá believes that where there is potential, there must be investment. That’s why Favela Tech goes beyond traditional education: it shapes leaders, nurtures ideas, and drives social change from the margins. Black youth from underserved areas don’t just consume technology – they create it, shape it, and reinvent it, when given access, support, and visibility.',
        'Favela Tech is, above all, about belonging, identity-driven technology, and the future in the hands of those who’ve always had the power to make history.'
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="favela" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-amber-900">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {t.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="bg-amber-900 rounded-2xl p-6 shadow-md border border-orange-200 transition-all hover:shadow-lg"
              >
                <p className="text-orange-100 text-lg leading-relaxed">{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-300">
            <img
              src={imagemLOGo}
              alt="Favela Tech"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favela;
  