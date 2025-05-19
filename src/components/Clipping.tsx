import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

interface ClippingProps {
  language: string;
}

const Clipping: React.FC<ClippingProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('blogs');

  const content = {
    pt: {
      title: 'Clipping',
      subtitle: 'Cobertura de mídia e notícias sobre nossas iniciativas',
      filters: {
        blogs: 'Blogs',
        videos: 'Vídeos'
      },
      articles: [
        {
          title: 'Shopping Bela Vista recebe a 2ª edição da roda de conversa "De onde viemos, para onde vamos?"',
          source: 'Lícia Fábio',
          date: '13/05/2024',
          excerpt: 'Evento promove reflexões sobre ancestralidade e afroempreendedorismo no Novembro Negro.',
          type: 'blogs',
          link: 'https://www.liciafabio.com.br/shopping-bela-vista-recebe-a-2a-edicao-da-roda-de-conversa-de-onde-viemos-para-onde-vamos/'
        },
        {
          title: 'Roda de Conversa: "De onde viemos, para onde vamos?"',
          source: 'Salvador Notícias',
          date: '10/01/2025',
          excerpt: 'Discussão sobre identidade negra e futuro dos negócios afrocentrados em Salvador.',
          type: 'blogs',
          link: 'https://www.salvadornoticias.com/2025/01/roda-de-conversa-de-onde-viemos-para.html'
        },
        {
          title: 'Shopping Bela Vista segue com exposição "Pessoas Negras, Negócios Potentes"',
          source: 'Revista Yacht',
          date: '20/11/2024',
          excerpt: 'Mostra celebra o afroempreendedorismo com rodas de conversa e homenagens.',
          type: 'blogs',
          link: 'https://www.revistayacht.com.br/shopping-bela-vista-segue-com-exposicao-pessoas-negras-negocios-potentes-e-traz-serie-de-rodas-de-conversas/'
        },
        {
          title: 'Vídeo Institucional África 360',
          source: 'YouTube',
          date: '01/05/2025',
          excerpt: 'Conheça os pilares e os objetivos do projeto em nosso vídeo institucional.',
          type: 'videos',
          link: 'https://www.youtube.com/watch?v=EXEMPLO1'
        },
        {
          title: 'Entrevista com organizadores',
          source: 'TV Bahia',
          date: '10/04/2025',
          excerpt: 'Organizadores falam sobre a importância da iniciativa e seus impactos.',
          type: 'videos',
          link: 'https://www.youtube.com/watch?v=EXEMPLO2'
        },
        {
          title: 'Documentário sobre a mostra "Negócios Potentes"',
          source: 'AfroTV',
          date: '20/03/2025',
          excerpt: 'Um olhar documental sobre a exposição de afroempreendedores.',
          type: 'videos',
          link: 'https://www.youtube.com/watch?v=EXEMPLO3'
        }
      ],
      readMore: 'Leia mais',
      noResults: 'Nenhum artigo encontrado com esses filtros.'
    },
    en: {
      title: 'Clipping',
      subtitle: 'Media coverage and news about our initiatives',
      filters: {
        blogs: 'Blogs',
        videos: 'Videos'
      },
      articles: [],
      readMore: 'Read more',
      noResults: 'No articles found with these filters.'
    }
  };

  const t = content[language as keyof typeof content];
  const filteredArticles = t.articles.filter(article => article.type === activeFilter);

  return (
    <section id="clipping" className="py-20 bg-[#a97457]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-orange-100">{t.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === key
                    ? 'bg-white text-orange-600 font-semibold'
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="hidden sm:block mr-6">
                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                      <Newspaper className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{article.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                        {article.type}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-3">{article.source}</span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{article.excerpt}</p>
                    <a 
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      {t.readMore} <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-white">
            {t.noResults}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clipping;
