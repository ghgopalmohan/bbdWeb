
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Building, Zap, Droplets, Slack } from 'lucide-react'; // Example icons

const clientLogos = [
  { name: 'Coinbase', icon: Briefcase, href: '#' },
  { name: 'Spotify', icon: Zap, href: '#' },
  { name: 'Zoom', icon: Building, href: '#' },
  { name: 'Slack', icon: Slack, href: '#' },
  { name: 'Dropbox', icon: Droplets, href: '#' },
  { name: 'Zoro', icon: Briefcase, href: '#' },
];

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
      className="relative min-h-[calc(100vh-5rem)] md:min-h-screen flex flex-col justify-center section-padding bg-background text-foreground overflow-hidden pt-28 md:pt-32" // Added padding top for header
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className={cn("md:col-span-7 lg:col-span-8 text-left", isVisible ? "fade-in-up is-visible" : "fade-in-up")} style={{ transitionDelay: '100ms' }}>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 !leading-tight text-foreground">
              Product Designer
            </h1>
          </div>
          <div className={cn("md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-end", isVisible ? "fade-in-up is-visible" : "fade-in-up")} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-32 h-40 md:w-40 md:h-52 rounded-lg overflow-hidden shadow-subtle mb-3">
              <Image
                src="https://placehold.co/300x400.png"
                alt="Designer Portrait"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="designer portrait subway"
              />
            </div>
            <p className="text-xs text-muted-foreground text-left md:text-right max-w-[200px]">
              GM / Duwy Designer Creating Intuitive Digital Experiences.
            </p>
          </div>
        </div>

        <div className={cn("mt-12 md:mt-20", isVisible ? "fade-in-up is-visible" : "fade-in-up")} style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-start">
            {clientLogos.map((client, index) => (
              <Link key={client.name} href={client.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-muted rounded-md text-sm text-foreground/80 hover:text-foreground transition-colors">
                <client.icon className="w-4 h-4" />
                <span>{client.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
