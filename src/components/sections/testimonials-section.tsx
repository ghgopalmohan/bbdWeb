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
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from some of my satisfied clients about their experience working with me.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-background">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="font-headline text-xl">{testimonial.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                       <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <Quote className="h-8 w-8 text-primary/30 mb-2" />
                      <p className="font-body text-foreground/80 italic leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
