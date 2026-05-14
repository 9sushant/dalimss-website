export const metadata = {
  title: 'School Curriculum, Syllabus & Setup | DALIMSS Sunbeam Educomp Ltd',
};

const features = [
  { icon: '📖', title: 'CBSE-Based Curriculum', desc: 'Aligned with NEP 2020 guidelines, implementing a holistic and competency-based curriculum.' },
  { icon: '🧪', title: 'Experiential Learning', desc: 'Hands-on experiments, field trips, project-based learning, and activity-centred methods.' },
  { icon: '💻', title: 'Technology-Enabled', desc: 'Digital classrooms, AI-powered smart boards, ERP systems, and online learning tools.' },
  { icon: '🎨', title: 'Co-Curricular', desc: 'Sports, arts, music, dance, debates, and Olympiad participation integrated into school life.' },
  { icon: '📋', title: 'Lesson Planning', desc: 'Monthly, quarterly, and annual academic plans with detailed lesson planning support.' },
  { icon: '📊', title: 'Assessment & Evaluation', desc: 'Structured periodic assessments, continuous evaluation, and progress monitoring systems.' },
];

export default function Curriculum() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            School Curriculum, Syllabus & Setup
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Complete academic framework aligned with NEP 2020 and CBSE standards
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Our Academic Framework</h2>
          <p className="section-subheading">Comprehensive support from curriculum design to implementation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--cream)', border: '2px solid #e8e8e8' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { title: 'Academic Material', items: ['Best-in-class books and reference materials', 'Teaching resources and tools', 'Course structure per NEP 2020 guidelines', 'Digital learning materials'] },
              { title: 'Advanced Support', items: ['Lesson planning assistance', 'Time table preparation', 'Syllabus planning', 'Innovative teaching-learning pedagogies'] },
              { title: 'Technology Setup', items: ['IT infrastructure support', 'ERP software (same as all DALIMSS branches)', 'Smart board installation guidance', 'Web-related setup'] },
              { title: 'Operational SOPs', items: ['Teaching procedures', 'Administrative processes', 'Management guidelines', 'Operational manuals'] },
            ].map((section) => (
              <div key={section.title} className="p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'white' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--maroon)', marginBottom: '0.75rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.85rem', color: '#555' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
