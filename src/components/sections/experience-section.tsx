
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, CalendarDays, Building, Sparkles } from 'lucide-react'; // Using more varied icons

const timelineData = [
  {
    icon: Building,
    date: "2000 - 2018",
    title: "Founder & Director",
    company: "Business Bonds Directory (Yellow Pages)",
    description: "Launched entrepreneurial journey by founding a company dedicated to designing impactful advertisements and publishing comprehensive business directories. Grew to establish 10 successful branches across Andhra Pradesh, becoming a trusted name in regional business networking.",
    delay: "200ms",
  },
  {
    icon: Briefcase,
    date: "2018 - 2020",
    title: "Publisher & Design Lead",
    company: "Specialized Medical Directory of Vijayawada",
    description: "Shifted focus to the healthcare sector, publishing a specialized medical directory which received significant industry recognition for its design and utility.",
    delay: "300ms",
  },
  {
    icon: Sparkles,
    date: "2021 - Present",
    title: "Freelance Graphic Designer & Creative Vendor",
    company: "Serving Leading Companies in India & Abroad",
    description: "Working with numerous leading companies, leveraging core expertise in Adobe Photoshop to deliver a wide range of creative solutions including business cards, brochures, banners, corporate stationery, hotel menus, billboards, and custom visual branding.",
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
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 lg:py-28 bg-janice-dark text-janice-text-light">
      <div className="container-custom">
        {/* Title Block */}
        <div className="mb-12 md:mb-16 text-center">
          <p 
            className={cn("text-xs font-medium text-janice-text-light/70 uppercase tracking-wider mb-2", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
          >
            MY JOURNEY
          </p>
          <h2 
            className={cn("font-headline text-3xl md:text-4xl font-semibold !leading-snug text-janice-accent", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{transitionDelay: isVisible ? '150ms' : '0ms'}}
          >
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-janice-soft-gold/30 transform -translate-x-1/2 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "mb-12 md:mb-16 flex md:items-start group",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
              )}
              style={{ transitionDelay: isVisible ? item.delay : '0ms' }}
            >
              {/* Icon and Date for larger screens */}
              <div className="hidden md:flex flex-col items-center mx-6 lg:mx-10_">
                 <div className="bg-janice-accent p-3 rounded-full text-janice-dark mb-2 shadow-lg">
                   <item.icon className="w-6 h-6" />
                 </div>
                 <p className="text-xs font-semibold text-janice-text-light/70 tracking-wider mt-1 whitespace-nowrap bg-janice-dark/50 px-2 py-1 rounded">
                   {item.date}
                 </p>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-2/3 lg:w-7/12 bg-janice-olive/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-janice-soft-gold/20 hover:border-janice-accent/70 transition-colors duration-300">
                {/* Date and Icon for mobile */}
                <div className="md:hidden mb-3 flex items-center">
                  <div className="bg-janice-accent p-2 rounded-full text-janice-dark mr-3">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-janice-text-light/90 tracking-wider bg-janice-dark/50 px-2 py-1 rounded">
                    {item.date}
                  </p>
                </div>
                <h3 className="font-headline text-xl lg:text-2xl font-semibold text-janice-accent mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-janice-text-light/80 mb-3">{item.company}</p>
                <p className="text-sm text-janice-text-light/70 leading-relaxed">
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

    