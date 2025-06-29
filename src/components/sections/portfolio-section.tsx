
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import React,
{
    useState,
    useEffect,
    useRef
} from 'react';
import { PenTool, Printer, Megaphone, FileText, Package, LayoutTemplate } from 'lucide-react';

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
];

// Helper to get icon based on category
const getIconForCategory = (category: string) => {
    switch (category) {
        case 'Branding & Identity': return <PenTool className="w-6 h-6 text-primary shrink-0" />;
        case 'Print Design': return <Printer className="w-6 h-6 text-primary shrink-0" />;
        case 'Advertising': return <Megaphone className="w-6 h-6 text-primary shrink-0" />;
        case 'Marketing Material': return <FileText className="w-6 h-6 text-primary shrink-0" />;
        case 'Packaging Design': return <Package className="w-6 h-6 text-primary shrink-0" />;
        default: return <LayoutTemplate className="w-6 h-6 text-primary shrink-0" />;
    }
};

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeItemId, setActiveItemId] = useState(portfolioItemsData[0].id);

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
  
  const activeItem = portfolioItemsData.find(item => item.id === activeItemId) || portfolioItemsData[0];
  const [imageKey, setImageKey] = useState(activeItem.id);

  const handleAccordionChange = (value: string) => {
    if (value) {
      setActiveItemId(value);
      setImageKey(value);
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
            A selection of projects that showcase my passion for design. Select a project to see the details.
          </p>
        </div>

        <Card 
            className={cn(
                "w-full max-w-5xl mx-auto shadow-xl border-border bg-card overflow-hidden",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
            )}
            style={{transitionDelay: isVisible ? '200ms' : '0ms'}}
        >
            <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                    {/* Left Side: Image */}
                    <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-secondary">
                        <Image
                            key={imageKey} // Use key to re-mount and trigger animation
                            src={activeItem.imageUrl}
                            alt={activeItem.title}
                            fill
                            className="object-cover object-left-top animate-fade-in"
                            quality={90}
                            onContextMenu={(e) => e.preventDefault()}
                            data-ai-hint={activeItem.dataAiHint}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                        <Accordion
                            type="single"
                            collapsible
                            value={activeItemId}
                            onValueChange={handleAccordionChange}
                            className="w-full"
                        >
                            {portfolioItemsData.map((item) => (
                                <AccordionItem key={item.id} value={item.id} className="border-b-border/50">
                                    <AccordionTrigger className="text-left font-headline text-lg hover:no-underline py-5">
                                        <div className="flex items-center gap-4">
                                            {getIconForCategory(item.category)}
                                            <span>{item.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                                        <p className="font-medium text-primary text-sm mb-2">{item.category}</p>
                                        {item.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
