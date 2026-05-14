import Link from 'next/link';

export const metadata = {
  title: 'School Franchise | DALIMSS Sunbeam Educomp Ltd',
  description: 'Partner with DALIMSS Sunbeam to open your own franchise school. Learn about models, requirements, and support.',
};

const models = [
  {
    name: 'DALIMSS Sunbeam Petals',
    sub: 'Playschool',
    color: '#E8F5E9',
    border: '#4CAF50',
    details: [
      'Small Setup: 1,000 – 1,500 sq. ft.',
      'Medium/Large Setup: 1,500 – 3,000 sq. ft.',
      'Ideal Location: Residential area (ground floor preferred)',
    ],
    grades: 'Playgroup / Nursery',
  },
  {
    name: 'DALIMSS Sunbeam — The Gardenia',
    sub: 'Primary School',
    color: '#E3F2FD',
    border: '#2196F3',
    details: [
      'Land: 0.5–1.5 acres',
      'Non-profit trust, society, or Section 8 company',
      'State education department NOC required',
      'Certificate of Recognition',
    ],
    grades: 'Up to Grade 5',
  },
  {
    name: 'DALIMSS Sunbeam — The Beanstalk',
    sub: 'Middle School',
    color: '#FFF8E1',
    border: '#FFC107',
    details: [
      'Must comply with RTE Act, 2009',
      'Land: 1.5–2 acres (non-metro)',
      'Certificate of Recognition from state government',
      'Qualified teachers as per state norms',
    ],
    grades: 'Up to Grade 8',
  },
  {
    name: 'DALIMSS Sunbeam — The Dream Woods',
    sub: 'Senior Secondary School',
    color: '#FCE4EC',
    border: 'var(--maroon)',
    details: [
      'Metros: ~2,400–4,000 sq. m.',
      'Tier 1/2 Cities: ~4,000–6,000 sq. m.',
      'Rural: ~6,000–8,000 sq. m. (1.5–2 acres)',
      'CBSE/ICSE affiliation via SARAS portal',
      'Non-profit entity mandatory',
    ],
    grades: 'Up to Grade 12',
  },
];

const operationModels = [
  { title: 'Associate Owned & Associate Operated', desc: 'You own the school and manage day-to-day operations with DALIMSS support.' },
  { title: 'Associate Owned & Company Operated', desc: 'You own the infrastructure; DALIMSS handles operations and management.' },
  { title: 'Anchor Schools (Townships)', desc: 'Schools within townships or large residential complexes.' },
];

export default function Franchise() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Dalimss Sunbeam School Franchise
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Join a 50+ year legacy. Open your own DALIMSS Sunbeam school.
          </p>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">School Models We Offer</h2>
          <p className="section-subheading">Choose the model that suits your specification and location</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl shadow-md" style={{ backgroundColor: m.color, border: `2px solid ${m.border}` }}>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 rounded text-xs font-bold text-white mb-2" style={{ backgroundColor: m.border }}>
                    {m.grades}
                  </span>
                  <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--maroon)' }}>{m.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.85rem', fontWeight: 600 }}>{m.sub}</p>
                </div>
                <ul className="space-y-1">
                  {m.details.map((d) => (
                    <li key={d} style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: m.border }}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operation Models */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Operation Models</h2>
          <p className="section-subheading">Flexible ownership and management structures</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operationModels.map((m) => (
              <div key={m.title} className="p-6 rounded-xl shadow-md text-center" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏫</div>
                <h3 style={{ fontWeight: 700, color: 'var(--gold)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#ddd', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Key Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              {[
                { q: 'Time to start', a: '3 to 12 months depending on location and existing setup.' },
                { q: 'When are fees paid?', a: 'One-time franchise/upfront fees at signing of Letter of Intent (LOI), post site visit.' },
                { q: 'Are fees refundable?', a: 'Sign-up fees and service fees are fully non-refundable.' },
                { q: 'Land requirement', a: '1.5–2 acre owned or leased land (min. 35-year irrevocable lease).' },
                { q: 'Legal structure', a: 'Non-profit trust (min. 2 members) or society (min. 7 members) required.' },
              ].map((item) => (
                <div key={item.q} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--cream)', border: '1px solid #e0e0e0' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--maroon)', marginBottom: '0.25rem' }}>{item.q}</p>
                  <p style={{ fontSize: '0.85rem', color: '#555' }}>{item.a}</p>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
              <h3 style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Get Started?</h3>
              <p style={{ color: '#ddd', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Take the first step towards opening your own DALIMSS Sunbeam school. Our team will guide you through every stage.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 rounded font-bold" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
