import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PricingSection from './components/sections/PricingSection';
import AdvantagesSection from './components/sections/AdvantagesSection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Barbertime | Sistema de Agendamento para Barbearias";
    
    // Apply smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <AdvantagesSection />
        <FaqSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;