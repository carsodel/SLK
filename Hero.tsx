
import React from 'react';
import FadeInSection from './FadeInSection';

interface HeroProps {
  scrollToSection: () => void;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(({ scrollToSection }, ref) => {
  return (
    <section 
      ref={ref} 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white z-10 px-4">
        <FadeInSection>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
            SILOK
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            Logística y Transporte
            </p>
            <button
            onClick={scrollToSection}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
            >
            Ver más
            </button>
        </FadeInSection>
      </div>
    </section>
  );
});

export default Hero;
