
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement>;
};

const App: React.FC = () => {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    contact: contactRef,
  };

  const scrollToSection = (section: string) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero ref={homeRef} scrollToSection={() => scrollToSection('about')} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
