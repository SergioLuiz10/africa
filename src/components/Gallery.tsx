import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Mulher1 from '../assets/imagem1.jpg';
import Homem1 from '../assets/HOmem1.jpg';
import Sindi from '../assets/Sindi.jpg';
import Bonde from '../assets/bonde.jpg';
import Galera from '../assets/bonde2.jpg';
import aula from '../assets/aulaaa2.jpg';

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
  const images = [Mulher1, Homem1, Sindi, Bonde, Galera, aula];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto whitespace-pre-line">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
             <img
  src={image}
  alt={`Gallery image ${index + 1}`}
  className="w-full h-[500px] object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
/>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center px-4 py-10">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-5xl w-full mb-4">
            <img
              src={images[selectedIndex]}
              alt="Imagem ampliada"
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-80"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-80"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Miniatura ${i + 1}`}
                onClick={() => setSelectedIndex(i)}
                className={`w-24 h-16 object-cover rounded cursor-pointer border-2 ${
                  i === selectedIndex ? 'border-white' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
