
"use client";

import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Briefcase } from 'lucide-react'; // Example icon

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Graphic Designer at Devs-Desil Tech",
    company: "Devs-Desil Tech",
    duration: "2015 - 2017",
    description: "Graphic Designer at Devs-Desil Tech, creating intuitive and functional design for web and mobile products."
  },
  {
    id: 2,
    role: "UI/UX Designer at Odama Studio",
    company: "Odama Studio",
    duration: "2017 - 2019",
    description: "Odama Studio, creating intuitive and engaging digital experiences through user-centric design."
  },
  {
    id: 3,
    role: "UX Researcher at Korea Studio",
    company: "Korea Studio",
    duration: "2018 - 2021",
    description: "At Korea Studio, I focused on User Design & Research for effective user experiences."
  },
  {
    id: 4,
    role: "Product Designer at Apple. Inc",
    company: "Apple. Inc",
    duration: "2021 - Now",
    description: "Product Designer at Apple. Inc, driving innovation and user experience that defined technology and intuitive design for iconic products."
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-background text-foreground">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
          <div 
            className={cn("md:col-span-5", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: '100ms'}}
          >
            <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">Experience</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-foreground">
              A Yearly snapshot of my creative growth
            </h2>
          </div>
          <div 
            className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: '200ms'}}
          >
            <p className="text-sm text-muted-foreground md:pt-5">
              A continuous story that summarises my creative journey and development throughout the years.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "py-6 px-4 md:px-6 border-t first:border-t-0 last:border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300 ease-out hover:bg-secondary/50",
                index % 2 !== 0 ? "bg-secondary/30" : "bg-background", // Alternating background
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
              )}
              style={{ transitionDelay: `${isVisible ? (index * 100) + 300 : 0}ms` }}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg md:text-xl text-foreground mb-1">{item.role}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <p className="font-medium text-base md:text-lg text-foreground/80 whitespace-nowrap shrink-0">
                {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
