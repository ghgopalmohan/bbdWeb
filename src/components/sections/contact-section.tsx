
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
// Removed import for sendContactEmail and SendContactEmailResponse

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  delay: string;
  isVisible: boolean;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, title, value, href, delay, isVisible }) => (
  <div
    className={cn(
      "flex items-start space-x-4 p-4 rounded-lg transition-all duration-500 ease-out hover:bg-primary/5 dark:hover:bg-primary-dark/10",
      isVisible ? "fade-in-up is-visible" : "opacity-0"
    )}
    style={{ animationDelay: isVisible ? delay : '0ms' }}
  >
    <div className="flex-shrink-0">
      <Icon className="w-7 h-7 text-primary dark:text-primary-dark" />
    </div>
    <div>
      <h4 className="font-headline text-lg font-semibold text-foreground dark:text-foreground-dark mb-1">{title}</h4>
      {href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground dark:text-slate-400 hover:text-primary dark:hover:text-primary-dark transition-colors break-all">
          {value}
        </Link>
      ) : (
        <p className="text-sm text-muted-foreground dark:text-slate-400 break-all">{value}</p>
      )}
    </div>
  </div>
);


export default function ContactSection() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    const recipientEmail = "gopalmohan.design@gmail.com";
    const mailtoSubject = encodeURIComponent(data.subject);
    const mailtoBody = encodeURIComponent(
      `Hi I'm ${data.name}.\n\n${data.message}\n\n(My email address is: ${data.email})`
    );
    const mailtoLink = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      window.location.href = mailtoLink;
      toast({
        title: "Opening Email Client",
        description: "Your email client should open with a pre-filled message. Please verify and send.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Failed to open mailto link:", error);
      toast({
        title: "Error",
        description: "Could not open your email client. Please try copying the details manually or use one of the contact methods above.",
        variant: "destructive",
      });
    }
  };

  const contactDetails = [
    { icon: Mail, title: "Email Address", value: "gopalmohan.design@gmail.com", href: "mailto:gopalmohan.design@gmail.com", delay: "300ms"},
    { icon: Phone, title: "Phone Number", value: "+91 98765 43210", href: "tel:+919876543210", delay: "400ms"},
    { icon: MapPin, title: "Location", value: "Bengaluru, India", delay: "500ms"},
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/gopalmohan", label: "LinkedIn", delay: "600ms"},
    { icon: Instagram, href: "https://www.instagram.com/gopalmohandesign", label: "Instagram", delay: "700ms"},
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-background dark:bg-slate-900 text-foreground dark:text-foreground-dark">
      <div className="container-custom">
        <div
          className={cn(
            "text-center mb-12 md:mb-16",
            isVisible ? "fade-in-up is-visible" : "opacity-0"
          )}
          style={{ animationDelay: isVisible ? '100ms' : '0ms' }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark mb-3">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form or reach out through my social channels.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            {contactDetails.map((item) => (
              <ContactInfoItem key={item.title} {...item} isVisible={isVisible} />
            ))}
            <div
                className={cn(
                    "flex space-x-4 pt-4",
                    isVisible ? "fade-in-up is-visible" : "opacity-0"
                )}
                style={{ animationDelay: isVisible ? '600ms' : '0ms' }}
            >
                {socialLinks.map(social => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                        className="p-3 bg-secondary dark:bg-slate-800 rounded-full text-primary dark:text-primary-dark hover:bg-primary/10 dark:hover:bg-primary-dark/20 transition-all duration-300 group">
                        <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                ))}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <Card
                className={cn(
                    "bg-secondary/50 dark:bg-slate-800/70 border-border dark:border-slate-700 shadow-xl rounded-xl",
                    isVisible ? "fade-in-up is-visible" : "opacity-0"
                )}
                style={{ animationDelay: isVisible ? '200ms' : '0ms' }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground dark:text-foreground-dark">Send Me a Message</CardTitle>
                <CardDescription className="text-muted-foreground dark:text-slate-400">I&apos;m excited to hear about your project!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="form-label dark:text-slate-300">Full Name</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="e.g. Gopal Mohan"
                        className={cn("form-input dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder:text-slate-400", errors.name ? 'border-destructive dark:border-red-500' : '')}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1 dark:text-red-400">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="form-label dark:text-slate-300">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="e.g. gopal@example.com"
                        className={cn("form-input dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder:text-slate-400", errors.email ? 'border-destructive dark:border-red-500' : '')}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1 dark:text-red-400">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="form-label dark:text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="e.g. Brochure Design Inquiry"
                      className={cn("form-input dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder:text-slate-400", errors.subject ? 'border-destructive dark:border-red-500' : '')}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && <p className="text-destructive text-xs mt-1 dark:text-red-400">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message" className="form-label dark:text-slate-300">Your Message</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      placeholder="Tell me about your project or query..."
                      className={cn("form-input dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder:text-slate-400", errors.message ? 'border-destructive dark:border-red-500' : '')}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1 dark:text-red-400">{errors.message.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="default" 
                    className="w-full md:size-lg bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90 focus:ring-primary dark:focus:ring-accent transition-all group rounded-md"
                  >
                    {isSubmitting ? 'Preparing...' : "Let's Talk"}
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

