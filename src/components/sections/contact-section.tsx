
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// This component is now the "Let's Connect There" CTA section
export default function ContactSection() {
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
    <section id="contact-cta" ref={sectionRef} className="section-padding bg-footer-dark text-white">
      <div className="container-custom">
        <div 
            className={cn(
                "flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
            )}
            style={{transitionDelay: '100ms'}}
        >
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold !leading-tight max-w-lg">
            Let&apos;s Connect There
          </h2>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-footer-dark hover:bg-gray-200 rounded-md text-base font-medium py-4 px-8 shadow-md hover:shadow-lg transition-all duration-300 group min-w-[200px]"
          >
            <Link href="/contact-form"> {/* Placeholder link for a potential form page */}
              Secure Form <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
