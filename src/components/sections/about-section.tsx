
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

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
    "Business Cards", "Brochures & Flyers", "Banners, Hoardings & Flexes",
    "Corporate Stationery (Letterheads, Envelopes, Notepads, etc.)",
    "Hotel Menus", "Billboards & Signage", "Custom Visual Branding Solutions"
  ];
  const formattedExpertiseString = expertiseAreas.join(', ');

  return (
    <section id="about" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Me</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A seasoned Photoshop designer dedicated to crafting compelling visual narratives and high-impact designs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div 
            className={cn(
              "md:col-span-2 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="https://placehold.co/600x700.png"
                alt="Gopal Mohan"
                width={600}
                height={700}
                className="rounded-xl shadow-2xl relative object-cover w-full"
                data-ai-hint="professional designer portrait"
              />
            </div>
          </div>

          <div 
            className={cn(
              "md:col-span-3 font-body text-muted-foreground space-y-5 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: '200ms'}}
          >
            <p className="text-lg leading-relaxed">
              Hi, I&apos;m Gopal Mohan. With a strong academic background in Computers and Industrial Relations & Personnel Management (IRPM), I launched my entrepreneurial journey by founding Business Bonds Directory (Yellow Pages)—a company dedicated to designing impactful advertisements and publishing comprehensive business directories. Between 2000 and 2018, the company grew to establish 10 successful branches across Andhra Pradesh, becoming a trusted name in regional business networking.
            </p>
            <p className="text-lg leading-relaxed">
              From 2018 to 2020, I shifted focus to the healthcare sector, publishing a specialized Medical Directory of Vijayawada, which received significant industry recognition.
            </p>
            <p className="text-lg leading-relaxed">
              Since 2021, I have been working as a freelance graphic designer and creative vendor for numerous leading companies in India and abroad. My core expertise lies in Adobe Photoshop, with a professional portfolio that spans: {formattedExpertiseString}.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              My approach combines <span className="text-primary font-semibold">design precision</span> with a <span className="text-primary font-semibold">deep understanding of brand identity</span>, ensuring that every project I undertake not only meets but exceeds client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
