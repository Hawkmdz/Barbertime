import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text mb-4">
              BARBERTIME
            </h3>
            <p className="text-gray-400 mb-4">
              Sistema de agendamento exclusivo para barbearias. Profissional, simples e personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#vantagens" className="text-gray-400 hover:text-white transition-colors">Vantagens</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-500" />
                <a href="mailto:contato@barbertime.app" className="text-gray-400 hover:text-white transition-colors">
                  contato@barbertime.app
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-500" />
                <a href="tel:+5500000000000" className="text-gray-400 hover:text-white transition-colors">
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Barbertime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;