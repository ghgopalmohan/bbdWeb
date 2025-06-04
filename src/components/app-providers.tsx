
"use client";

import type { ReactNode } from 'react';
import Preloader from './common/preloader';
import CustomCursor from './common/CustomCursor'; // Ensure this path is correct
import { useState, useEffect } from 'react';

export default function AppProviders({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Lemni-like preloader time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700 ease-out'}>
        {!loading && children}
      </div>
    </>
  );
}
