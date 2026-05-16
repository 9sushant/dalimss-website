'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Our Story', href: '/about-us#story' },
      { label: "Chairman's Message", href: '/about-us#chairman' },
      { label: "Director's Message", href: '/about-us#directors' },
      { label: 'Vision & Mission', href: '/about-us#vision' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'School Franchise', href: '/services/franchise' },
      { label: 'Curriculum & Setup', href: '/services/curriculum' },
      { label: 'Toddlers n Kids', href: '/services/toddlers' },
      { label: 'Educational Consultancy', href: '/services/consultancy' },
    ],
  },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Associate Schools', href: '/associate-schools' },
  { label: 'FAQs', href: '/faqs' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 1px 0 #e8e8e8, 0 2px 12px rgba(0,0,0,0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--maroon-dark), var(--maroon))',
            color: 'var(--gold)',
            fontWeight: 900,
            fontSize: '1.05rem',
            padding: '6px 11px',
            borderRadius: '8px',
            lineHeight: 1.2,
            letterSpacing: '0.02em',
          }}>
            D<span style={{ color: 'white' }}>ALIMSS</span>
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontWeight: 800, fontSize: '0.83rem', color: 'var(--maroon)', letterSpacing: '0.02em' }}>DALIMSS SUNBEAM</div>
            <div style={{ fontWeight: 500, fontSize: '0.67rem', color: '#888', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Educomp Ltd</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="hidden lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button style={{
                  display: 'flex', alignItems: 'center', gap: '3px',
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.84rem', fontWeight: 600,
                  color: openDropdown === link.label ? 'var(--maroon)' : '#444',
                  background: openDropdown === link.label ? '#f5f0f0' : 'transparent',
                  borderRadius: '0.375rem',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'color 0.15s, background 0.15s',
                }}>
                  {link.label}
                  <ChevronDown size={13} style={{ opacity: 0.6 }} />
                </button>
                {openDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    width: '240px',
                    background: 'white',
                    borderRadius: '0.75rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #f0f0f0',
                    padding: '0.5rem',
                    zIndex: 50,
                  }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: 'block', padding: '0.5rem 0.75rem',
                          fontSize: '0.83rem', fontWeight: 500,
                          color: '#333', textDecoration: 'none',
                          borderRadius: '0.375rem',
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#f5f0f0'; (e.target as HTMLElement).style.color = 'var(--maroon)'; }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#333'; }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '0.45rem 0.75rem',
                  fontSize: '0.84rem', fontWeight: 600,
                  color: '#444', textDecoration: 'none',
                  borderRadius: '0.375rem',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#f5f0f0'; (e.target as HTMLElement).style.color = 'var(--maroon)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#444'; }}
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact" style={{
            marginLeft: '0.5rem',
            padding: '0.5rem 1.1rem',
            background: 'linear-gradient(135deg, var(--maroon), var(--maroon-dark))',
            color: 'white',
            borderRadius: '0.5rem',
            fontSize: '0.84rem', fontWeight: 700,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            boxShadow: '0 2px 8px rgba(123,28,28,0.25)',
            transition: 'opacity 0.15s',
          }}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '38px', height: '38px',
            borderRadius: '0.5rem',
            border: '1.5px solid #e5e5e5',
            background: 'white',
            color: 'var(--maroon)',
            cursor: 'pointer',
          }}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid #f0f0f0',
          background: 'white',
          padding: '0.5rem 0 1rem',
        }} className="lg:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                style={{
                  display: 'block', padding: '0.7rem 1.5rem',
                  fontSize: '0.9rem', fontWeight: 700,
                  color: 'var(--maroon)', textDecoration: 'none',
                  borderBottom: '1px solid #f5f5f5',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  style={{
                    display: 'block', padding: '0.55rem 2.25rem',
                    fontSize: '0.83rem', fontWeight: 500,
                    color: '#555', textDecoration: 'none',
                    borderBottom: '1px solid #f9f9f9',
                    background: '#fafafa',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div style={{ padding: '0.75rem 1.5rem' }}>
            <Link href="/contact" style={{
              display: 'block', textAlign: 'center',
              padding: '0.75rem',
              background: 'linear-gradient(135deg, var(--maroon), var(--maroon-dark))',
              color: 'white', borderRadius: '0.5rem',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            }} onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
