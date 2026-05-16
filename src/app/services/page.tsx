import Link from 'next/link';

export const metadata = {
  title: 'Our Services | DALIMSS Sunbeam Educomp Ltd',
};

const services = [
  {
    href: '/services/franchise',
    icon: '🏫',
    badge: 'Most Popular',
    title: 'School Franchise',
    desc: 'Open your own DALIMSS Sunbeam school. Multiple models (Playschool to Grade 12) with comprehensive support from inception to operation.',
  },
  {
    href: '/services/curriculum',
    icon: '📚',
    badge: 'NEP 2020 Aligned',
    title: 'Curriculum & Setup',
    desc: 'NEP 2020-aligned CBSE curriculum, lesson planning, technology integration, and complete academic framework setup.',
  },
  {
    href: '/services/toddlers',
    icon: '🌸',
    badge: 'NCF-FS 2022',
    title: 'Toddlers n Kids',
    desc: 'DALIMSS Sunbeam Petals — our playschool franchise model for the youngest learners, aligned with NCF-FS 2022.',
  },
  {
    href: '/services/consultancy',
    icon: '💼',
    badge: 'Expert Support',
    title: 'Educational Consultancy',
    desc: 'Expert consultancy for schools — architectural, compliance, staffing, IT, marketing, and CBSE affiliation support.',
  },
];

export default function Services() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-subtitle">Holistic solutions for education — beyond the classroom</p>
        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 className="section-heading">What We Offer</h2>
          <p className="section-subheading">Choose the service that best fits your educational goals</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '0.5rem' }}>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  padding: '2rem 1.75rem',
                  borderRadius: '1.25rem',
                  background: 'white',
                  border: '1.5px solid #ebebeb',
                  height: '100%',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                  cursor: 'pointer',
                }} className="card">
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)',
                    borderRadius: '0.5rem',
                    padding: '0.2rem 0.65rem',
                    fontSize: '0.7rem', fontWeight: 700,
                    color: 'var(--gold-dark)',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    marginBottom: '1rem',
                  }}>
                    {s.badge}
                  </div>
                  <div style={{ fontSize: '2.75rem', marginBottom: '0.85rem', lineHeight: 1 }}>{s.icon}</div>
                  <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--maroon)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{s.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.75, marginBottom: '1.25rem' }}>{s.desc}</p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    color: 'var(--gold-dark)', fontSize: '0.85rem', fontWeight: 700,
                  }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--maroon-dark), var(--maroon))',
        padding: '3.5rem 1.5rem', textAlign: 'center',
      }}>
        <h2 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,2rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          Not sure which service fits you?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
          Our team will help you find the right model for your goals.
        </p>
        <Link href="/contact" style={{
          background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
          color: 'white', padding: '0.875rem 2rem',
          borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem',
          textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)',
        }}>
          Talk to Our Team
        </Link>
      </section>
    </main>
  );
}
