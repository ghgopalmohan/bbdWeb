
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

const extendedClientLogos = [...clientLogos, ...clientLogos, ...clientLogos]; 

export default function ClientsSection() {
  const addScrollAnimElement = useScrollAnimation();
  return (
    <section id="clients" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={addScrollAnimElement} className="scroll-animate text-center mb-16 md:mb-20">
           <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Trusted By
          </h2>
          <p className="font-body text-xl md:text-2xl text-secondary-foreground/80 mt-4 max-w-2xl mx-auto">
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
              <div key={index} className="flex-shrink-0 w-auto mx-10 sm:mx-12 md:mx-16 flex items-center justify-center h-28"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180} 
                  height={80} 
                  className="object-contain max-h-16 sm:max-h-18 md:max-h-20"
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
