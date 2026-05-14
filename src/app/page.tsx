import Link from 'next/link';
import { Award, Users, School, MapPin, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
  { icon: Award, value: '50+', label: 'Years Legacy' },
  { icon: MapPin, value: '20+', label: 'Cities' },
  { icon: School, value: '25+', label: 'Schools' },
  { icon: Users, value: '15,000+', label: 'Students' },
  { icon: GraduationCap, value: '18,000+', label: 'Alumni' },
  { icon: BookOpen, value: '1,000+', label: 'Educators' },
];

const values = [
  { icon: '💡', title: 'Promote Creativity & Innovation', desc: 'Fostering out-of-the-box thinking in every learner.' },
  { icon: '🏆', title: 'Committed to Excellence', desc: 'Setting the highest standards in academics and character.' },
  { icon: '⚖️', title: 'Value Integrity & Honesty', desc: 'Building trust through transparent and ethical practices.' },
  { icon: '🤝', title: 'Encourage Teamwork', desc: 'Cultivating collaboration and mutual respect.' },
  { icon: '📚', title: 'Foster Lifelong Learning', desc: 'Inspiring a continuous journey of growth and discovery.' },
];

const steps = [
  { num: '01', title: 'Express Interest', desc: 'You are deeply interested in setting up a school on owned land.' },
  { num: '02', title: 'Site Visit', desc: 'Site visit and feasibility study by DALIMSS Team.' },
  { num: '03', title: 'Details Shared', desc: 'Team will share details of infrastructure, academics and mandatory clearances.' },
  { num: '04', title: 'Document Review', desc: 'All documents will be cross examined for Agreement approval.' },
  { num: '05', title: 'Agreement', desc: 'Signature of Agreement.' },
  { num: '06', title: 'Pre-Launch Support', desc: 'Complete assistance and support in pre-launch — academic, administrative and functional.' },
  { num: '07', title: 'Academic Session', desc: 'Beginning of Academic Session of school.' },
];

const preLaunch = [
  { num: '01', title: 'Architectural Support', desc: 'Assistance from our architects in land survey, construction plan, government approvals.' },
  { num: '02', title: 'Marketing & Branding', desc: 'Branding design for building, drop-downs, standee, sunboard, letter heads and other media.' },
  { num: '03', title: 'Hiring Support', desc: 'Sharing and on-site supervision of hiring teaching and non-teaching staff.' },
  { num: '04', title: 'SOPs & Procedures', desc: 'Sharing Standard Operating Procedure for teaching, administration and management.' },
  { num: '05', title: 'Business Plans', desc: 'Sharing monthly, quarterly and annual business and academic plans.' },
];

const postLaunch = [
  { num: '01', title: 'Staff Training', desc: 'Continuous training on KRAs and NEP 2020 along with evolving skill demands.' },
  { num: '02', title: 'CBSE Curriculum', desc: 'Implementation of CBSE-based curriculum along with sports, co-curricular and hobby-based activities.' },
  { num: '03', title: 'Quality Monitoring', desc: 'Monitoring quality of education and administration through regular audits and suggestive remediations.' },
  { num: '04', title: 'CBSE Affiliation', desc: 'Complete assistance in compliance of CBSE regulations and bylaws for easy clearance.' },
  { num: '05', title: 'IT & ERP Support', desc: 'The school follows IT and ERP software used at all other DALIMSS branches.' },
];

