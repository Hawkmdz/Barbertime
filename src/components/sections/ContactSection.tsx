import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    barbershopName: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // For demo purposes, we'll just show a success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        whatsapp: '',
        barbershopName: '',
        city: ''
      });
    }, 3000);
  };

  return (
    <section 
      id="contato" 
      className="py-20 bg-gray-900"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 -translate-y-4 transition-all duration-700 ease-out"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Pronto pra modernizar sua barbearia?
              </h2>
              <p className="text-gray-300 mb-8">
                Receba seu sistema 100% personalizado em até 48h após a confirmação. Preencha o formulário para falar com nossa equipe.
              </p>
              <div className="relative hidden md:block">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-20 absolute -right-12 -bottom-12"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-10 absolute -left-8 -top-8"></div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-400">Entraremos em contato em breve.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nome completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-gray-300 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="barbershopName" className="block text-gray-300 mb-2">Nome da barbearia</label>
                    <input
                      type="text"
                      id="barbershopName"
                      name="barbershopName"
                      value={formData.barbershopName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:outline-none"
                      placeholder="Nome da sua barbearia"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-gray-300 mb-2">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:outline-none"
                      placeholder="Sua cidade"
                    />
                  </div>
                  
                  <Button 
                    primary
                    type="submit"
                    className="w-full py-4"
                  >
                    Falar com a Barbertime agora
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;