
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'; 
import { ZoomIn, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'; // Added for potential project links

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  fullImageUrl?: string;
  description: string;
  dataAiHint: string;
  projectUrl?: string; // Optional: for a "View Project" button
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
    projectUrl: '#', // Example, remove or update as needed
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
    imageUrl: '/images/lifestyle-front copy 2.jpg',
    fullImageUrl: '/images/lifestyle-front copy 2.jpg',
    description: 'Visually appealing and easy-to-navigate menu designs for Prom restaurants and cafes.',
    dataAiHint: 'restaurant menu food',
    imageWidth: 600, imageHeight: 800
  },
  {
    id: 'banner-moonlight-04',
    title: 'Promotional Banner Design',
    category: 'Advertising',
    imageUrl: '/images/www-aum llc.jpg',
    fullImageUrl: '/images/www-aum llc.jpg',
    description: 'Eye-catching banners for Moonlight digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
    imageWidth: 900, imageHeight: 300
  },
  {
    id: 'poster-valet-05',
    title: 'Standee Design',
    category: 'Print Design',
    imageUrl: '/images/nick vujicic 2x4-1 copy.jpg',
    fullImageUrl: '/images/nick vujicic 2x4-1 copy.jpg',
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
    title: 'LifeStyle Card Design',
    category: 'Print Design',
    imageUrl: '/images/lifestyle visiting card-name copy 2.jpg',
    fullImageUrl: '/images/lifestyle visiting card-name copy 2.jpgg', // Note: double 'g' in .jpgg, might be a typo
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
          // No unobserve needed if we want child elements to animate as they come into view
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the section is visible
    );
    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
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

        <div className="space-y-16 md:space-y-24">
          {portfolioItemsData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "grid md:grid-cols-12 gap-8 lg:gap-12 items-center",
                isVisible ? "fade-in-up is-visible" : "fade-in-up" 
              )}
              style={{ 
                transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
                opacity: isVisible ? 1 : 0 // Manage visibility based on section, not individual items
              }}
            >
              {/* Image Column */}
              <div 
                className={cn(
                  "md:col-span-6 lg:col-span-7 relative group",
                  index % 2 !== 0 ? "md:order-last" : "" // Image on right for even items
                )}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 cursor-pointer bg-card dark:bg-card-dark border border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary-dark/30">
                      <Image
                        src={item.imageUrl}
                        alt={item.title} 
                        layout="fill"
                        objectFit="cover" // Changed from object-top for more general fit
                        className="transition-transform duration-500 ease-out group-hover:scale-105"
                        data-ai-hint={item.dataAiHint}
                        quality={75}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="h-12 w-12 text-white/80" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-card dark:bg-card-dark p-0 rounded-lg shadow-2xl text-foreground dark:text-foreground-dark border-border dark:border-border-dark"
                  >
                    <DialogTitle className="sr-only">{item.title}</DialogTitle>
                    <div className="p-1 max-h-[90vh] overflow-y-auto flex items-center justify-center">
                      <Image
                        src={item.fullImageUrl || item.imageUrl}
                        alt={item.title} 
                        width={item.imageWidth || 1200}
                        height={item.imageHeight || 900}
                        className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
                        data-ai-hint={item.dataAiHint}
                        priority 
                        quality={90}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Text Content Column */}
              <div className="md:col-span-6 lg:col-span-5">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{item.category}</p>
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-3 !leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">{item.description}</p>
                {item.projectUrl && (
                  <Button asChild variant="outline" size="default" className="group">
                    <Link href={item.projectUrl}>
                      View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    