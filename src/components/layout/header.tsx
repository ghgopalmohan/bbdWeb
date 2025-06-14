
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#design-process' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border" : "bg-transparent py-2"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="font-headline text-3xl font-bold text-foreground hover:text-primary transition-colors" data-cursor-type="pointer">
          GM
        </Link>
        
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-base font-medium text-muted-foreground transition-colors hover:text-primary"
              data-cursor-type="pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
            <Link href="#contact" data-cursor-type="pointer">Let's Talk</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" data-cursor-type="pointer" className="text-foreground hover:text-primary">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-xs bg-background p-6 flex flex-col text-foreground border-l border-border"
            >
              <div className="mb-8 flex justify-between items-center">
                 <Link href="#home" className="font-headline text-2xl font-bold text-foreground" onClick={closeMobileMenu} data-cursor-type="pointer">
                    GM
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu} aria-label="Close menu" data-cursor-type="pointer" className="text-foreground hover:text-primary">
                    <X className="h-7 w-7" />
                  </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-body text-xl text-muted-foreground transition-colors hover:text-primary text-center py-2"
                    onClick={closeMobileMenu}
                    data-cursor-type="pointer"
                  >
                    {item.label}
                  </Link>
                ))}
                 <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg mt-6 w-full">
                    <Link href="#contact" onClick={closeMobileMenu} data-cursor-type="pointer">Let's Talk</Link>
                </Button>
              </nav>
              <div className="mt-auto text-center">
                <p className="text-xs text-muted-foreground/70">Gopal Mohan © {new Date().getFullYear()}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
