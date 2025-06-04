"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HeroSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-background text-foreground overflow-hidden">
      <div 
        ref={addScrollAnimElement}
        className="scroll-animate absolute inset-0 opacity-[0.02]" // Reduced opacity for subtlety
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px), radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div 
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:text-left"
          >
            {/* Wrapped text elements in a div for staggered animation */}
            <div className="overflow-hidden pb-2">
              <h1 
                ref={addScrollAnimElement}
                className="scroll-animate delay-2 font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-text-reveal"
              >
                Hi, I&apos;m <span className="text-primary">Gopal Mohan</span>
              </h1>
            </div>
            <div className="overflow-hidden pb-2">
              <p 
                ref={addScrollAnimElement}
                className="scroll-animate delay-3 font-body text-xl md:text-2xl text-foreground/80 mb-10 animate-text-reveal" style={{animationDelay: '0.4s'}}
              >
                Professional Photoshop Designer
              </p>
            </div>
            <div 
              ref={addScrollAnimElement}
              className="scroll-animate delay-4"
            >
              <Link href="#contact" data-cursor-type="pointer">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-primary bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background/20 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  Get Quote
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
                alt="Gopal Mohan"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl border-4 border-card group-hover:border-primary transition-all duration-300"
                data-ai-hint="profile designer"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
