"use client";

import type { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import Preloader from './common/preloader';
import { useState, useEffect } from 'react';

export default function AppProviders({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {loading && <Preloader />}
      {!loading && children}
    </ThemeProvider>
  );
}
