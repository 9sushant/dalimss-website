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
    const data = Object.fromEntries(new FormData(form).entries());
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
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Partner with us — explore growth in education
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>
                  Get In Touch
                </h2>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  Reach out to us to learn more about partnering with DALIMSS Sunbeam Educomp Limited. Our team is ready to guide
                  you through every step.
                </p>
              </div>

              {[
                { icon: Mail, label: 'Email Us', value: 'info@dalimss.com', href: 'mailto:info@dalimss.com' },
                { icon: Phone, label: 'Call Us', value: '9277802103', href: 'tel:9277802103' },
                { icon: MapPin, label: 'Head Office', value: 'Varanasi, Uttar Pradesh, India', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--cream)', border: '1px solid #e0e0e0' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--maroon)' }}>
                    <Icon size={18} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#888', fontWeight: 600 }}>{label}</p>
                    <a href={href} style={{ fontSize: '0.9rem', color: 'var(--maroon)', fontWeight: 600, textDecoration: 'none' }}>
                      {value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                <h3 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: '0.75rem' }}>Follow Us</h3>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-xs font-semibold py-1 px-2 rounded"
                      style={{ backgroundColor: 'rgba(201,162,39,0.2)', color: 'var(--gold)' }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl" style={{ backgroundColor: 'var(--cream)', border: '2px solid var(--gold)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    Your enquiry has been received. Our team will get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl shadow-lg space-y-5"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid #e0e0e0' }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>
                    Partner With Us
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Full Name *', type: 'text', name: 'name', required: true },
                      { label: 'Email Address *', type: 'email', name: 'email', required: true },
                      { label: 'Contact Number *', type: 'tel', name: 'phone', required: true },
                      { label: 'School Type', type: 'text', name: 'school_type', required: false },
                      { label: 'State', type: 'text', name: 'state', required: false },
                      { label: 'City', type: 'text', name: 'city', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#555', display: 'block', marginBottom: '0.25rem' }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          className="w-full px-3 py-2.5 rounded outline-none text-sm"
                          style={{ backgroundColor: 'white', border: '1.5px solid #ddd', color: '#333' }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#555', display: 'block', marginBottom: '0.25rem' }}>
                      Message / Detail
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2.5 rounded outline-none text-sm resize-none"
                      style={{ backgroundColor: 'white', border: '1.5px solid #ddd', color: '#333' }}
                    />
                  </div>
                  {status === 'error' && (
                    <p style={{ color: '#c0392b', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
                      {errorMsg}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded font-bold text-sm"
                    style={{ backgroundColor: 'var(--maroon)', color: 'white', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    <Send size={16} />
                    {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
