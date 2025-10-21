
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} SILOK. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
