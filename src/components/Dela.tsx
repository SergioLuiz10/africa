import React from 'react';
import { AtSign, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

interface DelaProps {
  language: string;
}

const Dela: React.FC<DelaProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Dela',
      subtitle: 'Promovendo o artesanato local e empoderando mulheres africanas',
      intro: 'Dela é um projeto de artesanato que trabalha com mulheres artesãs em várias comunidades africanas, preservando técnicas tradicionais e criando oportunidades econômicas sustentáveis.',
      mission: 'Nossa missão é preservar o rico patrimônio cultural africano através do artesanato, enquanto criamos oportunidades econômicas para mulheres em comunidades tradicionais.',
      impact: {
        title: 'Nosso Impacto',
        stats: [
          { value: '200+', label: 'Artesãs apoiadas' },
          { value: '15', label: 'Comunidades' },
          { value: '5', label: 'Países africanos' },
          { value: '1000+', label: 'Produtos criados' }
        ]
      },
      crafts: {
        title: 'Artesanato',
        types: [
          { name: 'Tecelagem', description: 'Técnicas tradicionais de tecelagem produzindo tecidos vibrantes' },
          { name: 'Cerâmica', description: 'Cerâmica artesanal utilizando técnicas transmitidas por gerações' },
          { name: 'Cestaria', description: 'Cestos intrincadamente tecidos usando materiais naturais locais' },
          { name: 'Joalheria', description: 'Jóias feitas à mão com influências culturais distintas' }
        ]
      },
      visit: 'Visite a loja',
      contact: {
        title: 'Entre em contato',
        email: 'dela@africatrip.com',
        phone: '+254 123 456 789',
        address: 'Nairobi, Quênia'
      }
    },
    en: {
      title: 'Dela',
      subtitle: 'Promoting local craftsmanship and empowering African women',
      intro: 'Dela is a craft project working with women artisans in various African communities, preserving traditional techniques and creating sustainable economic opportunities.',
      mission: 'Our mission is to preserve Africa\'s rich cultural heritage through craftsmanship while creating economic opportunities for women in traditional communities.',
      impact: {
        title: 'Our Impact',
        stats: [
          { value: '200+', label: 'Artisans supported' },
          { value: '15', label: 'Communities' },
          { value: '5', label: 'African countries' },
          { value: '1000+', label: 'Products created' }
        ]
      },
      crafts: {
        title: 'Craftsmanship',
        types: [
          { name: 'Weaving', description: 'Traditional weaving techniques producing vibrant textiles' },
          { name: 'Pottery', description: 'Handcrafted pottery using techniques passed down through generations' },
          { name: 'Basketry', description: 'Intricately woven baskets using local natural materials' },
          { name: 'Jewelry', description: 'Handmade jewelry with distinct cultural influences' }
        ]
      },
      visit: 'Visit the store',
      contact: {
        title: 'Get in touch',
        email: 'dela@africatrip.com',
        phone: '+254 123 456 789',
        address: 'Nairobi, Kenya'
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="dela" className="py-20 bg-white">
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
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-8">
              <p className="text-lg italic text-gray-700">
                {t.mission}
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.impact.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.impact.stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-300"
              >
                {t.visit} <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.pexels.com/photos/7656665/pexels-photo-7656665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="African women artisans" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t.crafts.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.crafts.types.map((craft, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">{craft.name}</h4>
                    <p className="text-sm text-gray-600">{craft.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-orange-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">{t.contact.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <AtSign className="w-5 h-5 mr-3" />
                  <p>{t.contact.email}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <p>{t.contact.phone}</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <p>{t.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dela;