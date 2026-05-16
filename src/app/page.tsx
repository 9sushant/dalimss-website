import Link from 'next/link';
import { Award, Users, School, MapPin, GraduationCap, BookOpen } from 'lucide-react';

const stats = [
  { icon: Award,          value: '50+',    label: 'Years Legacy' },
  { icon: MapPin,         value: '20+',    label: 'Cities' },
  { icon: School,         value: '25+',    label: 'Schools' },
  { icon: Users,          value: '15,000+',label: 'Students' },
  { icon: GraduationCap,  value: '18,000+',label: 'Alumni' },
  { icon: BookOpen,       value: '1,000+', label: 'Educators' },
];

const values = [
  { icon: '💡', title: 'Creativity & Innovation',  desc: 'Fostering out-of-the-box thinking in every learner.' },
  { icon: '🏆', title: 'Committed to Excellence',  desc: 'Setting the highest standards in academics and character.' },
  { icon: '⚖️', title: 'Integrity & Honesty',       desc: 'Building trust through transparent and ethical practices.' },
  { icon: '🤝', title: 'Encourage Teamwork',        desc: 'Cultivating collaboration and mutual respect.' },
  { icon: '📚', title: 'Lifelong Learning',         desc: 'Inspiring a continuous journey of growth and discovery.' },
];

const steps = [
  { num: '01', title: 'Express Interest',   desc: 'Deeply interested in setting up a school on owned land.' },
  { num: '02', title: 'Site Visit',         desc: 'Site visit and feasibility study by DALIMSS team.' },
  { num: '03', title: 'Details Shared',     desc: 'Infrastructure, academics and mandatory clearances.' },
  { num: '04', title: 'Document Review',    desc: 'All documents cross-examined for Agreement approval.' },
  { num: '05', title: 'Agreement',          desc: 'Signature of Agreement.' },
  { num: '06', title: 'Pre-Launch Support', desc: 'Academic, administrative and functional assistance.' },
  { num: '07', title: 'Academic Session',   desc: 'Beginning of the Academic Session of school.' },
];

const preLaunch = [
  { num: '01', title: 'Architectural Support', desc: 'Land survey, construction plan, government approvals.' },
  { num: '02', title: 'Marketing & Branding',  desc: 'Building branding, signage, standee, letter heads & media.' },
  { num: '03', title: 'Hiring Support',         desc: 'On-site supervision of hiring teaching & non-teaching staff.' },
  { num: '04', title: 'SOPs & Procedures',      desc: 'Standard Operating Procedure for teaching and administration.' },
  { num: '05', title: 'Business Plans',         desc: 'Monthly, quarterly and annual business and academic plans.' },
];

const postLaunch = [
  { num: '01', title: 'Staff Training',    desc: 'Continuous training on KRAs and NEP 2020 skill demands.' },
  { num: '02', title: 'CBSE Curriculum',   desc: 'CBSE curriculum with sports, co-curricular and hobby activities.' },
  { num: '03', title: 'Quality Monitoring',desc: 'Regular audits and suggestive remediations for quality.' },
  { num: '04', title: 'CBSE Affiliation',  desc: 'Compliance assistance with CBSE regulations and bylaws.' },
  { num: '05', title: 'IT & ERP Support',  desc: 'ERP software aligned with all DALIMSS branches.' },
];

const awards = [
  { icon: '🏅', title: 'Education World Award',          desc: 'Best School In UP' },
  { icon: '🥇', title: 'AcadElite Award 2025',           desc: 'Excellence in Education' },
  { icon: '⭐', title: 'No.1 School in Varanasi',        desc: 'India Pre School Grand Jury Awards 2025–26' },
  { icon: '🏆', title: 'Outstanding Day-cum-Boarding',   desc: 'Dalimss Sunbeam School & Hostel, Rohania' },
  { icon: '🎖️', title: 'Education Resources & Tech',     desc: 'Expo Recognition at ETTECHX' },
];

