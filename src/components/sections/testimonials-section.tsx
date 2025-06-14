
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, QuoteIcon } from 'lucide-react';
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
    name: 'Vilasa Vigraha Dasa',
    title: 'Vice President, Iskcon AP',
    quote: 'Gopal\'s designs are simply outstanding. He has a unique ability to capture the essence of a brand and translate it into compelling visuals. Our engagement metrics soared after his redesign!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'VVD',
    dataAiHint: 'spiritual leader portrait'
  },
  {
    name: 'Vamsidhara Dasa',
    title: 'President, AkshayaPatra',
    quote: 'The menu Gopal designed is a work of art. It perfectly complements our restaurant\'s ambiance and has been a talking point for many guests. Truly exceptional craftsmanship.',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
    avatarFallback: 'VD',
    dataAiHint: 'organization headshot'
  },
  {
    name: 'Alice Brown',
    title: 'Founder, Bloom Events Co.',
    quote: 'Working with Gopal was a seamless experience. He delivered breathtaking event banners under a tight deadline, showcasing both professionalism and incredible creativity. Highly recommend!',
    avatarUrl: 'https://placehold.co/100x100.png',
    stars: 5,
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
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-900 text-white"> {/* Dark theme */}
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"> {/* Light text for dark theme */}
            What They Say
          </h2>
          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"> {/* Lighter text for dark theme */}
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
            className="w-full max-w-6xl mx-auto" 
          >
            <CarouselContent className="-ml-5">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-5 md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-zinc-800 border border-zinc-700 hover:border-purple-500/60 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden group p-8 md:p-10"> {/* Darker card for dark theme */}
                      <CardHeader className="pb-6 px-0 pt-0">
                        <div className="flex items-center mb-5">
                          <Avatar className="h-20 w-20 mr-6 border-2 border-purple-500 rounded-full shadow-sm"> {/* Accent border */}
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback className="bg-zinc-700 text-gray-300 text-2xl font-medium">{testimonial.avatarFallback}</AvatarFallback> {/* Darker fallback for dark theme */}
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-2xl md:text-3xl text-white group-hover:text-purple-400 transition-colors">{testimonial.name}</CardTitle> {/* Light text, accent on hover */}
                            <p className="text-base text-gray-400 font-body">{testimonial.title}</p> {/* Lighter muted text */}
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600'}`} /* Adjusted dull star color */
                            />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow px-0 pb-0 relative">
                        <QuoteIcon className="absolute top-0 left-0 h-16 w-16 text-purple-500/20 transform -translate-x-4 -translate-y-3" /> {/* Accent quote icon */}
                        <p className="font-body text-lg md:text-xl text-gray-300 italic leading-relaxed pl-10 relative z-10"> {/* Lighter italic text */}
                          {testimonial.quote}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block mt-10"> 
              <CarouselPrevious className="absolute left-[-25px] md:left-[-70px] top-1/2 -translate-y-1/2 text-gray-300 hover:text-purple-400 bg-zinc-700/80 hover:bg-purple-500/20 border-zinc-600 hover:border-purple-500 disabled:text-gray-500 w-12 h-12 md:w-14 md:h-14" /> {/* Dark theme arrows */}
              <CarouselNext className="absolute right-[-25px] md:right-[-70px] top-1/2 -translate-y-1/2 text-gray-300 hover:text-purple-400 bg-zinc-700/80 hover:bg-purple-500/20 border-zinc-600 hover:border-purple-500 disabled:text-gray-500 w-12 h-12 md:w-14 md:h-14" /> {/* Dark theme arrows */}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
