
import React from 'react';
import FadeInSection from './FadeInSection';

const About = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?random=1" alt="Nosotros" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-blue-400">Sobre Nosotros</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                En SILOK, nos especializamos en ofrecer soluciones integrales de logística y transporte. Con años de experiencia en el sector, garantizamos un servicio eficiente, seguro y puntual para satisfacer las necesidades de nuestros clientes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nuestro equipo de profesionales está comprometido con la excelencia y la innovación, utilizando tecnología de punta para optimizar cada etapa del proceso logístico, desde el almacenaje hasta la distribución final.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
});

export default About;
