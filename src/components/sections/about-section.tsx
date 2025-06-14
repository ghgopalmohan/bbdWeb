
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { PlayCircle } from 'lucide-react';

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section-padding bg-background text-foreground">
      <div className="container-custom">
        <div 
            className={cn("mb-10 md:mb-12 max-w-3xl", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: '100ms'}}
        >
            <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">About Me</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug mb-4 text-foreground">
                Design has always been more than just a job - it&apos;s my passion.
            </h2>
            <p className="text-sm text-muted-foreground">
                Driven by a passion for design, I create solutions that are not only visually appealing but also highly functional and user-centric.
            </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div 
            className={cn("md:col-span-7 relative group aspect-video md:aspect-[16/10] rounded-xl overflow-hidden shadow-card", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: '200ms'}}
          >
            <Image
              src="https://placehold.co/800x500.png" 
              alt="Designer working on tablet"
              width={800}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="designer tablet workspace"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircle className="w-16 h-16 text-white/80" />
            </div>
          </div>

          <div 
            className={cn("md:col-span-5 space-y-8", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: '300ms'}}
          >
            <div>
              <p className="font-headline text-5xl font-bold text-foreground mb-1">+320</p>
              <p className="text-sm text-muted-foreground">Successful projects completed, delivering impactful visual solutions.</p>
            </div>
            <div>
              <p className="font-headline text-5xl font-bold text-foreground mb-1">+280</p>
              <p className="text-sm text-muted-foreground">Satisfied clients across various industries globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
