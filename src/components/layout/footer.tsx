
import Link from 'next/link';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const footerNavItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
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
    <footer className="bg-background text-muted-foreground py-12 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 text-center md:text-left">
          <div>
            <Link href="#home" className="font-headline text-3xl font-bold text-primary hover:opacity-80 transition-opacity inline-block">
              GM
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
            {footerNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.label} 
                href={social.href} 
                aria-label={social.label} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/10"
              >
                <social.Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center border-t pt-8">
          <p className="text-sm">
            &copy; {currentYear} Gopal Mohan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Freelance Designer & Creative Expert
          </p>
        </div>
      </div>
    </footer>
  );
}
