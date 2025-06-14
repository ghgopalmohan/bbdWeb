
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle'; // Re-added for PRD

const navItems = [
  { label: 'Home', href: '#home' },
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
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md dark:bg-slate-900/90" : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="#home" className="font-headline text-3xl font-bold text-primary dark:text-primary-dark hover:opacity-80 transition-opacity">
          GM
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-base font-medium text-foreground/80 transition-colors hover:text-primary dark:text-foreground-dark/80 dark:hover:text-primary-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground rounded-full px-6 py-3">
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>
          <ThemeToggle />
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background dark:bg-slate-900 p-6 flex flex-col text-foreground dark:text-foreground-dark border-l dark:border-slate-700"
              >
                <div className="mb-8 flex justify-between items-center">
                   <Link href="#home" className="font-headline text-2xl font-bold text-primary dark:text-primary-dark" onClick={closeMobileMenu}>
                      GM
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu} aria-label="Close menu" className="text-foreground dark:text-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                      <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col space-y-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-body text-lg text-foreground/80 dark:text-foreground-dark/80 transition-colors hover:text-primary dark:hover:text-primary-dark text-left py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground rounded-full mt-6 w-full py-3">
                      <Link href="#contact" onClick={closeMobileMenu}>Get Quote</Link>
                  </Button>
                </nav>
                <div className="mt-auto pt-6 border-t dark:border-slate-700">
                    <ThemeToggle />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-muted-foreground dark:text-slate-500">GM © {new Date().getFullYear()}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
