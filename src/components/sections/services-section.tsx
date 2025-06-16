
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Palette, Smartphone, Film } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const serviceTabsData = [
  {
    value: 'Brochure',
    title: 'Brochure Design',
    icon: Palette,
    description: 'Crafting compelling and informative brochures that effectively communicate your brand message and drive engagement.',
    content: 'From concept to print-ready files, I specialize in brochure designs that blend aesthetic appeal with clear information hierarchy. My process involves understanding your objectives, designing a user-centric layout, and ensuring the final product is impactful and professional.',
    imageUrl: '/images/brochure-1.jpg',
    imageAlt: 'Professionally designed brochure layout example',
    dataAiHint: 'brochure design layout',
  },
  {
    value: 'pamphlet',
    title: 'Pamphlet Design',
    icon: Film,
    description: 'Designing concise and visually striking pamphlets for promotions, events, or informational purposes.',
    content: 'My pamphlet designs focus on delivering key information in a compact and engaging format. I prioritize clear messaging and eye-catching visuals to ensure your pamphlets grab attention and achieve their purpose.',
    imageUrl: '/images/superdesign.jpeg',
    imageAlt: 'Pamphlet design mockup for event promotion',
    dataAiHint: 'pamphlet design event',
  },
  {
    value: 'Logo',
    title: 'Logo Design',
    icon: Palette,
    description: 'Creating unique and memorable logos that form the cornerstone of your brand identity.',
    content: 'I develop logos that are not only visually appealing but also strategically aligned with your brand values and target audience. My process includes research, conceptualization, and refinement to deliver a timeless and impactful logo.',
    imageUrl: '/images/logo-1.jpg',
    imageAlt: 'Modern and impactful logo design example',
    dataAiHint: 'logo design modern',
  },
  {
    value: 'Letterhead',
    title: 'LetterHead Design',
    icon: Palette,
    description: 'Professional letterhead designs that reinforce your brand identity in all official correspondence.',
    content: 'I design elegant and professional letterheads that maintain brand consistency and create a sophisticated impression. Attention to detail ensures your stationery is both functional and representative of your brand.',
    imageUrl: '/images/capital letter head copy 2.jpg',
    imageAlt: 'Corporate letterhead design sample',
    dataAiHint: 'letterhead corporate stationery',
  },
  {
    value: 'Menus',
    title: 'Menu Design',
    icon: Palette,
    description: 'Visually appealing and easy-to-navigate menu designs for restaurants, cafes, and food businesses.',
    content: 'My menu designs balance aesthetics with functionality, enticing customers while making choices easy. I focus on layout, typography, and imagery to create menus that enhance the dining experience.',
    imageUrl: '/images/originalmenu.png',
    imageAlt: 'Restaurant menu design layout',
    dataAiHint: 'menu design restaurant',
  },
  {
    value: 'Flyer',
    title: 'Flyer Design',
    icon: Palette,
    description: 'Eye-catching flyer designs for promotions, events, and marketing campaigns that demand attention.',
    content: 'I create dynamic flyers that effectively convey your message and drive action. Whether for print or digital distribution, my designs are crafted to be visually engaging and results-oriented.',
    imageUrl: '/images/111 pharmacy flyer front-new copy 2.jpg',
    imageAlt: 'Promotional flyer design sample',
    dataAiHint: 'flyer design promotion',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(serviceTabsData[0].value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="pt-20 md:pt-28 pb-16 md:pb-24 lg:pb-28 bg-background text-foreground">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
          <div
            className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">WHAT I OFFER</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-primary">
              My Service
            </h2>
             <p className="text-md text-muted-foreground mt-3 max-w-xl">
              Offering tailored design solutions to elevate your brand's visual identity and user engagement.
            </p>
          </div>
          <div
            className={cn("md:col-span-5 md:text-right self-start md:pt-8", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <Button asChild variant="default" size="sm" className="md:size-lg rounded-lg group">
              <Link href="#contact">
                <span className="flex items-center">
                  Get Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue={serviceTabsData[0].value} onValueChange={setActiveTab} className="w-full">
          <TabsList className={cn(
            "flex flex-wrap gap-2 mb-10 justify-center",
            "bg-transparent shadow-none p-0 h-auto",
            isVisible ? "fade-in-up is-visible" : "fade-in-up"
          )}
          style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            {serviceTabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "font-medium text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2",
                  activeTab === tab.value ? "data-[state=active]:text-primary-foreground" : "text-muted-foreground"
                )}
              >
                <tab.icon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", activeTab === tab.value ? "text-primary-foreground" : "text-muted-foreground")} />
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceTabsData.map((tab, index) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className={cn(
                "transition-opacity duration-500 ease-in-out",
                activeTab === tab.value ? "opacity-100" : "opacity-0",
                isVisible ? "fade-in-up is-visible" : "fade-in-up"
              )}
              style={{ transitionDelay: `${isVisible ? 400 + index * 50 : 0}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-card shadow-xl p-6 md:p-10 rounded-xl border">
                <div className="order-2 md:order-1">
                  <h3 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-3">{tab.title}</h3>
                  <p className="text-md text-muted-foreground mb-4">{tab.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tab.content}</p>
                </div>
                <div className="order-1 md:order-2 aspect-[4/3] md:aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={tab.imageUrl}
                    alt={tab.imageAlt}
                    width={800}
                    height={600}
                    className={cn(
                        "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                        (tab.value === 'pamphlet' || tab.value === 'Flyer') ? 'object-left-top' : 'object-top'
                    )}
                    data-ai-hint={tab.dataAiHint}
                    quality={75}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
