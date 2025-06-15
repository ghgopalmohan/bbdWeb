
'use server';

import { z } from 'zod';

// Schema for validating the input data on the server
const actionInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type SendContactEmailResponse = {
    success: boolean;
    message: string;
    errors?: { field: string, message: string }[]; // Optional: for more detailed field errors
};

export async function sendContactEmail(
    data: z.infer<typeof actionInputSchema>
): Promise<SendContactEmailResponse> {
  // Server-side validation
  const validation = actionInputSchema.safeParse(data);
  if (!validation.success) {
      return {
          success: false,
          message: "Invalid data provided. Please check your inputs.",
          // errors: validation.error.flatten().fieldErrors // map this to a simpler error structure if needed
      };
  }

  const { name, email, subject, message } = validation.data;
  const recipientEmail = "gopalmohan.design@gmail.com"; // Updated recipient email

  // --- Actual Email Sending Logic Would Go Here ---
  // For example, using Nodemailer with an SMTP transport or an email service SDK (e.g., SendGrid, Resend).
  // This part requires secure credential management (e.g., environment variables)
  // and should not expose sensitive info to the client.
  // Example with console logging:
  console.log('--- Simulating Server-Side Email Sending ---');
  console.log(`Recipient: ${recipientEmail}`);
  console.log(`Subject: ${subject}`);
  console.log(`Sender Name: ${name}`);
  console.log(`Sender Email (Reply-To): ${email}`);
  console.log(`Message Body:\n${message}`);
  console.log('------------------------------------------');

  // Simulate network delay for email sending
  await new Promise(resolve => setTimeout(resolve, 1000));

  // For prototyping, we'll assume success.
  // In a real app, you would check the response from your email service.
  const emailSentSuccessfully = true; 

  if (emailSentSuccessfully) {
    return { success: true, message: 'Message sent successfully!' };
  } else {
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}

