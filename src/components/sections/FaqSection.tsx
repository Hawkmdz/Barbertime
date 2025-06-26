import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../../types';

const FaqSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: "Preciso registrar domínio?",
      answer: "Não. Você recebe um link personalizado: barbertime.app/suabarbearia, sem necessidade de registrar ou pagar por um domínio separadamente."
    },
    {
      question: "Tem fidelidade?",
      answer: "Não. O plano pode ser cancelado a qualquer momento, sem multas ou taxas adicionais."
    },
    {
      question: "Posso cadastrar vários barbeiros?",
      answer: "Sim. Cada profissional pode ter seu próprio horário e serviços disponíveis, personalizados conforme sua especialidade."
    },
    {
      question: "O cliente precisa fazer login?",
      answer: "Sim. Existe login para cliente e para o administrador da barbearia, garantindo segurança e personalização da experiência."
    },
    {
      question: "O Pix é automático?",
      answer: "O sistema permite inserir uma chave Pix personalizada. O cliente paga e recebe confirmação via WhatsApp após a realização do pagamento."
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer: "Não. O sistema é intuitivo e fácil de usar. Além disso, oferecemos treinamento e suporte para ajudá-lo em qualquer dúvida."
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Perguntas Frequentes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o sistema de agendamento Barbertime.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="mb-4 opacity-0 translate-y-4 transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
              ref={el => {
                if (el) {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'duration-500', 'ease-out');
                        observer.unobserve(entry.target);
                      }
                    },
                    { threshold: 0.1 }
                  );
                  observer.observe(el);
                }
              }}
            >
              <button
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${
                  openIndex === index ? 'bg-gray-900' : 'bg-gray-900 hover:bg-gray-850'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-gray-800 rounded-b-lg text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;