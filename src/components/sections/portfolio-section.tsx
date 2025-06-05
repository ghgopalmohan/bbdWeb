
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react'; 
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const portfolioItemsData = [
  { id: 1, title: 'Elegant Business Cards', category: 'cards', imageUrl: 'https://placehold.co/600x450.png', description: 'Modern and professional business card designs that make a statement with premium finishes.', dataAiHint: 'business card design' },
  { id: 2, title: 'Restaurant Menu Design', category: 'menus', imageUrl: 'https://placehold.co/600x450.png', description: 'Visually appealing menu layouts that enhance the dining experience and reflect brand identity.', dataAiHint: 'restaurant menu layout' },
  { id: 3, title: 'Sattvik Meal Box Ad', category: 'advertisement', imageUrl: 'https://placehold.co/600x450.png', description: 'Promotional design for Hare Krishna Sattvik Meal Box, highlighting delicious, nutritious, and soul-enriching meals.', dataAiHint: 'meal box advertisement' },
  { id: 5, title: 'Corporate Brochure', category: 'brochures', imageUrl: 'https://placehold.co/600x450.png', description: 'Informative and stylish corporate brochures for impactful brand representation and storytelling.', dataAiHint: 'corporate brochure' },
  { id: 7, title: 'Luxury Visiting Cards', category: 'cards', imageUrl: 'https://placehold.co/600x450.png', description: 'Premium visiting card designs with unique finishes, materials, and sophisticated typography.', dataAiHint: 'luxury visiting card' },
  { id: 8, title: 'Cafe Menu Layout', category: 'menus', imageUrl: 'https://placehold.co/600x450.png', description: 'Creative menu designs tailored specifically for cafes and bistros, balancing aesthetics and readability.', dataAiHint: 'cafe menu board' },
];

export default function PortfolioSection() {
  const addScrollAnimElement = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement}
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">My Best Works</h2>
          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            A curated selection of projects demonstrating creative solutions and design expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {portfolioItemsData.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  ref={addScrollAnimElement} 
                  className={`scroll-animate delay-${(index % 3) + 1}`} 
                >
                  <Card className="overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-zinc-700 hover:border-purple-400/70 bg-zinc-800 rounded-xl">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                          data-ai-hint={item.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <ZoomIn className="h-14 w-14 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-6 bg-zinc-800">
                        <h3 className="font-headline text-2xl lg:text-3xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
                        <p className="text-base text-gray-400 capitalize font-body">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl md:max-w-4xl bg-zinc-800 p-0 rounded-xl border-purple-400/30 shadow-2xl text-white">
                <DialogHeader className="p-8 pb-6 border-b border-zinc-700">
                  <DialogTitle className="font-headline text-4xl text-purple-400">{item.title}</DialogTitle>
                  <DialogDescription className="font-body text-gray-300 pt-2 text-lg">{item.description}</DialogDescription>
                </DialogHeader>
                <div className="p-1 max-h-[70vh] overflow-y-auto">
                  <Image
                    src={item.imageUrl} 
                    alt={item.title}
                    width={800}
                    height={600} 
                    className="w-full h-auto rounded-b-lg object-contain"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
                 <div className="p-8 pt-6 flex justify-end border-t border-zinc-700">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-zinc-600 hover:bg-zinc-700 hover:text-white" data-cursor-type="pointer" size="lg">
                          Close Preview
                      </Button>
                    </DialogTrigger>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
