import React, { useEffect, useRef } from 'react';
import { ScrollText, Quote, ExternalLink } from 'lucide-react';

interface ManifestoProps {
  language: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ language }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    pt: {
      title: 'Nosso Manifesto',
      subtitle: 'Nossa visão para um turismo africano responsável e transformador',
      introduction: 'Acreditamos no poder transformador do turismo como força para o bem, conectando pessoas, preservando culturas e protegendo a natureza.',
      principles: [
        {
          title: 'Respeito Cultural',
          content: 'Comprometemo-nos a honrar e respeitar as diversas culturas, tradições e comunidades africanas em tudo o que fazemos.'
        },
        {
          title: 'Sustentabilidade',
          content: 'Nosso compromisso é criar experiências turísticas que protejam o meio ambiente, apoiem as economias locais e preservem o patrimônio cultural.'
        },
        {
          title: 'Autenticidade',
          content: 'Buscamos proporcionar experiências genuínas que reflitam a verdadeira essência dos destinos africanos, evitando estereótipos e comercialização excessiva.'
        },
        {
          title: 'Empoderamento',
          content: 'Trabalhamos para garantir que o turismo beneficie diretamente as comunidades locais, criando oportunidades econômicas e compartilhando conhecimentos.'
        }
      ],
      quote: 'O verdadeiro turismo na África não é apenas sobre ver lugares, mas sobre sentir o pulso do continente, ouvir suas histórias e contribuir para seu futuro.',
      quoteAuthor: 'Fundador da AfricaTrip',
      readMore: 'Leia o manifesto completo'
    },
    en: {
      title: 'Our Manifesto',
      subtitle: 'Our vision for responsible and transformative African tourism',
      introduction: 'We believe in the transformative power of tourism as a force for good, connecting people, preserving cultures, and protecting nature.',
      principles: [
        {
          title: 'Cultural Respect',
          content: 'We commit to honoring and respecting Africa\'s diverse cultures, traditions, and communities in everything we do.'
        },
        {
          title: 'Sustainability',
          content: 'Our commitment is to create tourism experiences that protect the environment, support local economies, and preserve cultural heritage.'
        },
        {
          title: 'Authenticity',
          content: 'We seek to provide genuine experiences that reflect the true essence of African destinations, avoiding stereotypes and over-commercialization.'
        },
        {
          title: 'Empowerment',
          content: 'We work to ensure tourism directly benefits local communities, creating economic opportunities and sharing knowledge.'
        }
      ],
      quote: 'True tourism in Africa is not just about seeing places, but about feeling the pulse of the continent, listening to its stories, and contributing to its future.',
      quoteAuthor: 'Founder of AfricaTrip',
      readMore: 'Read the full manifesto'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="manifesto" ref={sectionRef} className="py-20 bg-white scroll-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-brown-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-slide-in-left">
            <ScrollText className="w-16 h-16 text-orange-500 mb-6" />
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {t.introduction}
            </p>

            <div className="space-y-6">
              {t.principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 transition-all duration-300 hover:shadow-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-brown-900">{principle.title}</h3>
                  <p className="text-gray-700">{principle.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 animate-slide-in-right">
            <div className="bg-gray-100 p-8 rounded-xl shadow-md relative">
              <Quote className="w-12 h-12 text-orange-300 absolute -top-6 -left-6" />
              <p className="text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <p className="text-right font-medium text-brown-900">— {t.quoteAuthor}</p>
            </div>

            <div className="text-center">
              <a 
                href="#"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                {t.readMore}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="African landscape" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
