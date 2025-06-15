
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Palette, Smartphone, Film } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const serviceTabsData = [
  {
    value: 'Brochure',
    title: 'Brochure Design',
    icon: Palette,
    description: 'Crafting pixel-perfect, responsive websites with Webflow that engage users and drive results. Expertise in creating custom interactions and animations.',
    content: 'From initial concept to final launch, I specialize in Webflow development that combines aesthetic appeal with seamless functionality. My process involves understanding your brand, designing a user-centric interface, and building a website that is both beautiful and easy to manage.',
    imageUrl: '/images/brochure-1.jpg',
    imageAlt: 'Brochure design process',
    dataAiHint: 'brochure design webflow',
  },
  {
    value: 'pamphlet',
    title: 'Pamphlet Design',
    icon: Smartphone,
    description: 'Designing intuitive and engaging user interfaces that enhance user experience and meet business goals. Focus on usability and accessibility.',
    content: 'My UI/UX design philosophy centers on creating interfaces that are not only visually stunning but also incredibly user-friendly. I conduct thorough research, create wireframes and prototypes, and iterate based on user feedback to deliver optimal digital experiences.',
    imageUrl: '/images/pamphlet-1.jpg',
    imageAlt: 'Pamphlet design mockups',
    dataAiHint: 'pamphlet mobile app',
  },
  {
    value: 'Logo',
    title: 'Logo Design',
    icon: Film,
    description: 'Bringing brands to life with captivating motion graphics and animations for web, social media, and presentations.',
    content: 'I create dynamic motion graphics that tell your story and capture attention. Whether it\'s for explainer videos, logo animations, or social media content, my animations are designed to be impactful and memorable, enhancing your brand\'s digital presence.',
    imageUrl: '/images/logo-1.jpg',
    imageAlt: 'Logo example',
    dataAiHint: 'Logo animation',
  },
  {
    value: 'Letterhead',
    title: 'LetterHead Design',
    icon: Film,
    description: 'Bringing brands to life with captivating motion graphics and animations for web, social media, and presentations.',
    content: 'I create dynamic motion graphics that tell your story and capture attention. Whether it\'s for explainer videos, logo animations, or social media content, my animations are designed to be impactful and memorable, enhancing your brand\'s digital presence.',
    imageUrl: '/images/capital letter head copy 2.jpg',
    imageAlt: 'Letterhead example',
    dataAiHint: 'Letterhead animation',
  },
  {
    value: 'Menus',
    title: 'Menu Design',
    icon: Film,
    description: 'Bringing brands to life with captivating motion graphics and animations for web, social media, and presentations.',
    content: 'I create dynamic motion graphics that tell your story and capture attention. Whether it\'s for explainer videos, logo animations, or social media content, my animations are designed to be impactful and memorable, enhancing your brand\'s digital presence.',
    imageUrl: '/images/menudummy.jpg',
    imageAlt: 'Menu example',
    dataAiHint: 'Menu animation',
  },
  {
    value: 'Flyer',
    title: 'Flyer Design',
    icon: Film,
    description: 'Bringing brands to life with captivating motion graphics and animations for web, social media, and presentations.',
    content: 'I create dynamic motion graphics that tell your story and capture attention. Whether it\'s for explainer videos, logo animations, or social media content, my animations are designed to be impactful and memorable, enhancing your brand\'s digital presence.',
    imageUrl: '/images/111 pharmacy flyer front-new copy 2.jpg',
    imageAlt: 'Flyer example',
    dataAiHint: 'Flyer animation',
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-janice-main-bg text-janice-text-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
          <div
            className={cn("md:col-span-7", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
          >
            <p className="text-xs font-medium text-janice-text-light/70 uppercase tracking-wider mb-2">WHAT I OFFER</p>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold !leading-snug text-janice-text-light">
              My Service
            </h2>
             <p className="text-md text-janice-text-light/80 mt-3 max-w-xl">
              Offering tailored design solutions to elevate your brand's visual identity and user engagement.
            </p>
          </div>
          <div
            className={cn("md:col-span-5 md:text-right self-start md:pt-8", isVisible ? "fade-in-up is-visible" : "fade-in-up")}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <Button asChild variant="janicePrimary" size="lg" className="rounded-lg group">
              <Link href="#contact">
                Get Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue={serviceTabsData[0].value} onValueChange={setActiveTab} className="w-full">
          <TabsList 
            className={cn(
              "grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-janice-dark/30 p-2 rounded-xl mb-10",
              isVisible ? "fade-in-up is-visible" : "fade-in-up"
            )}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            {serviceTabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-medium text-base text-janice-text-light/70 data-[state=active]:bg-janice-accent data-[state=active]:text-janice-dark data-[state=active]:shadow-lg rounded-lg px-4 py-3 transition-all duration-300"
              >
                <tab.icon className="mr-2 h-5 w-5" />
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
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-janice-dark/20 p-6 md:p-10 rounded-xl shadow-xl">
                <div className="order-2 md:order-1">
                  <h3 className="font-headline text-3xl md:text-4xl font-semibold text-janice-accent mb-3">{tab.title}</h3>
                  <p className="text-md text-janice-text-light/80 mb-4">{tab.description}</p>
                  <p className="text-sm text-janice-text-light/60 leading-relaxed">{tab.content}</p>
                </div>
                <div className="order-1 md:order-2 aspect-[4/3] md:aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={tab.imageUrl}
                    alt={tab.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    data-ai-hint={tab.dataAiHint}
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
