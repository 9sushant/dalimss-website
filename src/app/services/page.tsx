import Link from 'next/link';

export const metadata = {
  title: 'Our Services | DALIMSS Sunbeam Educomp Ltd',
};

const services = [
  {
    href: '/services/franchise',
    icon: '🏫',
    title: 'Dalimss Sunbeam School Franchise',
    desc: 'Open your own DALIMSS Sunbeam school. We offer multiple models (Playschool to Grade 12) with comprehensive support from inception to operation.',
  },
  {
    href: '/services/curriculum',
    icon: '📚',
    title: 'School Curriculum, Syllabus & Setup',
    desc: 'NEP 2020-aligned CBSE curriculum, lesson planning, technology integration, and complete academic framework setup.',
  },
  {
    href: '/services/toddlers',
    icon: '🌸',
    title: 'Toddlers n Kids',
    desc: 'DALIMSS Sunbeam Petals — our playschool franchise model for the youngest learners, aligned with NCF-FS 2022.',
  },
  {
    href: '/services/consultancy',
    icon: '💼',
    title: 'Educational Consultancy & Test Preparation',
    desc: 'Expert consultancy for schools — architectural, compliance, staffing, IT, marketing, and CBSE affiliation support.',
  },
];

export default function Services() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Our Services
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Holistic solutions for education — beyond the classroom
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block p-7 rounded-2xl shadow-md group"
                style={{ backgroundColor: 'var(--cream)', border: '2px solid #e0e0e0', textDecoration: 'none', transition: 'border-color 0.2s' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h2 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>{s.title}</h2>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 700 }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
