import Link from 'next/link';

export const metadata = {
  title: 'Toddlers n Kids | DALIMSS Sunbeam Educomp Ltd',
};

export default function Toddlers() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Toddlers n Kids
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            DALIMSS Sunbeam Petals — Playschool Franchise
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">DALIMSS Sunbeam Petals</h2>
          <p className="section-subheading">A nurturing start for the youngest learners</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--maroon)', marginBottom: '1rem' }}>Space Requirements</h3>
              <div className="space-y-3">
                {[
                  { label: 'Small Setup', value: '1,000 – 1,500 sq. ft.' },
                  { label: 'Medium / Large Setup', value: '1,500 – 3,000 sq. ft.' },
                  { label: 'Ideal Location', value: 'Residential area (ground floor preferred)' },
                  { label: 'High-population, safe, easily accessible areas' , value: '' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between p-3 rounded" style={{ backgroundColor: 'var(--cream)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--maroon)', fontWeight: 600 }}>{item.label}</span>
                    {item.value && <span style={{ color: '#555' }}>{item.value}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--maroon)', marginBottom: '1rem' }}>Essential Infrastructure</h3>
              <ul className="space-y-2">
                {[
                  'Well-ventilated, airy, and safe classrooms',
                  'Small, secure outdoor space for play',
                  'Child-friendly toilets and safe drinking water',
                  'Hygienic sanitation facilities',
                  'Compliance with local building codes and fire safety',
                  'Legal documentation (rent agreement / ownership proof)',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start" style={{ fontSize: '0.875rem', color: '#555' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--maroon)', marginBottom: '1rem' }}>Core Legal Permissions Required</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                'Business Registration',
                'Land Use & Building Approvals',
                'Fire Safety Certificate / NOC',
                'Health & Sanitation Clearances',
                'Child Protection & Staff Checks',
                'Establishment Registration',
                'Labour Compliance',
                'State Authority Recognition',
              ].map((perm) => (
                <div key={perm} className="p-3 rounded text-center text-xs font-semibold" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                  {perm}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: 'var(--cream)', border: '2px solid var(--gold)' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '1rem' }}>Open a Playschool with DALIMSS</h3>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Aligned with NCF-FS (2022) and NEP 2020, our playschool curriculum focuses on play-based, activity-centred learning
              with proper teacher-child ratios and continuous professional development.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded font-bold" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
