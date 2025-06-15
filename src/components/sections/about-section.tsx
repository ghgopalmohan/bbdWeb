
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Award } from 'lucide-react'; // Icons for stats

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
      value: "25+",
      label: "Years of Experience",
      delay: "300ms"
    },
    {
      icon: Users,
      value: "100+",
      label: "Satisfied Clients",
      delay: "400ms"
    },
    {
      icon: Award,
      value: "500+",
      label: "Projects Completed",
      delay: "500ms"
    }
  ];

  const collageImages = [
    { src: "https://placehold.co/400x300.png", alt: "Design process sketch", dataAiHint: "design sketch process" },
    { src: "https://placehold.co/400x300.png", alt: "Client collaboration meeting", dataAiHint: "client meeting collaboration" },
    { src: "https://placehold.co/400x300.png", alt: "Final design mockup", dataAiHint: "design mockup app" },
    { src: "https://placehold.co/400x300.png", alt: "Branding assets", dataAiHint: "branding assets styleguide" },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-janice-light-gray text-janice-text-dark pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32">
      <div className="container-custom">
        <div
          className={cn("mb-10 md:mb-16 max-w-3xl", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
          style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
        >
          <h2 className="font-headline text-5xl md:text-6xl font-bold !leading-tight text-janice-dark mb-4">
            About Me
          </h2>
          <p className="text-lg text-janice-text-dark/80">
            With over 25 years in the design industry, I've had the privilege of working on a diverse range of projects, helping businesses and individuals bring their visions to life through impactful visual communication. My passion lies in understanding unique challenges and crafting bespoke design solutions that resonate and deliver results.
          </p>
        </div>

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
             <p className="text-sm text-janice-text-dark/70 pt-4">
              My approach is collaborative and client-focused, ensuring that every design not only looks great but also achieves its strategic objectives. I specialize in creating memorable brand identities, compelling marketing materials, and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
