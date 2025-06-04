"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
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
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-out",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="font-headline text-3xl font-bold text-primary" data-cursor-type="pointer">
          GM
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              data-cursor-type="pointer"
            >
              {item.label}
            </Link>
          ))}
        </Nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" data-cursor-type="pointer">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-xs bg-background p-6 flex flex-col"
              
            >
              <div className="mb-8 flex justify-between items-center">
                 <Link href="#home" className="font-headline text-2xl font-bold text-primary" onClick={closeMobileMenu} data-cursor-type="pointer">
                    GM
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu} aria-label="Close menu" data-cursor-type="pointer">
                    <X className="h-6 w-6 text-foreground" />
                  </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-headline text-2xl text-foreground/90 transition-colors hover:text-primary text-center"
                    onClick={closeMobileMenu}
                    data-cursor-type="pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto text-center">
                <p className="text-xs text-muted-foreground">Gopal Mohan © {new Date().getFullYear()}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
