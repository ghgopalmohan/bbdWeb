
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  designation: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Gopal Mohan's dedication and design expertise have been invaluable to our foundation. The clarity and impact of his work are truly commendable.",
    author: "Vilasa Vigraha Dasa",
    designation: "Vice President, Akshaya Patra Foundation",
  },
  {
    id: 2,
    quote: "The design solutions provided by Gopal Mohan perfectly captured the essence of our teachings. Professional, insightful, and delivered with great care.",
    author: "Ramadevar",
    designation: "Acharya, Babaji Kriya Yoga",
  },
  {
    id: 3,
    quote: "Working with Gopal Mohan has significantly elevated our marketing materials. His creative approach and attention to detail are exceptional.",
    author: "Shyam Rupa Dasa",
    designation: "Marketing Lead, Hara Krishna Gokul Kshetram",
  },
  {
    id: 4,
    quote: "Gopal Mohan consistently delivers high-quality designs that meet our hotel's branding needs. He is reliable, creative, and a pleasure to work with.",
    author: "Apparao",
    designation: "Managing Partner, Indraprasta Hotel",
  },
];

// Duplicate data for seamless marquee effect
const extendedTestimonialsData = [...testimonialsData, ...testimonialsData, ...testimonialsData];


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
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-background text-foreground overflow-hidden"
    >
      <div className="container-custom">
        <div
          className={cn(
            "text-center mb-12 md:mb-16",
            isVisible ? "fade-in-up is-visible" : "fade-in-up"
          )}
          style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from those who've experienced the impact of my design solutions.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className={cn(
          "relative w-full group",
          isVisible ? "fade-in-up is-visible" : "fade-in-up"
        )}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-4">
          {extendedTestimonialsData.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={cn(
                "flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] p-6 mx-3 sm:mx-4",
                "bg-card border border-border rounded-xl shadow-lg",
                "flex flex-col justify-between" 
              )}
            >
              <div>
                <Quote className="w-8 h-8 text-primary/70 mb-4" />
                <p className="text-base text-foreground italic leading-relaxed mb-5">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto border-t border-border/70 pt-4">
                <p className="font-headline text-md font-semibold text-primary">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
