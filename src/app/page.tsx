import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ClientsSection from '@/components/sections/clients-section'; // Added import
import AboutSection from '@/components/sections/about-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection /> {/* Added ClientsSection */}
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
