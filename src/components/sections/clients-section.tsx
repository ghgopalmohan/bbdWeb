
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const clientLogosLight = [
  // Assuming these are light versions or adaptable. For placeholders, it's fine.
  { id: 1, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client1', alt: 'Client Logo 1', dataAiHint: 'company logo' },
  { id: 2, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client2', alt: 'Client Logo 2', dataAiHint: 'brand tech' },
  { id: 3, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client3', alt: 'Client Logo 3', dataAiHint: 'startup icon' },
  { id: 4, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client4', alt: 'Client Logo 4', dataAiHint: 'business mark' },
  { id: 5, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client5', alt: 'Client Logo 5', dataAiHint: 'corporate brand' },
  { id: 6, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client6', alt: 'Client Logo 6', dataAiHint: 'tech solution' },
  { id: 7, src: 'https://placehold.co/160x70/FFFFFF/141414?text=Client7', alt: 'Client Logo 7', dataAiHint: 'global partner' },
];

// Duplicate for a longer marquee effect
const extendedClientLogos = [...clientLogosLight, ...clientLogosLight, ...clientLogosLight]; 

export default function ClientsSection() {
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
    const element = document.getElementById('clients');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section id="clients" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
           <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Trusted By Leading Companies
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proud to have collaborated with a diverse array of businesses and organizations.
          </p>
        </div>
        
        <div 
          className={cn(
            "relative w-full overflow-hidden group transition-opacity duration-1000 delay-200", 
            isVisible ? "opacity-100" : "opacity-0"
          )}
          data-cursor-type="pointer"
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {extendedClientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-auto mx-10 sm:mx-12 md:mx-16 flex items-center justify-center h-24"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160} 
                  height={70} 
                  className="object-contain max-h-14 sm:max-h-16 md:max-h-18" // Adjusted max height
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
           {/* Fades for the edges of the marquee */}
           <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
