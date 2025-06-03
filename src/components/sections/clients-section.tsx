// src/components/sections/clients-section.tsx
import Image from 'next/image';

const clientLogos = [
  { id: 1, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 1', dataAiHint: 'company logo' },
  { id: 2, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 2', dataAiHint: 'brand tech' },
  { id: 3, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 3', dataAiHint: 'startup logo' },
  { id: 4, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 4', dataAiHint: 'business icon' },
  { id: 5, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 5', dataAiHint: 'corporate mark' },
  { id: 6, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 6', dataAiHint: 'tech company' },
  { id: 7, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 7', dataAiHint: 'global brand' },
];

// Duplicate logos for seamless scrolling effect
const extendedClientLogos = [...clientLogos, ...clientLogos];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-12 bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary">
          Trusted By
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {extendedClientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-auto mx-6 sm:mx-8 md:mx-10 flex items-center justify-center" style={{ minWidth: '150px' }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain h-10 sm:h-12 md:h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-muted/50 dark:from-muted/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-muted/50 dark:from-muted/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
