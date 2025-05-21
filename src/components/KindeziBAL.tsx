import React from 'react';
import imagemKindezi from '../assets/DJARA.png'; // ajuste o caminho conforme necessário

interface KindeziBALProps {
  language: string;
}

const KindeziBAL: React.FC<KindeziBALProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Kindezi BAL',
      subtitle: 'Empoderar é cuidar. Cuidar é revolucionar.',
      paragraphs: [
        'Em Salvador, onde pulsa o coração negro do Brasil, acontecerá o Kindezi BAL, um movimento que vai além da formação em tecnologia. É uma convocação ancestral para transformar o futuro das mulheres negras periféricas, reconhecendo nelas a força, a inteligência e o poder de criar soluções para um mundo mais justo, diverso e inclusivo.',
        'Inspirado na filosofia africana do Kindezi — o ato comunitário de cuidar, ensinar e guiar as novas gerações — este projeto ergue pontes entre o passado e o amanhã.',
        'É aqui, nas quebradas de Salvador, que começará essa revolução tecnológica potente: liderada por mulheres negras, guiada pela ancestralidade, sustentada pela coletividade.',
        'Formaremos as primeiras dez. Depois, serão cem. Mil. E incontáveis. Seremos muitas. Porque quando uma mulher negra periférica ocupa um espaço na tecnologia, ela não entra sozinha — ela abre caminho.'
      ]
    },
    en: {
      title: 'Kindezi BAL',
      subtitle: 'Empowering is caring. Caring is revolution.',
      paragraphs: [
        'In Salvador, where the Black heart of Brazil beats, Kindezi BAL will take place — a movement that goes beyond tech education. It is an ancestral call to transform the future of marginalized Black women, recognizing in them the strength, intelligence, and power to create a more just, diverse, and inclusive world.',
        'Inspired by the African philosophy of Kindezi — the communal act of caring for, teaching, and guiding the next generations — this project builds bridges between the past and the future.',
        'Here, in the outskirts of Salvador, this powerful tech revolution begins: led by Black women, guided by ancestry, and sustained by community.',
        'We’ll form the first ten. Then a hundred. A thousand. Countless. We’ll be many. Because when a marginalized Black woman enters the tech space, she doesn’t go alone — she paves the way.'
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="kindezi" className="py-20 bg-[#8a3d14] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-lg text-white">{t.subtitle}</p>
        </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start">
  {/* Cards de texto - esquerda */}
  <div className="space-y-8 md:w-2/3 pr-4 z-10">
    {t.paragraphs.map((paragraph, index) => (
      <div
        key={index}
        className="bg-white text-[#4a2c1a] border-l-4 border-orange-500 rounded-2xl p-6 text-lg shadow-md max-w-xl animate-slide-in-left"
      >
        {paragraph}
      </div>
    ))}
  </div>

  {/* Imagem - canto inferior direito */}
  <div className="hidden md:block absolute bottom-0 right-0 z-0">
    <img
      src={imagemKindezi}
      alt="Imagem Kindezi BAL"
      className="w-[380px] lg:w-[460px] animate-slide-in-right"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default KindeziBAL;
