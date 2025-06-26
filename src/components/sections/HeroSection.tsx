import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center relative bg-gray-900 opacity-0 -translate-y-4 transition-all duration-1000 ease-out"
    >
      {/* Background overlay with image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/100"></div>
      </div>

      <div className="container mx-auto px-4 py-20 pt-32 md:py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-white">O sistema de agendamento que</span>
              <span className="block text-white">sua barbearia</span>
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">merece</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Profissional, simples e personalizado. Um produto Korvax.
            </p>
            
            <Button 
              primary 
              onClick={scrollToContact}
              className="text-base md:text-lg px-8 py-4"
            >
              Quero o meu agora
            </Button>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source 
                  src="https://player.vimeo.com/external/483035162.sd.mp4?s=ea336dd7c62e4c86d2b62a0e7b3d0e8e7c6d5f0e&profile_id=164"
                  type="video/mp4" 
                />
                {/* Fallback images for when video can't play */}
                <img 
                  src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg"
                  alt="Barbershop Interface"
                  className="w-full h-full object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              
              {/* Floating UI elements */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Sistema Korvax</h3>
                      <p className="text-gray-300 text-sm">Agendamento inteligente</p>
                    </div>
                    <Button primary className="text-sm px-4 py-2">
                      Agendar
                    </Button>
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

export default HeroSection;