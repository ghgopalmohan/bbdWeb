
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedStat from '@/components/common/AnimatedStat';

const FULL_TITLE = "Hi, I'm Gopal Mohan";

const statsData = [
  { value: 31, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Clients" },
  // { value: 2, suffix: "+", label: "Design Awards" },
];

export default function HeroSection() {
  const addScrollAnimElement = useScrollAnimation();
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < FULL_TITLE.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle((prev) => prev + FULL_TITLE[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); 
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
            <div className="overflow-hidden pb-3 min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[200px]">
              <h1
                className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-foreground"
              >
                {displayedTitle.split("Gopal Mohan")[0]}
                <span className="text-primary">{displayedTitle.includes("Gopal Mohan") ? "Gopal Mohan" : ""}</span>
                {charIndex < FULL_TITLE.length && <span className="inline-block w-1 h-[calc(1em_*_0.8)] bg-primary animate-pulse ml-1"></span>}
              </h1>
            </div>
            <div className="overflow-hidden pb-3">
              <p
                ref={addScrollAnimElement}
                className="scroll-animate delay-3 font-body text-2xl md:text-3xl text-muted-foreground mb-2 max-w-xl" 
              >
                Professional Photoshop Designer & Creative Genius.
              </p>
              <p
                ref={addScrollAnimElement}
                className="scroll-animate delay-3 font-body text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-xl"
              >
                Baatein kam.. Kaam zyaada!
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
          
          {/* Right Column: Image and Stats */}
          <div
            ref={addScrollAnimElement}
            className="scroll-animate delay-2 flex flex-col items-center mt-12 md:mt-0"
          >
            {/* Image Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:w-80 md:h-80 lg:w-96 lg:h-96 group mb-8 md:mb-12">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Gopal Mohan - Professional Designer"
                width={400}
                height={400}
                className="rounded-lg object-cover shadow-2xl border-4 border-card group-hover:border-primary transition-all duration-300 w-full h-auto"
                data-ai-hint="professional designer portrait"
                priority
              />
            </div>

            {/* Stats Container */}
            <div className="w-full">
              <div className="flex flex-row flex-wrap justify-center items-start gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 gap-y-6">
                {statsData.map((stat, index) => (
                  <AnimatedStat
                    key={index}
                    targetValue={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    className="text-center" // Each stat item (number + label) is centered
                    textClassName="text-4xl sm:text-5xl font-bold text-primary block" // block ensures label is on new line below number
                    labelClassName="text-base text-muted-foreground mt-1"
                    duration={1500 + index * 200} 
                    startDelay={700 + index * 250 + (FULL_TITLE.length * 100)} // Delay after title animation
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
