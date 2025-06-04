
"use client";

import React from "react";

interface Principle {
  id: number;
  number: string;
  title: string;
  description: string;
}

const principlesData: Principle[] = [
  {
    id: 1,
    number: "1",
    title: "Fastest in market",
    description: "Delivering high-quality designs with rapid turnaround times to meet your deadlines.",
  },
  {
    id: 2,
    number: "2",
    title: "Low cost with Best quality",
    description: "Affordable solutions without compromising on creative excellence and professional output.",
  },
  {
    id: 3,
    number: "3",
    title: "Integrity and trust",
    description: "Building lasting client relationships through transparent communication and reliable service.",
  },
];

const ScribbleCircle = ({ numberText }: { numberText: string }) => (
  <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 group">
    {/* Base for hover effects if any, or just container */}
    <div className="absolute inset-0 w-full h-full">
      {/* Scribble paths */}
      <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-white transition-colors duration-300">
        <path d="M42 6C61.33 6 78 22.67 78 42C78 61.33 61.33 78 42 78C22.67 78 6 61.33 6 42C6 22.67 22.67 6 42 6Z" stroke="currentColor" strokeWidth="1.2" transform="rotate(12 42 42) scale(1.05)" opacity="0.7"/>
        <path d="M42 3C62.9543 3 81 20.0457 81 41C81 61.9543 62.9543 79 42 79C21.0457 79 3 61.9543 3 41C3 20.0457 21.0457 3 42 3Z" stroke="currentColor" strokeWidth="1.5" transform="rotate(-8 42 42) scale(0.97)" opacity="0.9"/>
         <path d="M42 8C59.6731 8 74 22.3269 74 40C74 57.6731 59.6731 72 42 72C24.3269 72 10 57.6731 10 40C10 22.3269 24.3269 8 42 8Z" stroke="currentColor" strokeWidth="1" transform="rotate(5 42 42) scale(1.00)" opacity="0.6"/>
      </svg>
      {/* Inner solid circle for the number */}
      <svg viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
        <circle cx="42" cy="42" r="26" fill="white" /> {/* Adjusted radius for thicker scribble visibility */}
      </svg>
    </div>
     {/* Number text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-headline text-3xl md:text-4xl text-black font-bold">{numberText}</span>
    </div>
  </div>
);

const Arrow1 = () => (
  <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mx-1 hidden md:block flex-shrink-0">
    <path d="M5 40C15.1809 40 32.0164 33.1752 38.8361 20.7208C42.9949 12.9447 48.1087 5 75 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M70 0L75 5L70 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const Arrow2 = () => (
 <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mx-1 hidden md:block flex-shrink-0">
    <path d="M5 5C15.1809 5 32.0164 11.8248 38.8361 24.2792C42.9949 32.0553 48.1087 40 75 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M70 45L75 40L70 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);


export default function DesignProcessSection() {
  return (
    <section id="design-process" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">My Core Principles</h2>
          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Guiding my work and ensuring your success with a streamlined approach.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-around md:gap-2 lg:gap-6">
          {principlesData.map((principle, index) => (
            <React.Fragment key={principle.id}>
              <div
                className="flex flex-col items-center text-center max-w-xs mb-12 md:mb-0"
                data-cursor-type="pointer"
              >
                <ScribbleCircle numberText={principle.number} />
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {principle.title}
                </h3>
                <p className="font-body text-gray-300 text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
              {index === 0 && <Arrow1 />}
              {index === 1 && <Arrow2 />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
