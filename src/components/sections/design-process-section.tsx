
"use client";

import { Users, Lightbulb, Palette, MessageSquare, CheckCircle, Rocket } from "lucide-react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const processSteps = [
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

export default function DesignProcessSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="design-process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary">My Design Process</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A transparent and collaborative approach to transform your ideas into stunning visuals.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line through the center - made slightly thicker and shorter */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-1 bg-border/70 -translate-x-1/2 rounded-full"></div>

          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={addScrollAnimElement}
              className={`scroll-animate delay-${index + 1} mb-12 md:mb-16 flex flex-col md:flex-row items-start group`}
            >
              {/* Desktop: Alternating sides */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2 md:text-left'}`}>
                <div className={`p-3 bg-primary/10 rounded-full mb-4 inline-block ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                  <step.icon className="h-9 w-9 md:h-10 md:w-10 text-primary" />
                </div>
                <h3 className="font-headline text-3xl md:text-4xl font-semibold mb-3 text-primary">{step.title}</h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Desktop: Timeline Marker - made larger and more prominent ring on hover */}
              <div className="hidden md:flex md:w-12 flex-shrink-0 items-center justify-center order-1 md:relative">
                <div className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-primary border-4 border-secondary ring-4 ring-border group-hover:ring-primary transition-all duration-300 flex items-center justify-center">
                   <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                </div>
              </div>
              
              {/* Mobile: Stacked layout (marker part integrated or simplified) */}
               <div className="md:hidden w-full mt-4 border-t border-border pt-4">
                 {/* Mobile doesn't show alternating, simplified view */}
               </div>
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
