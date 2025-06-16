
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'; // Added DialogTitle
import { ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fullImageUrl?: string;
  description: string;
  dataAiHint: string;
  projectUrl?: string;
  imageWidth: number; // Added for aspect ratio
  imageHeight: number; // Added for aspect ratio
}

const portfolioItemsData: PortfolioItem[] = [
  {
    id: 'bizcard-01',
    title: 'Indraprastha Pamphlet',
    category: 'Branding & Identity',
    imageUrl: '/images/5000 BB 90gsm-back copy.jpg',
    fullImageUrl: '/images/5000 BB 90gsm-back copy.jpg',
    description: 'Professionally designed business cards that make a lasting first impression.',
    dataAiHint: 'business card design',
    projectUrl: '#',
    imageWidth: 800, imageHeight: 600 // Placeholder
  },
  {
    id: 'logo-design-02',
    title: 'Babaji Kriya Yoga Pamphlet',
    category: 'Branding & Identity',
    imageUrl: '/images/2x4 babaji-2 copy.jpg',
    fullImageUrl: '/images/2x4 babaji-2 copy.jpg',
    description: 'Creative and memorable logo designs tailored to brand identity.',
    dataAiHint: 'modern logo concept',
    imageWidth: 700, imageHeight: 500 // Placeholder
  },
  {
    id: 'menu-design-03',
    title: 'Prom Menu Layout',
    category: 'Print Design',
    imageUrl: '/images/a5 pamphlet-page 1 copy 2.jpg',
    fullImageUrl: '/images/a5 pamphlet-page 1 copy 2.jpg',
    description: 'Visually appealing and easy-to-navigate menu designs for restaurants and cafes.',
    dataAiHint: 'restaurant menu food',
    imageWidth: 600, imageHeight: 800 // Placeholder
  },
  {
    id: 'banner-moonlight-04', // This was removed and then re-requested to be present
    title: 'Moonlight Promotional Banners',
    category: 'Advertising',
    imageUrl: '/images/1-cover page-moonlight A5 copy 2.jpg',
    fullImageUrl: '/images/1-cover page-moonlight A5 copy 2.jpg',
    description: 'Eye-catching banners for digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
    imageWidth: 900, imageHeight: 300 // Placeholder
  },
  {
    id: 'poster-valet-05',
    title: 'Valet Parking Cards',
    category: 'Print Design',
    imageUrl: '/images/brown-6x16 valet parking front indraprasttha nov-2024 copy 2.jpg',
    fullImageUrl: '/images/brown-6x16 valet parking front indraprasttha nov-2024 copy 2.jpg',
    description: 'Impactful poster designs for events, promotions, and announcements.',
    dataAiHint: 'event poster concert',
    imageWidth: 600, imageHeight: 900 // Placeholder
  },
  {
    id: 'brochure-cards-06',
    title: 'Corporate Branding Cards',
    category: 'Marketing Material',
    imageUrl: '/images/business card copy.jpg',
    fullImageUrl: '/images/business card copy.jpg',
    description: 'Informative and engaging brochure designs for businesses and organizations.',
    dataAiHint: 'corporate brochure business',
    imageWidth: 800, imageHeight: 550 // Placeholder
  },
  {
    id: 'banner-envelope-07',
    title: 'Bathinas Navara Rice Cover Design',
    category: 'Advertising',
    imageUrl: '/images/pamphlet-1.jpg',
    fullImageUrl: '/images/pamphlet-1.jpg',
    description: 'Eye-catching banners for digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
    imageWidth: 1000, imageHeight: 400 // Placeholder
  },
  {
    id: 'poster-furniture-08',
    title: 'Baba Furniture Envelope Cards',
    category: 'Print Design',
    imageUrl: '/images/envelope baba furniture copy 2.jpg',
    fullImageUrl: '/images/envelope baba furniture copy 2.jpg',
    description: 'Impactful poster designs for events, promotions, and announcements.',
    dataAiHint: 'event poster concert',
    imageWidth: 500, imageHeight: 750 // Placeholder
  },
  {
    id: 'brochure-lifestyle-09',
    title: 'Restaurant Menus',
    category: 'Marketing Material',
    imageUrl: '/images/menufinall.png',
    fullImageUrl: '/images/menufinall.png',
    description: 'Informative and engaging brochure designs for businesses and organizations.',
    dataAiHint: 'corporate brochure business',
    imageWidth: 750, imageHeight: 600 // Placeholder
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
        {/* Title Block - Use standard h2/p */}
        <div
          className={cn(
            "text-center mb-12 md:mb-16",
            isVisible ? "fade-in-up is-visible" : "fade-in-up"
          )}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            My Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for design and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItemsData.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card
                  className={cn(
                    "group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 cursor-pointer bg-card dark:bg-card-dark border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary-dark/30",
                    isVisible ? "fade-in-up is-visible" : "fade-in-up"
                  )}
                  style={{ transitionDelay: `${isVisible ? (index * 100) + 200 : 0}ms` }}
                >
                  <CardContent className="p-0 aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      layout="fill" // Fills the parent CardContent
                      className={cn(
                        "object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105",
                        item.id === 'poster-furniture-08' ? 'object-left-top' : 'object-top'
                      )}
                      data-ai-hint={item.dataAiHint}
                      // No explicit width/height here as layout="fill" takes over.
                      // For optimization, ensure your source images are reasonably sized.
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
                className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-card dark:bg-card-dark p-0 rounded-lg shadow-2xl text-foreground dark:text-foreground-dark border-border dark:border-border-dark"
              >
                <DialogTitle className="sr-only">{item.title}</DialogTitle> {/* Visually hidden title for accessibility */}
                <div className="p-1 max-h-[90vh] overflow-y-auto flex items-center justify-center">
                  <Image
                    src={item.fullImageUrl || item.imageUrl}
                    alt={item.title}
                    width={item.imageWidth || 1200} // Use provided dimensions or default
                    height={item.imageHeight || 900} // Use provided dimensions or default
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
                    data-ai-hint={item.dataAiHint}
                    priority // Consider adding if it's LCP
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

