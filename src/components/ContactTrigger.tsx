'use client';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface ContactTriggerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function ContactTrigger({ children, style, className }: ContactTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        style={{
          ...style,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {children}
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
