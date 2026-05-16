import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(160deg, #3e0e0e 0%, var(--maroon-dark) 50%, #4a1010 100%)',
      color: 'white',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'white',
                borderRadius: '0.5rem',
                padding: '6px 12px',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                  src="/logo.png"
                  alt="DALIMSS Sunbeam Educomp Ltd"
                  style={{ height: '40px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Exploring growth in education in an evolving and volatile world. 50+ years of legacy, 25+ schools, 15,000+ students.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((name) => (
                <a
                  key={name}
                  href="#"
                  style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.3rem',
                    background: 'rgba(201,162,39,0.15)',
                    border: '1px solid rgba(201,162,39,0.25)',
                    color: 'var(--gold-light)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'background 0.15s',
                  }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold-light)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.1rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'School Franchise', href: '/services/franchise' },
                { label: 'Associate Schools', href: '/associate-schools' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    transition: 'color 0.15s',
                  }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--gold-light)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.1rem' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'School Franchise', href: '/services/franchise' },
                { label: 'Curriculum & Setup', href: '/services/curriculum' },
                { label: 'Toddlers n Kids', href: '/services/toddlers' },
                { label: 'Educational Consultancy', href: '/services/consultancy' },
                { label: 'News & Events', href: '/news-events' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    transition: 'color 0.15s',
                  }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--gold-light)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.1rem' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="mailto:info@dalimss.com" style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none',
              }}>
                <Mail size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                info@dalimss.com
              </a>
              <a href="tel:9277802103" style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none',
              }}>
                <Phone size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                9277802103
              </a>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/contact" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  color: 'white',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.82rem', fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  boxShadow: '0 3px 10px rgba(201,162,39,0.3)',
                }}>
                  Partner With Us →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} DALIMSS Sunbeam Educomp Limited. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            Varanasi, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
