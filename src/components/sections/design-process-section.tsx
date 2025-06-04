
"use client";

import { Rocket, ArrowRight, QuoteIcon } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from "react";

interface Principle {
  id: number;
  text: string;
  icon?: React.ElementType; // Optional icon for future use
}

const corePrinciples: Principle[] = [
  {
    id: 1,
    text: "Fastest in market",
  },
  {
    id: 2,
    text: "Low cost with Best quality",
  },
  {
    id: 3,
    text: "Integrity and trust",
  },
];

export default function DesignProcessSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={addScrollAnimElement}
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">My Core Principles</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Guiding my work and ensuring your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-20 md:mb-24">
          {corePrinciples.map((principle, index) => (
            <div
              key={principle.id}
              ref={addScrollAnimElement}
              className={`scroll-animate delay-${index + 1} flex flex-col items-center text-center p-8 md:p-10 bg-card rounded-xl shadow-xl border border-border hover:shadow-2xl transition-shadow duration-300`}
              data-cursor-type="pointer"
            >
              <QuoteIcon className="h-12 w-12 md:h-16 md:w-16 text-primary/30 mb-6" />
              <p className="font-headline text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight">
                {principle.text}
              </p>
              {/* Optional: Add a small descriptive text or leave as is */}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center"> {/* This div was not scroll animated before, so keeping it that way unless specified */}
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="font-headline text-4xl font-semibold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how I can bring your unique vision to life with these principles at heart.
          </p>
          <Link href="#contact" data-cursor-type="pointer">
            <Button
              size="lg"
              className="group relative overflow-hidden transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-primary bg-primary hover:bg-accent text-primary-foreground text-lg md:text-xl px-10 py-4 shadow-md hover:shadow-lg"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background/10 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Get Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
