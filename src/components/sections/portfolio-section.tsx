
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const portfolioItemsData = [
  { 
    id: 1, 
    title: 'Business Cards', 
    category: 'Branding', 
    imageUrl: '/business-cards.png', 
    description: 'Professional and impactful business card designs tailored to your brand identity.', 
    dataAiHint: 'business cards professional' 
  },
  { 
    id: 2, 
    title: 'Logos', 
    category: 'Branding', 
    imageUrl: '/logos.png', 
    description: 'Memorable and versatile logo designs that effectively define and represent your brand.', 
    dataAiHint: 'creative logos modern' 
  },
  { 
    id: 3, 
    title: 'Menus', 
    category: 'Print Design', 
    imageUrl: '/menus.png', 
    description: 'Visually appealing and easy-to-navigate menu designs for restaurants and cafes.', 
    dataAiHint: 'restaurant menu elegant' 
  },
  { 
    id: 5, 
    title: 'Banners', 
    category: 'Advertising', 
    imageUrl: '/banners.png', 
    description: 'Eye-catching banner designs for online promotions and print marketing materials.', 
    dataAiHint: 'promotional banners digital' 
  },
  { 
    id: 6, 
    title: 'Posters', 
    category: 'Advertising', 
    imageUrl: '/posters.png', 
    description: 'Creative and informative poster designs suitable for events and public announcements.', 
    dataAiHint: 'event poster design' 
  },
  { 
    id: 7, 
    title: 'Brochures', 
    category: 'Print Design', 
    imageUrl: '/brochures.png', 
    description: 'Informative and stylish brochure designs for impactful brand representation.', 
    dataAiHint: 'corporate brochure layout' 
  },
  { 
    id: 8, 
    title: 'Flyers', 
    category: 'Marketing Material', 
    imageUrl: '/flyers.png', 
    description: 'Compelling flyer designs to effectively promote services, events, or products.', 
    dataAiHint: 'promotional flyer modern' 
  },
  { 
    id: 9, 
    title: 'Hotel Stationery', 
    category: 'Branding', 
    imageUrl: '/hotel-stationery.png', 
    description: 'Elegant and branded hotel stationery designs, including letterheads and notepads.', 
    dataAiHint: 'luxury hotel stationery' 
  },
  { 
    id: 10, 
    title: 'Vehicle Branding', 
    category: 'Advertising', 
    imageUrl: '/vehicle-branding.png', 
    description: 'Impactful vehicle wrap designs to transform vehicles into mobile advertisements.', 
    dataAiHint: 'car wrap branding' 
  },
];

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">My Work</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing creative solutions and design expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioItemsData.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "transition-all duration-500 ease-out transform hover:-translate-y-1",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
                >
                  <Card className="overflow-hidden group cursor-pointer bg-card border border-border hover:border-primary/70 shadow-lg hover:shadow-primary/20 rounded-xl">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                          data-ai-hint={item.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                           <ZoomIn className="h-10 w-10 text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-headline text-xl lg:text-2xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-body">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl md:max-w-4xl bg-card p-0 rounded-xl border-border shadow-2xl text-foreground">
                <DialogHeader className="p-6 pb-4 border-b border-border">
                  <DialogTitle className="font-headline text-3xl text-primary">{item.title}</DialogTitle>
                  <DialogDescription className="font-body text-muted-foreground pt-1 text-base">{item.description}</DialogDescription>
                </DialogHeader>
                <div className="p-1 max-h-[70vh] overflow-y-auto bg-background">
                  <Image
                    src={item.imageUrl} 
                    alt={item.title}
                    width={1200}
                    height={900} 
                    className="w-full h-auto object-contain"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                 <div className="p-6 pt-4 flex justify-end border-t border-border">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-input hover:bg-accent hover:text-accent-foreground text-foreground rounded-lg" data-cursor-type="pointer" size="lg">
                          Close
                      </Button>
                    </DialogTrigger>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
