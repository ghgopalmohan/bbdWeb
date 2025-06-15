
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { ZoomIn, ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'; // Card added for consistent styling if needed
import Link from 'next/link';

interface PortfolioItem {
  id: string; 
  title: string;
  category: string;
  imageUrl: string;
  fullImageUrl?: string; 
  description: string;
  dataAiHint: string;
  projectUrl?: string;
}

const portfolioItemsData: PortfolioItem[] = [
  {
    id: 'bizcard-01',
    title: 'Elegant Business Cards',
    category: 'Branding & Identity',
    imageUrl: '/images/5000 BB 90gsm-back copy.jpg',
    description: 'Professionally designed business cards that make a lasting first impression.',
    dataAiHint: 'business card design',
    projectUrl: '#',
  },
  {
    id: 'logo-design-02',
    title: 'Modern Logo Design',
    category: 'Branding & Identity',
    imageUrl: '/images/2x4 babaji-2 copy.jpg',
    description: 'Creative and memorable logo designs tailored to brand identity.',
    dataAiHint: 'modern logo concept',
  },
  {
    id: 'menu-design-03',
    title: 'Restaurant Menu Layout',
    category: 'Print Design',
    imageUrl: '/images/a5 pamphlet-page 1 copy 2.jpg',
    description: 'Visually appealing and easy-to-navigate menu designs for restaurants and cafes.',
    dataAiHint: 'restaurant menu food',
  },
  {
    id: 'banner-moonlight-04', // Unique ID
    title: 'Moonlight Promotional Banners', // Updated title
    category: 'Advertising',
    imageUrl: '/images/1-cover page-moonlight A5 copy 2.jpg',
    description: 'Eye-catching banners for digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
  },
  {
    id: 'poster-valet-05', // Unique ID
    title: 'Valet Parking Event Posters', // Updated title
    category: 'Print Design',
    imageUrl: '/images/brown-6x16 valet parking front indraprasttha nov-2024 copy 2.jpg',
    description: 'Impactful poster designs for events, promotions, and announcements.',
    dataAiHint: 'event poster concert',
  },
  {
    id: 'brochure-cards-06', // Unique ID
    title: 'Corporate Branding Brochures', // Updated title
    category: 'Marketing Material',
    imageUrl: '/images/business card copy.jpg',
    description: 'Informative and engaging brochure designs for businesses and organizations.',
    dataAiHint: 'corporate brochure business',
  },
  {
    id: 'banner-envelope-07', // Changed from banner-ads-04
    title: 'Indraprastha Envelope Banners', // Made title more specific
    category: 'Advertising',
    imageUrl: '/images/envelope layout indraprastta 30x23.jpg',
    description: 'Eye-catching banners for digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
  },
  {
    id: 'poster-furniture-08', // Changed from poster-art-05
    title: 'Baba Furniture Event Posters', // Made title more specific
    category: 'Print Design',
    imageUrl: '/images/envelope baba furniture copy 2.jpg',
    description: 'Impactful poster designs for events, promotions, and announcements.',
    dataAiHint: 'event poster concert',
  },
  {
    id: 'brochure-lifestyle-09', // Changed from brochure-corp-06
    title: 'Lifestyle Product Brochures', // Made title more specific
    category: 'Marketing Material',
    imageUrl: '/images/lifestyle-front copy 2.jpg',
    description: 'Informative and engaging brochure designs for businesses and organizations.',
    dataAiHint: 'corporate brochure business',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
      <div className="container-custom">
        <div 
          className={cn(
            "text-center mb-12 md:mb-16",
            isVisible ? "fade-in-up is-visible" : "fade-in-up" // Changed from animate-fade-in-up
          )}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            My Creative Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for design and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItemsData.map((item, index) => {
            const dialogTitleId = `dialog-title-${item.id}`;
            return (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card
                    className={cn(
                      "group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 cursor-pointer bg-card dark:bg-card-dark border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary-dark/30",
                      isVisible ? "fade-in-up is-visible" : "fade-in-up" // Changed from animate-fade-in-up
                    )}
                    style={{ transitionDelay: `${isVisible ? (index * 100) + 200 : 0}ms` }}
                  >
                    <CardContent className="p-0 aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                        data-ai-hint={item.dataAiHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="font-headline text-xl text-white mb-1">{item.title}</h3>
                        <p className="text-xs text-primary-foreground/80">{item.category}</p>
                      </div>
                       <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-5 w-5 text-white/90" />
                        </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent 
                  className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl bg-card dark:bg-card-dark p-0 rounded-lg shadow-2xl text-foreground dark:text-foreground-dark border-border dark:border-border-dark"
                  aria-labelledby={dialogTitleId}
                >
                  <div className="p-1 max-h-[85vh] overflow-y-auto">
                    <Image
                      src={item.fullImageUrl || item.imageUrl}
                      alt={item.title}
                      width={1200}
                      height={900}
                      className="w-full h-auto object-contain rounded-md"
                      data-ai-hint={item.dataAiHint}
                    />
                  </div>
                  <div className="p-6 border-t border-border dark:border-border-dark bg-secondary/30 dark:bg-secondary-dark/20 rounded-b-lg">
                    <DialogTitle id={dialogTitleId} className="font-headline text-2xl text-primary mb-1">{item.title}</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mb-3">{item.category}</DialogDescription>
                    <p className="text-base text-foreground dark:text-foreground-dark mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                        {item.projectUrl && (
                           <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-dark-foreground">
                             <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                               View Project <ExternalLink className="ml-2 h-4 w-4" />
                             </Link>
                           </Button>
                        )}
                        <DialogClose asChild>
                           <Button variant="ghost" className="text-muted-foreground hover:text-primary dark:hover:text-primary-dark">
                             Close <X className="ml-2 h-4 w-4" />
                           </Button>
                        </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}

    