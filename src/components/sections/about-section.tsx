import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            A passionate Photoshop designer with a rich history of transforming ideas into visually stunning realities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline text-3xl font-semibold mb-6 text-primary">My Journey</h3>
            <p className="font-body text-foreground/80 mb-4 leading-relaxed">
              Hello! I&apos;m Gopal Mohan. For over two and a half decades, I&apos;ve been immersed in the world of digital design, specializing in Adobe Photoshop. My journey began with a fascination for visual storytelling, which quickly evolved into a professional career crafting compelling designs for a diverse range of clients.
            </p>
            <p className="font-body text-foreground/80 mb-6 leading-relaxed">
              I believe in the power of design to communicate, inspire, and solve problems. My approach is collaborative, ensuring that each project not only meets but exceeds expectations.
            </p>
            <Card className="bg-secondary border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <CheckCircle className="mr-3 h-8 w-8 text-accent" />
                  <span>25+ Years of Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-foreground/70">
                  Leveraging extensive professional design experience to deliver high-quality, impactful Photoshop solutions. My expertise spans across various design needs, from intricate print materials to dynamic digital assets.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative h-96">
             {/* Placeholder for an image or a more visual timeline element */}
            <div className="w-full h-full bg-muted rounded-lg shadow-xl flex items-center justify-center p-8">
                <p className="text-center text-foreground/50 text-lg">
                    Visual representation of skills or key milestones could go here.
                    For instance, a collage of design elements or a stylized timeline.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
