
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Award, Palette, Zap } from 'lucide-react';

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

  const stats = [
    {
      icon: Briefcase,
      value: "31+",
      label: "Years Experience",
      delay: "300ms"
    },
    {
      icon: Users,
      value: "150+",
      label: "Happy Clients",
      delay: "400ms"
    },
    {
      icon: Award,
      value: "500+",
      label: "Projects Done",
      delay: "500ms"
    }
  ];

  const collageImages = [
    { src: "https://placehold.co/400x300.png", alt: "Design process sketch", dataAiHint: "design sketch process" },
    { src: "https://placehold.co/400x300.png", alt: "Client collaboration meeting", dataAiHint: "client meeting collaboration" },
    { src: "https://placehold.co/400x300.png", alt: "Final design mockup", dataAiHint: "design mockup app" },
    { src: "https://placehold.co/400x300.png", alt: "Branding assets", dataAiHint: "branding assets styleguide" },
  ];

  const expertiseItems = [
    "Business Cards",
    "Brochures & Flyers",
    "Banners, Hoardings & Flexes",
    "Corporate Stationery (Letterheads, Envelopes, Notepads, etc.)",
    "Hotel Menus",
    "Billboards & Signage",
    "Custom Visual Branding Solutions"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="bg-janice-light-gray text-janice-text-dark pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32"
    >
      <div className="container-custom">
        {/* Title Block */}
        <div className="grid md:grid-cols-12 gap-8 items-start mb-10 md:mb-16">
          <div
            className={cn("md:col-span-5", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
          >
            <p className="text-xs font-medium text-janice-dark/70 uppercase tracking-wider mb-2">INTRODUCTION</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-janice-dark">
              About Me
            </h2>
          </div>
          <div
            className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '150ms' : '0ms'}}
          >
            <p className="text-md text-janice-text-dark/80 md:pt-1 mb-4">
              A seasoned design professional with over three decades of experience in impactful advertising, publishing, and freelance graphic design. My passion lies in creating visually compelling solutions that resonate with audiences and elevate brand presence, primarily utilizing Adobe Photoshop.
            </p>
             <p className="text-md text-janice-text-dark/80 md:pt-1">
              My approach combines design precision with a deep understanding of brand identity, ensuring that every project I undertake not only meets but exceeds client expectations.
            </p>
          </div>
        </div>

        {/* Content Grid: Collage, Stats, and Expertise */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div
            className={cn("md:col-span-7 grid grid-cols-2 gap-4", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '200ms' : '0ms'}}
          >
            {collageImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.dataAiHint}
                />
              </div>
            ))}
          </div>

          <div
            className={cn("md:col-span-5 space-y-8", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '300ms' : '0ms'}}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  "flex items-center p-1 rounded-lg transition-all duration-500 ease-out",
                  isVisible ? "fade-in-up is-visible" : "opacity-0"
                )}
                style={{ transitionDelay: isVisible ? stat.delay : '0ms' }}
              >
                <div className="flex-shrink-0 mr-4">
                  <stat.icon className="w-10 h-10 text-janice-accent" />
                </div>
                <div>
                  <p className="font-headline text-4xl font-bold text-janice-dark mb-0">{stat.value}</p>
                  <p className="text-sm text-janice-text-dark/70">{stat.label}</p>
                </div>
              </div>
            ))}
            <div className={cn(isVisible ? "fade-in-up is-visible" : "opacity-0", "pt-4")} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
              <h3 className="font-headline text-xl font-semibold text-janice-dark mb-3 flex items-center">
                <Palette className="w-6 h-6 text-janice-accent mr-2" />
                Core Expertise
              </h3>
              <ul className="space-y-1.5 text-sm text-janice-text-dark/70 list-disc list-inside pl-1">
                {expertiseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
               <p className="text-sm text-janice-text-dark/70 mt-2">
                (Primarily Adobe Photoshop)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    