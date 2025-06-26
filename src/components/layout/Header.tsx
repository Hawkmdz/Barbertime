import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
            BARBERTIME
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('como-funciona')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Como Funciona</a>
          <a onClick={() => scrollToSection('recursos')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Recursos</a>
          <a onClick={() => scrollToSection('planos')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Planos</a>
          <a onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">FAQ</a>
          <Button onClick={() => scrollToSection('contato')} primary>Falar com a Barbertime</Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection('como-funciona')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Como Funciona</a>
            <a onClick={() => scrollToSection('recursos')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Recursos</a>
            <a onClick={() => scrollToSection('planos')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Planos</a>
            <a onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">FAQ</a>
            <Button onClick={() => scrollToSection('contato')} primary className="w-full">Falar com a Barbertime</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;