import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logoAsset from '../assets/logo-antonia.svg'; // <-- 1. IMPORTAMOS A LOGO AQUI

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoAsset} // <-- 2. USAMOS A LOGO IMPORTADA AQUI
              alt="Logo Antonia Coelho"
              className="h-12 w-auto"
            />
          </Link>

          {/* O resto do seu código continua igual... */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Serviços', 'Protocolo', 'Sobre', 'Cases', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5592991460804"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Consultoria Gratuita
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ...resto do componente... */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {['Serviços', 'Protocolo', 'Sobre', 'Cases', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
                >
                  {item}
                </button>
              ))}
              <Link
                to="/blog"
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={scrollToForm}
                className="mx-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                Consultoria Gratuita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;