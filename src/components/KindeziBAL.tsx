import React from 'react';
import { BookOpen, Music, Calendar, Users, Heart } from 'lucide-react';

interface KindeziBALProps {
  language: string;
}

const KindeziBAL: React.FC<KindeziBALProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Kindezi BAL',
      subtitle: 'Biblioteca de Arte e Literatura Africana',
      intro: 'A Kindezi BAL (Biblioteca de Arte e Literatura) é um centro cultural dedicado à preservação, celebração e promoção da rica herança artística e literária africana.',
      mission: 'Preservar, documentar e divulgar as expressões artísticas e literárias africanas, oferecendo um espaço de encontro, aprendizado e inspiração.',
      collections: {
        title: 'Nossas coleções',
        list: [
          {
            title: 'Literatura',
            description: 'Obras de escritores africanos contemporâneos e clássicos',
            icon: <BookOpen className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Arte Visual',
            description: 'Pinturas, esculturas e fotografias de artistas africanos',
            icon: <Heart className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Música',
            description: 'Registros da rica tradição musical dos países africanos',
            icon: <Music className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Arquivos históricos',
            description: 'Documentos, fotografias e relatos que preservam a história',
            icon: <Calendar className="w-8 h-8 text-purple-600" />
          }
        ]
      },
      activities: {
        title: 'Atividades',
        list: [
          'Exposições temporárias de artistas africanos',
          'Clubes de leitura e discussões literárias',
          'Oficinas de arte e escrita para todas as idades',
          'Performances musicais e contação de histórias',
          'Palestras e debates com escritores e artistas'
        ]
      },
      artists: {
        title: 'Artistas em destaque',
        list: [
          {
            name: 'Chimamanda Ngozi Adichie',
            work: 'Literatura',
            country: 'Nigéria'
          },
          {
            name: 'El Anatsui',
            work: 'Artes visuais',
            country: 'Gana'
          },
          {
            name: 'Youssou N\'Dour',
            work: 'Música',
            country: 'Senegal'
          },
          {
            name: 'Zanele Muholi',
            work: 'Fotografia',
            country: 'África do Sul'
          }
        ]
      },
      visit: 'Visite a biblioteca',
      donate: 'Faça uma doação'
    },
    en: {
      title: 'Kindezi BAL',
      subtitle: 'African Art and Literature Library',
      intro: 'Kindezi BAL (Art and Literature Library) is a cultural center dedicated to preserving, celebrating, and promoting the rich African artistic and literary heritage.',
      mission: 'To preserve, document, and disseminate African artistic and literary expressions, offering a space for meeting, learning, and inspiration.',
      collections: {
        title: 'Our collections',
        list: [
          {
            title: 'Literature',
            description: 'Works by contemporary and classic African writers',
            icon: <BookOpen className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Visual Art',
            description: 'Paintings, sculptures, and photographs by African artists',
            icon: <Heart className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Music',
            description: 'Records of the rich musical tradition from African countries',
            icon: <Music className="w-8 h-8 text-purple-600" />
          },
          {
            title: 'Historical archives',
            description: 'Documents, photographs, and accounts that preserve history',
            icon: <Calendar className="w-8 h-8 text-purple-600" />
          }
        ]
      },
      activities: {
        title: 'Activities',
        list: [
          'Temporary exhibitions by African artists',
          'Book clubs and literary discussions',
          'Art and writing workshops for all ages',
          'Musical performances and storytelling',
          'Lectures and debates with writers and artists'
        ]
      },
      artists: {
        title: 'Featured artists',
        list: [
          {
            name: 'Chimamanda Ngozi Adichie',
            work: 'Literature',
            country: 'Nigeria'
          },
          {
            name: 'El Anatsui',
            work: 'Visual arts',
            country: 'Ghana'
          },
          {
            name: 'Youssou N\'Dour',
            work: 'Music',
            country: 'Senegal'
          },
          {
            name: 'Zanele Muholi',
            work: 'Photography',
            country: 'South Africa'
          }
        ]
      },
      visit: 'Visit the library',
      donate: 'Make a donation'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="kindezi" className="py-20 bg-gray-50">
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
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 mb-8">
              <p className="text-lg italic text-gray-700">
                {t.mission}
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-900">{t.activities.title}</h3>
            <ul className="space-y-3 mb-8">
              {t.activities.list.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4 mt-8">
              <a 
                href="#" 
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center transition-colors duration-300"
              >
                {t.visit}
              </a>
              <a 
                href="#" 
                className="flex-1 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg text-center transition-colors duration-300"
              >
                {t.donate}
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.pexels.com/photos/1034008/pexels-photo-1034008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Library" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t.artists.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.artists.list.map((artist, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{artist.name}</p>
                      <p className="text-xs text-gray-500">{artist.work} | {artist.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">{t.collections.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.collections.list.map((collection, index) => (
              <div key={index} className="bg-[#f4e3d7] rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {collection.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">{collection.title}</h4>
                <p className="text-gray-600 text-center">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KindeziBAL;