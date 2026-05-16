export const metadata = {
  title: 'About Us | DALIMSS Sunbeam Educomp Ltd',
  description: 'Learn about the 50+ year history of DALIMSS Sunbeam Educomp Limited, our leadership, vision and mission.',
};

export default function AboutUs() {
  return (
    <main>

      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-subtitle">50+ years of transforming education across India</p>
        </div>
      </div>

      {/* Our Story */}
      <section id="story" style={{ background: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'left' }}>Our Story</h2>
          <div style={{ height: '3px', width: '56px', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: '2px', marginBottom: '1.75rem' }} />
          <div style={{ color: '#374151', lineHeight: 1.85, fontSize: '0.975rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <p>
              Sunbeam started in <strong style={{ color: 'var(--maroon)' }}>1972</strong> with a simple mission and a rented apartment. Founded by visionary educators{' '}
              <strong>Dr. Amrit Lal 'Ishrat' Madhok and Mrs. Deesh 'Ishrat' Madhok</strong>, the school's rise was meteoric —
              evolving from a small startup into a premier educational landmark in Varanasi.
            </p>
            <p>
              In 1993–1994 we branched out from the parent Sunbeam schools and started our own Sunbeam School, first located
              in Varanasi at Lahurabir, afterwards named{' '}
              <strong style={{ color: 'var(--maroon)' }}>'Dr Amrit Lal Ishrat Memorial Sunbeam School and Hostel'</strong>{' '}
              — <strong>DALIMSS Sunbeam Schools</strong>. Today the group proudly serves at{' '}
              <em>Sigra, Ramkatora, Rohania, Paharia, DIG Colony, MohiniKunj, Rohania Hostel</em> and NTPC Tanda at Ambedkar Nagar.
            </p>
            <p>
              Under the able guidance of <strong>Dr. Pradeep 'BABA' Madhok — President</strong> and{' '}
              <strong>Mrs. Pooja Madhok — Director</strong>, the school is striding ahead towards greater growth,
              reiterating its position as the most eminent academic institution in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section id="chairman" style={{ background: 'var(--cream)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textAlign: 'left' }}>Chairman's Message</h2>
          <div style={{ height: '3px', width: '56px', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: '2px', marginBottom: '1.75rem' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>
            <div style={{
              width: '140px', height: '168px',
              borderRadius: '1rem',
              background: 'linear-gradient(145deg, #e8d5d5, #d4b5b5)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              fontSize: '3.5rem',
              boxShadow: '0 8px 24px rgba(123,28,28,0.15)',
              flexShrink: 0,
              border: '3px solid white',
            }}>
              <span style={{ marginBottom: '0.5rem' }}>👨‍💼</span>
            </div>
            <div style={{ color: '#374151', lineHeight: 1.85, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                At Dalimss Sunbeam Educomp Ltd., our vision is deeply rooted in the belief that education is the most powerful tool
                to transform lives, communities, and the future of our nation. We have worked with a single-minded focus — to provide
                quality learning opportunities, nurture human potential, and create pathways to success.
              </p>
              <p>
                We operate at the intersection of education, skills development, consultancy, franchise distribution, and student
                preparation, offering holistic solutions that go beyond the classroom. Our mission remains the same — to shape
                confident, competent, and compassionate individuals.
              </p>
              <p>
                The journey ahead demands adaptability, innovation, and a commitment to excellence. We are embracing cutting-edge
                educational practices, technology-enabled learning, and value-based training to prepare our learners and partners.
              </p>
              <blockquote style={{
                borderLeft: '4px solid var(--gold)',
                paddingLeft: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--maroon)',
                fontWeight: 600,
                fontSize: '0.925rem',
                lineHeight: 1.75,
                margin: '0.5rem 0',
              }}>
                "I extend my heartfelt gratitude to our dedicated team, visionary partners, and supportive community who make our
                mission possible. Together, we will continue to nurture minds, build skills, and inspire futures — because education
                is not just about earning a living, it's about creating a life worth living."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Directors' Messages */}
      <section id="directors" style={{ background: 'white', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {[
            {
              emoji: '👩‍💼',
              quote: '"Together, let\'s shape futures, inspire change, and create success stories."',
              body: [
                'At Dalimss Sunbeam Educomp Ltd, our vision is simple yet profound — to empower learners, educators, and institutions with the tools, knowledge, and opportunities to excel in an ever-changing world. Education is not just about academic success; it is about nurturing skills, character, and confidence.',
                'Over the years, we have built a strong foundation in school education, skill development, educational consultancy, and franchise support, driven by our commitment to quality and innovation — from our DDUGKY skill initiatives to our Sunbeam World School online learning platform.',
              ],
            },
            {
              emoji: '👨‍💼',
              quote: '"Together, we are building a future where education is not just preparation for life — it is life itself."',
              body: [
                'It gives me immense pride to lead Dalimss Sunbeam Educomp Ltd., an organisation born with a vision to transform education into a more meaningful, skill-oriented, and future-ready journey for learners.',
                'Education today is about nurturing curiosity, building character, and equipping young minds with the tools to excel in a dynamic world. At Dalimss Sunbeam Educomp Ltd., we work at the intersection of tradition and innovation, blending the values of our rich educational legacy with cutting-edge practices.',
              ],
            },
          ].map((dir, i) => (
            <div key={i}>
              <h2 className="section-heading" style={{ textAlign: 'left' }}>Director's Message</h2>
              <div style={{ height: '3px', width: '56px', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: '2px', marginBottom: '1.75rem' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '140px', height: '168px',
                  borderRadius: '1rem',
                  background: 'linear-gradient(145deg, #e8d5d5, #d4b5b5)',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                  fontSize: '3.5rem',
                  boxShadow: '0 8px 24px rgba(123,28,28,0.15)',
                  flexShrink: 0,
                  border: '3px solid white',
                }}>
                  <span style={{ marginBottom: '0.5rem' }}>{dir.emoji}</span>
                </div>
                <div style={{ color: '#374151', lineHeight: 1.85, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {dir.body.map((p, j) => <p key={j}>{p}</p>)}
                  <blockquote style={{
                    borderLeft: '4px solid var(--gold)',
                    paddingLeft: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--maroon)',
                    fontWeight: 600,
                    fontSize: '0.925rem',
                    lineHeight: 1.75,
                    margin: '0.5rem 0',
                  }}>
                    {dir.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" style={{ background: 'var(--cream)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 className="section-heading">Vision &amp; Mission</h2>
          <p className="section-subheading">The principles that drive everything we do</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '0.5rem' }}>
            <div style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              background: 'linear-gradient(145deg, var(--maroon-dark), var(--maroon))',
              color: 'white',
              boxShadow: '0 8px 32px rgba(123,28,28,0.25)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔭</div>
              <h3 style={{ color: 'var(--gold-light)', fontWeight: 800, fontSize: '1.35rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Our Vision</h3>
              <p style={{ lineHeight: 1.85, fontSize: '0.925rem', color: 'rgba(255,255,255,0.85)' }}>
                DALIMSS Sunbeam Group of Schools cultivate an aspiration for global citizenship — leading with qualities of
                innovation, adaptability, commitment to excellence, entrepreneurship, creativity, resilience, and a
                forward-thinking mindset, preparing learners for a rapidly evolving world.
              </p>
            </div>
            <div style={{
              padding: '2.25rem',
              borderRadius: '1.25rem',
              background: 'white',
              border: '2px solid var(--maroon)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
              <h3 style={{ color: 'var(--maroon)', fontWeight: 800, fontSize: '1.35rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Our Mission</h3>
              <p style={{ lineHeight: 1.85, fontSize: '0.925rem', color: '#374151' }}>
                To cultivate a culture that embodies the entrepreneurial spirit, empowering students to be proactive in
                managing change — providing a dynamic learning environment that equips learners with the skills to navigate
                uncertainties and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
