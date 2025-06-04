
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const FULL_TITLE = "Hi, I'm Gopal Mohan";

export default function HeroSection() {
  const addScrollAnimElement = useScrollAnimation();
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < FULL_TITLE.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle((prev) => prev + FULL_TITLE[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here (milliseconds)
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 md:py-32 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            ref={addScrollAnimElement}
            className="scroll-animate delay-1 md:text-left"
          >
            <div className="overflow-hidden pb-3 min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[200px]"> {/* Ensure enough height for text */}
              <h1
                className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
              >
                {displayedTitle.split("Gopal Mohan")[0]}
                <span className="text-primary">{displayedTitle.includes("Gopal Mohan") ? "Gopal Mohan" : ""}</span>
                {charIndex < FULL_TITLE.length && <span className="inline-block w-1 h-[calc(1em_*_0.8)] bg-primary animate-pulse ml-1"></span>} {/* Blinking cursor */}
              </h1>
            </div>
            <div className="overflow-hidden pb-3">
              <p
                ref={addScrollAnimElement}
                className="scroll-animate delay-3 font-body text-2xl md:text-3xl text-muted-foreground mb-12 max-w-xl"
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

    