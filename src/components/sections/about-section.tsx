import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, UserCheck } from "lucide-react"; // Using Award for experience
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
          <p className="font-body text-lg text-foreground/80 max-w-2xl mx-auto">
            A seasoned Photoshop designer dedicated to crafting compelling visual narratives and high-impact designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://placehold.co/600x750.png" 
              alt="Gopal Mohan at work"
              width={600}
              height={750}
              className="rounded-lg shadow-xl relative object-cover w-full h-auto md:max-h-[600px]"
              data-ai-hint="designer workspace creative"
            />
          </div>
          
          <div>
            <h3 className="font-headline text-3xl font-semibold mb-6 text-primary">My Creative Journey</h3>
            <p className="font-body text-foreground/80 mb-4 leading-relaxed">
              Hello! I&apos;m Gopal Mohan. With a career spanning over 25 years, I&apos;ve cultivated a deep passion for Adobe Photoshop and the art of digital design. My journey is one of continuous learning and adaptation, always striving to harness the latest techniques to bring creative visions to life.
            </p>
            <p className="font-body text-foreground/80 mb-8 leading-relaxed">
              I specialize in transforming concepts into tangible, high-quality visual assets for both print and digital mediums. My approach is rooted in collaboration and a meticulous attention to detail, ensuring every project aligns perfectly with client objectives and brand identity.
            </p>
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Award className="mr-3 h-8 w-8 text-accent" /> 
                  <span>Over 25 Years of Design Excellence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  Leveraging a quarter-century of hands-on experience to deliver innovative and effective Photoshop solutions. My expertise is your asset in achieving outstanding visual communication.
                </p>
                <ul className="mt-4 space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-3 text-accent" />
                    <span>Expert in Print & Digital Media Design</span>
                  </li>
                  <li className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-3 text-accent" />
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
