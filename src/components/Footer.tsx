import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '1.3rem' }}>DALIMSS SUNBEAM</div>
              <div style={{ color: '#ddd', fontSize: '0.85rem' }}>EDUCOMP LIMITED</div>
            </div>
            <p style={{ color: '#ddd', fontSize: '0.875rem', lineHeight: 1.7 }}>
              Exploring growth in education in an evolving and volatile world. 50+ years of legacy, 25+ schools, 15,000+ students.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-xs font-semibold px-2 py-1 rounded"
                  style={{ backgroundColor: 'rgba(201,162,39,0.2)', color: '#C9A227' }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'School Franchise', href: '/services/franchise' },
                { label: 'Associate Schools', href: '/associate-schools' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: '#ddd', fontSize: '0.875rem', textDecoration: 'none' }}
                    className="hover:text-white transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'School Franchise', href: '/services/franchise' },
                { label: 'Curriculum & Setup', href: '/services/curriculum' },
                { label: 'Toddlers n Kids', href: '/services/toddlers' },
                { label: 'Educational Consultancy', href: '/services/consultancy' },
                { label: 'News & Events', href: '/news-events' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: '#ddd', fontSize: '0.875rem', textDecoration: 'none' }}
                    className="hover:text-white transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="mailto:info@dalimss.com" style={{ color: '#ddd', fontSize: '0.875rem' }}>
                  info@dalimss.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="tel:9277802103" style={{ color: '#ddd', fontSize: '0.875rem' }}>
                  9277802103
                </a>
              </div>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 rounded text-sm font-semibold transition-colors"
                  style={{ backgroundColor: 'var(--gold)', color: 'white' }}
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', color: '#aaa', fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} DALIMSS Sunbeam Educomp Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
