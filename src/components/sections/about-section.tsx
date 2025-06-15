
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Award, Palette, Smile } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

interface CollageImage {
  src: string;
  alt: string;
  dataAiHint: string;
  imageWidth: number;
  imageHeight: number;
}

const collageImagesData: CollageImage[] = [
  { src: "/images/bbd-3.jpg", alt: "Final design mockup", dataAiHint: "design mockup app", imageWidth: 800, imageHeight: 600 },
  { src: "/images/bbd-4.jpg", alt: "Branding assets", dataAiHint: "branding assets styleguide", imageWidth: 800, imageHeight: 600 },
];

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

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
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
      value: "400+",
      label: "Happy Clients",
      delay: "400ms"
    },
    {
      icon: Award,
      value: "1500+",
      label: "Projects Done",
      delay: "500ms"
    },
    {
      icon: Smile,
      value: "100%",
      label: "Client Satisfaction",
      delay: "600ms"
    }
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
      className="bg-background text-foreground pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32"
    >
      <div className="container-custom">
        {/* Single Main Grid for the entire content */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Title and Images */}
          <div
            className={cn("md:col-span-5", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">INTRODUCTION</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-primary mb-6">
              About Me
            </h2>
            
            {/* Images stacked vertically under the title */}
            <div
              className={cn("space-y-4", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
              style={{transitionDelay: isVisible ? '200ms' : '0ms'}}
            >
              {collageImagesData.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="aspect-[4/3] rounded-lg shadow-md group relative hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={200} 
                        height={150} 
                        className="object-cover object-top w-full h-full rounded-lg transition-transform duration-500 ease-in-out"
                        data-ai-hint={image.dataAiHint}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-card p-1 rounded-lg shadow-2xl">
                     <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                      <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.imageWidth}
                          height={image.imageHeight}
                          className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
                          data-ai-hint={image.dataAiHint}
                          priority={index < 2} 
                      />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* Right Column: Intro, Stats, Expertise */}
          <div
            className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '150ms' : '0ms'}}
          >
            <p className="text-md text-muted-foreground md:pt-1 mb-4">
              Hi, I'm Gopal Mohan, a design professional with over three decades of experience in impactful advertising, publishing, and freelance design. My passion lies in creating visually compelling solutions that resonate with audiences and elevate brand presence, primarily utilizing Adobe Photoshop.
            </p>
             <p className="text-md text-muted-foreground md:pt-1 mb-6">
              My approach combines design precision with a deep understanding of brand identity, ensuring that every project I undertake not only meets but exceeds client expectations.
            </p>
            
            {/* Stats Grid - 2x2 */}
            <div
              className={cn(
                "grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8 lg:gap-y-8 mt-6 mb-8", // Added mb-8
                isVisible ? "fade-in-up is-visible" : "opacity-0"
              )}
              style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex items-start p-3 rounded-lg transition-all duration-500 ease-out hover:bg-secondary", 
                    "text-left",
                    isVisible ? "fade-in-up is-visible" : "opacity-0"
                  )}
                  style={{ transitionDelay: isVisible ? stat.delay : '0ms' }}
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-0">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Expertise */}
            <div className={cn(isVisible ? "fade-in-up is-visible" : "opacity-0", "pt-0")} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}> {/* Adjusted delay for expertise */}
              <h3 className="font-headline text-xl font-semibold text-primary mb-3 flex items-center">
                <Palette className="w-6 h-6 text-primary mr-2" />
                Core Expertise
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside pl-1">
                {expertiseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
