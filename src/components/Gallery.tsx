import React from 'react';

interface GalleryProps {
  language: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Galeria de Momentos',
      subtitle:
        'Nossa galeria celebra histórias reais, sorrisos sinceros e momentos que revelam a alma africana. ' +
        'São registros de encontros, trocas culturais, comunidades vibrantes e ações que transformam vidas — um reflexo visual do que o África 360 representa.'
    },
    en: {
      title: 'Moments Gallery',
      subtitle:
        'Our gallery celebrates real stories, genuine smiles, and moments that reveal Africa’s soul. ' +
        'These images capture vibrant communities, cultural exchanges, and impactful actions — a visual reflection of what Africa 360 stands for.'
    }
  };

  const t = content[language as keyof typeof content];

  const images = [
    '',
    'https://images.pexels.com/photos/4577394/pexels-photo-4577394.jpeg',
    'https://images.pexels.com/photos/4577395/pexels-photo-4577395.jpeg',
    'https://images.pexels.com/photos/4577396/pexels-photo-4577396.jpeg',
    'https://images.pexels.com/photos/4577397/pexels-photo-4577397.jpeg',
    'https://images.pexels.com/photos/4577398/pexels-photo-4577398.jpeg'
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto whitespace-pre-line">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) =>
            image ? (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
