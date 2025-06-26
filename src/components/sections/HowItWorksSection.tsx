import React, { useEffect, useRef } from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';
import { Step } from '../../types';

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (phoneRef.current) {
      observer.observe(phoneRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      title: "Escolha o barbeiro",
      description: "Selecione o profissional de sua preferência entre os disponíveis na barbearia."
    },
    {
      number: 2,
      title: "Selecione a data e o horário",
      description: "Escolha o dia e horário que melhor se encaixa na sua agenda."
    },
    {
      number: 3,
      title: "Confirme o agendamento",
      description: "Finalize o agendamento e receba a confirmação via WhatsApp."
    }
  ];

  return (
    <section 
      id="como-funciona" 
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Como Funciona</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            O sistema Barbertime foi desenvolvido para ser simples e intuitivo, proporcionando uma experiência fluida tanto para você quanto para seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="flex items-start opacity-0 -translate-y-4 transition-all duration-700 ease-out"
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`
                }}
                ref={el => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('opacity-100', 'translate-y-0');
                          observer.unobserve(entry.target);
                        }
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div 
            ref={phoneRef}
            className="relative mx-auto opacity-0 translate-x-4 transition-all duration-1000 ease-out"
          >
            <div className="w-[280px] h-[580px] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-700 mx-auto">
              <div className="relative h-full overflow-hidden">
                {/* Screen content mockup */}
                <div className="px-4 py-6 h-full bg-gray-900">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white text-xs">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  
                  {/* App header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">BARBERTIME</h3>
                    <p className="text-gray-400 text-xs">Agendamento Barbearia</p>
                  </div>
                  
                  {/* Step 1: Choose barber */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-medium mb-3">Escolha seu barbeiro:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2"></div>
                        <p className="text-white text-xs text-center">Carlos</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-2"></div>
                        <p className="text-white text-xs text-center">André</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: Choose date/time */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-medium mb-3">Selecione o horário:</h4>
                    <div className="bg-gray-800 p-3 rounded-lg mb-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Junho 2025</span>
                        <div className="flex space-x-2">
                          <button className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">&lt;</span>
                          </button>
                          <button className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">&gt;</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mt-2">
                        {[...Array(7)].map((_, i) => (
                          <div key={i} className="w-8 h-8 flex items-center justify-center text-white text-xs">
                            {i + 15}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {["09:00", "10:30", "11:30", "14:00", "15:30"].map((time, i) => (
                        <div 
                          key={i} 
                          className={`px-3 py-2 rounded-md text-xs flex-shrink-0 ${
                            i === 1 ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900" : "bg-gray-800 text-white"
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Step 3: Confirm */}
                  <div>
                    <button className="w-full py-3 rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-medium text-sm">
                      Confirmar Agendamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;