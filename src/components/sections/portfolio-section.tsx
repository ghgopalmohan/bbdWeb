
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  dataAiHint: string;
}

const portfolioItemsData: PortfolioItem[] = [
  { 
    id: 1, title: 'Mobile App UI', category: 'UX/UI Design', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'mobile app interface' 
  },
  { 
    id: 2, title: 'Dashboard Design', category: 'Web Design', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'dashboard analytics ui' 
  },
  { 
    id: 3, title: 'Landing Page Mockup', category: 'Web Design', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'website landing page' 
  },
  { 
    id: 4, title: 'Product Showcase', category: 'Branding', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'product design mockup' 
  },
  { 
    id: 5, title: 'Admin Panel UI', category: 'UX/UI Design', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'admin dashboard interface' 
  },
  { 
    id: 6, title: 'E-commerce Site', category: 'Web Design', imageUrl: 'https://placehold.co/600x450.png', 
    dataAiHint: 'ecommerce website design' 
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
    <section id="portfolio" ref={sectionRef} className="section-padding bg-background text-foreground">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div 
                className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
                style={{transitionDelay: '100ms'}}
            >
                <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">Portfolio</p>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-foreground">
                    Explore my portfolio of creative solutions
                </h2>
            </div>
            <div 
                className={cn("md:col-span-5 md:text-right", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
                style={{transitionDelay: '200ms'}}
            >
                 <p className="text-sm text-muted-foreground md:ml-auto max-w-xs">
                    Explore my portfolio full of creative solutions.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItemsData.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "transition-all duration-500 ease-out transform hover:-translate-y-1",
                    isVisible ? "fade-in-up is-visible" : "fade-in-up"
                  )}
                  style={{ transitionDelay: `${isVisible ? (index * 100) + 300 : 0}ms` }}
                >
                  <Card className="overflow-hidden group cursor-pointer bg-card border-border hover:border-primary/30 shadow-subtle hover:shadow-card rounded-xl">
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
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                           <ZoomIn className="h-10 w-10 text-white/90" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl md:max-w-3xl bg-card p-0 rounded-lg border-border shadow-2xl text-foreground">
                <div className="p-2 max-h-[80vh] overflow-y-auto">
                  <Image
                    src={item.imageUrl} 
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-contain rounded-md"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                 <div className="p-4 border-t border-border flex justify-between items-center">
                    <div>
                        <h3 className="font-headline text-xl text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="rounded-md">
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
