import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    pt: {
      title: 'Entre em Contato',
      subtitle: 'Estamos ansiosos para ouvir de você',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      address: 'Endereço',
      addressText: 'Av. das Nações, 123 - São Paulo, Brasil',
      phone: 'Telefone',
      phoneText: '+55 (71) 993305723',
      emailContact: 'Email',
      emailText: 'contato@africa360.org'
    },
    en: {
      title: 'Get in Touch',
      subtitle: 'We\'re excited to hear from you',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      address: 'Address',
      addressText: 'Avenida da França, 393 2º andar Hub, Av. da França, 393 - 2º andar Hub - Comércio, Salvador - BA, 40010-000',
      phone: 'Phone',
      phoneText: '++55 (71) 993305723',
      emailContact: 'Email',
      emailText: 'contact@africa360.org'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors font-medium text-lg"
                >
                  {t.send}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-start">
                <MapPin className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t.address}</h3>
                  <p className="text-gray-600">{t.addressText}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <Phone className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t.phone}</h3>
                  <p className="text-gray-600">{t.phoneText}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-start">
                <Mail className="text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t.emailContact}</h3>
                  <p className="text-gray-600">{t.emailText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;