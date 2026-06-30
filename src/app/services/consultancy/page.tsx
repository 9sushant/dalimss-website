import Link from 'next/link';

export const metadata = {
  title: 'Educational Consultancy & Test Preparation | DALIMSS Sunbeam Educomp Ltd',
};

const services = [
  { icon: '🏗️', title: 'Architectural Consultancy', desc: 'Land survey assistance, building design, government approvals, and vendor contacts for school construction.' },
  { icon: '📋', title: 'Compliance & Affiliation', desc: 'CBSE SARAS portal applications, state recognition, essentiality certificates, and NOC assistance.' },
  { icon: '👥', title: 'Staffing & Recruitment', desc: 'Principal and teacher hiring, qualification verification, on-site supervision of recruitment process.' },
  { icon: '📢', title: 'Marketing & Branding', desc: 'School branding design, promotional materials for launch and admissions, media assistance.' },
  { icon: '💻', title: 'IT & ERP Implementation', desc: 'Setting up IT infrastructure, ERP systems, and web-related setup following DALIMSS standards.' },
  { icon: '🎓', title: 'Training Programs', desc: 'Extensive initial training and year-round professional development for teaching and non-teaching staff.' },
  { icon: '📊', title: 'Quality Audits', desc: 'Regular monitoring of education quality and administration with suggestive remediation plans.' },
  { icon: '🌐', title: 'Online Schooling', desc: 'Support for Sunbeam World School — our online learning platform for digital and hybrid education.' },
];

export default function Consultancy() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 55%, var(--maroon-light) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            Expert Guidance
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Educational <span style={{ color: 'var(--gold)' }}>Consultancy</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Holistic support for educational institutions at every stage — from groundbreaking to sustained growth and excellence.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 className="section-heading">Our Consultancy <span style={{ color: 'var(--gold)' }}>Services</span></h2>
          <p className="section-subheading">Eight pillars of support to build and grow a thriving school</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
            {services.map((s, i) => (
              <div key={s.title} className="card" style={{ flex: '1 1 270px', maxWidth: '360px', padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--gold-dark)', background: 'rgba(201,162,39,0.1)', padding: '0.1rem 0.45rem', borderRadius: '2rem' }}>0{i + 1}</span>
                    <h3 style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--maroon)' }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DDUGKY ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', borderRadius: '1.5rem', padding: '3rem', position: 'relative', overflow: 'hidden', boxShadow: '0 16px 48px rgba(165,28,28,0.3)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px', borderRadius: '1.5rem' }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'center' }}>
              <div style={{ fontSize: '4rem', background: 'rgba(201,162,39,0.15)', border: '2px solid rgba(201,162,39,0.3)', borderRadius: '50%', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                🌾
              </div>
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.2)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.25rem 0.85rem', fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.07em', textTransform: 'uppercase' as const, marginBottom: '0.75rem' }}>
                  Skill Development
                </div>
                <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.25rem,3vw,1.75rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  DDUGKY Skill Initiatives
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem', maxWidth: '520px' }}>
                  DALIMSS Sunbeam Educomp Ltd. operates DDUGKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana) skill development programs, empowering rural youth with industry-relevant skills and creating employment pathways.
                </p>
                <Link href="/contact" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 12px rgba(201,162,39,0.4)' }}>
                  Enquire About DDUGKY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Need Expert Guidance?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Our consultancy team is ready to help you at every stage — from concept to fully operational school.
          </p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.875rem 2.25rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)', display: 'inline-block' }}>
            Enquire About Our Services
          </Link>
        </div>
      </section>

    </main>
  );
}
