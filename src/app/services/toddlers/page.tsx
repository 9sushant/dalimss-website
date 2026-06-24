import Link from 'next/link';
import ContactTrigger from '@/components/ContactTrigger';

export const metadata = {
  title: 'Toddlers n Kids | DALIMSS Sunbeam Educomp Ltd',
};

const spaceReqs = [
  { label: 'Small Setup', value: '1,000 – 1,500 sq. ft.' },
  { label: 'Medium / Large Setup', value: '1,500 – 3,000 sq. ft.' },
  { label: 'Ideal Location', value: 'Residential area (ground floor preferred)' },
  { label: 'Area Type', value: 'High-population, safe, easily accessible areas' },
];

const infrastructure = [
  'Well-ventilated, airy, and safe classrooms',
  'Small, secure outdoor space for play',
  'Child-friendly toilets and safe drinking water',
  'Hygienic sanitation facilities',
  'Compliance with local building codes and fire safety',
  'Legal documentation (rent agreement / ownership proof)',
];

const permissions = [
  { icon: '📝', label: 'Business Registration' },
  { icon: '🏗️', label: 'Land Use & Building Approvals' },
  { icon: '🔥', label: 'Fire Safety Certificate / NOC' },
  { icon: '🏥', label: 'Health & Sanitation Clearances' },
  { icon: '🛡️', label: 'Child Protection & Staff Checks' },
  { icon: '🏛️', label: 'Establishment Registration' },
  { icon: '⚖️', label: 'Labour Compliance' },
  { icon: '✅', label: 'State Authority Recognition' },
];

export default function Toddlers() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            Playgroup / Nursery Franchise
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Toddlers n <span style={{ color: 'var(--gold)' }}>Kids</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            DALIMSS Sunbeam Petals — a nurturing, play-based playschool franchise aligned with NCF-FS 2022 and NEP 2020.
          </p>
        </div>
      </section>

      {/* ── Space & Infrastructure ── */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">Setup <span style={{ color: 'var(--gold)' }}>Requirements</span></h2>
          <p className="section-subheading">Simple, practical requirements to launch your playschool</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>

            {/* Space */}
            <div className="card" style={{ flex: '1 1 450px', maxWidth: '540px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>📐</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--maroon)' }}>Space Requirements</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {spaceReqs.map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'var(--cream)', fontSize: '0.82rem' }}>
                    <span style={{ color: 'var(--maroon)', fontWeight: 700 }}>{item.label}</span>
                    <span style={{ color: '#555', textAlign: 'right' as const }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="card" style={{ flex: '1 1 450px', maxWidth: '540px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🏫</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--maroon)' }}>Essential Infrastructure</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {infrastructure.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#555', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Legal Permissions ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 className="section-heading">Legal <span style={{ color: 'var(--gold)' }}>Permissions</span> Required</h2>
          <p className="section-subheading">Core approvals needed to run a compliant playschool</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            {permissions.map((perm) => (
              <div key={perm.label} style={{ flex: '1 1 180px', maxWidth: '240px', background: 'linear-gradient(145deg, #4a0f0f, var(--maroon))', borderRadius: '1rem', padding: '1.5rem 1rem', textAlign: 'center', boxShadow: '0 4px 16px rgba(123,28,28,0.2)' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{perm.icon}</div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold-light)', lineHeight: 1.4 }}>{perm.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative', maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Open a Playschool with DALIMSS
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Our playschool curriculum focuses on play-based, activity-centred learning with proper teacher-child ratios and continuous professional development.
          </p>
          <ContactTrigger style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.875rem 2.25rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)', display: 'inline-block', border: 'none' }}>
            Enquire Now
          </ContactTrigger>
        </div>
      </section>

    </main>
  );
}
