
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const clientLogos = [
  { id: 1, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 1', dataAiHint: 'company logo' },
  { id: 2, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 2', dataAiHint: 'brand tech' },
  { id: 3, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 3', dataAiHint: 'startup logo' },
  { id: 4, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 4', dataAiHint: 'business icon' },
  { id: 5, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 5', dataAiHint: 'corporate mark' },
  { id: 6, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 6', dataAiHint: 'tech company' },
  { id: 7, src: 'https://placehold.co/150x60.png', alt: 'Client Logo 7', dataAiHint: 'global brand' },
];

const extendedClientLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]; // Extended further for smoother long scroll

export default function ClientsSection() {
  const addScrollAnimElement = useScrollAnimation();
  return (
    <section id="clients" className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={addScrollAnimElement} className="scroll-animate text-center mb-12">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Trusted By Companies Worldwide
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 mt-2">
            I&apos;ve had the pleasure of working with a diverse range of businesses.
          </p>
        </div>
        
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate delay-1 relative w-full overflow-hidden group"
          data-cursor-type="pointer"
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {extendedClientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-auto mx-6 sm:mx-8 md:mx-10 flex items-center justify-center h-20"> 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} 
                  height={60} 
                  className="object-contain max-h-12 sm:max-h-14 md:max-h-16 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" 
                  data-ai-hint={logo.dataAiHint}
                />
              </div>
            ))}
          </div>
          {/* Optional: Add gradient overlays if background doesn't contrast enough */}
           <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
           <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
