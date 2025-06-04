
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, UserCheck } from "lucide-react";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">About Me</h2>
          <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto">
            A seasoned Photoshop designer dedicated to crafting compelling visual narratives and high-impact designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur-xl opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://placehold.co/600x750.png" 
              alt="Gopal Mohan at work"
              width={600}
              height={750}
              className="rounded-lg shadow-xl relative object-cover w-full h-auto md:max-h-[650px]"
              data-ai-hint="designer workspace creative"
            />
          </div>
          
          <div>
            <h3 className="font-headline text-4xl font-semibold mb-8 text-primary">My Creative Journey</h3>
            <p className="font-body text-foreground/90 mb-6 leading-relaxed text-lg">
              Hello! I&apos;m Gopal Mohan. With a career spanning over 25 years, I&apos;ve cultivated a deep passion for Adobe Photoshop and the art of digital design. My journey is one of continuous learning and adaptation, always striving to harness the latest techniques to bring creative visions to life.
            </p>
            <p className="font-body text-foreground/90 mb-10 leading-relaxed text-lg">
              I specialize in transforming concepts into tangible, high-quality visual assets for both print and digital mediums. My approach is rooted in collaboration and a meticulous attention to detail, ensuring every project aligns perfectly with client objectives and brand identity.
            </p>
            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl text-primary flex items-center">
                  <Award className="mr-4 h-10 w-10 text-accent" /> 
                  <span>Over 25 Years of Design Excellence</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="font-body text-muted-foreground text-base">
                  Leveraging a quarter-century of hands-on experience to deliver innovative and effective Photoshop solutions. My expertise is your asset in achieving outstanding visual communication.
                </p>
                <ul className="mt-6 space-y-3 text-foreground/90 text-base">
                  <li className="flex items-center">
                    <Briefcase className="h-6 w-6 mr-3 text-accent" />
                    <span>Expert in Print & Digital Media Design</span>
                  </li>
                  <li className="flex items-center">
                    <UserCheck className="h-6 w-6 mr-3 text-accent" />
                    <span>Client-Focused & Collaborative Approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
