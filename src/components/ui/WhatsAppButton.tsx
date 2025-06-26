import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '558196763099'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Olá! Tenho interesse no sistema de agendamento para barbearias.');
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="text-white h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
