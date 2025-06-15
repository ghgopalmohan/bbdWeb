
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Rocket, Award, ShieldCheck } from 'lucide-react';

const stylePointsData = [
  {
    number: "1",
    icon: Rocket,
    title: "Fastest in Market",
    description: "Delivering high-quality results with exceptional speed and efficiency, ensuring your project is market-ready in record time.",
  },
  {
    number: "2",
    icon: Award,
    title: "Low Cost with Best Quality",
    description: "Offering premium design and development services at competitive prices, maximizing your return on investment without compromising excellence.",
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Integrity and Trust",
    description: "Building transparent and reliable partnerships. My commitment to honesty ensures a straightforward and trustworthy collaboration.",
  },
];

const ArrowSvg = () => (
  <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 group-hover:text-primary transition-colors duration-300">
    <path d="M2 15C20.6667 15 53.3333 15 72 15M72 15L60.8571 22.5M72 15L60.8571 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MyStyleSection() {
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
    return () => { if (currentSectionRef) { observer.unobserve(currentSectionRef); }};
  }, []);

  return (
    <section 
      id="my-style" 
      ref={sectionRef} 
      className="section-padding bg-black text-white" // Dark background for this section
    >
      <div className="container-custom">
        <div
          className={cn("text-center mb-12 md:mb-20", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
          style={{transitionDelay: isVisible ? '100ms' : '0ms'}}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            My Style
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            These are the core principles that guide my work and ensure client satisfaction.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-16 md:gap-y-0 md:gap-x-6 lg:gap-x-8">
          {stylePointsData.map((point, index) => (
            <React.Fragment key={point.number}>
              <div 
                className={cn(
                  "flex-1 flex flex-col items-center text-center", 
                  isVisible ? "fade-in-up is-visible" : "fade-in-up"
                )}
                style={{transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms'}}
              >
                <div className="relative mb-8 group">
                  {/* Scribble-like circle effect for the number */}
                  <div className="absolute -inset-2.5">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700 group-hover:text-primary transition-colors duration-300">
                       <path d="M78.13,95.88A47.46,47.46,0,1,1,90.35,28.63" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" transform="rotate(15 50 50)"/>
                       <path d="M75.26,96.39a47.46,47.46,0,1,1,16-64.41" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" opacity="0.7" transform="rotate(-10 50 50)"/>
                    </svg>
                  </div>
                  <div className="relative w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-3xl font-bold shadow-lg z-10">
                    {/* Using Icon for a more polished look than just number, can revert to point.number if preferred */}
                    <point.icon className="w-10 h-10 text-primary" /> 
                  </div>
                </div>
                <h3 className="font-headline text-xl lg:text-2xl font-semibold mb-3 text-white">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">{point.description}</p>
              </div>

              {/* Arrow for medium screens and up, not for the last item */}
              {index < stylePointsData.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center pt-0 group mt-[-5.5rem] lg:mt-[-5rem] px-4 lg:px-6"> {/* Adjusted margin for better arrow alignment with icons */}
                  <ArrowSvg />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

