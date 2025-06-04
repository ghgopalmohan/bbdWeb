"use client";

import type { ReactNode } from 'react';
import Preloader from './common/preloader';
import { CustomCursor } from './common/CustomCursor';
import { useState, useEffect } from 'react';

export default function AppProviders({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time for preloader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {!loading && children}
      </div>
    </>
  );
}
