"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form data handling
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // In a real app, you would send this data to a backend or email service
    console.log({ name, email, message });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="form-group">
              <Input type="text" id="name" name="name" placeholder=" " className="form-input peer" required />
              <Label htmlFor="name" className="form-label">Full Name</Label>
            </div>
            <div className="form-group">
              <Input type="email" id="email" name="email" placeholder=" " className="form-input peer" required />
              <Label htmlFor="email" className="form-label">Email Address</Label>
            </div>
            <div className="form-group">
              <Textarea id="message" name="message" placeholder=" " className="form-input peer min-h-[120px]" required />
              <Label htmlFor="message" className="form-label">Your Message</Label>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Contact Details</h3>
              <p className="font-body text-foreground/80 mb-2">
                Email: <a href="mailto:gopal.mohan.design@example.com" className="hover:text-primary underline">gopal.mohan.design@example.com</a>
              </p>
              <p className="font-body text-foreground/80">
                Location: Freelance (Remote)
              </p>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Connect With Me</h3>
              <div className="flex space-x-4">
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="mailto:gopal.mohan.design@example.com" aria-label="Email">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Optional Google Maps Preview */}
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">My Location (Conceptual)</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="Map placeholder" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                  data-ai-hint="world map" 
                />
              </div>
               <p className="text-sm text-muted-foreground mt-2">As a freelance designer, I primarily work remotely, collaborating with clients globally.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
