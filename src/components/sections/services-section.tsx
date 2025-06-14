
"use client";

import { CreditCard, BookOpenText, Megaphone, FileText, Printer, Truck, Palette, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: CreditCard,
    title: 'Business Cards & Logos',
    description: 'Crafting memorable brand identities with unique card and logo designs.',
  },
  {
    id: 2,
    icon: Palette, // Changed from BookOpenText for broader appeal
    title: 'Print Design',
    description: 'Menus, catalogs, brochures, and flyers designed to engage and inform.',
  },
  {
    id: 3,
    icon: Megaphone,
    title: 'Advertising Materials',
    description: 'Eye-catching banners, posters, and hoardings for impactful campaigns.',
  },
  {
    id: 4,
    icon: Printer,
    title: 'Stationery & Branding',
    description: 'Corporate and hotel stationery ensuring brand consistency and professionalism.',
  },
  {
    id: 5,
    icon: Truck,
    title: 'Vehicle Branding',
    description: 'Transforming vehicles into mobile advertisements with creative designs.',
  },
  {
    id: 6,
    icon: Star, // Represents custom/premium solutions
    title: 'Custom Visual Solutions',
    description: 'Tailored graphic design services to meet unique project requirements.',
  },
];

export default function ServicesSection() {
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
    const element = document.getElementById('services');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Services Offered
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I specialize in a wide range of Photoshop design services to bring your vision to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "bg-card p-6 rounded-lg shadow-lg border border-transparent transition-all duration-300 ease-out hover:shadow-xl hover:border-primary/50 hover:scale-[1.03]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 inline-flex">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
