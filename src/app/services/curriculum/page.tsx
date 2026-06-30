import Link from 'next/link';

export const metadata = {
  title: 'School Curriculum, Syllabus & Setup | DALIMSS Sunbeam Educomp Ltd',
};

const features = [
  { icon: '📖', title: 'CBSE-Based Curriculum', desc: 'Aligned with NEP 2020 guidelines, implementing a holistic and competency-based curriculum for every grade.' },
  { icon: '🧪', title: 'Experiential Learning', desc: 'Hands-on experiments, field trips, project-based learning, and activity-centred methods that spark curiosity.' },
  { icon: '💻', title: 'Technology-Enabled', desc: 'Digital classrooms, AI-powered smart boards, ERP systems, and online learning tools integrated seamlessly.' },
  { icon: '🎨', title: 'Co-Curricular', desc: 'Sports, arts, music, dance, debates, and Olympiad participation woven into everyday school life.' },
  { icon: '📋', title: 'Lesson Planning', desc: 'Monthly, quarterly, and annual academic plans with detailed lesson planning support provided to every school.' },
  { icon: '📊', title: 'Assessment & Evaluation', desc: 'Structured periodic assessments, continuous evaluation, and progress monitoring systems for every learner.' },
];

const provisions = [
  { title: 'Academic Material', icon: '📚', items: ['Best-in-class books and reference materials', 'Teaching resources and tools', 'Course structure per NEP 2020 guidelines', 'Digital learning materials'] },
  { title: 'Advanced Support', icon: '🧑‍🏫', items: ['Lesson planning assistance', 'Time table preparation', 'Syllabus planning', 'Innovative teaching-learning pedagogies'] },
  { title: 'Technology Setup', icon: '🖥️', items: ['IT infrastructure support', 'ERP software (same as all DALIMSS branches)', 'Smart board installation guidance', 'Web-related setup'] },
  { title: 'Operational SOPs', icon: '📋', items: ['Teaching procedures', 'Administrative processes', 'Management guidelines', 'Operational manuals'] },
];

export default function Curriculum() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 55%, var(--maroon-light) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            NEP 2020 Aligned
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Curriculum, Syllabus &amp; <span style={{ color: 'var(--gold)' }}>Setup</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Complete academic framework aligned with NEP 2020 and CBSE standards — from curriculum design to classroom implementation.
          </p>
        </div>
      </section>

      {/* ── Academic Framework ── */}
      <section style={{ background: 'white', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">Our Academic <span style={{ color: 'var(--gold)' }}>Framework</span></h2>
          <p className="section-subheading">Comprehensive support from curriculum design to day-to-day implementation</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {features.map((f) => (
              <div key={f.title} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Provide ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">What We <span style={{ color: 'var(--gold)' }}>Provide</span></h2>
          <p className="section-subheading">Everything your school needs to deliver world-class education</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {provisions.map((section) => (
              <div key={section.title} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '2px solid var(--gold)' }}>
                  <span style={{ fontSize: '1.4rem' }}>{section.icon}</span>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--maroon)' }}>{section.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {section.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#555', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📖</div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Build a World-Class Curriculum
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Let our academic team help you design, implement and continuously improve your school's educational framework.
          </p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.875rem 2.25rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)', display: 'inline-block' }}>
            Get Academic Support
          </Link>
        </div>
      </section>

    </main>
  );
}
