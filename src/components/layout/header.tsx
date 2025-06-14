
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Personal', href: '#personal' }, // Updated
  { label: 'Business', href: '#business' }, // Updated
  { label: 'Former', href: '#former' },     // Updated
  { label: 'About Us', href: '#about' },    // Updated (maps to About section)
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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background" // Always white background, shadow on scroll
      )}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="#home" className="font-headline text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
          GM
        </Link>
        
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild variant="outline" size="default" className="rounded-md bg-muted hover:bg-border text-foreground px-5 py-2.5 text-sm">
              <Link href="#contact">Sign In</Link> 
            </Button>
          </div>
          {/* ThemeToggle removed */}
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-xs bg-background p-6 flex flex-col text-foreground border-l"
              >
                <div className="mb-8 flex justify-between items-center">
                   <Link href="#home" className="font-headline text-xl font-bold text-foreground" onClick={closeMobileMenu}>
                      GM
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeMobileMenu} aria-label="Close menu" className="text-foreground hover:text-primary">
                      <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col space-y-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-body text-lg text-foreground/80 transition-colors hover:text-foreground text-left py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild variant="outline" size="lg" className="bg-muted hover:bg-border text-foreground rounded-md mt-6 w-full py-3">
                      <Link href="#contact" onClick={closeMobileMenu}>Sign In</Link>
                  </Button>
                </nav>
                <div className="mt-auto text-center">
                  <p className="text-xs text-muted-foreground">GM © {new Date().getFullYear()}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
