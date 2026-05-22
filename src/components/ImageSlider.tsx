'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  if (!images.length) return null;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '0.75rem', aspectRatio: '16/7', backgroundColor: '#111' }}>
      {images.map((img, i) => (
        <div
          key={img.src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.7s ease',
            pointerEvents: i === current ? 'auto' : 'none',
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous image"
        style={{
          position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '2.25rem', height: '2.25rem', cursor: 'pointer', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
          zIndex: 10,
        }}
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next image"
        style={{
          position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.45)', border: 'none', borderRadius: '50%',
          width: '2.25rem', height: '2.25rem', cursor: 'pointer', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
          zIndex: 10,
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem', zIndex: 10 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '1.5rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
              transition: 'width 0.3s ease, background 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
