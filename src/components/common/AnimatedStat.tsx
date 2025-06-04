
"use client";

import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  targetValue: number;
  duration?: number; // in milliseconds
  suffix?: string;
  className?: string;
  startDelay?: number; // in milliseconds
  textClassName?: string;
  labelClassName?: string;
  label: string;
}

const AnimatedStat: FC<AnimatedStatProps> = ({
  targetValue,
  duration = 2000,
  suffix = "",
  className = "",
  startDelay = 0,
  textClassName = "text-4xl sm:text-5xl font-bold text-primary",
  labelClassName = "text-sm sm:text-base text-muted-foreground mt-1",
  label,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true); 
          setTimeout(() => { 
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              setCurrentValue(Math.floor(progress * targetValue));
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCurrentValue(targetValue); 
              }
            };
            requestAnimationFrame(step);
          }, startDelay);
        }
      },
      { threshold: 0.1 } 
    );

    const currentRef = statRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetValue, duration, hasAnimated, startDelay]);

  return (
    <div ref={statRef} className={className}>
      <span className={textClassName}>
        {currentValue}{suffix}
      </span>
      <p className={labelClassName}>{label}</p>
    </div>
  );
};

export default AnimatedStat;
