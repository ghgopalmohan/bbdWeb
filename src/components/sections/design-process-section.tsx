
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

interface StepMarkerConfig {
  cx: string; 
  cy: string; 
  textSide: 'left' | 'right'; 
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

const stepMarkers: StepMarkerConfig[] = [
  { cx: '100', cy: '500', textSide: 'right' }, 
  { cx: '230', cy: '405', textSide: 'left' },  
  { cx: '375', cy: '295', textSide: 'right' }, 
  { cx: '520', cy: '185', textSide: 'left' }, 
  { cx: '700', cy: '50',  textSide: 'right' }, 
];


export default function DesignProcessSection() {
  const scrollAnimElements = React.useRef<(HTMLDivElement | null)[]>([]);
  const addScrollAnimElement = useScrollAnimation();

  React.useEffect(() => {
    scrollAnimElements.current.forEach(el => addScrollAnimElement(el));
  }, [addScrollAnimElement]);

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">How I Work</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A transparent and collaborative approach to transform your ideas into stunning visuals.
          </p>
        </div>

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
              strokeWidth="24" 
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
            const markerConfig = stepMarkers[index];
            return (
              <div 
                key={index}
                ref={(el) => { scrollAnimElements.current[index] = el; }}
                className={`scroll-animate delay-${index + 1} absolute group`}
                style={{
                  left: `${markerConfig.cx}px`,
                  top: `${markerConfig.cy}px`,
                  transform: `translate(-50%, -50%)`, 
                }}
              >
                <div 
                  className={cn(
                    "flex items-center relative",
                    markerConfig.textSide === 'left' ? "flex-row-reverse" : "flex-row"
                  )}
                >
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

                  <div
                    className={cn(
                      "p-1 w-64", 
                      markerConfig.textSide === 'left' ? "text-right mr-4" : "text-left ml-4" 
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


        <div className="md:hidden space-y-12">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { scrollAnimElements.current[processSteps.length + index] = el; }} 
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
          className="scroll-animate delay-5 mt-16 text-center" 
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
