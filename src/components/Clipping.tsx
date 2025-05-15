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
        title: 'Shopping Bela Vista recebe a 2ª edição da roda de conversa "De onde viemos, para onde vamos?"',
        source: 'Lícia Fábio',
        date: '13/05/2024',
        excerpt: 'Evento promove reflexões sobre ancestralidade e afroempreendedorismo no Novembro Negro.',
        type: 'press',
        link: 'https://www.liciafabio.com.br/shopping-bela-vista-recebe-a-2a-edicao-da-roda-de-conversa-de-onde-viemos-para-onde-vamos/'
      },
      {
        title: 'Roda de Conversa: "De onde viemos, para onde vamos?"',
        source: 'Salvador Notícias',
        date: '10/01/2025',
        excerpt: 'Discussão sobre identidade negra e futuro dos negócios afrocentrados em Salvador.',
        type: 'press',
        link: 'https://www.salvadornoticias.com/2025/01/roda-de-conversa-de-onde-viemos-para.html'
      },
      {
        title: 'Shopping Bela Vista segue com exposição "Pessoas Negras, Negócios Potentes"',
        source: 'Revista Yacht',
        date: '20/11/2024',
        excerpt: 'Mostra celebra o afroempreendedorismo com rodas de conversa e homenagens.',
        type: 'press',
        link: 'https://www.revistayacht.com.br/shopping-bela-vista-segue-com-exposicao-pessoas-negras-negocios-potentes-e-traz-serie-de-rodas-de-conversas/'
      },
      {
        title: 'Shopping Bela Vista promove programação especial no Novembro Negro',
        source: 'Shopping Bela Vista',
        date: '19/11/2024',
        excerpt: 'Atividades culturais celebram a Consciência Negra com foco em empreendedorismo e cultura.',
        type: 'press',
        link: 'https://www.shoppingbelavista.com.br/noticias/2024/11/19/novembro-negro-shopping-bela-vista-promove-programacao-especial-para-celebrar-a-consciencia-negra.html'
      },
      {
        title: 'Exposição celebra afroempreendedorismo em Salvador',
        source: 'Africanize Oficial',
        date: '21/11/2024',
        excerpt: 'Projeto "Pessoas Negras, Negócios Potentes" homenageia líderes e marcas negras.',
        type: 'press',
        link: 'https://www.africanizeoficial.com.br/exposicao-pessoas-negras-negocios-potentes-celebra-afroempreendedorismo-em-salvador'
      },
      {
        title: 'Shopping segue com exposição de afroempreendedores',
        source: 'Jornal Massa',
        date: '22/11/2024',
        excerpt: 'Empreendedores negros ganham visibilidade em mostra realizada no Shopping Bela Vista.',
        type: 'press',
        link: 'https://jornalmassa.com.br/cidades/shopping-segue-com-exposicao-pessoas-negras-negocios-potentes-1276821'
      },
      {
        title: 'Curso de auxiliar de enfermagem veterinária no Bairro da Paz',
        source: 'ANF - Agência de Notícias das Favelas',
        date: '05/03/2025',
        excerpt: 'Iniciativa oferece formação gratuita para jovens negros da periferia de Salvador.',
        type: 'press',
        link: 'https://www.anf.org.br/bairro-da-paz-tera-curso-de-auxiliar-de-enfermagem-veterinaria-para-jovens-negros/'
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
        title: 'Bela Vista Mall hosts the 2nd edition of the talk "Where do we come from, where are we going?"',
        source: 'Lícia Fábio',
        date: '2024-05-13',
        excerpt: 'Event promotes reflection on ancestry and Black entrepreneurship during Black Awareness Month.',
        type: 'press',
        link: 'https://www.liciafabio.com.br/shopping-bela-vista-recebe-a-2a-edicao-da-roda-de-conversa-de-onde-viemos-para-onde-vamos/'
      },
      {
        title: 'Discussion Circle: "Where do we come from, where are we going?"',
        source: 'Salvador Notícias',
        date: '2025-01-10',
        excerpt: 'Debate on Black identity and Afro-centered business in Salvador.',
        type: 'press',
        link: 'https://www.salvadornoticias.com/2025/01/roda-de-conversa-de-onde-viemos-para.html'
      },
      {
        title: 'Bela Vista continues with exhibition "Black People, Powerful Businesses"',
        source: 'Revista Yacht',
        date: '2024-11-20',
        excerpt: 'Show honors Black entrepreneurship with discussions and celebrations.',
        type: 'press',
        link: 'https://www.revistayacht.com.br/shopping-bela-vista-segue-com-exposicao-pessoas-negras-negocios-potentes-e-traz-serie-de-rodas-de-conversas/'
      },
      {
        title: 'Black Awareness Month at Bela Vista Mall features special events',
        source: 'Shopping Bela Vista',
        date: '2024-11-19',
        excerpt: 'Cultural activities celebrate Black identity, entrepreneurship, and legacy.',
        type: 'press',
        link: 'https://www.shoppingbelavista.com.br/noticias/2024/11/19/novembro-negro-shopping-bela-vista-promove-programacao-especial-para-celebrar-a-consciencia-negra.html'
      },
      {
        title: 'Exhibition celebrates Black entrepreneurship in Salvador',
        source: 'Africanize Oficial',
        date: '2024-11-21',
        excerpt: '"Black People, Powerful Businesses" pays tribute to Black leaders and brands.',
        type: 'press',
        link: 'https://www.africanizeoficial.com.br/exposicao-pessoas-negras-negocios-potentes-celebra-afroempreendedorismo-em-salvador'
      },
      {
        title: 'Mall honors Black entrepreneurs in special exhibition',
        source: 'Jornal Massa',
        date: '2024-11-22',
        excerpt: 'Afro-entrepreneurs gain visibility in a major public exhibit in Salvador.',
        type: 'press',
        link: 'https://jornalmassa.com.br/cidades/shopping-segue-com-exposicao-pessoas-negras-negocios-potentes-1276821'
      },
      {
        title: 'Veterinary nursing assistant course for young Black people in Bairro da Paz',
        source: 'ANF News Agency',
        date: '2025-03-05',
        excerpt: 'Free training program targets youth from Salvador\'s periphery.',
        type: 'press',
        link: 'https://www.anf.org.br/bairro-da-paz-tera-curso-de-auxiliar-de-enfermagem-veterinaria-para-jovens-negros/'
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