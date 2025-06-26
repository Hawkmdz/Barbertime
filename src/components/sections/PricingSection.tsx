import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import { PricingPlan } from '../../types';

const PricingSection: React.FC = () => {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans: PricingPlan[] = [
    {
      title: "Plano Básico",
      price: "R$ 35,90",
      period: "por mês",
      features: [
        "Sistema de agendamento",
        "Link exclusivo no domínio barbertime.app",
        "Hospedagem e suporte inclusos",
        "Atualizações automáticas"
      ],
      cta: "Escolher plano básico"
    },
    {
      title: "Plano Premium",
      price: "R$ 59,90",
      period: "por mês",
      features: [
        "Sistema completo",
        "Link exclusivo no domínio barbertime.app",
        "Hospedagem e suporte inclusos",
        "Atualizações automáticas",
        "Gestão completa integrada",
        "Controle financeiro",
        "Ideal para uso completo"
      ],
      cta: "Escolher plano premium",
      highlight: true
    }
  ];

  return (
    <section 
      id="planos" 
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Planos de Aluguel</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sem fidelidade. Sem domínio próprio. Pronto pra usar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                rounded-xl overflow-hidden transition-all duration-500
                ${plan.highlight 
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-500 shadow-lg shadow-amber-500/10' 
                  : 'bg-gray-900'
                }
                opacity-0 ${index === 0 ? '-translate-x-4' : 'translate-x-4'}
              `}
              ref={el => {
                if (el) {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-x-0', 'duration-700', 'ease-out');
                        observer.unobserve(entry.target);
                      }
                    },
                    { threshold: 0.1 }
                  );
                  observer.observe(el);
                }
              }}
            >
              {plan.highlight && (
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-center py-2 text-gray-900 font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  primary={plan.highlight}
                  onClick={scrollToContact}
                  className={`w-full ${!plan.highlight && 'border border-amber-500 text-amber-500 bg-transparent hover:bg-amber-500/10'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 bg-gray-900 rounded-xl p-8 max-w-3xl mx-auto opacity-0 translate-y-4 transition-all"
          ref={el => {
            if (el) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0', 'duration-700', 'ease-out');
                    observer.unobserve(entry.target);
                  }
                },
                { threshold: 0.1 }
              );
              observer.observe(el);
            }
          }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Plano Personalizado</h3>
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <span className="text-4xl font-bold text-white">R$ 69,90</span>
              <span className="text-gray-400 block mt-1">por mês</span>
            </div>
          </div>
          
          <ul className="space-y-4 max-w-lg mx-auto mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Personalização com nome, logo e identidade da barbearia</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Entrega em até 48h após a confirmação</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Link exclusivo com domínio próprio</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Sem custo extra de manutenção ou setup técnico</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Controle completo de gestão e financeiro</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Landing page inclusa</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">+ BIO personalizada no Instagram (Bônus)</span>
            </li>
          </ul>
          
          <div className="text-center">
            <Button 
              primary
              onClick={scrollToContact}
              className="px-8"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;