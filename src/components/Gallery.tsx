import React from 'react';

interface GalleryProps {
  language: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Galeria de Momentos',
      subtitle: 'Capturando a beleza e a essência da África'
    },
    en: {
      title: 'Moments Gallery',
      subtitle: 'Capturing Africa\'s beauty and essence'
    }
  };

  const t = content[language as keyof typeof content];

  const images = [
    'https://images.pexels.com/photos/4577801/pexels-photo-4577801.jpeg',
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
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img 
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;