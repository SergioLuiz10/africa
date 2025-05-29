import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Mulher1 from '../assets/choro.jpg';
import Homem1 from '../assets/aula.jpg';
import Bonde from '../assets/bonde.jpg';
import Galera from '../assets/bonde2.jpg';
import aula from '../assets/aulaaa2.jpg';
import galeria1 from '../assets/galeria1.jpg';
import galeria2 from '../assets/ABRACOGALERIA2.jpg';
import galeria3 from '../assets/GALERIA3.jpg';
import galeriaimg1 from '../assets/galeriaimg1.jpg'
import galeriaimg2 from '..//assets/galeriaimg2.jpg'
import galeriaimg3 from '..//assets/galeriaimg3.jpg'
import galeriaimg4 from '..//assets/galeriaimg4.jpg'
import galeriaimg5 from '..//assets/galeriaimg5.jpg'
import galeriaimg6 from '..//assets/galeriaimg6.jpg'

interface GalleryProps {
  language: string;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Galeria de Momentos',
      subtitle:
        'Nossa galeria celebra histórias reais, sorrisos sinceros e momentos que revelam a alma africana. ' +
        'São registros de encontros, trocas culturais, comunidades vibrantes e ações que transformam vidas — um reflexo visual do que o África 360 representa.',
      tooltip: 'Clique para ampliar',
    },
    en: {
      title: 'Moments Gallery',
      subtitle:
        'Our gallery celebrates real stories, genuine smiles, and moments that reveal Africa’s soul. ' +
        'These images capture vibrant communities, cultural exchanges, and impactful actions — a visual reflection of what Africa 360 stands for.',
      tooltip: 'Click to enlarge',
    }
  };

  const t = content[language as keyof typeof content];
const images = [
  Galera,
  Bonde,
  aula,
  Homem1,
  galeria2,
  galeria3,
  Mulher1,
  galeria1,
  galeriaimg1,
  galeriaimg2,
  galeriaimg6
  
];

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
    <section id="gallery" className="py-20 bg-[#f4e3d7]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto whitespace-pre-line">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border-4 border-[#f4e3d7] shadow-md group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-[400px] object-cover object-top transition duration-300 hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white text-sm px-4 py-2 rounded-full shadow-md">
                {t.tooltip}
              </div>
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
                  i === selectedIndex ? 'border-orange-500' : 'border-[#f4e3d7]'
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
