
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section'; // Added
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section'; // This is the "Stay Updated on Our Progress" / form

export default function JanicePortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Use global background */}
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* The following sections create the alternating dark/light bg effect */}
        <div className="bg-background"> {/* Light background container for About */}
          <AboutSection />
        </div>
        <ExperienceSection /> {/* Dark background from its own definition */}
        <div className="bg-background"> {/* Light background container for Services */}
           <ServicesSection />
        </div>
        <PortfolioSection /> {/* Dark background from its own definition */}
         <div className="bg-background"> {/* Light background for Testimonials */}
          <TestimonialsSection />
        </div>
        <ContactSection /> {/* Dark background for Contact/Form section */}
      </main>
      <Footer />
    </div>
  );
}

    