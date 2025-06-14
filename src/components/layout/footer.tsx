
import Link from 'next/link';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const footerNavItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#design-process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:gopal.mohan.design@example.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-muted-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-12">
          <div className="flex justify-center md:justify-start">
            <Link href="#home" className="font-headline text-3xl font-bold text-foreground hover:text-primary transition-colors" data-cursor-type="pointer">
              GM
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8">
            {footerNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium transition-colors hover:text-primary"
                data-cursor-type="pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end space-x-5">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" data-cursor-type="pointer" className="text-muted-foreground hover:text-primary transition-colors">
                <social.Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center border-t border-border pt-8">
          <p className="text-sm">
            &copy; {currentYear} Gopal Mohan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Freelance Photoshop Designer & Creative Expert
          </p>
        </div>
      </div>
    </footer>
  );
}
