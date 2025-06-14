
"use client";

import { ArrowRight, PencilRuler, SearchCode, TrendingUp, ShoppingBag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isDark?: boolean;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: PencilRuler, // Placeholder for Social Ads
    title: 'Social Ads',
    description: 'Strategic and creative social media advertising to boost engagement and conversions.',
    isDark: false,
  },
  {
    id: 2,
    icon: SearchCode, 
    title: 'Search Engineer', // Assuming SEO or SEM related
    description: 'Optimize your online visibility and ranking with effective search strategies.',
    isDark: false,
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Content Marketing',
    description: 'Increase engagement and build authority with a data-driven content marketing strategy.',
    isDark: true, // Dark card as per image
  },
  {
    id: 4,
    icon: ShoppingBag, // Placeholder for Saas Marketing
    title: 'SaaS Marketing',
    description: 'We help your SaaS product reach the right audience with a tailored marketing strategy.',
    isDark: false,
  },
];

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div 
                className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
                style={{transitionDelay: '100ms'}}
            >
                <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-2">Services</p>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-foreground">
                    A Comprehensive look at what we offer and how we deliver
                </h2>
            </div>
            <div 
                className={cn("md:col-span-5 md:text-right", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
                style={{transitionDelay: '200ms'}}
            >
                 <p className="text-sm text-muted-foreground mb-4 md:ml-auto max-w-xs">
                    A comprehensive look at our services and how we deliver them.
                </p>
                <Button asChild variant="default" size="lg" className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-base group">
                    <Link href="#contact">
                    Sign In <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "p-6 md:p-8 rounded-xl shadow-card transition-all duration-300 ease-out relative overflow-hidden group",
                service.isDark ? "bg-gray-800 text-white" : "bg-card text-foreground border",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
              )}
              style={{ transitionDelay: `${isVisible ? (index * 100) + 200 : 0}ms` }}
            >
              {/* <service.icon className={cn("h-8 w-8 mb-4", service.isDark ? "text-primary-foreground/70" : "text-primary")} /> */}
              <h3 className="font-headline text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p className={cn("text-sm leading-relaxed mb-4", service.isDark ? "text-gray-300" : "text-muted-foreground")}>
                {service.description}
              </p>
              <ArrowRight 
                className={cn(
                    "absolute bottom-6 right-6 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
                    service.isDark ? "text-gray-400 group-hover:text-white" : "text-muted-foreground group-hover:text-primary"
                )} 
              />
               {service.isDark && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/5 opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
