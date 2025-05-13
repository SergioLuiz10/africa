import React from 'react';
import { Users, Building2, LineChart, Globe2 } from 'lucide-react';

interface ImpactProps {
  language: string;
}

const Impact: React.FC<ImpactProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Impacto do Projeto',
      subtitle: 'Transformando realidades através do empreendedorismo',
      stats: [
        { 
          icon: <Users className="w-8 h-8 text-orange-500" />,
          value: '25+',
          label: 'Empreendedores Capacitados'
        },
        {
          icon: <Building2 className="w-8 h-8 text-orange-500" />,
          value: '50+',
          label: 'Parcerias com Empresas Africanas'
        },
        {
          icon: <LineChart className="w-8 h-8 text-orange-500" />,
          value: '60%',
          label: 'Aumento Médio no Faturamento'
        },
        {
          icon: <Globe2 className="w-8 h-8 text-orange-500" />,
          value: '$20M',
          label: 'Investimentos Estimados'
        }
      ]
    },
    en: {
      title: 'Project Impact',
      subtitle: 'Transforming realities through entrepreneurship',
      stats: [
        {
          icon: <Users className="w-8 h-8 text-orange-500" />,
          value: '25+',
          label: 'Trained Entrepreneurs'
        },
        {
          icon: <Building2 className="w-8 h-8 text-orange-500" />,
          value: '50+',
          label: 'African Company Partnerships'
        },
        {
          icon: <LineChart className="w-8 h-8 text-orange-500" />,
          value: '60%',
          label: 'Average Revenue Increase'
        },
        {
          icon: <Globe2 className="w-8 h-8 text-orange-500" />,
          value: '$20M',
          label: 'Estimated Investments'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;