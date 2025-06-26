import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const advantages = [
    "Sem fidelidade",
    "Visual com a identidade da sua barbearia",
    "100% responsivo (funciona em celular, tablet e PC)",
    "Integração com WhatsApp",
    "Não precisa registrar domínio",
    "Pronto para usar em até 48 horas",
    "Suporte humano e próximo",
    "Atualizações constantes sem custo extra"
  ];

  return (
    <section 
      id="vantagens" 
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vantagens do sistema Barbertime</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Desenvolvido especialmente para barbearias, com foco em praticidade e eficiência.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-center opacity-0 translate-y-4 transition-all"
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
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="h-5 w-5 text-amber-500" />
                </div>
                <span className="text-white">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;