import React from 'react';
import { Home, Book, MapPin, Calendar, Camera } from 'lucide-react';
import imagemLOGo from '../assets/favela.png.jpg';

interface FavelaProps {
  language: string;
}

const Favela: React.FC<FavelaProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Favela Tech',
      subtitle: 'Turismo comunitário e transformação social',
      techTagline: 'Tecnologia e inovação a serviço da comunidade',
      intro: 'Nosso projeto Favela promove o turismo comunitário em áreas urbanas, destacando a rica cultura, resiliência e criatividade das comunidades africanas. Criamos experiências autênticas que beneficiam diretamente os moradores locais.',
      mission: 'Transformar a narrativa sobre as comunidades urbanas africanas através do turismo responsável, criando oportunidades econômicas e promovendo o orgulho cultural.',
      experiences: {
        title: 'Experiências',
        list: [
          { title: 'Tours culturais', description: 'Conheça a história, arte e cultura local guiados por moradores da comunidade', icon: <MapPin className="w-6 h-6 text-orange-500" /> },
          { title: 'Workshops de arte', description: 'Aprenda técnicas artísticas com artistas locais e crie sua própria obra', icon: <Camera className="w-6 h-6 text-orange-500" /> },
          { title: 'Gastronomia local', description: 'Experimente autêntica comida de rua e pratos tradicionais preparados por cozinheiros da comunidade', icon: <Book className="w-6 h-6 text-orange-500" /> },
          { title: 'Eventos culturais', description: 'Participe de festivais, apresentações musicais e celebrações comunitárias', icon: <Calendar className="w-6 h-6 text-orange-500" /> }
        ]
      },
      impact: {
        title: 'Impacto social',
        description: 'Através do projeto Favela, estamos criando empregos, preservando o patrimônio cultural e mudando percepções sobre comunidades urbanas africanas.',
        stats: [
          { value: '3', label: 'Comunidades participantes' },
          { value: '45', label: 'Guias locais formados' },
          { value: '5000+', label: 'Visitantes recebidos' },
          { value: '60%', label: 'Renda retida na comunidade' }
        ]
      },
      testimonial: {
        quote: 'O projeto Favela não apenas trouxe oportunidades econômicas para nossa comunidade, mas também nos ajudou a preservar nossa cultura e tradições, mostrando ao mundo nossa verdadeira história.',
        author: 'Maria, Guia comunitária'
      }
    },
    en: {
      title: 'Favela Tech',
      subtitle: 'Community tourism and social transformation',
      techTagline: 'Technology and innovation serving the community',
      intro: 'Our Favela project promotes community-based tourism in urban areas, highlighting the rich culture, resilience, and creativity of African communities. We create authentic experiences that directly benefit local residents.',
      mission: 'To transform the narrative about African urban communities through responsible tourism, creating economic opportunities and promoting cultural pride.',
      experiences: {
        title: 'Experiences',
        list: [
          { title: 'Cultural tours', description: 'Discover history, art, and local culture guided by community residents', icon: <MapPin className="w-6 h-6 text-orange-500" /> },
          { title: 'Art workshops', description: 'Learn artistic techniques from local artists and create your own work', icon: <Camera className="w-6 h-6 text-orange-500" /> },
          { title: 'Local gastronomy', description: 'Taste authentic street food and traditional dishes prepared by community cooks', icon: <Book className="w-6 h-6 text-orange-500" /> },
          { title: 'Cultural events', description: 'Join festivals, music shows, and community celebrations', icon: <Calendar className="w-6 h-6 text-orange-500" /> }
        ]
      },
      impact: {
        title: 'Social impact',
        description: 'Through the Favela project, we are creating jobs, preserving cultural heritage, and changing perceptions about African urban communities.',
        stats: [
          { value: '3', label: 'Participating communities' },
          { value: '45', label: 'Local guides trained' },
          { value: '5000+', label: 'Visitors received' },
          { value: '60%', label: 'Income retained in the community' }
        ]
      },
      testimonial: {
        quote: 'The Favela project has not only brought economic opportunities to our community, but it has also helped us preserve our culture and traditions, showing the world our true story.',
        author: 'Maria, Community guide'
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="favela" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold mb-1 text-gray-900">{t.title}</h2>
          <p className="text-md font-semibold text-[#7b4c2c]">{t.techTagline}</p>
        </div>
        <p className="text-xl text-gray-600 text-center mb-16">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={imagemLOGo} 
                alt="Urban community" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <Home className="w-12 h-12 text-orange-500 mb-6" />
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.intro}
            </p>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mb-8">
              <p className="text-lg italic text-gray-700">
                {t.mission}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{t.experiences.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.experiences.list.map((experience, index) => (
              <div key={index} className="bg-[#f4e3d7] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {experience.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{experience.title}</h4>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t.impact.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{t.impact.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.impact.stats.map((stat, index) => (
                <div key={index} className="bg-[#f4e3d7] p-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-800 text-white p-8 rounded-xl relative">
              <div className="absolute top-0 left-6 transform -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="text-lg italic mb-4">"{t.testimonial.quote}"</p>
              <p className="text-sm text-gray-300">— {t.testimonial.author}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favela;
