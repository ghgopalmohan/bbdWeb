"use client";

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const clientLogos = [
  { id: 1, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 1', dataAiHint: 'company logo' },
  { id: 2, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 2', dataAiHint: 'brand tech' },
  { id: 3, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 3', dataAiHint: 'startup icon' },
  { id: 4, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 4', dataAiHint: 'business mark' },
  { id: 5, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 5', dataAiHint: 'corporate brand' },
  { id: 6, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 6', dataAiHint: 'tech solution' },
  { id: 7, src: 'https://placehold.co/160x70.png', alt: 'Client Logo 7', dataAiHint: 'global partner' },
];

// Duplicate for a seamless loop, adjust count based on total width and speed
const extendedClientLogos = [...clientLogos, ...clientLogos, ...clientLogos]; 

export default function ClientsSection() {
  const addScrollAnimElement = useScrollAnimation();
  return (
    <section id="clients" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={addScrollAnimElement} className="scroll-animate text-center mb-12 md:mb-16">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Trusted By Visionary Partners
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 mt-3 max-w-xl mx-auto">
            Proud to have collaborated with a diverse array of businesses and organizations.
          </p>
        </div>
        
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate delay-1 relative w-full overflow-hidden group"
          data-cursor-type="pointer"
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {extendedClientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-auto mx-8 sm:mx-10 md:mx-12 flex items-center justify-center h-24"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160} 
                  height={70} 
                  className="object-contain max-h-14 sm:max-h-16 md:max-h-18 opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 contrast-0 hover:contrast-100" 
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
           <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
