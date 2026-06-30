'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

      // Send enquiry details to WhatsApp +919277802103
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

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 55%, var(--maroon-light) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            We'd Love to Hear from You
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Get in <span style={{ color: 'var(--gold)' }}>Touch</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            Partner with us — explore growth in education. Our team responds within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h2 style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Contact Information</h2>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: '0.875rem' }}>
                Reach out to learn more about partnering with DALIMSS Sunbeam Educomp Limited. Our team is ready to guide you through every step.
              </p>
            </div>

            {[
              { icon: Mail, label: 'Email Us', value: 'info@dalimss.com', href: 'mailto:info@dalimss.com' },
              { icon: Phone, label: 'Call Us', value: '+91 9277802103', href: 'tel:9277802103' },
              { icon: MapPin, label: 'Head Office', value: 'Varanasi, Uttar Pradesh, India', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--maroon-dark), var(--maroon))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(165,28,28,0.25)' }}>
                  <Icon size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: '#aaa', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.15rem' }}>{label}</p>
                  <a href={href} style={{ fontSize: '0.9rem', color: 'var(--maroon)', fontWeight: 700, textDecoration: 'none' }}>{value}</a>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: '0.85rem' }}>Follow Us</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[{ name: 'Facebook', icon: '📘' }, { name: 'Instagram', icon: '📸' }, { name: 'YouTube', icon: '▶️' }, { name: 'LinkedIn', icon: '💼' }].map((s) => (
                  <a key={s.name} href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 0.75rem', borderRadius: '2rem', background: 'var(--cream)', color: 'var(--maroon)', border: '1.5px solid #e0d8c8', textDecoration: 'none' }}>
                    <span>{s.icon}</span> {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>Enquiry Sent!</h3>
                <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Your details have been emailed to our team. A WhatsApp window has also opened — please press <strong>Send</strong> there so we receive your enquiry instantly.
                </p>
                <a
                  href="https://wa.me/919277802103"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', padding: '0.7rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37,211,102,0.35)' }}
                >
                  <span style={{ fontSize: '1.1rem' }}>💬</span> Open WhatsApp Again
                </a>
              </div>
            ) : (
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid var(--gold)' }}>
                  <h3 style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--maroon)' }}>Partner With Us</h3>
                  <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.25rem' }}>Fill in the form and we'll get back to you within 24–48 hours.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                      { label: 'Full Name *', type: 'text', name: 'name', required: true },
                      { label: 'Email Address *', type: 'email', name: 'email', required: true },
                      { label: 'Contact Number *', type: 'tel', name: 'phone', required: true },
                      { label: 'School Type', type: 'text', name: 'school_type', required: false },
                      { label: 'State', type: 'text', name: 'state', required: false },
                      { label: 'City', type: 'text', name: 'city', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#777', display: 'block', marginBottom: '0.3rem', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', border: '1.5px solid #e0d8c8', color: '#333', fontSize: '0.875rem', outline: 'none', background: 'white', fontFamily: 'inherit' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#777', display: 'block', marginBottom: '0.3rem', textTransform: 'uppercase' as const, letterSpacing: '0.04em' }}>
                      Message / Detail
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', border: '1.5px solid #e0d8c8', color: '#333', fontSize: '0.875rem', outline: 'none', resize: 'none', background: 'white', fontFamily: 'inherit' }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#c0392b', fontSize: '0.82rem', background: '#fef2f2', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #fecaca' }}>
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, var(--maroon), var(--maroon-dark))', color: 'white', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1, boxShadow: '0 4px 16px rgba(165,28,28,0.3)', fontFamily: 'inherit' }}
                  >
                    <Send size={15} />
                    {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
