
"use client";

import { Users, Lightbulb, Palette, MessageSquare, CheckCircle, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from "@/lib/utils";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
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

// Adjusted positions for better alignment on the S-curve and alternating text.
// Percentages are approximate for a 800x600 SVG viewbox concept.
// `left` for `markerAlign: 'right'` is an offset from the right edge of the container.
const stepPositions = [
  { top: '75%', left: '5%', textAlign: 'left', markerAlign: 'left' },   // Bottom-left of curve, text right
  { top: '58%', left: '60%', textAlign: 'right', markerAlign: 'right' }, // Mid-curve (around 35-40% from left), text left
  { top: '40%', left: '40%', textAlign: 'left', markerAlign: 'left' }, // Apex of first curve (around 50-60% from left), text right
  { top: '22%', left: '35%', textAlign: 'right', markerAlign: 'right' }, // Mid-curve descending (around 60-70% from left), text left
  { top: '5%', left: '10%', textAlign: 'right', markerAlign: 'right' },  // Top-right of curve, text left
];


export default function DesignProcessSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={addScrollAnimElement}
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
            viewBox="0 0 800 600" 
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 500 C 200 500, 150 350, 300 350 S 450 200, 500 200 S 600 50, 700 50"
              strokeWidth="20"
              className="stroke-muted" 
            />
            <path
              d="M100 500 C 200 500, 150 350, 300 350 S 450 200, 500 200 S 600 50, 700 50"
              stroke="hsl(var(--background))"
              strokeWidth="4"
              strokeDasharray="15 15" 
            />
          </svg>

          {processSteps.map((step, index) => {
            const position = stepPositions[index];
            return (
              <div
                key={index}
                ref={addScrollAnimElement}
                className={`scroll-animate delay-${index + 1} absolute`}
                style={{
                  top: position.top,
                  left: position.markerAlign === 'left' ? position.left : undefined,
                  right: position.markerAlign === 'right' ? position.left : undefined,
                }}
              >
                <div className={cn(
                  "flex items-center", // Changed from items-start to items-center
                  position.markerAlign === 'right' ? "flex-row-reverse" : "flex-row"
                )}>
                  {/* Marker and Icon */}
                  <div className={cn(
                    "flex flex-col items-center z-10",
                    position.markerAlign === 'left' ? "mr-4" : "ml-4" // Reduced from mr-6/ml-6
                  )}>
                    <div className="relative w-14 h-14 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:border-accent transition-colors duration-300">
                      <step.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" /> {/* Icon size reduced */}
                      <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background"> {/* Badge size reduced */}
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    className={cn(
                      "w-48 p-1", // Width reduced from w-56
                      position.markerAlign === 'left' ? "text-left" : "text-right"
                    )}
                  >
                    <h3 className="font-headline text-lg font-semibold mb-1 text-primary">Step {index + 1}: {step.title}</h3> {/* Font size reduced, added Step prefix */}
                    <p className="font-body text-muted-foreground text-xs leading-relaxed"> {/* Font size reduced */}
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
              ref={addScrollAnimElement}
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
          ref={addScrollAnimElement}
          className="scroll-animate delay-5 mt-20 text-center"
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
