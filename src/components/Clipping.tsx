import React, { useState } from 'react';
import { Newspaper, Search, Calendar, ExternalLink } from 'lucide-react';

interface ClippingProps {
  language: string;
}

const Clipping: React.FC<ClippingProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const content = {
    pt: {
      title: 'Clipping',
      subtitle: 'Cobertura de mídia e notícias sobre nossas iniciativas',
      search: 'Buscar artigos...',
      filters: {
        all: 'Todos',
        press: 'Imprensa',
        blogs: 'Blogs',
        videos: 'Vídeos',
        podcasts: 'Podcasts'
      },
      articles: [
        {
          title: 'África: Redescoberta através do turismo responsável',
          source: 'Revista Viagem & Turismo',
          date: '15/06/2023',
          excerpt: 'A AfricaTrip está revolucionando o turismo no continente africano com seu modelo de negócio que beneficia diretamente as comunidades locais...',
          type: 'press',
          link: '#'
        },
        {
          title: 'Projeto Kindezi BAL preserva literatura africana para futuras gerações',
          source: 'Portal de Cultura',
          date: '28/03/2023',
          excerpt: 'A biblioteca de arte e literatura africana tem se tornado um importante centro cultural, atraindo pesquisadores e amantes da cultura africana...',
          type: 'press',
          link: '#'
        },
        {
          title: 'Conheça o turismo de base comunitária das favelas africanas',
          source: 'Blog Destinos Incríveis',
          date: '04/02/2023',
          excerpt: 'A iniciativa Favela está transformando a percepção sobre as comunidades urbanas africanas e gerando renda para os moradores locais...',
          type: 'blogs',
          link: '#'
        },
        {
          title: 'Artesãs africanas encontram mercado global através do projeto Dela',
          source: 'Canal Economia Criativa',
          date: '19/11/2022',
          excerpt: 'O projeto Dela está conectando artesãs de comunidades tradicionais africanas com o mercado global, preservando técnicas ancestrais...',
          type: 'videos',
          link: '#'
        },
        {
          title: 'Biodiversidade africana: O trabalho do CGBN para preservação',
          source: 'Podcast Ciência & Meio Ambiente',
          date: '07/09/2022',
          excerpt: 'Neste episódio, conversamos com os pesquisadores do Centro Global de Biodiversidade Natural sobre os desafios de conservação na África...',
          type: 'podcasts',
          link: '#'
        }
      ],
      readMore: 'Leia mais',
      noResults: 'Nenhum artigo encontrado com esses filtros.'
    },
    en: {
      title: 'Clipping',
      subtitle: 'Media coverage and news about our initiatives',
      search: 'Search articles...',
      filters: {
        all: 'All',
        press: 'Press',
        blogs: 'Blogs',
        videos: 'Videos',
        podcasts: 'Podcasts'
      },
      articles: [
        {
          title: 'Africa: Rediscovered through responsible tourism',
          source: 'Travel & Tourism Magazine',
          date: '06/15/2023',
          excerpt: 'AfricaTrip is revolutionizing tourism on the African continent with its business model that directly benefits local communities...',
          type: 'press',
          link: '#'
        },
        {
          title: 'Kindezi BAL project preserves African literature for future generations',
          source: 'Culture Portal',
          date: '03/28/2023',
          excerpt: 'The African art and literature library has become an important cultural center, attracting researchers and lovers of African culture...',
          type: 'press',
          link: '#'
        },
        {
          title: 'Discover community-based tourism in African favelas',
          source: 'Amazing Destinations Blog',
          date: '02/04/2023',
          excerpt: 'The Favela initiative is transforming the perception of African urban communities and generating income for local residents...',
          type: 'blogs',
          link: '#'
        },
        {
          title: 'African artisans find global market through Dela project',
          source: 'Creative Economy Channel',
          date: '11/19/2022',
          excerpt: 'The Dela project is connecting artisans from traditional African communities with the global market, preserving ancestral techniques...',
          type: 'videos',
          link: '#'
        },
        {
          title: 'African biodiversity: CGBN\'s work for preservation',
          source: 'Science & Environment Podcast',
          date: '09/07/2022',
          excerpt: 'In this episode, we talk with researchers from the Global Center for Natural Biodiversity about conservation challenges in Africa...',
          type: 'podcasts',
          link: '#'
        }
      ],
      readMore: 'Read more',
      noResults: 'No articles found with these filters.'
    }
  };

  const t = content[language as keyof typeof content];
  
  const filteredArticles = activeFilter === 'all' 
    ? t.articles 
    : t.articles.filter(article => article.type === activeFilter);

  return (
    <section id="clipping" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-10">
            <input
              type="text"
              placeholder={t.search}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === key
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
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
          <div className="text-center py-12 text-gray-500">
            {t.noResults}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clipping;