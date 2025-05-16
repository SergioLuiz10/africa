import React from 'react';
import { Users, HeartHandshake, School, Globe2 } from 'lucide-react';

interface ImpactProps {
  language: string;
}

const Impact: React.FC<ImpactProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Nosso Impacto',
      subtitle: 'Promovendo dignidade, cultura e autonomia em territórios africanos',
      stats: [
        {
          icon: <Users className="w-8 h-8 text-orange-600" />,
          value: '3.000+',
          label: 'Jovens beneficiadas com educação menstrual'
        },
        {
          icon: <HeartHandshake className="w-8 h-8 text-orange-600" />,
          value: '80+',
          label: 'Mulheres formadas em empreendedorismo menstrual'
        },
        {
          icon: <School className="w-8 h-8 text-orange-600" />,
          value: '20+',
          label: 'Rodas de conversa e ações culturais realizadas'
        },
        {
          icon: <Globe2 className="w-8 h-8 text-orange-600" />,
          value: '6 países',
          label: 'Alcance da plataforma em comunidades africanas'
        }
      ]
    },
    en: {
      title: 'Our Impact',
      subtitle: 'Promoting dignity, culture, and autonomy across African communities',
      stats: [
        {
          icon: <Users className="w-8 h-8 text-orange-600" />,
          value: '3,000+',
          label: 'Young women impacted by menstrual education'
        },
        {
          icon: <HeartHandshake className="w-8 h-8 text-orange-600" />,
          value: '80+',
          label: 'Women trained in menstrual entrepreneurship'
        },
        {
          icon: <School className="w-8 h-8 text-orange-600" />,
          value: '20+',
          label: 'Cultural conversations and community events'
        },
        {
          icon: <Globe2 className="w-8 h-8 text-orange-600" />,
          value: '6 countries',
          label: 'Platform reach across African regions'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="impact" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-amber-50">{t.title}</h2>
          <p className="text-xl text-amber-100">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-amber-100 rounded-xl p-8 text-center border border-amber-300 shadow-sm transition-transform hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-orange-700 mb-2">{stat.value}</div>
              <div className="text-amber-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
