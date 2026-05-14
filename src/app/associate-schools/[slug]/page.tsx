import { notFound } from 'next/navigation';
import Link from 'next/link';
import { schools } from '@/lib/schools';
import { MapPin, Phone, Mail, GraduationCap, ArrowLeft } from 'lucide-react';

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
              <div className="rounded-2xl shadow-lg overflow-hidden sticky top-20">
                <div className="py-3 px-5 font-bold text-sm" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                  Contact Information
                </div>
                <div className="p-5 space-y-4" style={{ backgroundColor: 'var(--cream)' }}>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem', fontWeight: 600 }}>ADDRESS</p>
                    <div className="flex gap-2">
                      <MapPin size={15} style={{ color: 'var(--maroon)', flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ fontSize: '0.8rem', color: '#444', lineHeight: 1.6 }}>{school.address}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem', fontWeight: 600 }}>EMAIL</p>
                    <div className="flex items-center gap-2">
                      <Mail size={14} style={{ color: 'var(--maroon)' }} />
                      <a href={`mailto:${school.email}`} style={{ fontSize: '0.8rem', color: 'var(--maroon)', textDecoration: 'none' }}>
                        {school.email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem', fontWeight: 600 }}>PHONE</p>
                    <div className="flex items-center gap-2">
                      <Phone size={14} style={{ color: 'var(--maroon)' }} />
                      <a href={`tel:${school.phone.split('/')[0].replace(/\s/g, '')}`} style={{ fontSize: '0.8rem', color: 'var(--maroon)', textDecoration: 'none' }}>
                        {school.phone}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem', fontWeight: 600 }}>GRADES</p>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} style={{ color: 'var(--maroon)' }} />
                      <span style={{ fontSize: '0.8rem', color: '#444' }}>{school.grades}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center py-2.5 rounded font-bold text-sm mt-2"
                    style={{ backgroundColor: 'var(--maroon)', color: 'white' }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '2rem', textAlign: 'center' }}>
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {school.facilities.map((fac) => (
              <div key={fac.category} className="p-5 rounded-xl shadow-sm" style={{ backgroundColor: 'white' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--maroon)', marginBottom: '0.75rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
                  {fac.category}
                </h3>
                <ul className="space-y-1.5">
                  {fac.items.map((item) => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.8rem', color: '#555' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
