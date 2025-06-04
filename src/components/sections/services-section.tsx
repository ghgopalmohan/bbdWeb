
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, CreditCard, BookOpenText, Megaphone, FileText, Palette, Tv } from 'lucide-react';
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
    title: 'Business Cards',
    shortDescription: 'Memorable first impressions.',
    detailedDescription: 'Creative and professional business card designs that leave a lasting impression. Tailored to your brand identity, ensuring you stand out.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'modern business cards',
  },
  {
    icon: BookOpenText,
    title: 'Menus & Catalogs',
    shortDescription: 'Appetizing and informative layouts.',
    detailedDescription: 'Beautifully designed menus and catalogs that showcase your offerings in style. Clear typography and appealing visuals to engage customers.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'restaurant menu design',
  },
  {
    icon: Megaphone,
    title: 'Banners & Posters',
    shortDescription: 'Bold statements for big impact.',
    detailedDescription: 'Eye-catching banners and posters for events, promotions, and advertising campaigns. Designed to grab attention and convey your message effectively.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'event poster design',
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    shortDescription: 'Informative and engaging prints.',
    detailedDescription: 'Informative and engaging brochures and flyers for marketing and communication. Structured layouts that deliver key information clearly.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'corporate brochure layout',
  },
  {
    icon: Palette,
    title: 'Image Retouching',
    shortDescription: 'Perfecting your visuals.',
    detailedDescription: 'Professional photo editing and retouching services to enhance your images. From color correction to complex manipulations, ensuring pixel-perfect results.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'photo retouching beforeafter',
  },
  {
    icon: Tv,
    title: 'Digital Graphics',
    shortDescription: 'Pixel-perfect online presence.',
    detailedDescription: 'Custom graphics for websites, social media, and other digital platforms. Optimized for web and designed to align with your online branding.',
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'social media graphics',
  },
];

export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(0); // Default to first service active
  const addScrollAnimElement = useScrollAnimation();
  
  // Effect to ensure the first item is active on initial load if not set by hover
  useEffect(() => {
    if (activeServiceIndex === null && servicesData.length > 0) {
      setActiveServiceIndex(0);
    }
  }, [activeServiceIndex]);


  const activeService = activeServiceIndex !== null ? servicesData[activeServiceIndex] : null;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement}
          className="scroll-animate text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Services I Offer</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            From print to digital, I provide a wide range of Photoshop design services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 min-h-[600px]"> {/* Increased min-h for content */}
          {/* Left Column: Service List */}
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:col-span-4 space-y-3"
          >
            {servicesData.map((service, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left h-auto py-4 px-4 rounded-lg transition-all duration-200 ease-out group",
                  "border border-transparent", 
                  activeServiceIndex === index ? "bg-primary/10 text-primary border-primary/30 shadow-md" : "hover:bg-muted/80 hover:text-foreground"
                )}
                onMouseEnter={() => setActiveServiceIndex(index)}
                data-cursor-type="pointer"
              >
                <service.icon className={cn("h-7 w-7 mr-4 shrink-0 transition-colors", activeServiceIndex === index ? "text-primary" : "text-foreground/70 group-hover:text-primary")} />
                <div>
                  <h3 className={cn("font-headline text-xl font-semibold transition-colors", activeServiceIndex === index ? "text-primary" : "text-foreground group-hover:text-primary")}>{service.title}</h3>
                  <p className={cn("text-sm transition-colors", activeServiceIndex === index ? "text-primary/80" : "text-muted-foreground group-hover:text-foreground/80")}>{service.shortDescription}</p>
                </div>
                <ChevronRight className={cn("h-5 w-5 ml-auto shrink-0 transition-all duration-300 ease-out", activeServiceIndex === index ? "opacity-100 translate-x-0 text-primary" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-foreground/70")} />
              </Button>
            ))}
          </div>

          {/* Right Column: Service Detail */}
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-2 md:col-span-8"
          >
            {activeService ? (
              <Card className="h-full flex flex-col overflow-hidden shadow-xl rounded-xl border border-border bg-card">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    key={activeService.imageUrl} // Add key to force re-render on change
                    src={activeService.imageUrl}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-all duration-500 ease-in-out transform scale-100 hover:scale-105"
                    data-ai-hint={activeService.dataAiHint}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                </div>
                <CardHeader className="relative z-10 -mt-12 px-6 pt-0">
                  <CardTitle className="font-headline text-3xl text-primary">{activeService.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-6 pb-6 flex-grow">
                  <p className="font-body text-foreground/80 leading-relaxed text-base">
                    {activeService.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center h-full bg-muted rounded-lg">
                <p className="text-foreground/50 font-body">Select a service to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
