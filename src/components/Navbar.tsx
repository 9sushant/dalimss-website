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
    label: 'Our Services',
    href: '/services',
    children: [
      { label: 'Dalimss Sunbeam School Franchise', href: '/services/franchise' },
      { label: 'School Curriculum, Syllabus & Setup', href: '/services/curriculum' },
      { label: 'Toddlers n Kids', href: '/services/toddlers' },
      { label: 'Educational Consultancy & Test Preparation', href: '/services/consultancy' },
    ],
  },
  { label: 'News / Events', href: '/news-events' },
  { label: 'Associate Schools', href: '/associate-schools' },
  { label: 'FAQS', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} className="sticky top-0 z-50">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            style={{ backgroundColor: 'var(--maroon)', color: '#C9A227', fontWeight: 800, fontSize: '1.1rem', padding: '6px 10px', borderRadius: '8px', lineHeight: 1.2 }}
          >
            D<span style={{ color: 'white' }}>ALIMSS</span>
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--maroon)' }}>DALIMSS SUNBEAM</div>
            <div style={{ fontWeight: 600, fontSize: '0.7rem', color: '#555' }}>EDUCOMP LTD</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors"
                  style={{ color: 'var(--maroon)' }}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-0 w-64 rounded shadow-lg z-50 py-1"
                    style={{ backgroundColor: '#fff', border: '1px solid #eee' }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: 'var(--maroon)' }}
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
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors"
                style={{ color: 'var(--maroon)' }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded"
          style={{ color: 'var(--maroon)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ backgroundColor: '#fff' }}>
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm font-semibold border-b"
                style={{ color: 'var(--maroon)', borderColor: '#f0f0f0' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-8 py-2 text-sm border-b"
                  style={{ color: '#555', borderColor: '#f0f0f0', backgroundColor: '#fafafa' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
