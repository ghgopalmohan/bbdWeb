import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ClientsSection from '@/components/sections/clients-section';
import AboutSection from '@/components/sections/about-section';
import DesignProcessSection from '@/components/sections/design-process-section'; // Added import
import PortfolioSection from '@/components/sections/portfolio-section';
import ServicesSection from '@/components/sections/services-section';
import AiIdeaGeneratorSection from '@/components/sections/ai-idea-generator-section'; // Added import
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <DesignProcessSection /> {/* Added DesignProcessSection */}
        <ServicesSection />
        <PortfolioSection />
        <ClientsSection /> 
        <AiIdeaGeneratorSection /> {/* Added AiIdeaGeneratorSection */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
