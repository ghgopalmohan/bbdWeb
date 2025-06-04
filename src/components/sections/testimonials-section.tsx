
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from '@/hooks/use-scroll-animation'; // For scroll animations

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatarUrl?: string;
  stars: number;
  avatarFallback: string;
  dataAiHint?: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Jane Doe',
    title: 'Marketing Manager, Tech Solutions Inc.',
    quote: 'Gopal\'s designs are exceptional. He transformed our marketing materials and significantly boosted engagement. Highly recommended!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'JD',
    dataAiHint: 'woman professional'
  },
  {
    name: 'John Smith',
    title: 'Owner, Gourmet Restaurant',
    quote: 'The new menu design is fantastic! Gopal captured the essence of our restaurant perfectly. Our customers love it.',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'JS',
    dataAiHint: 'man chef'
  },
  {
    name: 'Alice Brown',
    title: 'Event Organizer',
    quote: 'Working with Gopal was a breeze. He delivered stunning banners for our event under a tight deadline. Professional and creative!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 4,
    avatarFallback: 'AB',
    dataAiHint: 'woman smiling'
  },
  {
    name: 'Michael Lee',
    title: 'Startup Founder',
    quote: 'The branding package Gopal created gave our new venture a polished and credible look right from the start. Invaluable!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'ML',
    dataAiHint: 'man tech'
  }
];

export default function TestimonialsSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-16 md:mb-20"
        >
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Trusted Words
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Hear from clients who have experienced the impact of dedicated design work firsthand.
          </p>
        </div>

        <div 
          ref={addScrollAnimElement}
          className="scroll-animate delay-1"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2"> {/* Adjusted basis for responsiveness */}
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-card border border-border hover:border-primary transition-colors duration-300 shadow-xl rounded-xl">
                      <CardHeader className="pb-4 px-6 pt-6">
                        <div className="flex items-start mb-4">
                          <Avatar className="h-14 w-14 mr-5 border-2 border-primary rounded-full">
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback className="bg-muted text-foreground text-lg">{testimonial.avatarFallback}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-2xl text-foreground">{testimonial.name}</CardTitle>
                            <p className="text-sm text-foreground/60 font-body">{testimonial.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.stars ? 'text-foreground fill-foreground' : 'text-muted-foreground/50'}`}
                            />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow px-6 pb-6">
                        <Quote className="h-10 w-10 text-foreground/20 mb-3 transform -scale-x-100" />
                        <p className="font-body text-base md:text-lg text-foreground/80 italic leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-foreground hover:text-primary disabled:text-muted-foreground" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-foreground hover:text-primary disabled:text-muted-foreground" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

