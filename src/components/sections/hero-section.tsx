
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Send } from 'lucide-react';

const clientNames = [
  "Vijetha", "Indraprastha", "Hare krishna gokul kshetram", "Capital Hotels",
  "Akshayapatra", "Moonlight", "Dharmakshetra", "Bouncer",
  "Rapid Rx Pharmacy", "Baba Furniture", "Sleepwell"
];
const extendedClientNames = [...clientNames, ...clientNames, ...clientNames]; 

export default function HeroSection() {
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
    <section
      id="home"
      ref={sectionRef}
      className={cn(
        "relative min-h-[calc(100vh-5rem)] md:min-h-screen flex flex-col justify-center bg-janice-olive text-janice-text-light overflow-hidden pt-28 md:pt-32 pb-0",
        isVisible ? "fade-in-up is-visible" : "fade-in-up"
      )}
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div
              className={cn("transition-all duration-1000 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
              style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
            >
              <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold !leading-none mb-6">
                Gopal Mohan
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-janice-text-light/90 mb-4 !leading-tight">
                <span className="font-calligraphy">Professional Designer & Printer</span>
              </p>
              <p className="text-sm md:text-base text-janice-text-light/70 mb-8 max-w-md">
              From logos and brochures to cards, banners, and hoardings — Whether for print or digital, my designs are made to stand out, tell your story, and leave a lasting impression.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  variant="janicePrimary"
                  className="md:size-lg px-4 py-2 md:px-8 text-xs md:text-base rounded-full group"
                  asChild
                >
                  <Link href="#contact">
                     Get Quote <Send className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="janiceSecondary"
                  className="md:size-lg px-4 py-2 md:px-8 text-xs md:text-base rounded-full group"
                  asChild
                >
                  <Link href="#portfolio">
                    My Work <ArrowDown className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex items-center justify-center md:justify-end">
            <div
              className={cn("relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out", isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")}
              style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
            >
              <Image
                src="/images/hero44.jpeg"
                alt="Gopal Mohan - Professional Photoshop Designer"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
                data-ai-hint="designer portrait modern"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <Image
                    src="/images/qrcode.png"
                    alt="QR Code for Gopal Mohan's Contact"
                    width={80}
                    height={80}
                    className="rounded-md"
                    data-ai-hint="qr code scan"
                    onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "w-full mt-16 md:mt-20 lg:mt-24", 
          isVisible ? "fade-in-up is-visible" : "fade-in-up"
        )}
        style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
      >
        <div className="container-custom">
          <p
            className={cn(
              "text-center text-xs font-medium text-janice-text-light/70 uppercase tracking-wider mb-4 md:mb-6",
               isVisible ? "fade-in-up is-visible" : "fade-in-up"
            )}
            style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}
          >
            Trusted By
          </p>
        </div>
        <div className="py-6 md:py-8 bg-white/5"> 
          <div className="relative w-full overflow-hidden group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
              {extendedClientNames.map((name, index) => (
                <div key={`client-${index}`} className="mx-3 md:mx-4 flex-shrink-0">
                  <span className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-gray-100 text-gray-800 rounded-full text-sm md:text-base font-medium shadow-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={cn("absolute top-1/4 left-1/4 w-12 h-12 bg-janice-accent/20 rounded-full animate-pulse opacity-0 transition-opacity duration-1000", isVisible && "opacity-100")} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}></div>
      <div className={cn("absolute bottom-1/3 right-1/4 w-8 h-8 bg-janice-soft-gold/20 rounded-full animate-pulse opacity-0 transition-opacity duration-1000", isVisible && "opacity-100")} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}></div>
    </section>
  );
}
