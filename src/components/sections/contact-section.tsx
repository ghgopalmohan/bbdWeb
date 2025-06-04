"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram, Mail, Send, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function ContactSection() {
  const { toast } = useToast();
  const addScrollAnimElement = useScrollAnimation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log({ name, email, message }); // Placeholder for submission logic

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll be in touch with you shortly.",
      variant: "default", // Or use a custom success variant if defined
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={addScrollAnimElement} className="scroll-animate text-center mb-16 md:mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Let&apos;s Create Together</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to discuss design? I&apos;m here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div ref={addScrollAnimElement} className="scroll-animate delay-1 bg-card p-8 md:p-10 rounded-xl shadow-xl border border-border">
            <h3 className="font-headline text-3xl font-semibold mb-8 text-primary">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <Input type="text" id="name" name="name" placeholder=" " className="form-input peer" required />
                <Label htmlFor="name" className="form-label">Full Name</Label>
              </div>
              <div className="form-group">
                <Input type="email" id="email" name="email" placeholder=" " className="form-input peer" required />
                <Label htmlFor="email" className="form-label">Email Address</Label>
              </div>
              <div className="form-group">
                <Textarea id="message" name="message" placeholder=" " className="form-input peer min-h-[120px] md:min-h-[150px]" required />
                <Label htmlFor="message" className="form-label">Your Message</Label>
              </div>
              <Button type="submit" size="lg" className="w-full text-base bg-primary hover:bg-primary/90 text-primary-foreground py-3 shadow-md hover:shadow-lg transition-shadow">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div ref={addScrollAnimElement} className="scroll-animate delay-2 space-y-10 md:space-y-12 mt-8 md:mt-0">
            <div>
              <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Email</h4>
                    <a href="mailto:gopal.mohan.design@example.com" className="text-muted-foreground hover:text-primary transition-colors" data-cursor-type="pointer">gopal.mohan.design@example.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Phone (Optional)</h4>
                    <span className="text-muted-foreground">(Available upon request)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Location</h4>
                    <p className="text-muted-foreground">Freelance Designer – Collaborating Globally (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-6 text-primary">Connect Online</h3>
              <div className="flex space-x-4">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor-type="pointer">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground border-border hover:border-accent transition-all duration-300 w-12 h-12 rounded-lg">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor-type="pointer">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground border-border hover:border-accent transition-all duration-300 w-12 h-12 rounded-lg">
                    <Instagram className="h-6 w-6" />
                  </Button>
                </Link>
                <a href="mailto:gopal.mohan.design@example.com" aria-label="Email" data-cursor-type="pointer">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground border-border hover:border-accent transition-all duration-300 w-12 h-12 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
             <div className="mt-10 md:mt-12">
              <h3 className="font-headline text-2xl md:text-3xl font-semibold mb-6 text-primary">Office Hours (Typical)</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Flexible for international client collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
