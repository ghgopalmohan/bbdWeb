
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

interface TimelineEvent {
  icon: React.ElementType;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    icon: Briefcase,
    date: "2000 - 2018",
    title: "Founder, Business Bonds Directory (Yellow Pages)",
    description: "Established and grew a company designing impactful ads and publishing business directories, expanding to 10 branches across Andhra Pradesh."
  },
  {
    icon: Calendar,
    date: "2018 - 2020",
    title: "Publisher, Medical Directory of Vijayawada",
    description: "Shifted focus to healthcare, publishing a specialized medical directory that received significant industry recognition."
  },
  {
    icon: Award,
    date: "2021 - Present",
    title: "Freelance Graphic Designer & Creative Vendor",
    description: "Providing design services to leading companies in India and abroad, specializing in Adobe Photoshop for various print and digital media."
  }
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const expertiseAreas = [
    "Business Cards", "Logos", "Brochures & Flyers", "Banners, Hoardings & Flexes",
    "Corporate Stationery", "Hotel Menus", "Billboards & Signage", 
    "Vehicle Branding", "Custom Visual Branding Solutions"
  ];
  const formattedExpertiseString = expertiseAreas.join(', ');

  return (
    <section id="about" className="section-padding bg-secondary text-foreground">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3">About Me</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A seasoned Photoshop designer dedicated to crafting compelling visual narratives and high-impact designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative group aspect-[3/4] max-w-md mx-auto">
              <Image
                src="https://placehold.co/600x800.png" 
                alt="Gopal Mohan"
                width={600}
                height={800}
                className="rounded-lg shadow-xl object-cover w-full h-full"
                data-ai-hint="professional designer portrait"
              />
              <div className="absolute -inset-2 border-2 border-primary/50 rounded-lg group-hover:border-primary transition-all duration-300 -z-10 transform group-hover:scale-105"></div>
            </div>
          </div>

          <div 
            className={cn(
              "font-body text-muted-foreground space-y-6 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 transform-none" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: '200ms'}}
          >
            <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground">My Journey & Expertise</h3>
            <p className="text-md leading-relaxed">
              Hi, I&apos;m Gopal Mohan. With an academic background in Computers and Industrial Relations & Personnel Management (IRPM), I combine technical understanding with creative flair. My professional journey started with founding Business Bonds Directory, and has evolved into a dedicated freelance career focusing on high-quality graphic design.
            </p>
            <p className="text-md leading-relaxed">
              My core expertise lies in Adobe Photoshop, with a professional portfolio that spans: {formattedExpertiseString}.
            </p>
            <p className="text-md leading-relaxed text-foreground">
              I approach each project with <span className="text-primary font-semibold">design precision</span> and a <span className="text-primary font-semibold">deep understanding of brand identity</span>, ensuring solutions that not only meet but exceed client expectations.
            </p>
          </div>
        </div>

        <div className={cn("mt-16 md:mt-24 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")} style={{transitionDelay: '400ms'}}>
          <h3 className="font-headline text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">Career Timeline</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={cn(
                  "mb-10 md:mb-12 flex items-start transition-all duration-700 ease-out",
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row",
                  isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <div className="md:w-1/2 md:pr-8 md:pl-0 data-[align=right]:md:pl-8 data-[align=right]:md:pr-0" data-align={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="bg-card p-6 rounded-lg shadow-md border relative">
                     <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" style={index % 2 === 0 ? {left: '-29px'} : {right: '-29px'}}></div>
                     <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" style={index % 2 === 0 ? {right: '-35.5px'} : {left: '-35.5px'}}></div>
                    <event.icon className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm font-semibold text-primary mb-1">{event.date}</p>
                    <h4 className="font-headline text-xl font-medium text-foreground mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div> {/* Spacer for alignment */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
