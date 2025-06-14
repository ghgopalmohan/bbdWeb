
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const clientLogosLight = [
  { id: 1, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client1&font=sans-serif', alt: 'Client Logo 1', dataAiHint: 'company logo' },
  { id: 2, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client2&font=sans-serif', alt: 'Client Logo 2', dataAiHint: 'brand tech' },
  { id: 3, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client3&font=sans-serif', alt: 'Client Logo 3', dataAiHint: 'startup icon' },
  { id: 4, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client4&font=sans-serif', alt: 'Client Logo 4', dataAiHint: 'business mark' },
  { id: 5, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client5&font=sans-serif', alt: 'Client Logo 5', dataAiHint: 'corporate brand' },
  { id: 6, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client6&font=sans-serif', alt: 'Client Logo 6', dataAiHint: 'tech solution' },
  { id: 7, src: 'https://placehold.co/150x60/000000/FFFFFF?text=Client7&font=sans-serif', alt: 'Client Logo 7', dataAiHint: 'global partner' },
];

const clientLogosDark = [
  { id: 1, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client1&font=sans-serif', alt: 'Client Logo 1', dataAiHint: 'company logo dark' },
  { id: 2, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client2&font=sans-serif', alt: 'Client Logo 2', dataAiHint: 'brand tech dark' },
  { id: 3, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client3&font=sans-serif', alt: 'Client Logo 3', dataAiHint: 'startup icon dark' },
  { id: 4, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client4&font=sans-serif', alt: 'Client Logo 4', dataAiHint: 'business mark dark' },
  { id: 5, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client5&font=sans-serif', alt: 'Client Logo 5', dataAiHint: 'corporate brand dark' },
  { id: 6, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client6&font=sans-serif', alt: 'Client Logo 6', dataAiHint: 'tech solution dark' },
  { id: 7, src: 'https://placehold.co/150x60/FFFFFF/000000?text=Client7&font=sans-serif', alt: 'Client Logo 7', dataAiHint: 'global partner dark' },
];


const extendedClientLogosLight = [...clientLogosLight, ...clientLogosLight, ...clientLogosLight]; 
const extendedClientLogosDark = [...clientLogosDark, ...clientLogosDark, ...clientLogosDark]; 


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
    <section id="clients" className="section-padding bg-secondary text-foreground">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
           <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Trusted By Leading Companies
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl mx-auto">
            Proud to have collaborated with a diverse array of businesses and organizations.
          </p>
        </div>
        
        <div 
          className={cn(
            "relative w-full overflow-hidden group transition-opacity duration-1000 delay-200", 
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="hidden dark:flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {extendedClientLogosDark.map((logo, index) => (
              <div key={`dark-${index}`} className="flex-shrink-0 w-auto mx-8 sm:mx-10 md:mx-12 flex items-center justify-center h-20"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} 
                  height={60} 
                  className="object-contain max-h-12 sm:max-h-14"
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
           <div className="flex dark:hidden animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {extendedClientLogosLight.map((logo, index) => (
              <div key={`light-${index}`} className="flex-shrink-0 w-auto mx-8 sm:mx-10 md:mx-12 flex items-center justify-center h-20"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} 
                  height={60} 
                  className="object-contain max-h-12 sm:max-h-14"
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
           <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
