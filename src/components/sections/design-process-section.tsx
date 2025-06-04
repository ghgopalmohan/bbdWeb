
"use client";

import { Users, Lightbulb, Palette, MessageSquare, CheckCircle, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from "@/lib/utils";
import React from "react"; // Import React for useRef

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepMarkerConfig {
  cx: string; // X-coordinate for the center of the marker on the SVG
  cy: string; // Y-coordinate for the center of the marker on the SVG
  textSide: 'left' | 'right'; // Which side of the marker the text block appears
}

const processSteps: ProcessStep[] = [
  {
    icon: Users,
    title: "Brief & Discovery",
    description: "We start by thoroughly understanding your vision, goals, and target audience to ensure perfect alignment."
  },
  {
    icon: Lightbulb,
    title: "Concept & Ideation",
    description: "Creative exploration and brainstorming sessions to develop unique and impactful design concepts."
  },
  {
    icon: Palette,
    title: "Design & Development",
    description: "Bringing the chosen concepts to life with meticulous attention to detail using Adobe Photoshop."
  },
  {
    icon: MessageSquare,
    title: "Review & Refinement",
    description: "Collaborative feedback rounds to fine-tune the designs and ensure they meet your expectations."
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "Providing you with polished, high-quality design assets ready for print or digital use."
  }
];

// Coordinates for the center of each marker along the S-curve (viewBox="0 0 800 600")
// Path: M100 500 C 200 500, 150 350, 300 350 S 450 200, 500 200 S 600 50, 700 50
const stepMarkers: StepMarkerConfig[] = [
  { cx: '100', cy: '500', textSide: 'right' }, // Start of curve, text to the right
  { cx: '230', cy: '405', textSide: 'left' },  // First bend, text to the left
  { cx: '375', cy: '295', textSide: 'right' }, // Mid-point, text to the right
  { cx: '520', cy: '185', textSide: 'left' },  // Second bend, text to the left
  { cx: '700', cy: '50',  textSide: 'right' }, // End of curve, text to the right
];


export default function DesignProcessSection() {
  const scrollAnimElements = React.useRef<(HTMLDivElement | null)[]>([]);
  const addScrollAnimElement = useScrollAnimation();

  React.useEffect(() => {
    // Apply addScrollAnimElement to the dynamically created refs
    scrollAnimElements.current.forEach(el => addScrollAnimElement(el));
  }, [addScrollAnimElement]);

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={addScrollAnimElement} // Main section title animation
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">My Design Process</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A transparent and collaborative approach to transform your ideas into stunning visuals.
          </p>
        </div>

        {/* Desktop Roadmap Layout */}
        <div className="hidden md:block relative min-h-[600px] lg:min-h-[700px] w-full max-w-4xl mx-auto">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 800 600" // Adjusted viewBox if necessary
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Thicker road base */}
            <path
              d="M100 500 C 200 500, 150 350, 300 350 S 450 200, 500 200 S 600 50, 700 50"
              strokeWidth="24" // Increased road thickness
              className="stroke-muted"
            />
            {/* Dashed center line */}
            <path
              d="M100 500 C 200 500, 150 350, 300 350 S 450 200, 500 200 S 600 50, 700 50"
              stroke="hsl(var(--background))"
              strokeWidth="4"
              strokeDasharray="15 15"
            />
          </svg>

          {processSteps.map((step, index) => {
            const markerConfig = stepMarkers[index];
            return (
              <div // This is the main wrapper for each step, centered at the marker's intended SVG position
                key={index}
                ref={(el) => { scrollAnimElements.current[index] = el; }}
                className={`scroll-animate delay-${index + 1} absolute group`}
                style={{
                  left: `${markerConfig.cx}px`,
                  top: `${markerConfig.cy}px`,
                  transform: `translate(-50%, -50%)`, // Centers this div at (cx,cy)
                  width: 'auto', // Let content determine width
                }}
              >
                <div // This flex div contains the marker (now at 0,0 of parent) and text
                  className={cn(
                    "flex items-center relative",
                    markerConfig.textSide === 'left' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {/* Marker and Icon */}
                  <div
                    className={cn(
                      "relative w-14 h-14 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:border-accent transition-colors duration-300 z-10 shrink-0",
                    )}
                  >
                    <step.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">
                      {index + 1}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div
                    className={cn(
                      "p-1 w-64", // Text block width
                      markerConfig.textSide === 'left' ? "text-right mr-4" : "text-left ml-4" // Margin for spacing
                    )}
                  >
                    <h3 className="font-headline text-lg font-semibold mb-1 text-primary">Step {index + 1}: {step.title}</h3>
                    <p className="font-body text-muted-foreground text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Mobile Stacked Layout */}
        <div className="md:hidden space-y-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { scrollAnimElements.current[processSteps.length + index] = el; }} // Separate refs for mobile
              className={`scroll-animate delay-${index + 1} flex flex-col items-center text-center`}
            >
              <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                <step.icon className="h-9 w-9 md:h-10 md:w-10 text-primary" />
              </div>
              <h3 className="font-headline text-3xl font-semibold mb-3 text-primary">Step {index + 1}: {step.title}</h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-md">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <div className="w-0.5 h-12 bg-border my-6"></div>
              )}
            </div>
          ))}
        </div>

        <div
          ref={addScrollAnimElement} // Main section title animation
          className="scroll-animate delay-5 mt-20 text-center" // Delay to animate after roadmap
        >
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="font-headline text-4xl font-semibold mb-4 text-foreground">Ready to Start Your Project?</h3>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how this process can be tailored to bring your unique vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
