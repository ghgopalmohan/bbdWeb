
import Link from 'next/link';

const footerNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <Link href="#home" className="font-headline text-5xl font-bold text-primary" data-cursor-type="pointer">
              GM
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-base">
              &copy; {currentYear} Gopal Mohan. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Design & Portfolio
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-5 md:gap-8">
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
        </div>
      </div>
    </footer>
  );
}
