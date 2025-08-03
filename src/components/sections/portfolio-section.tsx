"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React,
{
    useState,
    useEffect,
    useRef
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    id: 'harekrishna-pamphlet-03',
    title: 'Harekrishna Pamphlet',
    category: 'Pamphlet',
    imageUrl: '/images/harekrishna pamphlet.jpeg',
    fullImageUrl: '/images/harekrishna pamphlet.jpeg',
    description: 'Informative pamphlet design for Harekrishna.',
    dataAiHint: 'pamphlet design',
    imageWidth: 800, imageHeight: 600
  },
  {
    id: 'menu-design-04',
    title: 'Hoarding Design',
    category: 'Print Design',
    imageUrl: '/images/lifestyle-front copy 2.jpg',
    fullImageUrl: '/images/lifestyle-front copy 2.jpg',
    description: 'Visually appealing and easy-to-navigate menu designs for Prom restaurants and cafes.',
    dataAiHint: 'restaurant menu food',
    imageWidth: 600, imageHeight: 800
  },
  {
    id: 'banner-moonlight-05',
    title: 'Promotional Banner Design',
    category: 'Advertising',
    imageUrl: '/images/www-aum llc.jpg',
    fullImageUrl: '/images/www-aum llc.jpg',
    description: 'Eye-catching banners for Moonlight digital and print advertising campaigns.',
    dataAiHint: 'promotional banner event',
    imageWidth: 900, imageHeight: 300
  },
  {
    id: 'harekrishna-digital-card-06',
    title: 'Harekrishna Digital Card',
    category: 'Digital Design',
    imageUrl: '/images/harekrishna digital card.jpeg',
    fullImageUrl: '/images/harekrishna digital card.jpeg',
    description: 'Digital business card design for Harekrishna.',
    dataAiHint: 'digital business card',
    imageWidth: 800, imageHeight: 600
  },
  {
    id: 'poster-valet-07',
    title: 'Standee Design',
    category: 'Print Design',
    imageUrl: '/images/nick vujicic 2x4-1 copy.jpg',
    fullImageUrl: '/images/nick vujicic 2x4-1 copy.jpg',
    description: 'Impactful valet parking card designs for events and promotions.',
    dataAiHint: 'event poster concert',
    imageWidth: 600, imageHeight: 900
  },
  {
    id: 'brochure-cards-08',
    title: 'Corporate Branding Card Design',
    category: 'Marketing Material',
    imageUrl: '/images/business card copy.jpg',
    fullImageUrl: '/images/business card copy.jpg',
    description: 'Informative and engaging corporate branding card designs for businesses.',
    dataAiHint: 'corporate brochure business',
    imageWidth: 800, imageHeight: 550
  },
 {
    id: 'harekrishna-hoarding-09',
    title: 'Harekrishna Hoarding',
    category: 'Advertising',
    imageUrl: '/images/harekrishna hoarding.jpeg',
    fullImageUrl: '/images/harekrishna hoarding.jpeg',
    description: 'Large format hoarding design for Harekrishna.',
    dataAiHint: 'outdoor advertising hoarding',
    imageWidth: 800, imageHeight: 600
  },
 {
    id: 'harekrishna-sticker-board-10',
    title: 'Harekrishna Sticker Board',
    category: 'Sticker Board',
    imageUrl: '/images/harekrishna sticker board.jpeg',
    fullImageUrl: '/images/harekrishna sticker board.jpeg',
    description: 'Sticker board design for Harekrishna promotions.',
    dataAiHint: 'sticker board design',
    imageWidth: 800, imageHeight: 600
  },
//  {
//     id: 'harekrishna-box-design-11',
//  title: 'Harekrishna Box Design',
//  category: 'Packaging Design',
//     imageUrl: '/images/harekrishna box design.jpg',
//  fullImageUrl: '/images/harekrishna box design.jpg',
//  description: 'Packaging box design for Harekrishna products.',
//     dataAiHint: 'packaging design box',
//  imageWidth: 800, imageHeight: 600
//   },
];


export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = 400; // Adjust as needed
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
  };
  
  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-background text-foreground">
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
            A selection of projects that showcase my passion for design. Scroll to explore my recent work.
          </p>
        </div>
      </div>
      
      <div
        className={cn(
          "relative",
          isVisible ? "fade-in-up is-visible" : "fade-in-up"
        )}
        style={{transitionDelay: isVisible ? '200ms' : '0ms'}}
      >
        <Button 
            onClick={() => handleScroll('left')}
            variant="outline" 
            size="icon" 
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background/70 hover:bg-background backdrop-blur-sm"
            aria-label="Scroll left"
        >
            <ChevronLeft className="h-6 w-6" />
        </Button>
        <div 
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto no-scrollbar py-8 px-20 gap-6 md:gap-8"
        >
            {portfolioItemsData.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80">
                <Dialog>
                    <DialogTrigger asChild>
                        <div
                          className="group relative w-full h-[450px] rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ease-in-out"
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover object-left-top group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={item.dataAiHint}
                                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 320px"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none shadow-none w-auto h-auto max-w-[90vw] flex items-center justify-center">
                      <DialogTitle className="sr-only">{item.title}</DialogTitle>
                      <Image
                        src={item.fullImageUrl || item.imageUrl}
                        alt={item.title}
                        width={item.imageWidth * 1.5}
                        height={item.imageHeight * 1.5}
                        className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
                        data-ai-hint={item.dataAiHint}
                        priority
                        quality={90}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </DialogContent>
                </Dialog>
                 <div className="mt-4 text-center">
                    <h3 className="font-headline text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
            ))}
        </div>
        <Button 
            onClick={() => handleScroll('right')}
            variant="outline" 
            size="icon" 
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background/70 hover:bg-background backdrop-blur-sm"
            aria-label="Scroll right"
        >
            <ChevronRight className="h-6 w-6" />
        </Button>
        
        {/* Gradient Overlays for scroll indication */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
}
