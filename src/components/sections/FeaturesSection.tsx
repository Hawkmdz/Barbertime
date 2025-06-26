import React, { useEffect, useRef } from 'react';
import { 
  Users, Calendar, Clock, Scissors, CreditCard, MessageSquare, 
  LayoutDashboard, Server, Link, RefreshCcw 
} from 'lucide-react';
import { Feature } from '../../types';

const FeaturesSection: React.FC = () => {
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

  const features: Feature[] = [
    {
      icon: "Users",
      title: "Cadastro de barbeiros personalizado",
      description: "Cada profissional pode ter seus próprios dias, horários e serviços disponíveis."
    },
    {
      icon: "Users",
      title: "Login separado para clientes e administrador",
      description: "Interface exclusiva para seus clientes e painel administrativo protegido."
    },
    {
      icon: "Clock",
      title: "Edição em tempo real",
      description: "Altere horários, datas e serviços a qualquer momento com atualização instantânea."
    },
    {
      icon: "Scissors",
      title: "Serviços personalizáveis",
      description: "Configure corte, barba, pigmentação e outros serviços conforme sua barbearia."
    },
    {
      icon: "CreditCard",
      title: "Pagamento via Pix",
      description: "Integração com sistema de pagamento Pix com valor ou chave editável."
    },
    {
      icon: "MessageSquare",
      title: "Confirmação via WhatsApp",
      description: "Notificações automáticas de confirmação de agendamento via WhatsApp."
    },
    {
      icon: "LayoutDashboard",
      title: "Painel intuitivo e responsivo",
      description: "Interface administrativa simples de usar em qualquer dispositivo."
    },
    {
      icon: "Server",
      title: "Hospedagem inclusa",
      description: "Não se preocupe com servidor ou parte técnica, cuidamos de tudo para você."
    },
    {
      icon: "Link",
      title: "Link personalizado",
      description: "Seu próprio endereço no formato barbertime.app/suabarbearia."
    },
    {
      icon: "RefreshCcw",
      title: "Atualizações e suporte",
      description: "Receba melhorias constantes e suporte técnico sempre que precisar."
    }
  ];

  // Map string icon names to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="h-6 w-6 text-amber-500" />;
      case 'Calendar': return <Calendar className="h-6 w-6 text-amber-500" />;
      case 'Clock': return <Clock className="h-6 w-6 text-amber-500" />;
      case 'Scissors': return <Scissors className="h-6 w-6 text-amber-500" />;
      case 'CreditCard': return <CreditCard className="h-6 w-6 text-amber-500" />;
      case 'MessageSquare': return <MessageSquare className="h-6 w-6 text-amber-500" />;
      case 'LayoutDashboard': return <LayoutDashboard className="h-6 w-6 text-amber-500" />;
      case 'Server': return <Server className="h-6 w-6 text-amber-500" />;
      case 'Link': return <Link className="h-6 w-6 text-amber-500" />;
      case 'RefreshCcw': return <RefreshCcw className="h-6 w-6 text-amber-500" />;
      default: return <Scissors className="h-6 w-6 text-amber-500" />;
    }
  };

  return (
    <section 
      id="recursos" 
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">O que o sistema oferece</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Um sistema completo e personalizado, desenvolvido para atender todas as necessidades da sua barbearia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg transition-all hover:bg-gray-750 opacity-0 translate-y-4"
              style={{ transitionDelay: `${index * 100}ms` }}
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
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {getIconComponent(feature.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;