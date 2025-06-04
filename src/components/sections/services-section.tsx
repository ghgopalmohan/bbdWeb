
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, CreditCard, BookOpenText, Megaphone, FileText, Palette, PieChart, PencilRuler } from 'lucide-react';
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
    detailedDescription: 'Creative and professional business card designs that leave a lasting impression. Tailored to your brand identity, ensuring you stand out with sophistication and impact.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'modern business card',
  },
  {
    icon: BookOpenText,
    title: 'Menus & Catalogs',
    shortDescription: 'Appetizing and informative layouts.',
    detailedDescription: 'Beautifully designed menus and catalogs that showcase your offerings in style. Clear typography and appealing visuals to engage customers and enhance brand perception effectively.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'luxury menu design',
  },
  {
    icon: Megaphone,
    title: 'Banners & Posters',
    shortDescription: 'Bold statements for maximum impact.',
    detailedDescription: 'Eye-catching banners and posters for events, promotions, and advertising. Designed to grab attention, convey your message effectively, and drive significant engagement.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'event poster creative',
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    shortDescription: 'Informative and engaging print collateral.',
    detailedDescription: 'Informative and engaging brochures and flyers for marketing and communication. Structured layouts that deliver key information clearly, persuasively, and memorably.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'corporate brochure premium',
  },
  {
    icon: Palette,
    title: 'Advanced Image Retouching',
    shortDescription: 'Perfecting your visuals with finesse.',
    detailedDescription: 'Professional photo editing and retouching services to enhance your images. From color correction to complex manipulations, ensuring pixel-perfect, stunning results every time.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'photo retouching detail',
  },
  {
    icon: PieChart,
    title: 'Digital Graphics & Assets',
    shortDescription: 'Pixel-perfect for your online presence.',
    detailedDescription: 'Custom graphics for websites, social media, and digital platforms. Optimized for web and designed to align with your online branding for consistent, powerful impact.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'social media ad design',
  },
];

const ArrowUpRight = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("h-5 w-5", className)}>
    <path d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59z"/>
  </svg>
);


export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const addScrollAnimElement = useScrollAnimation();

  useEffect(() => {
    // Default active service is already 0
  }, []);

  const activeService = servicesData[activeServiceIndex];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={addScrollAnimElement}
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">Services I Offer</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            From intricate print designs to dynamic digital assets, I provide a comprehensive suite of Photoshop services.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 min-h-[600px] md:min-h-[700px]">
          <div
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:col-span-5 space-y-4 md:space-y-5"
          >
            {servicesData.map((service, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left h-auto py-5 px-6 rounded-lg transition-all duration-200 ease-out group",
                  "shadow-sm",
                  activeServiceIndex === index
                    ? "bg-primary/10 text-primary border border-primary/30 shadow-lg ring-1 ring-primary/20"
                    : "bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground border border-transparent hover:border-primary/50"
                )}
                onMouseEnter={() => setActiveServiceIndex(index)}
                data-cursor-type="pointer"
              >
                <service.icon className={cn("h-8 w-8 mr-5 shrink-0 transition-colors", activeServiceIndex === index ? "text-primary" : "text-accent group-hover:text-primary-foreground")} />
                <div>
                  <h3 className={cn("font-headline text-xl md:text-2xl font-semibold transition-colors", activeServiceIndex === index ? "text-primary" : "text-foreground group-hover:text-primary-foreground")}>{service.title}</h3>
                  <p className={cn("text-base transition-colors", activeServiceIndex === index ? "text-primary/90" : "text-muted-foreground group-hover:text-primary-foreground/80")}>{service.shortDescription}</p>
                </div>
                <ChevronRight className={cn("h-6 w-6 ml-auto shrink-0 transition-all duration-300 ease-out", activeServiceIndex === index ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary-foreground text-muted-foreground")} />
              </Button>
            ))}
          </div>

          <div
            ref={addScrollAnimElement}
            className="scroll-animate delay-2 md:col-span-7"
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
                <CardHeader className="relative z-10 -mt-16 px-8 pt-0 md:-mt-20">
                  <CardTitle className="font-headline text-3xl md:text-4xl text-primary drop-shadow-md">{activeService.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8 flex-grow">
                  <p className="font-body text-foreground/90 leading-relaxed text-lg md:text-xl">
                    {activeService.detailedDescription}
                  </p>
                  <Button variant="link" className="text-primary hover:text-accent p-0 mt-6 font-semibold text-lg" data-cursor-type="pointer" onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    Discuss Your Project <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col items-center justify-center h-full bg-muted rounded-lg p-10 text-center">
                <PencilRuler className="h-20 w-20 text-primary/30 mb-6" />
                <p className="text-muted-foreground font-body text-xl">Select a service to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

    