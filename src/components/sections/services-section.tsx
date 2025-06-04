
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, CreditCard, BookOpenText, Megaphone, FileText, Palette, PieChart, PencilRuler } from 'lucide-react'; // Replaced TvChart with PieChart
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Service {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  imageUrl: string;
  dataAiHint: string;
}

const servicesData: Service[] = [
  {
    icon: CreditCard,
    title: 'Business Card Design',
    shortDescription: 'Crafting memorable first impressions.',
    detailedDescription: 'Creative and professional business card designs that leave a lasting impression. Tailored to your brand identity, ensuring you stand out with sophistication.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'modern business card',
  },
  {
    icon: BookOpenText,
    title: 'Menus & Catalogs',
    shortDescription: 'Appetizing and informative layouts.',
    detailedDescription: 'Beautifully designed menus and catalogs that showcase your offerings in style. Clear typography and appealing visuals to engage customers and enhance brand perception.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'luxury menu design',
  },
  {
    icon: Megaphone,
    title: 'Banners & Posters',
    shortDescription: 'Bold statements for maximum impact.',
    detailedDescription: 'Eye-catching banners and posters for events, promotions, and advertising. Designed to grab attention, convey your message effectively, and drive engagement.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'event poster creative',
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    shortDescription: 'Informative and engaging print collateral.',
    detailedDescription: 'Informative and engaging brochures and flyers for marketing and communication. Structured layouts that deliver key information clearly and persuasively.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'corporate brochure premium',
  },
  {
    icon: Palette,
    title: 'Advanced Image Retouching',
    shortDescription: 'Perfecting your visuals with finesse.',
    detailedDescription: 'Professional photo editing and retouching services to enhance your images. From color correction to complex manipulations, ensuring pixel-perfect, stunning results.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'photo retouching detail',
  },
  {
    icon: PieChart, // Changed icon from TvChart to PieChart
    title: 'Digital Graphics & Assets',
    shortDescription: 'Pixel-perfect for your online presence.',
    detailedDescription: 'Custom graphics for websites, social media, and digital platforms. Optimized for web and designed to align with your online branding for consistent impact.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'social media ad design',
  },
];

export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0); 
  const addScrollAnimElement = useScrollAnimation();
  
  useEffect(() => {
    // The default activeServiceIndex is 0, so no need for special handling unless servicesData is empty
  }, []);

  const activeService = servicesData[activeServiceIndex];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement}
          className="scroll-animate text-center mb-16 md:mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Services I Offer</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From intricate print designs to dynamic digital assets, I provide a comprehensive suite of Photoshop services.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 min-h-[550px] md:min-h-[600px]">
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:col-span-4 space-y-3 md:space-y-4"
          >
            {servicesData.map((service, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left h-auto py-4 px-5 rounded-lg transition-all duration-200 ease-out group",
                  "border border-transparent shadow-sm", 
                  activeServiceIndex === index 
                    ? "bg-primary/10 text-primary border-primary/30 shadow-lg ring-1 ring-primary/20" 
                    : "bg-card hover:bg-muted hover:text-foreground hover:border-border"
                )}
                onMouseEnter={() => setActiveServiceIndex(index)}
                data-cursor-type="pointer"
              >
                <service.icon className={cn("h-7 w-7 mr-4 shrink-0 transition-colors", activeServiceIndex === index ? "text-primary" : "text-accent group-hover:text-primary")} />
                <div>
                  <h3 className={cn("font-headline text-lg md:text-xl font-semibold transition-colors", activeServiceIndex === index ? "text-primary" : "text-foreground group-hover:text-primary")}>{service.title}</h3>
                  <p className={cn("text-sm transition-colors", activeServiceIndex === index ? "text-primary/90" : "text-muted-foreground group-hover:text-foreground/80")}>{service.shortDescription}</p>
                </div>
                <ChevronRight className={cn("h-5 w-5 ml-auto shrink-0 transition-all duration-300 ease-out", activeServiceIndex === index ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground")} />
              </Button>
            ))}
          </div>

          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-2 md:col-span-8"
          >
            {activeService ? (
              <Card className="h-full flex flex-col overflow-hidden shadow-xl rounded-xl border border-border bg-card">
                <div className="relative aspect-[16/9] w-full overflow-hidden group">
                  <Image
                    key={activeService.imageUrl + activeServiceIndex} 
                    src={activeService.imageUrl}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105"
                    data-ai-hint={activeService.dataAiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent"></div>
                </div>
                <CardHeader className="relative z-10 -mt-16 px-6 pt-0 md:-mt-20">
                  <CardTitle className="font-headline text-2xl md:text-3xl text-primary drop-shadow-md">{activeService.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-6 pb-6 flex-grow">
                  <p className="font-body text-foreground/85 leading-relaxed text-base">
                    {activeService.detailedDescription}
                  </p>
                  <Button variant="link" className="text-primary hover:text-accent p-0 mt-4 font-semibold" data-cursor-type="pointer" onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    Get a Quote <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center h-full bg-muted rounded-lg p-8">
                <PencilRuler className="h-16 w-16 text-primary/30 mb-4" />
                <p className="text-muted-foreground font-body text-center">Select a service from the list to view more details and see how I can help bring your vision to life.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper icon, not for direct use if already imported
const ArrowUpRight = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("h-5 w-5", className)}>
    <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59z"/>
  </svg>
);

    