import Link from 'next/link';
import { schools } from '@/lib/schools';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Associate Schools | DALIMSS Sunbeam Educomp Ltd',
  description: 'Explore all DALIMSS Sunbeam associate schools across Uttar Pradesh.',
};

export default function AssociateSchools() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Our Associate Schools
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            25+ schools serving 15,000+ students across 20+ cities in India
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <Link
                key={school.slug}
                href={`/associate-schools/${school.slug}`}
                className="block rounded-xl shadow-md overflow-hidden group"
                style={{ backgroundColor: 'white', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              >
                {/* Card Header */}
                <div className="p-5" style={{ backgroundColor: 'var(--maroon)' }}>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{school.name}</h3>
                  <div className="flex items-center gap-1" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>
                    <MapPin size={12} />
                    {school.location}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {school.description.slice(0, 120)}…
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2" style={{ fontSize: '0.75rem', color: '#666' }}>
                      <GraduationCap size={13} style={{ color: 'var(--maroon)', flexShrink: 0 }} />
                      {school.grades}
                    </div>
                    <div className="flex items-center gap-2" style={{ fontSize: '0.75rem', color: '#666' }}>
                      <Phone size={13} style={{ color: 'var(--maroon)', flexShrink: 0 }} />
                      {school.phone.split('/')[0]}
                    </div>
                    <div className="flex items-center gap-2" style={{ fontSize: '0.75rem', color: '#666' }}>
                      <Mail size={13} style={{ color: 'var(--maroon)', flexShrink: 0 }} />
                      {school.email}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span
                      className="inline-block px-4 py-1.5 rounded text-xs font-bold"
                      style={{ backgroundColor: 'var(--gold)', color: 'white' }}
                    >
                      View School →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
