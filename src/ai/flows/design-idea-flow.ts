
'use server';
/**
 * @fileOverview A Genkit flow to generate design ideas.
 *
 * - generateDesignIdea - A function that calls the design idea generation flow.
 * - DesignIdeaInput - The input type for the generateDesignIdea function.
 * - DesignIdeaOutput - The return type for the generateDesignIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignIdeaInputSchema = z.object({
  projectType: z.string().describe('The type of design project (e.g., logo, brochure, website mockup).'),
  designStyle: z.string().describe('The desired style for the design (e.g., minimalist, vintage, futuristic, corporate).'),
});
export type DesignIdeaInput = z.infer<typeof DesignIdeaInputSchema>;

const DesignIdeaOutputSchema = z.object({
  idea: z.string().describe('A short paragraph suggesting a design direction or key visual elements.'),
});
export type DesignIdeaOutput = z.infer<typeof DesignIdeaOutputSchema>;

export async function generateDesignIdea(input: DesignIdeaInput): Promise<DesignIdeaOutput> {
  return designIdeaFlow(input);
}

const designIdeaPrompt = ai.definePrompt({
  name: 'designIdeaPrompt',
  input: {schema: DesignIdeaInputSchema},
  output: {schema: DesignIdeaOutputSchema},
  prompt: `You are a creative assistant for a professional Photoshop designer.
Your task is to provide a spark of inspiration for a new design project.

Given the project type: {{{projectType}}}
And the desired style: {{{designStyle}}}

Suggest a brief design concept or key visual elements. Focus on actionable ideas the designer can explore in Photoshop.
Keep the suggestion concise, around 2-3 sentences.
Output the suggestion as a single string in the 'idea' field.
`,
});

const designIdeaFlow = ai.defineFlow(
  {
    name: 'designIdeaFlow',
    inputSchema: DesignIdeaInputSchema,
    outputSchema: DesignIdeaOutputSchema,
  },
  async (input) => {
    const {output} = await designIdeaPrompt(input);
    if (!output) {
        throw new Error("AI failed to generate a design idea.");
    }
    return output;
  }
);
