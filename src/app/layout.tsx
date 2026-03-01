
import type { Metadata } from 'next';
// Removed ThemeProvider
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Gopal Mohan – Professional Photoshop Designer | Creative Design Services',
  description: 'Portfolio of Gopal Mohan (GM), a seasoned Photoshop Designer offering expert graphic design services: logos, brochures, banners, menus, and complete visual branding solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground" suppressHydrationWarning={true}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
          <div className="animated-blob-1"></div>
          <div className="animated-blob-2"></div>
        </div>
        {children}
        <Toaster />
          <script 
            src="http://localhost:3001/embed-popup.js" 
            data-agent-id="2eee6ff4-9034-4a92-8f55-ca4b833833bd"
            data-api-key="pk_M7fkXZeNB5qip63sT31qqvTQ"
            data-primary-color="#18181b"
            data-bg-color="#ffffff"
            data-surface-color="#f4f4f5"
            data-text-color="#18181b"
            data-border-color="#e4e4e7"
            data-radius="16"
            data-width="500"
            data-height="500"
            data-fb-title="How was your call?"
            data-fb-desc="Hi"
            data-fb-stars="5"
            data-fb-placeholder="We'd love to hear more..."
            data-fb-btn="Submit Feedback"
            data-brand-title="Reacherr Support"
            data-brand-desc="24/7 AI Support"
            data-brand-logo=""
            async
          ></script>
      </body>
    </html>
  );
}
