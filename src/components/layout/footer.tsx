
import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Github, Dribbble, Mail } from 'lucide-react';

const footerNavLinks = [
  { label: 'Templates', href: '#' },
  { label: 'Tools', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'About Us', href: '#' },
];

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Dribbble, href: '#', label: 'Dribbble' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/gopal-mohan-g-h-17376624/?originalSubdomain=in', label: 'LinkedIn' },
  { Icon: Github, href: '#', label: 'Github' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-dark text-gray-400 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <Link href="#home" className="font-headline text-3xl font-bold text-white hover:opacity-80 transition-opacity inline-block mb-3">
              GM
            </Link>
            <p className="text-sm max-w-xs leading-relaxed">
              Sales Product design ares creative Media for Creatina Product Experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <social.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Address</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Moonshine St. 14/05 Light City,</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">London, United Kingdom</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Email Address</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="mailto:gopalmohan.design@gmail.com" className="hover:text-white transition-colors">gopalmohan.design@gmail.com</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
             <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Phone Number</h4>
             <ul className="space-y-2 text-sm">
                <li><Link href="tel:00088888888" className="hover:text-white transition-colors">(000) 888 - 88888</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 sm:mb-0">
            &copy; {currentYear} GM. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
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
