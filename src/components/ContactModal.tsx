'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  }

  function handleClose() {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Unexpected error');
      setStatus('success');
      form.reset();

      const msg = [
        '📋 *New Enquiry – DALIMSS Website*',
        '',
        `👤 *Name:* ${data.name}`,
        `📧 *Email:* ${data.email}`,
        `📞 *Phone:* ${data.phone}`,
        data.school_type ? `🏫 *School Type:* ${data.school_type}` : '',
        data.state       ? `🗺️ *State:* ${data.state}`            : '',
        data.city        ? `🏙️ *City:* ${data.city}`              : '',
        data.message     ? `💬 *Message:* ${data.message}`        : '',
      ].filter(Boolean).join('\n');

      window.open(
        `https://wa.me/919277802103?text=${encodeURIComponent(msg)}`,
        '_blank',
      );
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 1rem',
    fontSize: '0.875rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(201,162,39,0.3)',
    background: 'rgba(255,255,255,0.08)',
    color: 'white',
    outline: 'none',
    fontFamily: 'inherit',
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      style={{
        border: 'none',
        padding: 0,
        background: 'transparent',
        maxWidth: '460px',
        width: '92vw',
        borderRadius: '1.25rem',
        overflow: 'visible',
      }}
    >
      {/* Outer gold border glow */}
      <div
        style={{
          background: 'linear-gradient(135deg, #C9A227, #E5C158, #C9A227)',
          borderRadius: '1.25rem',
          padding: '3px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.3)',
        }}
      >
        <div style={{ borderRadius: '1.15rem', overflow: 'hidden', position: 'relative' }}>
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              zIndex: 10,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.3)')}
          >
            <X size={16} />
          </button>

          {/* Gold Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
              padding: '1.1rem 1.5rem',
              textAlign: 'center',
            }}
          >
            <h3 style={{
              color: 'white',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: 0,
              textShadow: '0 1px 2px rgba(0,0,0,0.15)',
            }}>
              Partner With Us
            </h3>
          </div>

          {/* Body */}
          <div style={{
            background: 'linear-gradient(180deg, #7B1C1C 0%, #5a1313 100%)',
            padding: '1.5rem 1.25rem',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>✅</div>
                <h4 style={{ color: 'white', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Enquiry Sent!
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Your details have been emailed to our team. A WhatsApp window has also opened — please press <strong>Send</strong> there.
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                    color: 'white',
                    padding: '0.7rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
                  Fill in the form and we'll get back to you within 24–48 hours.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                    <input type="text" name="name" placeholder="Full Name *" required style={inputStyle} />
                    <input type="email" name="email" placeholder="E-Mail *" required style={inputStyle} />
                    <input type="tel" name="phone" placeholder="Contact No. *" required style={inputStyle} />
                    <input type="text" name="school_type" placeholder="School Type" style={inputStyle} />
                    <input type="text" name="state" placeholder="State" style={inputStyle} />
                    <input type="text" name="city" placeholder="City" style={inputStyle} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your message / detail"
                    rows={3}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                    }}
                  />

                  {status === 'error' && (
                    <p style={{
                      color: '#fca5a5',
                      fontSize: '0.8rem',
                      background: 'rgba(255,0,0,0.1)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.4rem',
                      border: '1px solid rgba(255,0,0,0.2)',
                    }}>
                      {errorMsg}
                    </p>
                  )}

                  <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.25rem' }}>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.75rem',
                        background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        opacity: status === 'loading' ? 0.7 : 1,
                        fontFamily: 'inherit',
                        boxShadow: '0 4px 12px rgba(201,162,39,0.3)',
                      }}
                    >
                      <Send size={14} />
                      {status === 'loading' ? 'Sending…' : 'Submit'}
                    </button>
                    <button
                      type="reset"
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.15)',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
