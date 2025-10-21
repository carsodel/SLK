
import React from 'react';
import FadeInSection from './FadeInSection';
import { PhoneIcon, EmailIcon, LocationIcon } from './icons';

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref} 
      id="contact" 
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=1')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative container mx-auto px-6 z-10">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-400">Contacto</h2>
            <p className="text-gray-300 mt-2">Estamos para servirle. Póngase en contacto con nosotros.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <PhoneIcon className="w-10 h-10 mx-auto mb-3 text-blue-400"/>
              <h3 className="text-xl font-semibold mb-1">Teléfono</h3>
              <a href="tel:+521234567890" className="text-gray-300 hover:text-blue-300 transition-colors">+52 123 456 7890</a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <EmailIcon className="w-10 h-10 mx-auto mb-3 text-blue-400"/>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <a href="mailto:contacto@silok.com" className="text-gray-300 hover:text-blue-300 transition-colors">contacto@silok.com</a>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <LocationIcon className="w-10 h-10 mx-auto mb-3 text-blue-400"/>
              <h3 className="text-xl font-semibold mb-1">Dirección</h3>
              <p className="text-gray-300">Av. Principal 123, Ciudad, País</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
});

export default Contact;
