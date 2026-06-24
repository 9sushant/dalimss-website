import { notFound } from 'next/navigation';
import Link from 'next/link';
import { schools } from '@/lib/schools';
import { MapPin, Phone, Mail, GraduationCap, ArrowLeft } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';
import ContactTrigger from '@/components/ContactTrigger';

export async function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const school = schools.find((s) => s.slug === slug);
  if (!school) return {};
  return {
    title: `${school.name} | DALIMSS Sunbeam Educomp Ltd`,
    description: school.description.slice(0, 160),
  };
}

export default async function SchoolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const school = schools.find((s) => s.slug === slug);
  if (!school) notFound();

  return (
    <main>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto">
          <Link href="/associate-schools" className="inline-flex items-center gap-2 mb-4 text-sm" style={{ color: 'var(--gold)' }}>
            <ArrowLeft size={16} /> All Schools
          </Link>
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(1.75rem,4vw,2.75rem)', marginBottom: '0.5rem' }}>
            {school.name}
          </h1>
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="flex items-center gap-2" style={{ color: 'var(--gold)', fontSize: '0.875rem' }}>
              <MapPin size={14} /> {school.location}
            </div>
            <div className="flex items-center gap-2" style={{ color: '#ddd', fontSize: '0.875rem' }}>
              <GraduationCap size={14} /> {school.grades}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Slider */}
      {school.images && school.images.length > 0 && (
        <section className="px-4 py-8" style={{ backgroundColor: 'white' }}>
          <div className="max-w-5xl mx-auto">
            <ImageSlider images={school.images} />
          </div>
        </section>
      )}

      {/* About */}
      <section className="py-12 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '1rem' }}>About the School</h2>
              <p style={{ lineHeight: 1.9, color: '#333', fontSize: '0.95rem' }}>{school.description}</p>

              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--maroon)', marginTop: '2rem', marginBottom: '0.75rem' }}>
                Key Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {school.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2" style={{ fontSize: '0.85rem', color: '#444' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div>
              {/* Outer wrapper with gold border glow */}
              <div
                className="sticky top-20"
                style={{
                  background: 'linear-gradient(135deg, #C9A227, #E5C158, #C9A227)',
                  borderRadius: '1rem',
                  padding: '3px',
                  boxShadow: '0 8px 32px rgba(201,162,39,0.25), 0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                <div style={{ borderRadius: '0.85rem', overflow: 'hidden' }}>
                  {/* Gold Header */}
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #C9A227, #d4af37)',
                      padding: '1rem 1.5rem',
                      textAlign: 'center',
                    }}
                  >
                    <h3 style={{
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      margin: 0,
                      textShadow: '0 1px 2px rgba(0,0,0,0.15)',
                    }}>
                      Contact Information
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div
                    style={{
                      background: 'linear-gradient(180deg, #7B1C1C 0%, #6b1515 100%)',
                      padding: '1.5rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {/* Address field */}
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '0.375rem',
                      padding: '0.75rem 1rem',
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem', fontWeight: 500 }}>Address</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.45 }}>{school.address}</div>
                    </div>

                    {/* Email field */}
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '0.375rem',
                      padding: '0.75rem 1rem',
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem', fontWeight: 500 }}>E-Mail</div>
                      <a href={`mailto:${school.email}`} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', display: 'block' }}>{school.email}</a>
                    </div>

                    {/* Phone field */}
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '0.375rem',
                      padding: '0.75rem 1rem',
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem', fontWeight: 500 }}>Contact No.</div>
                      <a href={`tel:${school.phone.split('/')[0].replace(/\s/g, '')}`} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', display: 'block' }}>{school.phone}</a>
                    </div>

                    {/* Grades field */}
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '0.375rem',
                      padding: '0.75rem 1rem',
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem', fontWeight: 500 }}>Grades</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)' }}>{school.grades}</div>
                    </div>

                    {/* Enquire Now Button */}
                    <ContactTrigger
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        background: 'linear-gradient(135deg, #C9A227, #b8911f)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        marginTop: '0.25rem',
                        letterSpacing: '0.02em',
                        boxShadow: '0 2px 8px rgba(201,162,39,0.3)',
                        border: 'none',
                      }}
                    >
                      Enquire Now
                    </ContactTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section
        style={{
          background: 'linear-gradient(180deg, #4a0f0f 0%, #7B1C1C 50%, #4a0f0f 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-16 px-4"
      >
        {/* Decorative pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        <div className="max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Heading */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}>
              Our Facilities
            </h2>
            <div style={{
              width: '56px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              borderRadius: '2px',
              margin: '0 auto',
            }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {school.facilities.map((fac, index) => {
              const icons = ['🏫', '🏥', '🛡️', '📚', '🎨', '🔬', '🏃', '🍽️', '🚌'];
              const icon = icons[index % icons.length];
              return (
                <div
                  key={fac.category}
                  className="card"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gold accent top line */}
                  <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
                  
                  <div style={{ padding: '1.5rem 1.25rem' }}>
                    {/* Category header with icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.5rem',
                        background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(201,162,39,0.3)',
                      }}>
                        {icon}
                      </div>
                      <h3 style={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'white',
                        margin: 0,
                        lineHeight: 1.3,
                      }}>
                        {fac.category}
                      </h3>
                    </div>

                    {/* Items list */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {fac.items.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
