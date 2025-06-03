"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';

const portfolioItemsData = [
  { id: 1, title: 'Elegant Business Cards', category: 'cards', imageUrl: 'https://placehold.co/600x400.png', description: 'Modern and professional business card designs.', dataAiHint: 'business card' },
  { id: 2, title: 'Restaurant Menu Design', category: 'menus', imageUrl: 'https://placehold.co/600x400.png', description: 'Visually appealing menu layouts for restaurants.', dataAiHint: 'restaurant menu' },
  { id: 3, title: 'Promotional Pamphlet', category: 'pamphlets', imageUrl: 'https://placehold.co/600x400.png', description: 'Eye-catching pamphlets for marketing campaigns.', dataAiHint: 'pamphlet design' },
  { id: 4, title: 'Social Media Banners', category: 'banners', imageUrl: 'https://placehold.co/600x400.png', description: 'Engaging banners for social media platforms.', dataAiHint: 'social media' },
  { id: 5, title: 'Corporate Brochure', category: 'brochures', imageUrl: 'https://placehold.co/600x400.png', description: 'Informative and stylish corporate brochures.', dataAiHint: 'brochure design' },
  { id: 6, title: 'Event Banner Design', category: 'banners', imageUrl: 'https://placehold.co/600x400.png', description: 'Large format banners for events and exhibitions.', dataAiHint: 'event banner' },
  { id: 7, title: 'Luxury Visiting Cards', category: 'cards', imageUrl: 'https://placehold.co/600x400.png', description: 'Premium visiting card designs with unique finishes.', dataAiHint: 'luxury card' },
  { id: 8, title: 'Cafe Menu Layout', category: 'menus', imageUrl: 'https://placehold.co/600x400.png', description: 'Creative menu designs tailored for cafes.', dataAiHint: 'cafe menu' },
];

const categories = ['All', 'cards', 'menus', 'pamphlets', 'banners', 'brochures'];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All'
    ? portfolioItemsData
    : portfolioItemsData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">My Work</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and creativity in Photoshop design.
          </p>
        </div>

        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className="capitalize mb-2 sm:mb-0"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <CardContent className="p-0">
                    <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={item.dataAiHint}
                      />
                    </div>
                    <div className="p-4 bg-background">
                      <h3 className="font-headline text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-background p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
                  <DialogDescription className="font-body">{item.description}</DialogDescription>
                </DialogHeader>
                <div className="p-1">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-b-lg object-contain max-h-[70vh]"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
