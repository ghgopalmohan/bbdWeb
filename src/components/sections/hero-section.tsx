
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center section-padding bg-background text-foreground overflow-hidden"
    >
      <div 
        className={cn(
          "container-custom text-center z-10 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Gopal Mohan
        </h1>
        <p
          className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Freelance Designer & Creative Expert, specializing in crafting compelling visual narratives and high-impact designs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-10 py-7 shadow-lg hover:shadow-primary/30 w-full sm:w-auto">
            <Link href="#portfolio">
              See My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Optional: Subtle background elements if needed later, e.g. gradients or patterns */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5 opacity-30 z-0"></div> */}
    </section>
  );
}
