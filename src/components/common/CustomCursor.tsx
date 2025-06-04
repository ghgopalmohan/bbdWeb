
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'text'

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Check for explicit cursor type, then common interactive elements
    const explicitCursorType = target.closest('[data-cursor-type]')?.getAttribute('data-cursor-type');
    if (explicitCursorType) {
      setCursorType(explicitCursorType);
    } else if (target.closest('a, button')) {
      setCursorType('pointer');
    } else if (target.closest('input[type="text"], textarea, [contenteditable="true"], input[type="email"], input[type="search"], input[type="password"], input[type="url"], input[type="tel"]')) {
      setCursorType('text');
    } else {
      setCursorType('default');
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    // Only reset if the mouse truly leaves to an element that shouldn't maintain the current cursor type
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || (!relatedTarget.closest('a, button, [data-cursor-type]') && !relatedTarget.closest('input[type="text"], textarea, [contenteditable="true"]'))) {
      setCursorType('default');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);
    
    // Hide system cursor globally
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      document.documentElement.style.cursor = ''; // Restore system cursor
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  // Do not render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    // Ensure system cursor is restored if we bail early
    useEffect(() => {
        document.documentElement.style.cursor = '';
         return () => { document.documentElement.style.cursor = 'none';}; // in case component re-renders
    }, []);
    return null;
  }

  return (
    <div
      className={cn(
        'custom-cursor',
        `custom-cursor-${cursorType}` // Use specific classes like .custom-cursor-pointer
      )}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
