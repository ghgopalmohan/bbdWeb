
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
  imageWidth: number;
  imageHeight: number;
}

const portfolioItemsData: PortfolioItem[] = [
  {
    id: 'bizcard-01',
    title: 'Indraprastha Pamphlet Design',
    category: 'Branding & Identity',
    imageUrl: '/images/5000 BB 90gsm-back copy.jpg',
    fullImageUrl: '/images/5000 BB 90gsm-back copy.jpg',
    description: 'Professionally designed business cards that make a lasting first impression for Indraprastha.',
    dataAiHint: 'business card design',
    projectUrl: '#',
    imageWidth: 800, imageHeight: 600
  },
  {
    id: 'logo-design-02',
    title: 'Babaji Kriya Yoga Pamphlet Design',
    category: 'Branding & Identity',
    imageUrl: '/images/2x4 babaji-2 copy.jpg',
    fullImageUrl: '/images/2x4 babaji-2 copy.jpg',
    description: 'Creative and memorable logo designs tailored to Babaji Kriya Yoga brand identity.',
    dataAiHint: 'modern logo concept',
    imageWidth: 700, imageHeight: 500
  },
  {
    id: 'menu-design-03',
    title: 'Hoarding Design',
    category: 'Print Design',
    imageUrl: '/images/a5 pamphlet-page 1 copy 2.jpg',
    fullImageUrl: '/images/a5 pamphlet-page 1 copy 2.jpg',
    description: 'Visually appealing and easy-to-navigate menu designs for Prom restaurants and cafes.',
    dataAiHint: 'restaurant menu food',
    imageWidth: 600, imageHeight: 800
  },
  {
    id: 'banner-moonlight-04',
    title: 'Moonlight Promotional Banner Design',
    category: 'Advertising',
    imageUrl: '/images/1-cover page-moonlight A5 copy 2.jpg',
    fullImageUrl: '/images/1-cover page-moonlight A5 copy 2.jpg',
    description: 'Eye-catching banners for Moonlight digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
    imageWidth: 900, imageHeight: 300
  },
  {
    id: 'poster-valet-05',
    title: 'Valet Parking Card Design',
    category: 'Print Design',
    imageUrl: '/images/brown-6x16 valet parking front indraprasttha nov-2024 copy 2.jpg',
    fullImageUrl: '/images/brown-6x16 valet parking front indraprasttha nov-2024 copy 2.jpg',
    description: 'Impactful valet parking card designs for events and promotions.',
    dataAiHint: 'event poster concert',
    imageWidth: 600, imageHeight: 900
  },
  {
    id: 'brochure-cards-06',
    title: 'Corporate Branding Card Design',
    category: 'Marketing Material',
    imageUrl: '/images/business card copy.jpg',
    fullImageUrl: '/images/business card copy.jpg',
    description: 'Informative and engaging corporate branding card designs for businesses.',
    dataAiHint: 'corporate brochure business',
    imageWidth: 800, imageHeight: 550
  },
  {
    id: 'banner-envelope-07',
    title: 'Bathinas Navara Rice Cover Design',
    category: 'Packaging Design',
    imageUrl: '/images/pamphlet-1.jpg',
    fullImageUrl: '/images/pamphlet-1.jpg',
    description: 'Eye-catching cover design for Bathinas Navara Rice packaging.',
    dataAiHint: 'packaging cover product',
    imageWidth: 1000, imageHeight: 400
  },
  {
    id: 'poster-furniture-08',
    title: 'Baba Furniture Envelope Card Design',
    category: 'Print Design',
    imageUrl: '/images/envelope baba furniture copy 2.jpg',
    fullImageUrl: '/images/envelope baba furniture copy 2.jpg',
    description: 'Impactful envelope card designs for Baba Furniture promotions.',
    dataAiHint: 'stationery design furniture',
    imageWidth: 500, imageHeight: 750
  },
  {
    id: 'brochure-lifestyle-09',
    title: 'Restaurant Menu Design',
    category: 'Marketing Material',
    imageUrl: '/images/menufinall.png',
    fullImageUrl: '/images/menufinall.png',
    description: 'Informative and engaging restaurant menu designs for dining establishments.',
    dataAiHint: 'restaurant menu food',
    imageWidth: 750, imageHeight: 600
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
                      alt={item.title} // Using item.title as alt text
                      layout="fill"
                      className={cn(
                        "object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105",
                        item.id === 'poster-furniture-08' ? 'object-left-top' : 'object-top'
                      )}
                      data-ai-hint={item.dataAiHint}
                      quality={75} // Default quality, can be adjusted
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
                <DialogTitle className="sr-only">{item.title}</DialogTitle>
                <div className="p-1 max-h-[90vh] overflow-y-auto flex items-center justify-center">
                  <Image
                    src={item.fullImageUrl || item.imageUrl}
                    alt={item.title} // Using item.title as alt text for dialog image
                    width={item.imageWidth || 1200}
                    height={item.imageHeight || 900}
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
                    data-ai-hint={item.dataAiHint}
                    priority // Prioritize loading for dialog image
                    quality={90} // Higher quality for dialog image
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
