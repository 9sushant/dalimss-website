import Link from 'next/link';
import Image from 'next/image';
import { schools } from '@/lib/schools';
import { MapPin, ArrowRight } from 'lucide-react';
import ContactTrigger from '@/components/ContactTrigger';
import MovingNumber from '@/components/MovingNumber';

export const metadata = {
  title: 'Associate Schools | DALIMSS Sunbeam Educomp Ltd',
  description: 'Explore all DALIMSS Sunbeam associate schools across Uttar Pradesh.',
};

export default function AssociateSchools() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />

        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(201,162,39,0.15)',
            border: '1px solid rgba(201,162,39,0.35)',
            borderRadius: '2rem',
            padding: '0.3rem 1.1rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--gold-light)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            marginBottom: '1.25rem',
          }}>
            Across Uttar Pradesh &amp; Beyond
          </div>

          <h1 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(2rem,5vw,3.25rem)',
            letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            Our Associate <span style={{ color: 'var(--gold)' }}>Schools</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            25+ campuses serving 15,000+ students across 20+ cities — each shaped by the DALIMSS legacy of excellence.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {[
              { value: '25+', label: 'Schools' },
              { value: '15,000+', label: 'Students' },
              { value: '20+', label: 'Cities' },
              { value: '50+', label: 'Years Legacy' },
            ].map(({ value, label }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,162,39,0.25)',
                borderRadius: '0.75rem',
                padding: '0.9rem 1.6rem',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1 }}><MovingNumber value={value} /></div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: '0.3rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schools Grid ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '82rem', margin: '0 auto' }}>
          <h2 className="section-heading">
            Find Your Nearest <span style={{ color: 'var(--gold)' }}>Campus</span>
          </h2>
          <p className="section-subheading">
            Click on any school to explore its facilities, highlights, and contact details
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginTop: '1rem',
          }}>
            {schools.map((school) => (
              <Link
                key={school.slug}
                href={`/associate-schools/${school.slug}`}
                className="school-card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                  {/* Thumbnail */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0, backgroundColor: '#2a0a0a' }}>
                    {school.images?.[0] ? (
                      <Image
                        src={school.images[0].src}
                        alt={school.images[0].alt}
                        fill
                        className="school-card-img"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, #4a0f0f 0%, var(--maroon) 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: '3rem', opacity: 0.25 }}>🏫</span>
                      </div>
                    )}
                    {/* Grades badge */}
                    <div style={{
                      position: 'absolute', bottom: '0.6rem', left: '0.6rem',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: '0.35rem',
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--gold-light)',
                      letterSpacing: '0.03em',
                    }}>
                      {school.grades}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1.25rem 1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--maroon)', lineHeight: 1.3, marginBottom: '0.35rem' }}>
                      {school.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#888', fontSize: '0.78rem', marginBottom: '1rem' }}>
                      <MapPin size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      {school.location}
                    </div>

                    {/* Top 2 highlights */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', flexGrow: 1, marginBottom: '1.1rem' }}>
                      {school.highlights.slice(0, 2).map((h) => (
                        <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.75rem', color: '#555', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--gold)', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Footer row */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1.5px solid #ede8da',
                    }}>
                      <span style={{ fontSize: '0.7rem', color: '#bbb', fontWeight: 500 }}>
                        {school.address.split(',').slice(-2, -1)[0]?.trim() ?? school.location}
                      </span>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        background: 'linear-gradient(135deg, var(--maroon), var(--maroon-dark))',
                        color: 'white',
                        padding: '0.4rem 0.85rem',
                        borderRadius: '0.375rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(123,28,28,0.25)',
                      }}>
                        Read More <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(1.6rem,4vw,2.4rem)',
            letterSpacing: '-0.03em', lineHeight: 1.15,
            marginBottom: '0.85rem',
          }}>
            Want to Open a School<br />Under DALIMSS?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
            Join India's fastest-growing school franchise network and transform education in your region.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <ContactTrigger style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              color: 'white', padding: '0.875rem 2rem',
              borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(201,162,39,0.4)',
              border: 'none',
            }}>
              Enquire Now
            </ContactTrigger>
            <a href="/DALIMSS-Franchise-Application-Form.pdf" download style={{
              border: '2px solid rgba(255,255,255,0.35)',
              color: 'white', padding: '0.875rem 2rem',
              borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', background: 'rgba(255,255,255,0.06)',
            }}>
              Download Form
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
