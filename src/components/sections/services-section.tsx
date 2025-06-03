import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, BookOpenText, Megaphone, FileText, Palette, Tv } from 'lucide-react'; // Added Palette, Tv
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: CreditCard,
    title: 'Business Cards',
    description: 'Creative and professional business card designs that leave a lasting impression.',
  },
  {
    icon: BookOpenText,
    title: 'Menus & Catalogs',
    description: 'Beautifully designed menus and catalogs that showcase your offerings in style.',
  },
  {
    icon: Megaphone,
    title: 'Banners & Posters',
    description: 'Eye-catching banners and posters for events, promotions, and advertising campaigns.',
  },
  {
    icon: FileText,
    title: 'Brochures & Flyers',
    description: 'Informative and engaging brochures and flyers for marketing and communication.',
  },
  {
    icon: Palette,
    title: 'Image Retouching',
    description: 'Professional photo editing and retouching services to enhance your images.',
  },
  {
    icon: Tv,
    title: 'Digital Graphics',
    description: 'Custom graphics for websites, social media, and other digital platforms.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Services I Offer</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            From print to digital, I provide a wide range of Photoshop design services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="text-center group transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary"
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
