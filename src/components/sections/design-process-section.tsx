
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">My Design Process</h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A transparent and collaborative approach to transform your ideas into stunning visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              ref={addScrollAnimElement} 
              className={`scroll-animate delay-${index + 1} ${(index === processSteps.length -1 && processSteps.length % 2 !== 0 && processSteps.length > 2) ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''} ${ (index === processSteps.length -1 && processSteps.length % 2 === 0 && processSteps.length % 3 !==0 ) ? 'lg:col-start-2' : '' }`}
            >
              <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="items-center text-center pt-8 pb-4">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow pb-8">
                  <p className="font-body text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
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
