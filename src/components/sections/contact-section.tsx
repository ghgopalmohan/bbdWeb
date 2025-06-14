
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram, Mail, Send, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function ContactSection() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form data retrieval
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Replace with actual form submission logic (e.g., API call)
    console.log({ name, email, message }); 

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default", // Shadcn toast variant
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("text-center mb-16 md:mb-20 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Let's Create Together</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind, a question, or just want to discuss design? I&apos;m here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div 
            className={cn(
              "bg-card p-8 md:p-10 rounded-xl shadow-xl border border-border transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="font-headline text-3xl font-semibold mb-8 text-foreground">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="form-label">Full Name</Label>
                <Input type="text" id="name" name="name" placeholder="Your Name" className="form-input" required />
              </div>
              <div>
                <Label htmlFor="email" className="form-label">Email Address</Label>
                <Input type="email" id="email" name="email" placeholder="your@email.com" className="form-input" required />
              </div>
              <div>
                <Label htmlFor="message" className="form-label">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." className="form-input min-h-[150px]" required />
              </div>
              <Button type="submit" size="lg" className="btn btn-primary w-full text-lg py-3.5 rounded-xl shadow-md hover:shadow-primary/30">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div 
            className={cn(
              "space-y-10 md:space-y-12 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{transitionDelay: '200ms'}}
          >
            <div>
              <h3 className="font-headline text-3xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Email</h4>
                    <a href="mailto:gopal.mohan.design@example.com" className="text-muted-foreground hover:text-primary transition-colors" data-cursor-type="pointer">gopal.mohan.design@example.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Phone</h4>
                    <a href="tel:+918309492753" className="text-muted-foreground hover:text-primary transition-colors" data-cursor-type="pointer">+91 8309492753</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Location</h4>
                    <p className="text-muted-foreground">Freelance Designer – Collaborating Globally (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-3xl font-semibold mb-6 text-foreground">Connect Online</h3>
              <div className="flex space-x-4">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor-type="pointer">
                  <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary border-border rounded-lg w-12 h-12">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor-type="pointer">
                  <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary border-border rounded-lg w-12 h-12">
                    <Instagram className="h-6 w-6" />
                  </Button>
                </Link>
                <a href="mailto:gopal.mohan.design@example.com" aria-label="Email" data-cursor-type="pointer">
                   <Button variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary border-border rounded-lg w-12 h-12">
                    <Mail className="h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
             <div className="mt-10">
              <h3 className="font-headline text-3xl font-semibold mb-6 text-foreground">Office Hours</h3>
                <p className="text-muted-foreground text-lg">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Flexible for international client collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
