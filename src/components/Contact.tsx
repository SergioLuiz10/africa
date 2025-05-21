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
    address: 'Endereço',
    addressText: 'Hub Salvador - Avenida da França, 393 - Comércio, Salvador - BA, 40010-000, Brasil',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15691.85101352536!2d-38.514045!3d-13.000364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716038fb5e8e7e1%3A0xe6ac1722857e2e88!2sHub%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1716216900000!5m2!1spt-BR!2sbr',
    phone: 'Telefone',
    phoneText: '+55 (71) 99330-5723',
    phoneLink: 'https://wa.me/5571993305723',
    emailContact: 'Email',
    emailText: 'contato@africa360.org',
    emailLink: 'mailto:contato@africa360.org'
  },
  en: {
    title: 'Get in Touch',
    subtitle: "We're excited to hear from you",
    address: 'Address',
    addressText: 'Hub Salvador - Avenida da França, 393 - Comércio, Salvador - BA, 40010-000, Brazil',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15691.85101352536!2d-38.514045!3d-13.000364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716038fb5e8e7e1%3A0xe6ac1722857e2e88!2sHub%20Salvador!5e0!3m2!1sen!2sbr!4v1716216900000!5m2!1sen!2sbr',
    phone: 'Phone',
    phoneText: '+55 (71) 99330-5723',
    phoneLink: 'https://wa.me/5571993305723',
    emailContact: 'Email',
    emailText: 'contact@africa360.org',
    emailLink: 'mailto:contact@africa360.org'
  }
};


  const t = content[language as keyof typeof content];

  return (
    <section id="contact" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-amber-900">{t.title}</h2>
          <p className="text-lg text-amber-700">{t.subtitle}</p>
        </div>

        <div className="space-y-6 max-w-xl mx-auto">
          {/* Telefone */}
          <a
            href={t.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-amber-900 p-5 rounded-lg shadow-sm border border-amber-300 hover:shadow-md transition"
          >
            <div className="flex items-start">
              <Phone className="text-orange-200 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-1">{t.phone}</h3>
                <p className="text-orange-100">{t.phoneText}</p>
              </div>
            </div>
          </a>

          {/* Mapa embed central */}
          <div className="overflow-hidden rounded-xl border border-amber-300 shadow-md hover:shadow-lg transition">
            <iframe
              src={t.mapsEmbed}
              width="100%"
              height="220"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Email */}
          <a
            href={t.emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-amber-900 p-5 rounded-lg shadow-sm border border-amber-300 hover:shadow-md transition"
          >
            <div className="flex items-start">
              <Mail className="text-orange-200 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-1">{t.emailContact}</h3>
                <p className="text-orange-100">{t.emailText}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