const awards = [
  { title: 'Education World Award', desc: 'For The Best School In UP' },
  { title: 'AcadElite Award 2025', desc: 'Excellence in Education' },
  { title: 'No.1 School in Varanasi', desc: 'India Pre School Grand Jury Awards 2025-26' },
  { title: 'Outstanding Day-cum-Boarding', desc: 'DALIMSS Sunbeam School & Hostel Rohania, Varanasi' },
  { title: 'Education Resources & Technology', desc: 'Expo at ETTECHX' },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ backgroundColor: 'var(--maroon)' }}>
        <div style={{ height: '4px', backgroundColor: 'var(--gold)' }} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p style={{ color: '#ddd', fontSize: '1rem', marginBottom: '0.5rem' }}>In an</p>
              <h1 style={{ color: 'var(--gold)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
                evolving and volatile
              </h1>
              <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,4.5rem)', letterSpacing: '-1px', lineHeight: 1 }}>
                WORLD
              </h2>
              <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontStyle: 'italic', lineHeight: 1.3, marginTop: '0.5rem' }}>
                Explore growth
              </p>
              <p style={{ color: 'white', fontSize: '1.25rem', fontStyle: 'italic' }}>in</p>
              <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontStyle: 'italic' }}>
                education
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="px-6 py-3 rounded font-bold text-sm" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                  Apply For Franchise →
                </Link>
                <Link href="/services/franchise" className="px-6 py-3 rounded font-bold text-sm border-2" style={{ borderColor: 'white', color: 'white' }}>
                  Download Brochure
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-8" style={{ color: '#ddd', fontSize: '0.875rem' }}>
                <span>📧 info@dalimss.com</span>
                <span>📞 9277802103</span>
              </div>
            </div>

            {/* Partner With Us Form */}
            <div className="rounded-lg overflow-hidden shadow-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,162,39,0.3)' }}>
              <div className="text-center py-3 px-4 font-bold text-sm tracking-widest" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                PARTNER WITH US
              </div>
              <form className="p-4 space-y-3" action="/contact">
                {[
                  { label: 'Name', type: 'text', name: 'name' },
                  { label: 'E-Mail', type: 'email', name: 'email' },
                  { label: 'Contact No.', type: 'tel', name: 'phone' },
                  { label: 'School Type', type: 'text', name: 'school_type' },
                  { label: 'State', type: 'text', name: 'state' },
                  { label: 'City', type: 'text', name: 'city' },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className="w-full px-3 py-2 text-sm rounded outline-none"
                    style={{ backgroundColor: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: 'white' }}
                  />
                ))}
                <textarea
                  name="detail"
                  placeholder="Detail"
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded outline-none resize-none"
                  style={{ backgroundColor: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.4)', color: 'white' }}
                />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 py-2 text-sm font-bold rounded" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                    Submit
                  </button>
                  <button type="reset" className="flex-1 py-2 text-sm font-bold rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DALIMSS */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">
            Why Choose <span style={{ color: 'var(--maroon)' }}>Dalimss Sunbeam</span> Schools?
          </h2>
          <p className="section-subheading">A legacy of excellence across India</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center p-4 rounded-xl shadow-sm text-center" style={{ backgroundColor: 'white', border: '2px solid #e8e8e8' }}>
                <Icon size={28} style={{ color: 'var(--maroon)', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--maroon)' }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL YOU NEED */}
      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-heading">
            All You <span style={{ color: 'var(--gold)' }}>NEED</span> To Get <span style={{ color: 'var(--maroon)' }}>STARTED</span>
          </h2>
          <p className="section-subheading">Simple requirements to begin your journey with us</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              { icon: '🏠', title: '1.5 – 2 Acre Land', desc: 'Own or lease land in a suitable location, OR an existing school you wish to upgrade.' },
              { icon: '💰', title: '2 Cr to 8 Cr Investment', desc: 'To invest in infrastructure development and school setup.' },
              { icon: '🌱', title: 'Passion to Grow', desc: 'A passion to grow and upscale in the education sector.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-center shadow-md" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#ddd', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">You Have Made The Right ✅ Choice</h2>
          <p className="section-subheading" style={{ fontStyle: 'italic' }}>Because You …</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div key={v.title} className="p-5 rounded-xl text-center shadow-sm" style={{ backgroundColor: 'white', border: '2px solid #e0e0e0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{v.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--maroon)', marginBottom: '0.4rem' }}>{v.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Our Awards and Achievements</h2>
          <p className="section-subheading">Recognition that validates our commitment to excellence</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {awards.map((a) => (
              <div key={a.title} className="p-5 rounded-xl text-center shadow-md" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏆</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--gold)', marginBottom: '0.4rem', fontStyle: 'italic' }}>{a.title}</h4>
                <p style={{ fontSize: '0.75rem', color: '#ddd', lineHeight: 1.5, fontStyle: 'italic' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 STEPS */}
      <section style={{ backgroundColor: '#f9f9f9' }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading">Coming Together</h2>
          <p className="section-subheading font-bold">Stages In The Process</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-md mb-3"
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--gold)' : 'var(--maroon)', color: 'white', border: '3px solid white' }}
                >
                  {step.num}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--maroon)', marginBottom: '0.25rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.65rem', color: '#666', lineHeight: 1.4 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT ROADMAP */}
      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>Support Service Roadmap</h3>
              <p style={{ color: 'var(--gold)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.9rem' }}>PRE LAUNCH — Smooth launching ground</p>
              <div className="space-y-4">
                {preLaunch.map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                      {item.num}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--maroon)' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>Support Service Roadmap</h3>
              <p style={{ color: '#16a34a', fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.9rem' }}>POST LAUNCH — Robust growth plan</p>
              <div className="space-y-4">
                {postLaunch.map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: 'var(--maroon)', color: 'white' }}>
                      {item.num}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--maroon)' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center" style={{ backgroundColor: 'var(--maroon)' }}>
        <h2 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(1.5rem,4vw,2.5rem)', marginBottom: '0.75rem' }}>
          Ready to Explore Growth in Education?
        </h2>
        <p style={{ color: '#ddd', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Join the DALIMSS Sunbeam family and be part of a 50+ year legacy of transforming education across India.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-8 py-3 rounded font-bold" style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
            Partner With Us
          </Link>
          <Link href="/associate-schools" className="px-8 py-3 rounded font-bold border-2" style={{ borderColor: 'white', color: 'white' }}>
            View Our Schools
          </Link>
        </div>
      </section>
    </main>
  );
}
