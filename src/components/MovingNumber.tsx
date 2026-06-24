'use client';

import { useEffect, useState, useRef } from 'react';

interface MovingNumberProps {
  value: string;
}

export default function MovingNumber({ value }: MovingNumberProps) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Extract numeric part and formatting/suffix
  const numericStr = value.replace(/[^0-9]/g, '');
  const target = parseInt(numericStr, 10) || 0;
  const hasPlus = value.includes('+');
  const hasCommas = value.includes(',');

  useEffect(() => {
    // If IntersectionObserver is not supported, start immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1200; // 1.2 seconds animation
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const nextValue = Math.floor(easeProgress * target);

      setCurrent(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, target]);

  // Format current value
  const formatted = hasCommas
    ? current.toLocaleString('en-US')
    : current.toString();

  return (
    <span ref={containerRef}>
      {hasStarted ? formatted : '0'}
      {hasPlus && '+'}
    </span>
  );
}
