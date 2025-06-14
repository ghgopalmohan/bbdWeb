
"use client";

import { CreditCard, BookOpenText, Megaphone, FileText, Printer, Truck, CheckCircle } from 'lucide-react';
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
    description: 'Crafting memorable brand identities and impactful first impressions with unique card and logo designs.',
  },
  {
    id: 2,
    icon: BookOpenText,
    title: 'Menus & Catalogs',
    description: 'Designing visually appealing and easy-to-navigate menus and product catalogs that engage customers.',
  },
  {
    id: 3,
    icon: Megaphone,
    title: 'Banners & Posters',
    description: 'Creating eye-catching banners and posters for events, promotions, and advertising campaigns.',
  },
  {
    id: 4,
    icon: FileText,
    title: 'Brochures & Flyers',
    description: 'Developing informative and stylish brochures and flyers for effective marketing communication.',
  },
  {
    id: 5,
    icon: Printer,
    title: 'Hotel Stationery Printing',
    description: 'Providing high-quality design and print solutions for all hotel stationery needs, ensuring brand consistency.',
  },
  {
    id: 6,
    icon: Truck,
    title: 'Vehicle Branding',
    description: 'Transforming vehicles into mobile advertisements with creative and impactful branding designs.',
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
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            What I Do
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I specialize in a wide range of Photoshop design services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "bg-card p-8 rounded-xl shadow-lg border border-border transition-all duration-500 ease-out hover:shadow-primary/20 hover:border-primary/50 transform hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
            >
              <div className="flex items-center mb-5">
                <div className="bg-primary/10 p-3 rounded-lg mr-5">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
