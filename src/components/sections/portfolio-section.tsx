
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  dataAiHint: string;
}

const portfolioItemsData: PortfolioItem[] = [
  { 
    id: 1, title: 'Business Cards', category: 'Branding', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Professional and impactful business card designs tailored to your brand identity.', dataAiHint: 'business cards professional' 
  },
  { 
    id: 2, title: 'Logos', category: 'Branding', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Memorable and versatile logo designs that effectively define and represent your brand.', dataAiHint: 'creative logos modern' 
  },
  { 
    id: 3, title: 'Menus', category: 'Print Design', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Visually appealing and easy-to-navigate menu designs for restaurants and cafes.', dataAiHint: 'restaurant menu elegant' 
  },
  { 
    id: 4, title: 'Banners', category: 'Advertising', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Eye-catching banner designs for online promotions and print marketing materials.', dataAiHint: 'promotional banners digital' 
  },
  { 
    id: 5, title: 'Posters', category: 'Advertising', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Creative and informative poster designs suitable for events and public announcements.', dataAiHint: 'event poster design' 
  },
  { 
    id: 6, title: 'Brochures', category: 'Print Design', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Informative and stylish brochure designs for impactful brand representation.', dataAiHint: 'corporate brochure layout' 
  },
  { 
    id: 7, title: 'Flyers', category: 'Print Design', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Compelling flyer designs to effectively promote services, events, or products.', dataAiHint: 'promotional flyer modern' 
  },
  { 
    id: 8, title: 'Hotel Stationery', category: 'Branding', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Elegant and branded hotel stationery designs, including letterheads and notepads.', dataAiHint: 'luxury hotel stationery' 
  },
  { 
    id: 9, title: 'Vehicle Branding', category: 'Advertising', imageUrl: 'https://placehold.co/600x800.png', 
    description: 'Impactful vehicle wrap designs to transform vehicles into mobile advertisements.', dataAiHint: 'car wrap branding' 
  },
];

const categories = ['All', 'Branding', 'Print Design', 'Advertising'];

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filteredItems = activeFilter === 'All' 
    ? portfolioItemsData 
    : portfolioItemsData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-secondary text-foreground">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3">Portfolio</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing creative solutions and design expertise.
          </p>
        </div>

        <div className={cn("flex flex-wrap justify-center gap-2 mb-10 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")} style={{transitionDelay: '200ms'}}>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium",
                activeFilter === category ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50"
              )}
            >
              {category === 'All' && <Filter className="mr-2 h-4 w-4" />}
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "transition-all duration-500 ease-out transform hover:scale-105",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${isVisible ? (index * 100) + 300 : 0}ms` }}
                >
                  <Card className="overflow-hidden group cursor-pointer bg-card border border-border hover:border-primary/70 shadow-lg hover:shadow-primary/10 rounded-lg">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] overflow-hidden relative"> {/* Adjusted aspect ratio */}
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={600}
                          height={800} // Adjusted height
                          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                          data-ai-hint={item.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                           <ZoomIn className="h-12 w-12 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-headline text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl md:max-w-2xl bg-card p-0 rounded-lg border-border shadow-2xl text-foreground">
                <DialogHeader className="p-6 pb-4 border-b border-border">
                  <DialogTitle className="font-headline text-2xl text-primary">{item.title}</DialogTitle>
                  <DialogDescription className="font-body text-muted-foreground pt-1 text-sm">{item.description}</DialogDescription>
                </DialogHeader>
                <div className="p-1 max-h-[70vh] overflow-y-auto bg-background">
                  <Image
                    src={item.imageUrl} 
                    alt={item.title}
                    width={800} // Adjusted for better modal view
                    height={1067} // Adjusted for better modal view
                    className="w-full h-auto object-contain rounded"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                 <div className="p-6 pt-4 flex justify-end border-t border-border">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="rounded-full">
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
