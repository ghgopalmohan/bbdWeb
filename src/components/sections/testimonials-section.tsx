
"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatarSrc?: string;
  avatarFallback: string;
  rating: number;
  dataAiHint?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Vilasa Vigraha Dasa",
    title: "Vice President, Hare Krishna Gokula Kshetram",
    quote: "Gopal's design work is exceptional. He has a keen eye for detail and consistently delivers high-quality visuals that elevate our materials. A true professional.",
    avatarFallback: "VD",
    rating: 5,
    avatarSrc: "https://placehold.co/100x100.png",
    dataAiHint: "person spiritual leader"
  },
  {
    id: 2,
    name: "Vamsidhara Dasa",
    title: "President, AkshayaPatra",
    quote: "Working with Gopal has been a pleasure. His creativity and dedication to our projects have been invaluable. Highly recommended for any design needs.",
    avatarFallback: "VD",
    rating: 5,
    avatarSrc: "https://placehold.co/100x100.png",
    dataAiHint: "person executive"
  },
  {
    id: 3,
    name: "G.H Vijay Raghava",
    title: "Acharya, Babaji Kriya Yoga",
    quote: "The designs provided were thoughtful and perfectly captured the essence of our message. Gopal is a talented and reliable designer.",
    avatarFallback: "VR",
    rating: 5,
    avatarSrc: "https://placehold.co/100x100.png",
    dataAiHint: "person yoga teacher"
  },
  {
    id: 4,
    name: "Aditya V.",
    title: "Startup Founder",
    quote: "Needed a complete branding package and Gopal delivered beyond expectations. From logo to marketing materials, everything was top-notch!",
    avatarFallback: "AV",
    rating: 5,
    avatarSrc: "https://placehold.co/100x100.png",
    dataAiHint: "person entrepreneur"
  }
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Client Testimonials
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients have to say about my work and dedication.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className={cn("w-full max-w-4xl mx-auto transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}
          style={{transitionDelay: '200ms'}}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-card shadow-lg border border-border rounded-lg overflow-hidden hover:shadow-primary/10 transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                        <AvatarFallback className="text-2xl bg-primary/20 text-primary font-semibold">{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-headline text-xl font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{testimonial.title}</p>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400/30" />
                        ))}
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed italic flex-grow">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary/10 border-primary/30 hover:border-primary" />
          <CarouselNext className="absolute right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary/10 border-primary/30 hover:border-primary" />
        </Carousel>
      </div>
    </section>
  );
}
