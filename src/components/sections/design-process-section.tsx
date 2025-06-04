
"use client";

import { Users, Lightbulb, Palette, MessageSquare, CheckCircle, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from "@/lib/utils";
import React from "react";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepPosition {
  cx: string; // SVG x-coordinate for the marker center
  cy: string; // SVG y-coordinate for the marker center
  textIsRight: boolean; // Determines if text block is to the right of the marker
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

// Scaled coordinates for a 960x720 viewBox (original was 800x600, scaled by 1.2)
const stepPositions: StepPosition[] = [
  { cx: '120',  cy: '600', textIsRight: true },  // Bottom-left start
  { cx: '276',  cy: '486', textIsRight: false }, // Mid-left bend
  { cx: '450',  cy: '354', textIsRight: true },  // Center
  { cx: '624',  cy: '222', textIsRight: false }, // Mid-right bend
  { cx: '840',  cy: '60',  textIsRight: true },  // Top-right end
];


export default function DesignProcessSection() {
  const addScrollAnimElement = useScrollAnimation();
  const scrollAnimElementsRef = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    scrollAnimElementsRef.current.forEach(el => {
      if (el) addScrollAnimElement(el);
    });
  }, [addScrollAnimElement]);

  const assignRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollAnimElementsRef.current[index] = el;
  };

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={assignRef(0)} // Assign ref for scroll animation
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">How I Work</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A transparent and collaborative approach to transform your ideas into stunning visuals.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden md:block relative min-h-[768px] w-full max-w-4xl mx-auto">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 960 720" // Increased viewBox size
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Scaled S-curve path */}
            <path
              d="M120 600 C 240 600, 180 420, 360 420 S 540 240, 600 240 S 720 60, 840 60"
              strokeWidth="38" // Increased stroke width
              className="stroke-muted"
            />
            <path
              d="M120 600 C 240 600, 180 420, 360 420 S 540 240, 600 240 S 720 60, 840 60"
              stroke="hsl(var(--background))"
              strokeWidth="5" // Increased stroke width
              strokeDasharray="18 18" // Adjusted dash array
            />
          </svg>

          {processSteps.map((step, index) => {
            const position = stepPositions[index];
            const textBlockWidth = "w-48"; // Reduced from w-56

            return (
              <div
                key={index}
                ref={assignRef(index + 1)} // Assign ref for scroll animation
                className={`scroll-animate delay-${index + 1} absolute group`}
                style={{
                  left: position.cx + 'px',
                  top: position.cy + 'px',
                  transform: 'translate(-50%, -50%)', // Center the group on cx, cy
                }}
              >
                <div
                  className={cn(
                    "flex items-center",
                    position.textIsRight ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  {/* Marker */}
                  <div
                    className={cn(
                      "relative w-14 h-14 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:border-accent transition-colors duration-300 z-10 shrink-0",
                      position.textIsRight ? "mr-4" : "ml-4" // Margin between marker and text
                    )}
                    data-cursor-type="pointer"
                  >
                    <step.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">
                      {index + 1}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div
                    className={cn(
                      textBlockWidth,
                      position.textIsRight ? "text-left" : "text-right"
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
              ref={assignRef(processSteps.length + index + 1)} // Assign ref for scroll animation
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

        {/* "Ready to Start Your Project?" Section - Transition removed */}
        <div
          className="mt-16 text-center"  // Removed ref and scroll-animate class
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
