
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
    quote: "Gopal Mohan's dedication and design expertise have been invaluable. The clarity and impact of his work are truly commendable. We saw a significant uplift in engagement.",
    author: "Vilasa Vigraha Dasa",
    designation: "Vice President, Akshaya Patra Foundation",
  },
  {
    id: 2,
    quote: "The creative solutions provided by GM Designs perfectly captured the essence of our brand. Professional, insightful, and delivered with exceptional care and speed. Highly recommend their services for anyone looking for top-tier design work.",
    author: "Ramadevar",
    designation: "Acharya, Babaji Kriya Yoga",
  },
  {
    id: 3,
    quote: "Consistently high-quality designs that meet all our branding needs. A reliable and creative partner for any business seeking to make a visual impact. Their team is responsive and talented.",
    author: "Srinivas Anumanchipalli",
    designation: "Cheif Financial Officer, Axiscades",
  },
  {
    id: 4,
    quote: "Working with Gopal Mohan has significantly elevated our marketing materials. His unique approach and meticulous attention to detail are second to none. Our campaigns are more effective than ever before thanks to his input.",
    author: "Shyam Rupa Dasa",
    designation: "Marketing Lead, Hare Krishna Gokul Kshetram",
  },
  {
    id: 5,
    quote: "Gopal is a true professional. His designs are not only beautiful but also strategically sound. He took the time to understand our vision and brought it to life flawlessly. The results speak for themselves.",
    author: "Srikanth Kandoori",
    designation: "Vice President, Wells Fargo",
  },
  {
    id: 6,
    quote: "The menu designs were fantastic! Our customers love the new look, and it's made a real difference to our restaurant's atmosphere. Gopal is highly recommended for quality, speed, and creativity.",
    author: "Anita Desai",
    designation: "Owner, The Spice Route Cafe",
  },
  {
    id: 7,
    quote: "Consistently delivers top-notch designs that align perfectly with our hotel's branding. Mr. Mohan is reliable, exceptionally creative, and an absolute pleasure to collaborate with on all projects, big or small.",
    author: "Apparao",
    designation: "Managing Partner, Indraprastha Hotel",
  },
  {
    id: 8,
    quote: "From brochures to banners, every piece of design work has been outstanding. The attention to detail is impressive, and the turnaround time is always quick. We couldn't be happier with the service.",
    author: "Sanjay Patel",
    designation: "Director, BrightFuture Academy",
  },
  {
    id: 9,
    quote: "A master of his craft! Gopal transformed our outdated materials into something modern and engaging. His speed and quality are unmatched in the market. Truly a game-changer for our brand.",
    author: "Meera Krishnan",
    designation: "Events Coordinator, Harmony Hall",
  },
];

const ColumnTestimonials: React.FC<{
  testimonials: Testimonial[];
  animationClass: string;
  columnId: string;
}> = ({ testimonials, animationClass, columnId }) => {
  return (
    <div className={cn("flex flex-col gap-6", animationClass)}>
      {testimonials.map((testimonial) => (
        <div
          key={`${columnId}-1-${testimonial.id}`}
          className="bg-card border border-border rounded-xl shadow-lg p-6 flex flex-col"
        >
          <Quote className="w-7 h-7 text-primary/70 mb-4" />
          <p className="text-sm text-foreground italic leading-relaxed mb-5 flex-grow">
            "{testimonial.quote}"
          </p>
          <div className="mt-auto border-t border-border/70 pt-4">
            <p className="font-headline text-base font-semibold text-primary">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.designation}
            </p>
          </div>
        </div>
      ))}
      {/* Duplicate for continuous scroll */}
      {testimonials.map((testimonial) => (
         <div
          key={`${columnId}-2-${testimonial.id}`}
          className="bg-card border border-border rounded-xl shadow-lg p-6 flex flex-col"
        >
          <Quote className="w-7 h-7 text-primary/70 mb-4" />
          <p className="text-sm text-foreground italic leading-relaxed mb-5 flex-grow">
            "{testimonial.quote}"
          </p>
          <div className="mt-auto border-t border-border/70 pt-4">
            <p className="font-headline text-base font-semibold text-primary">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

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
      { threshold: 0.05 } // Trigger a bit earlier
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

  const column1Data = testimonialsData.slice(0, 3);
  const column2Data = testimonialsData.slice(3, 6);
  const column3Data = testimonialsData.slice(6, 9);

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
          style={{ animationDelay: isVisible ? '100ms' : '0ms' }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from those who've experienced the impact of my design solutions.
          </p>
        </div>

        <div
          className={cn(
            "group grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-h-[600px] md:max-h-[700px] overflow-hidden relative", 
            isVisible ? "fade-in-up is-visible" : "opacity-0" 
          )}
          style={{ animationDelay: isVisible ? '200ms' : '0ms', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          onMouseEnter={(e) => e.currentTarget.style.setProperty('--animation-play-state', 'paused')}
          onMouseLeave={(e) => e.currentTarget.style.setProperty('--animation-play-state', 'running')}
        >
          {/* Column 1 */}
          <div className="overflow-hidden">
            <ColumnTestimonials
              testimonials={column1Data}
              animationClass="animate-[marquee-y_20s_linear_infinite]"
              columnId="col1"
            />
          </div>
          {/* Column 2 */}
          <div className="overflow-hidden hidden md:block"> 
            <ColumnTestimonials
              testimonials={column2Data}
              animationClass="animate-[marquee-y_25s_linear_infinite]"
              columnId="col2"
            />
          </div>
          {/* Column 3 */}
          <div className="overflow-hidden hidden md:block"> 
            <ColumnTestimonials
              testimonials={column3Data}
              animationClass="animate-[marquee-y_18s_linear_infinite]"
              columnId="col3"
            />
          </div>
        </div>
         {/* Mobile view: Single scrolling column with all testimonials */}
        <div
          className={cn(
            "group md:hidden mt-6 max-h-[600px] overflow-hidden relative",
             isVisible ? "fade-in-up is-visible" : "opacity-0"
          )}
           style={{ animationDelay: isVisible ? '200ms' : '0ms', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          onMouseEnter={(e) => e.currentTarget.style.setProperty('--animation-play-state', 'paused')}
          onMouseLeave={(e) => e.currentTarget.style.setProperty('--animation-play-state', 'running')}
        >
            <ColumnTestimonials
                testimonials={testimonialsData} 
                animationClass="animate-[marquee-y_45s_linear_infinite]"
                columnId="colMobile"
            />
        </div>
      </div>
    </section>
  );
}

