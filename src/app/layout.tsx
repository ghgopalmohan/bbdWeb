
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
      <body className="font-body antialiased text-foreground">
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
          <div className="animated-blob-1"></div>
          <div className="animated-blob-2"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
