
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 md:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:text-left"
          >
            <div className="overflow-hidden pb-3">
              <h1 
                ref={addScrollAnimElement}
                className="scroll-animate delay-2 font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
              >
                Hi, I&apos;m <span className="text-primary">Gopal Mohan</span>
              </h1>
            </div>
            <div className="overflow-hidden pb-3">
              <p 
                ref={addScrollAnimElement}
                className="scroll-animate delay-3 font-body text-2xl md:text-3xl text-muted-foreground mb-12"
              >
                Professional Photoshop Designer & Visual Artist
              </p>
            </div>
            <div 
              ref={addScrollAnimElement}
              className="scroll-animate delay-4"
            >
              <Link href="#contact" data-cursor-type="pointer">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-primary bg-primary hover:bg-accent text-primary-foreground text-lg md:text-xl px-10 py-4"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background/10 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  Get Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-2 hidden md:flex justify-center items-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 group">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Gopal Mohan - Professional Designer"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-2xl border-4 border-card group-hover:border-primary transition-all duration-300"
                data-ai-hint="professional designer portrait"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
