
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram, Mail, Send, MapPin, Phone, Briefcase } from 'lucide-react';
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
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log({ name, email, message }); 

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { Icon: Mail, title: "Email", value: "gopal.mohan.design@example.com", href: "mailto:gopal.mohan.design@example.com" },
    { Icon: Phone, title: "Phone", value: "+91 8309492753", href: "tel:+918309492753" },
    { Icon: MapPin, title: "Location", value: "Remote / Global", href: "#" },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn', name: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram', name: 'Instagram' },
  ];


  return (
    <section id="contact" className="section-padding bg-background text-foreground">
      <div className="container-custom">
        <div className={cn("text-center mb-12 md:mb-16 transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-3">Contact Me</h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind, a question, or just want to discuss design? I&apos;m here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-16 items-start">
          <div 
            className={cn(
              "lg:col-span-3 bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="font-headline text-2xl sm:text-3xl font-semibold mb-6 text-foreground">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="form-label">Full Name</Label>
                  <Input type="text" id="name" name="name" placeholder="Your Name" className="form-input" required />
                </div>
                <div>
                  <Label htmlFor="email" className="form-label">Email Address</Label>
                  <Input type="email" id="email" name="email" placeholder="your@email.com" className="form-input" required />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="form-label">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your project or query..." className="form-input min-h-[120px]" required />
              </div>
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base sm:text-lg py-3.5 px-10 shadow-md hover:shadow-primary/30 w-full sm:w-auto">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div 
            className={cn(
              "lg:col-span-2 space-y-8 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{transitionDelay: '200ms'}}
          >
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map(info => (
                  <div key={info.title} className="flex items-start">
                    <info.Icon className="h-5 w-5 text-primary mr-3 mt-1 shrink-0"/>
                    <div>
                      <h4 className="font-semibold text-md text-foreground">{info.title}</h4>
                      <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Connect Online</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Button key={social.name} asChild variant="outline" className="rounded-full text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.Icon className="mr-2 h-4 w-4" /> {social.name}
                    </Link>
                  </Button>
                ))}
                 <Button asChild variant="outline" className="rounded-full text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50">
                    <a href="mailto:gopal.mohan.design@example.com" aria-label="Email">
                     <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                  </Button>
              </div>
            </div>
             <div className="mt-6">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Working Hours</h3>
                <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mr-3 mt-1 shrink-0"/>
                    <div>
                        <h4 className="font-semibold text-md text-foreground">Monday - Friday</h4>
                        <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM (IST)</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">Flexible for international collaborations.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
