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
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Educational Consultancy & Test Preparation
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Expert guidance for schools, educators, and institutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Our Consultancy Services</h2>
          <p className="section-subheading">Holistic support for educational institutions at every stage</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-5 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--cream)', border: '1px solid #e0e0e0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--maroon)', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: 'white', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem' }}>DDUGKY Skill Initiatives</h2>
          <p style={{ color: '#ddd', lineHeight: 1.8, marginBottom: '2rem' }}>
            DALIMSS Sunbeam Educomp Ltd. also operates DDUGKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana) skill development
            programs, empowering rural youth with industry-relevant skills and creating employment pathways.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded font-bold" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
            Enquire About Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}
