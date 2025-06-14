
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Principle {
  id: number;
  number: string;
  title: string;
  description: string;
}

const principlesData: Principle[] = [
  {
    id: 1,
    number: "01",
    title: "Fastest in Market",
    description: "Delivering high-quality designs with rapid turnaround times to meet your deadlines efficiently.",
  },
  {
    id: 2,
    number: "02",
    title: "Low Cost, Best Quality",
    description: "Affordable solutions without compromising on creative excellence and professional output.",
  },
  {
    id: 3,
    number: "03",
    title: "Integrity and Trust",
    description: "Building lasting client relationships through transparent communication and reliable service.",
  },
];

export default function DesignProcessSection() {
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
    const element = document.getElementById('design-process');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section id="design-process" className="py-20 md:py-32 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">How I Work</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            My approach is built on core principles that ensure your project's success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {principlesData.map((principle, index) => (
            <div
              key={principle.id}
              className={cn(
                "bg-card p-8 rounded-xl shadow-lg border border-border transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
            >
              <div className="flex items-center mb-5">
                <span className="text-5xl font-bold text-primary mr-4">{principle.number}</span>
                <h3 className="font-headline text-2xl font-semibold text-foreground leading-tight">
                  {principle.title}
                </h3>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
