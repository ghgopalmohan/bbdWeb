
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { generateDesignIdea, DesignIdeaInput } from '@/ai/flows/design-idea-flow';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function AiIdeaGeneratorSection() {
  const [projectType, setProjectType] = useState('');
  const [designStyle, setDesignStyle] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const addScrollAnimElement = useScrollAnimation();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setGeneratedIdea(null);

    try {
      const input: DesignIdeaInput = { projectType, designStyle };
      const result = await generateDesignIdea(input);
      setGeneratedIdea(result.idea);
    } catch (error) {
      console.error("Error generating design idea:", error);
      toast({
        title: "Error",
        description: "Failed to generate a design idea. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-spark" className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate text-center mb-20 md:mb-24"
        >
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary flex items-center justify-center">
            <Wand2 className="w-12 h-12 md:w-16 md:h-16 mr-4 text-primary" />
            Need a Spark?
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Let AI help you brainstorm. Describe your project and desired style to get a unique design concept.
          </p>
        </div>

        <div 
          ref={addScrollAnimElement} 
          className="scroll-animate delay-1 max-w-2xl mx-auto"
        >
          <Card className="shadow-xl border border-border bg-card p-6 md:p-8 rounded-xl">
            <CardHeader className="text-center p-0 pb-6">
              <CardTitle className="font-headline text-4xl text-primary">AI Design Idea Generator</CardTitle>
              <CardDescription className="text-muted-foreground text-lg pt-2">
                Fill in the details below to get a creative spark.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-8 p-0">
                <div className="form-group">
                  <Input 
                    type="text" 
                    id="projectType" 
                    name="projectType" 
                    placeholder=" " 
                    className="form-input peer" 
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    required 
                  />
                  <Label htmlFor="projectType" className="form-label">Project Type (e.g., logo, brochure)</Label>
                </div>
                <div className="form-group">
                  <Input 
                    type="text" 
                    id="designStyle" 
                    name="designStyle" 
                    placeholder=" " 
                    className="form-input peer" 
                    value={designStyle}
                    onChange={(e) => setDesignStyle(e.target.value)}
                    required 
                  />
                  <Label htmlFor="designStyle" className="form-label">Desired Style (e.g., minimalist, vintage)</Label>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg bg-primary hover:bg-accent text-primary-foreground py-4 shadow-md hover:shadow-lg transition-shadow"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Idea
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {generatedIdea && (
            <div 
              ref={addScrollAnimElement} 
              className="scroll-animate delay-2 mt-12"
            >
              <Card className="shadow-lg border border-primary/30 bg-secondary p-6 md:p-8 rounded-xl">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="font-headline text-3xl text-primary flex items-center">
                    <Sparkles className="w-7 h-7 mr-3" />
                    Your Design Spark!
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="font-body text-lg text-foreground/90 leading-relaxed">
                    {generatedIdea}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
