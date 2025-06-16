
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Calendar, CheckCircle, MapPin, MessageSquare, Send, Smile, Star, TrendingUp, Zap } from 'lucide-react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={cn(
        "relative min-h-[calc(100vh-5rem)] md:min-h-screen flex flex-col justify-center bg-janice-olive text-janice-text-light overflow-hidden pt-28 md:pt-32 pb-0", // Removed section-padding, added pb-0
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
                <span className="font-calligraphy">Professional Photoshop Designer</span>
              </p>
              <p className="text-sm md:text-base text-janice-text-light/70 mb-8 max-w-md">
              From logos and brochures to cards, banners, and hoardings — Whether for print or digital, my designs are made to stand out, tell your story, and leave a lasting impression.
              </p>
              <div className="flex items-center space-x-4">
                <Button 
                  size="default" 
                  variant="janicePrimary"
                  className="md:size-lg px-6 py-3 md:px-8 text-sm md:text-base rounded-full group"
                  asChild
                >
                  <Link href="#contact">
                     Get Quote <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="default"
                  variant="janiceSecondary"
                  className="md:size-lg px-6 py-3 md:px-8 text-sm md:text-base rounded-full group"
                  asChild
                >
                  <Link href="#portfolio">
                    My Work <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
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
                src="/images/hero-1.jpeg"
                alt="Janice - Digital Designer"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
                data-ai-hint="designer portrait modern"
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <Image
                    src="/images/qrcode.png"
                    alt="QR Code"
                    width={80}
                    height={80}
                    className="rounded-md"
                    data-ai-hint="qr code scan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements - example, can be enhanced */}
      <div className={cn("absolute top-1/4 left-1/4 w-12 h-12 bg-janice-accent/20 rounded-full animate-pulse opacity-0 transition-opacity duration-1000", isVisible && "opacity-100")} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}></div>
      <div className={cn("absolute bottom-1/3 right-1/4 w-8 h-8 bg-janice-soft-gold/20 rounded-full animate-pulse opacity-0 transition-opacity duration-1000", isVisible && "opacity-100")} style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}></div>

    </section>
  );
}

