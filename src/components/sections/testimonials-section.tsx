
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
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
    designation: "Marketing Lead, Hare Krishna Gokul Kshetram",
  },
  {
    id: 4,
    quote: "Gopal Mohan consistently delivers high-quality designs that meet our hotel's branding needs. He is reliable, creative, and a pleasure to work with.",
    author: "Apparao",
    designation: "Managing Partner, Indraprasta Hotel",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

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
      className="section-padding bg-background text-foreground"
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className={cn(
            "w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto",
            isVisible ? "fade-in-up is-visible" : "fade-in-up"
          )}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1"> {/* Show 1 on small, 2 on md, 1 on lg for focus */}
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-secondary/30 dark:bg-slate-800/50 border-border dark:border-slate-700 shadow-lg rounded-xl p-6 md:p-8">
                    <CardContent className="p-0 flex-grow">
                      <Quote className="w-8 h-8 text-primary/70 dark:text-primary-dark/70 mb-4" />
                      <p className="text-base md:text-lg text-foreground dark:text-foreground-dark/90 italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                    <div className="mt-auto border-t border-border dark:border-slate-700/50 pt-4">
                      <p className="font-headline text-md font-semibold text-primary dark:text-primary-dark">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground dark:text-slate-400">
                        {testimonial.designation}
                      </p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-10px] sm:left-[-15px] md:left-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex disabled:opacity-30" />
          <CarouselNext className="absolute right-[-10px] sm:right-[-15px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex disabled:opacity-30" />
        </Carousel>
      </div>
    </section>
  );
}
