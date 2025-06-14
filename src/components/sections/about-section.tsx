
import Image from 'next/image';
import { Check } from "lucide-react";

export default function AboutSection() {
  const expertiseAreas = [
    "Business Cards",
    "Brochures & Flyers",
    "Banners, Hoardings & Flexes",
    "Corporate Stationery (Letterheads, Envelopes, Notepads, etc.)",
    "Hotel Menus",
    "Billboards & Signage",
    "Custom Visual Branding Solutions"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">About Me</h2>
          <p className="font-body text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            A seasoned Photoshop designer dedicated to crafting compelling visual narratives and high-impact designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div className="relative group mt-0 md:mt-4"> {/* Adjusted mt for better alignment with text */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-400 to-gray-700 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://placehold.co/600x750.png" 
              alt="Gopal Mohan at work"
              width={600}
              height={750}
              className="rounded-lg shadow-xl relative object-cover w-full h-auto md:max-h-[700px]"
              data-ai-hint="designer workspace creative"
            />
          </div>
          
          <div className="font-body text-gray-300">
            <p className="mb-6 leading-relaxed text-lg">
              Hi, I&apos;m Gopal Mohan. With a strong academic background in Computers and Industrial Relations & Personnel Management (IRPM), I launched my entrepreneurial journey by founding Business Bonds Directory (Yellow Pages)—a company dedicated to designing impactful advertisements and publishing comprehensive business directories. Between 2000 and 2018, the company grew to establish 10 successful branches across Andhra Pradesh, becoming a trusted name in regional business networking.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              From 2018 to 2020, I shifted focus to the healthcare sector, publishing a specialized Medical Directory of Vijayawada, which received significant industry recognition.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              Since 2021, I have been working as a freelance graphic designer and creative vendor for numerous leading companies in India and abroad. My core expertise lies in Adobe Photoshop, with a professional portfolio that spans:
            </p>
            <ul className="space-y-3 mb-6 pl-2">
              {expertiseAreas.map((item, index) => (
                <li key={index} className="flex items-start text-lg">
                  <Check className="h-6 w-6 mr-3 text-purple-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-lg">
              My approach combines design precision with a deep understanding of brand identity, ensuring that every project I undertake not only meets but exceeds client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
