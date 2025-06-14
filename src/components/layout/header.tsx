
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); 
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="#home" className="font-headline text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
          GM
        </Link>
        
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button asChild variant="default" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <ThemeToggle />
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:text-primary">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-xs bg-background p-6 flex flex-col text-foreground border-l"
              >
                <div className="mb-8 flex justify-between items-center">
                   <Link href="#home" className="font-headline text-2xl font-bold text-primary" onClick={closeMobileMenu}>
                      GM
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu} aria-label="Close menu" className="text-foreground hover:text-primary">
                      <X className="h-7 w-7" />
                    </Button>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-body text-xl text-foreground/80 transition-colors hover:text-primary text-center py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-6 w-full">
                      <Link href="#contact" onClick={closeMobileMenu}>Contact Me</Link>
                  </Button>
                </nav>
                <div className="mt-auto text-center">
                  <p className="text-xs text-muted-foreground">Gopal Mohan © {new Date().getFullYear()}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
