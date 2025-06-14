
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function TestimonialsSection() {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-secondary text-foreground">
      <div className="container-custom">
        <div 
            className={cn(
                "max-w-3xl mx-auto text-center relative", 
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
            )}
            style={{transitionDelay: '100ms'}}
        >
          <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-16 h-16 md:w-24 md:h-24 text-foreground/5 opacity-50" style={{ lineHeight: '0.5' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <text x="-10" y="80" fontSize="150" fill="currentColor" >“</text>
            </svg>
          </div>
          <p className="font-headline text-xl md:text-2xl lg:text-3xl !leading-relaxed text-foreground/90 mb-8">
            &ldquo;Without Journey Commerce, we would never had been able to implement the system ourselves. Being a small team we don&apos;t have enough hours in the day. The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance. The results have been amazing and we couldn&apos;t ask for a better partner.&rdquo;
          </p>
          <div className="flex items-center justify-center">
            <Avatar className="w-12 h-12 mr-4 border-2 border-border">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Dhanvea Rajwaker" data-ai-hint="person founder tech" />
              <AvatarFallback className="text-lg bg-muted text-foreground">DR</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-md text-foreground">Dhanvea Rajwaker</h4>
              <p className="text-sm text-muted-foreground">Founder Techdots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
