"use client";

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate-visible');
            observer.unobserve(entry.target); // Optional: unobserve after animation
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elementsRef.current.forEach((el) => {
      if (el) {
        el.classList.add('scroll-animate'); // Add initial class for styling
        observer.observe(el);
      }
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const addElement = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addElement;
}

// How to use:
// In your component:
// const addScrollAnimElement = useScrollAnimation();
// <section ref={addScrollAnimElement}>...</section>
// Ensure .scroll-animate and .scroll-animate-visible classes are defined in globals.css
