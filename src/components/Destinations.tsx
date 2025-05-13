import React from 'react';
import { MapPin } from 'lucide-react';

interface DestinationsProps {
  language: string;
}

const Destinations: React.FC<DestinationsProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Destinos em Destaque',
      subtitle: 'Explore os lugares mais incríveis da África',
      destinations: [
        {
          name: 'Zanzibar, Tanzânia',
          description: 'Praias paradisíacas e cultura swahili',
          image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg'
        },
        {
          name: 'Serengeti, Tanzânia',
          description: 'Safari e vida selvagem extraordinária',
          image: 'https://images.pexels.com/photos/4577394/pexels-photo-4577394.jpeg'
        },
        {
          name: 'Cidade do Cabo, África do Sul',
          description: 'Beleza natural e vida urbana vibrante',
          image: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg'
        }
      ]
    },
    en: {
      title: 'Featured Destinations',
      subtitle: 'Explore Africa\'s most amazing places',
      destinations: [
        {
          name: 'Zanzibar, Tanzania',
          description: 'Paradise beaches and Swahili culture',
          image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg'
        },
        {
          name: 'Serengeti, Tanzania',
          description: 'Safari and extraordinary wildlife',
          image: 'https://images.pexels.com/photos/4577394/pexels-photo-4577394.jpeg'
        },
        {
          name: 'Cape Town, South Africa',
          description: 'Natural beauty and vibrant urban life',
          image: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-gray-200">{destination.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;