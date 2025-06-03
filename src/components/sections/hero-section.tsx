import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background to-secondary dark:from-background dark:to-muted overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {/* Example abstract shape */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I&apos;m <span className="text-primary">Gopal Mohan</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground/80 mb-10">
              Professional Photoshop Designer
            </p>
            <Link href="#portfolio">
              <Button size="lg" className="group relative overflow-hidden transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-accent">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                See My Work
              </Button>
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center">
            {/* Optional profile image with subtle effect */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Gopal Mohan"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl border-4 border-background"
                data-ai-hint="profile designer"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary opacity-30 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
