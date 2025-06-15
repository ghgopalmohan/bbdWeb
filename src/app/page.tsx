
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import MyStyleSection from '@/components/sections/my-style-section'; // Added
import ContactSection from '@/components/sections/contact-section';

export default function JanicePortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection /> {/* Custom bg, effectively darkish */}
        <div className="bg-background"> {/* Light container for About */}
          <AboutSection /> {/* AboutSection has its own light bg */}
        </div>
        <ExperienceSection /> {/* Dark (bg-janice-dark) */}
        {/* ServicesSection is now set to dark (bg-primary) */}
        <ServicesSection /> 
        <div className="bg-background"> {/* Light container for Portfolio */}
           <PortfolioSection /> {/* PortfolioSection has light bg */}
        </div>
        {/* MyStyleSection is dark (bg-black) */}
        <MyStyleSection />
        <div className="bg-background"> {/* Light container for Contact */}
           <ContactSection /> {/* ContactSection has light bg */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
