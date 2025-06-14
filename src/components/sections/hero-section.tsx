
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'; // Added this import

const statsData = [
  { value: 31, suffix: "+", label: "Years Experience" },
  { value: 2000, suffix: "+", label: "Projects Done" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay for better visual effect
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-32 bg-background text-foreground overflow-hidden"
    >
      <div 
        className={cn(
          "container mx-auto px-4 md:px-6 text-center z-10 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
        >
          Gopal Mohan
        </h1>
        <p
          className="font-body text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Freelance Photoshop Designer & Creative Expert.
          Crafting high-impact visuals that elevate your brand.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button asChild size="lg" className="btn btn-primary text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-primary/30 w-full sm:w-auto">
            <Link href="#portfolio" data-cursor-type="pointer">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary text-lg px-10 py-4 rounded-xl w-full sm:w-auto">
            <Link href="#contact" data-cursor-type="pointer">
              Get In Touch
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}{stat.suffix}</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Optional: Subtle background pattern or gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20 opacity-30 z-0"></div>
    </section>
  );
}
