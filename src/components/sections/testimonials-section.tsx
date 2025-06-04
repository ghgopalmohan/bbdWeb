"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, QuoteIcon } from 'lucide-react'; // Using official QuoteIcon
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from '@/hooks/use-scroll-animation'; 

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
    title: 'Marketing Director, Innovatech',
    quote: 'Gopal\'s designs are simply outstanding. He has a unique ability to capture the essence of a brand and translate it into compelling visuals. Our engagement metrics soared after his redesign!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'JD',
    dataAiHint: 'professional woman portrait'
  },
  {
    name: 'John Smith',
    title: 'Restaurateur, The Artisan Table',
    quote: 'The menu Gopal designed is a work of art. It perfectly complements our restaurant\'s ambiance and has been a talking point for many guests. Truly exceptional craftsmanship.',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'JS',
    dataAiHint: 'man portrait smiling'
  },
  {
    name: 'Alice Brown',
    title: 'Founder, Bloom Events Co.',
    quote: 'Working with Gopal was a seamless experience. He delivered breathtaking event banners under a tight deadline, showcasing both professionalism and incredible creativity. Highly recommend!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5, // Updated to 5 for consistency
    avatarFallback: 'AB',
    dataAiHint: 'event planner happy'
  },
  {
    name: 'Michael Lee',
    title: 'CEO, NextGen Solutions',
    quote: 'Gopal developed a branding package that gave our startup immediate credibility and a polished look. His design intuition is invaluable. We couldn\'t be happier with the results.',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'ML',
    dataAiHint: 'tech ceo confident'
  }
];

export default function TestimonialsSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-16 md:mb-20"
        >
          <h2 className="font-headline text-4xl sm:text-5xl md:text-5xl font-bold mb-4 text-primary">
            Client Acclaim
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why clients trust my design expertise to elevate their brands and projects.
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
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2"> {/* Ensure two items are visible on md and up */}
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden group p-6 md:p-8">
                      <CardHeader className="pb-4 px-0 pt-0">
                        <div className="flex items-center mb-4">
                          <Avatar className="h-16 w-16 mr-5 border-2 border-primary rounded-full shadow-sm">
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback className="bg-muted text-foreground text-xl font-medium">{testimonial.avatarFallback}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground font-body">{testimonial.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/40'}`}
                            />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow px-0 pb-0 relative">
                        <QuoteIcon className="absolute top-0 left-0 h-12 w-12 text-primary/20 transform -translate-x-3 -translate-y-2" />
                        <p className="font-body text-base md:text-lg text-foreground/85 italic leading-relaxed pl-8 relative z-10">
                          {testimonial.quote}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block mt-8">
              <CarouselPrevious className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 text-foreground hover:text-primary bg-card/80 hover:bg-primary/10 border-border hover:border-primary disabled:text-muted-foreground w-10 h-10 md:w-12 md:h-12" />
              <CarouselNext className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 text-foreground hover:text-primary bg-card/80 hover:bg-primary/10 border-border hover:border-primary disabled:text-muted-foreground w-10 h-10 md:w-12 md:h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