export default function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section style={{
        background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        {/* Gold top bar */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />

        <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.5rem 3rem' }}>
          <div className="hero-grid">

            {/* Left: Headline */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(201,162,39,0.15)',
                border: '1px solid rgba(201,162,39,0.35)',
                borderRadius: '2rem',
                padding: '0.3rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--gold-light)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                50+ Years of Educational Excellence
              </div>

              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: 500 }}>
                In an
              </p>
              <h1 style={{
                color: 'var(--gold)',
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 5.5vw, 3.75rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}>
                evolving &amp; volatile
              </h1>
              <h2 style={{
                color: 'white',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 7.5vw, 5.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                margin: '0.1rem 0',
              }}>
                WORLD
              </h2>
              <p style={{
                color: 'var(--gold-light)',
                fontWeight: 700,
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontStyle: 'italic',
                lineHeight: 1.2,
                marginTop: '0.5rem',
              }}>
                Explore growth <span style={{ color: 'white' }}>in</span> education
              </p>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginTop: '1.25rem', maxWidth: '480px', lineHeight: 1.7 }}>
                DALIMSS Sunbeam — India's trusted school franchise network with 25+ schools, 15,000+ students and a 50-year legacy.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                <Link href="/contact" style={{
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  color: 'white',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(201,162,39,0.4)',
                  letterSpacing: '0.01em',
                }}>
                  Apply For Franchise →
                </Link>
                <Link href="/services/franchise" style={{
                  border: '2px solid rgba(255,255,255,0.4)',
                  color: 'white',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(4px)',
                  background: 'rgba(255,255,255,0.06)',
                }}>
                  Download Brochure
                </Link>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.75rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                <span>📧 info@dalimss.com</span>
                <span>📞 9277802103</span>
              </div>
            </div>

            {/* Right: Partner Form */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,162,39,0.25)',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              maxWidth: '420px',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                padding: '1rem 1.5rem',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: 'white',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Partner With Us
              </div>
              <form style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }} action="/contact">
                {[
                  { label: 'Full Name', type: 'text', name: 'name' },
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
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      fontSize: '0.875rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(201,162,39,0.3)',
                      background: 'rgba(255,255,255,0.08)',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                ))}
                <textarea
                  name="detail"
                  placeholder="Your message / detail"
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    fontSize: '0.875rem',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(201,162,39,0.3)',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'inherit',
                  }}
                />
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button type="submit" style={{
                    flex: 1, padding: '0.75rem',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                    color: 'white', fontWeight: 700, fontSize: '0.875rem',
                    borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>
                    Submit
                  </button>
                  <button type="reset" style={{
                    flex: 1, padding: '0.75rem',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.875rem',
                    borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>
                    Reset
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section style={{ background: 'white', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">
            Why Choose <span style={{ color: 'var(--gold)' }}>DALIMSS Sunbeam</span>?
          </h2>
          <p className="section-subheading">A legacy of excellence — shaping education across India</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            marginTop: '0.5rem',
          }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1.5rem 1rem',
                borderRadius: '1rem',
                background: 'white',
                border: '1.5px solid #ebebeb',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }} className="card">
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <Icon size={22} style={{ color: 'var(--maroon)' }} />
                </div>
                <div style={{ fontWeight: 900, fontSize: '1.6rem', color: 'var(--maroon)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: '#777', fontWeight: 600, marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REQUIREMENTS ═══ */}
      <section style={{ background: 'var(--cream)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading">All You <span style={{ color: 'var(--gold)' }}>Need</span> to Get Started</h2>
          <p className="section-subheading">Simple requirements to begin your journey with us</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '0.5rem' }}>
            {[
              { icon: '🏠', title: '1.5 – 2 Acre Land',       desc: 'Own or lease land in a suitable location, or an existing school you wish to upgrade.' },
              { icon: '💰', title: '₹2 Cr – ₹8 Cr Investment', desc: 'To invest in infrastructure development and complete school setup.' },
              { icon: '🌱', title: 'Passion to Grow',           desc: 'A genuine passion to grow and upscale in the education sector.' },
            ].map((item) => (
              <div key={item.title} style={{
                padding: '2rem 1.5rem',
                borderRadius: '1.25rem',
                background: 'linear-gradient(145deg, var(--maroon-dark), var(--maroon))',
                color: 'white',
                boxShadow: '0 8px 32px rgba(123,28,28,0.25)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--gold-light)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section style={{ background: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">You Made the Right Choice ✅</h2>
          <p className="section-subheading" style={{ fontStyle: 'italic' }}>Because you believe in…</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            {values.map((v) => (
              <div key={v.title} style={{
                padding: '1.75rem 1.25rem',
                borderRadius: '1rem',
                background: 'white',
                border: '1.5px solid #ebebeb',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }} className="card">
                <div style={{
                  fontSize: '2rem',
                  width: '56px', height: '56px',
                  background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.85rem',
                }}>{v.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--maroon)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{v.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AWARDS ═══ */}
      <section style={{ background: 'linear-gradient(135deg, #4a0f0f 0%, var(--maroon) 100%)', padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ color: 'white' }}>
            Awards &amp; Achievements
          </h2>
          <p className="section-subheading" style={{ color: 'rgba(255,255,255,0.6)' }}>Recognition that validates our commitment to excellence</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            {awards.map((a) => (
              <div key={a.title} style={{
                padding: '1.75rem 1.25rem',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,162,39,0.25)',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--gold-light)', marginBottom: '0.4rem', lineHeight: 1.35 }}>{a.title}</h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, fontStyle: 'italic' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7-STEP PROCESS ═══ */}
      <section style={{ background: '#f8f8f8', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">Our Partnership Process</h2>
          <p className="section-subheading">Simple, transparent stages to launch your DALIMSS Sunbeam school</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0.5rem' }}>
                <div style={{
                  width: '54px', height: '54px',
                  borderRadius: '50%',
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, var(--gold-dark), var(--gold))'
                    : 'linear-gradient(135deg, var(--maroon-dark), var(--maroon))',
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.1rem',
                  boxShadow: i % 2 === 0 ? '0 4px 16px rgba(201,162,39,0.35)' : '0 4px 16px rgba(123,28,28,0.3)',
                  flexShrink: 0,
                  marginBottom: '0.75rem',
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '0.78rem', color: 'var(--maroon)', marginBottom: '0.3rem', lineHeight: 1.3 }}>{step.title}</h4>
                <p style={{ fontSize: '0.68rem', color: '#666', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SUPPORT ROADMAP ═══ */}
      <section style={{ background: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 className="section-heading">Support Service Roadmap</h2>
          <p className="section-subheading">End-to-end support — from groundbreaking to growth</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '1rem' }}>

            {/* PRE LAUNCH */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #fdf4dc, #ffeeba)',
                padding: '0.5rem 1.1rem',
                borderRadius: '2rem',
                marginBottom: '1.25rem',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  🚀 Pre Launch
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1.25rem', fontStyle: 'italic' }}>Smooth launching ground</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {preLaunch.map((item) => (
                  <div key={item.num} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                      color: 'white', fontWeight: 800, fontSize: '0.75rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {item.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--maroon)', lineHeight: 1.3 }}>{item.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.55, marginTop: '0.2rem' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* POST LAUNCH */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                padding: '0.5rem 1.1rem',
                borderRadius: '2rem',
                marginBottom: '1.25rem',
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  🌱 Post Launch
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1.25rem', fontStyle: 'italic' }}>Robust growth plan</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {postLaunch.map((item) => (
                  <div key={item.num} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, var(--maroon-dark), var(--maroon))',
                      color: 'white', fontWeight: 800, fontSize: '0.75rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {item.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--maroon)', lineHeight: 1.3 }}>{item.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.55, marginTop: '0.2rem' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)',
        padding: '4.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
            letterSpacing: '-0.03em', lineHeight: 1.15,
            marginBottom: '0.85rem',
          }}>
            Ready to Explore Growth<br />in Education?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '1rem' }}>
            Join the DALIMSS Sunbeam family and be part of a 50+ year legacy transforming education across India.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              color: 'white', padding: '0.875rem 2rem',
              borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', letterSpacing: '0.01em',
              boxShadow: '0 4px 16px rgba(201,162,39,0.4)',
            }}>
              Partner With Us
            </Link>
            <Link href="/associate-schools" style={{
              border: '2px solid rgba(255,255,255,0.35)',
              color: 'white', padding: '0.875rem 2rem',
              borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', background: 'rgba(255,255,255,0.06)',
            }}>
              View Our Schools
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
