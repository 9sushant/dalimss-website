import Link from 'next/link';

export const metadata = {
  title: 'School Franchise | DALIMSS Sunbeam Educomp Ltd',
  description: 'Partner with DALIMSS Sunbeam to open your own franchise school. Learn about models, requirements, and support.',
};

const models = [
  {
    icon: '🌸',
    name: 'DALIMSS Sunbeam Petals',
    sub: 'Playschool',
    grades: 'Playgroup / Nursery',
    accent: '#4CAF50',
    accentLight: 'rgba(76,175,80,0.1)',
    details: ['Small Setup: 1,000 – 1,500 sq. ft.', 'Medium/Large Setup: 1,500 – 3,000 sq. ft.', 'Ideal Location: Residential area (ground floor preferred)'],
  },
  {
    icon: '🌿',
    name: 'DALIMSS Sunbeam — The Gardenia',
    sub: 'Primary School',
    grades: 'Up to Grade 5',
    accent: '#2196F3',
    accentLight: 'rgba(33,150,243,0.1)',
    details: ['Land: 0.5–1.5 acres', 'Non-profit trust, society, or Section 8 company', 'State education department NOC required', 'Certificate of Recognition'],
  },
  {
    icon: '🌱',
    name: 'DALIMSS Sunbeam — The Beanstalk',
    sub: 'Middle School',
    grades: 'Up to Grade 8',
    accent: '#FF9800',
    accentLight: 'rgba(255,152,0,0.1)',
    details: ['Must comply with RTE Act, 2009', 'Land: 1.5–2 acres (non-metro)', 'Certificate of Recognition from state government', 'Qualified teachers as per state norms'],
  },
  {
    icon: '🏛️',
    name: 'DALIMSS Sunbeam — The Dream Woods',
    sub: 'Senior Secondary School',
    grades: 'Up to Grade 12',
    accent: '#7B1C1C',
    accentLight: 'rgba(123,28,28,0.08)',
    details: ['Metros: ~2,400–4,000 sq. m.', 'Tier 1/2 Cities: ~4,000–6,000 sq. m.', 'Rural: ~6,000–8,000 sq. m. (1.5–2 acres)', 'CBSE/ICSE affiliation via SARAS portal', 'Non-profit entity mandatory'],
  },
];

const operationModels = [
  { icon: '🤝', title: 'Associate Owned & Associate Operated', desc: 'You own the school and manage day-to-day operations with full DALIMSS support and branding.' },
  { icon: '🏢', title: 'Associate Owned & Company Operated', desc: 'You own the infrastructure; DALIMSS handles operations, staffing, and management end-to-end.' },
  { icon: '🏘️', title: 'Anchor Schools (Townships)', desc: 'Schools within townships or large residential complexes — ideal for community-integrated education.' },
];

const keyFacts = [
  { q: 'Time to start', a: '3 to 12 months depending on location and existing setup.' },
  { q: 'When are fees paid?', a: 'One-time franchise/upfront fees at signing of Letter of Intent (LOI), post site visit.' },
  { q: 'Are fees refundable?', a: 'Sign-up fees and service fees are fully non-refundable.' },
  { q: 'Land requirement', a: '1.5–2 acre owned or leased land (min. 35-year irrevocable lease).' },
  { q: 'Legal structure', a: 'Non-profit trust (min. 2 members) or society (min. 7 members) required.' },
];

export default function Franchise() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            50+ Years of Excellence
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            School <span style={{ color: 'var(--gold)' }}>Franchise</span> with DALIMSS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Join India's trusted school network. Open your own DALIMSS Sunbeam school with end-to-end support from setup to success.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {[{ value: '25+', label: 'Schools' }, { value: '50+', label: 'Years Legacy' }, { value: '15,000+', label: 'Students' }, { value: '4', label: 'School Models' }].map(({ value, label }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(201,162,39,0.25)', borderRadius: '0.75rem', padding: '0.9rem 1.5rem', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: '0.3rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── School Models ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">School <span style={{ color: 'var(--gold)' }}>Models</span> We Offer</h2>
          <p className="section-subheading">Choose the model that suits your specification, location and investment</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {models.map((m) => (
              <div key={m.name} className="card" style={{ overflow: 'visible' }}>
                <div style={{ height: '4px', background: m.accent, borderRadius: '1rem 1rem 0 0', margin: '-1px -1px 0' }} />
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: m.accentLight, border: `1.5px solid ${m.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {m.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: m.accent, background: m.accentLight, padding: '0.15rem 0.5rem', borderRadius: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' as const, display: 'inline-block', marginBottom: '0.3rem' }}>
                        {m.grades}
                      </span>
                      <h3 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--maroon)', lineHeight: 1.3 }}>{m.name}</h3>
                      <p style={{ fontSize: '0.78rem', color: '#888', fontWeight: 600 }}>{m.sub}</p>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {m.details.map((d) => (
                      <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#555', lineHeight: 1.5 }}>
                        <span style={{ color: m.accent, fontWeight: 800, flexShrink: 0 }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operation Models ── */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 className="section-heading">Operation <span style={{ color: 'var(--gold)' }}>Models</span></h2>
          <p className="section-subheading">Flexible ownership and management structures to match your vision</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {operationModels.map((m) => (
              <div key={m.title} style={{ background: 'linear-gradient(145deg, #4a0f0f, var(--maroon))', borderRadius: '1.25rem', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 8px 32px rgba(123,28,28,0.25)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{m.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--gold-light)', marginBottom: '0.65rem', lineHeight: 1.35 }}>{m.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Information ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">Key <span style={{ color: 'var(--gold)' }}>Information</span></h2>
          <p className="section-subheading">Everything you need to know before you begin</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
            {keyFacts.map((item, i) => (
              <div key={item.q} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))', color: 'white', fontWeight: 900, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--maroon)', marginBottom: '0.3rem' }}>{item.q}</p>
                  <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.65 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏫</div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Ready to Open Your School?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Take the first step towards opening your own DALIMSS Sunbeam school. Our team will guide you through every stage.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)' }}>
              Partner With Us
            </Link>
            <a href="/DALIMSS-Franchise-Application-Form.pdf" download style={{ border: '2px solid rgba(255,255,255,0.35)', color: 'white', padding: '0.875rem 2rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', background: 'rgba(255,255,255,0.06)' }}>
              Download Form
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
