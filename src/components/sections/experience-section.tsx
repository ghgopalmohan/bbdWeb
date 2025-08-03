"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Building, Sparkles } from 'lucide-react';

const experienceData = [
  {
    icon: Building,
    date: "1994 - 2018",
    title: "Founder & Director",
    company: "Business Bonds Directory",
    description: "Founded and grew a successful business directory(Yellow Pages) company with 10 branches across Andhra Pradesh, specializing in advertising-designing-printing.",
    delay: "200ms",
  },
  {
    icon: Briefcase,
    date: "2018 - 2020",
    title: "Publisher & Design Lead",
    company: "Specialized Medical Directory",
    description: "Published a specialized doctor's directory for Vijayawada, earning industry recognition for its design and usability.",
    delay: "300ms",
  },
  {
    icon: Sparkles,
    date: "2021 - Present",
    title: "Freelance Designer & Printer",
    company: "Corporate & Global Clients",
    description: "Rendering services to leading companies in India and abroad, delivering a wide range of creative design, branding, and printing solutions.",
    delay: "400ms",
  },
];

export default function ExperienceSection() {
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

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-background text-foreground">
      <div className="container-custom">
        {/* Title Block */}
        <div className="mb-12 md:mb-16 text-center">
          <p
            className={cn("text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
          >
            MY JOURNEY
          </p>
          <h2
            className={cn("font-headline text-3xl md:text-4xl font-semibold !leading-snug text-primary", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '150ms' : '0ms'}}
          >
            Professional Experience
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-card border border-border rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
              )}
              style={{ transitionDelay: isVisible ? item.delay : '0ms' }}
            >
              <div className="mb-5 flex items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   <item.icon className="w-7 h-7" />
                 </div>
                 <p className="text-sm font-semibold text-muted-foreground tracking-wider">
                   {item.date}
                 </p>
              </div>

              <div>
                <h3 className="font-headline text-xl lg:text-2xl font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">{item.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
