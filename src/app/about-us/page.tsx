export const metadata = {
  title: 'About Us | DALIMSS Sunbeam Educomp Ltd',
  description: 'Learn about the 50+ year history of DALIMSS Sunbeam Educomp Limited, our leadership, vision and mission.',
};

export default function AboutUs() {
  return (
    <main>
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>About Us</h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>50+ years of transforming education in India</p>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Our Story</h2>
          <div style={{ lineHeight: 1.9, color: '#333', fontSize: '1rem' }} className="space-y-4">
            <p>
              Sunbeam started in <strong>1972</strong> with a simple mission and a rented apartment. Founded by visionary educators{' '}
              <strong>Dr. Amrit Lal 'Ishrat' Madhok and Mrs. Deesh 'Ishrat' Madhok</strong> to redefine holistic education in Varanasi,
              the school's rise was meteoric. Driven by passion and backed by a community that believed in their vision, Sunbeam
              quickly outgrew its beginnings, evolving from a small startup into a premier educational landmark.
            </p>
            <p>
              In 1993–1994 we branched out from the parent Sunbeam schools and started our own Sunbeam School, which was initially
              located in Varanasi at Lahurabir and afterwards was named after Dr Amrit Lal Ishrat — and all our group of schools were
              named <strong>'Dr Amrit Lal Ishrat Memorial Sunbeam School and Hostel'</strong> or{' '}
              <strong style={{ color: 'var(--maroon)' }}>DALIMSS SUNBEAM SCHOOLS</strong>. The Dalimss Sunbeam group of schools
              currently proudly serves the community at{' '}
              <strong>Sigra, Ramkatora, Rohania, Paharia, DIG Colony, MohiniKunj and Rohania Hostel</strong> along with the NTPC
              Tanda at the Ambedkar Nagar district.
            </p>
            <p>
              Today Sunbeam has blossomed into a veritable giant tree of knowledge. The School and its many Branches together testify
              that under the able guidance and endeavour of <strong>Dr. Pradeep 'BABA' Madhok – President</strong> and{' '}
              <strong>Mrs. Pooja Madhok – Director</strong>, the school is striding ahead towards greater growth and development,
              reiterating its position as the most eminent academic institution in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section id="chairman" style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading" style={{ textAlign: 'left', marginBottom: '2rem' }}>Chairman's Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center">
              <div
                className="w-40 h-48 rounded-xl shadow-lg flex items-end justify-center overflow-hidden"
                style={{ backgroundColor: '#ddd', fontSize: '4rem' }}
              >
                <span style={{ marginBottom: '0.5rem' }}>👨‍💼</span>
              </div>
            </div>
            <div className="md:col-span-3" style={{ lineHeight: 1.9, color: '#333', fontSize: '0.95rem' }} >
              <p className="mb-4">
                At Dalimss Sunbeam Educomp Ltd., our vision is deeply rooted in the belief that education is the most powerful tool
                to transform lives, communities, and the future of our nation. Since our inception, we have worked with a
                single-minded focus—to provide quality learning opportunities, nurture human potential, and create pathways to
                success in an ever-changing world.
              </p>
              <p className="mb-4">
                We are proud to operate at the intersection of education, skills development, consultancy, franchise distribution,
                and student preparation, offering holistic solutions that go beyond the classroom. Whether it is empowering youth
                through skill-based programs, guiding schools through strategic consultancy, expanding our legacy via franchise
                partnerships, or innovating in online schooling with Sunbeam World School, our mission remains the same—to shape
                confident, competent, and compassionate individuals.
              </p>
              <p className="mb-4">
                The journey ahead demands adaptability, innovation, and a commitment to excellence. We are embracing cutting-edge
                educational practices, technology-enabled learning, and value-based training to prepare our learners and partners
                for a future filled with opportunities.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--maroon)', fontWeight: 600 }}>
                "I extend my heartfelt gratitude to our dedicated team, visionary partners, and supportive community who make our
                mission possible. Together, we will continue to nurture minds, build skills, and inspire futures—because education
                is not just about earning a living, it's about creating a life worth living."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directors' Messages */}
      <section id="directors" className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Director 1 */}
          <div>
            <h2 className="section-heading" style={{ textAlign: 'left', marginBottom: '2rem' }}>Director's Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-40 h-48 rounded-xl shadow-lg flex items-end justify-center overflow-hidden" style={{ backgroundColor: '#ddd', fontSize: '4rem' }}>
                  <span style={{ marginBottom: '0.5rem' }}>👩‍💼</span>
                </div>
              </div>
              <div className="md:col-span-3" style={{ lineHeight: 1.9, color: '#333', fontSize: '0.95rem' }}>
                <p className="mb-4">
                  At Dalimss Sunbeam Educomp Ltd, our vision is simple yet profound — to empower learners, educators, and
                  institutions with the tools, knowledge, and opportunities to excel in an ever-changing world. Education, to me,
                  is not just about academic success; it is about nurturing skills, character, and confidence that prepare
                  individuals to thrive in life.
                </p>
                <p className="mb-4">
                  Over the years, we have built a strong foundation in school education, skill development, educational
                  consultancy, and franchise support, driven by our commitment to quality and innovation. Whether through our
                  DDUGKY skill initiatives, franchise distribution of the Dalimss Sunbeam brand, or our Sunbeam World School
                  online learning platform, our goal remains the same — to deliver meaningful, impactful, and sustainable
                  learning experiences.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--maroon)', fontWeight: 600 }}>
                  "Together, let's shape futures, inspire change, and create success stories."
                </p>
              </div>
            </div>
          </div>

          {/* Director 2 */}
          <div>
            <h2 className="section-heading" style={{ textAlign: 'left', marginBottom: '2rem' }}>Director's Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-40 h-48 rounded-xl shadow-lg flex items-end justify-center overflow-hidden" style={{ backgroundColor: '#ddd', fontSize: '4rem' }}>
                  <span style={{ marginBottom: '0.5rem' }}>👨‍💼</span>
                </div>
              </div>
              <div className="md:col-span-3" style={{ lineHeight: 1.9, color: '#333', fontSize: '0.95rem' }}>
                <p className="mb-4">
                  It gives me immense pride to lead Dalimss Sunbeam Educomp Ltd., an organisation born with a vision to transform
                  education into a more meaningful, skill-oriented, and future-ready journey for learners.
                </p>
                <p className="mb-4">
                  Education today is not just about classrooms and textbooks—it is about nurturing curiosity, building character,
                  and equipping young minds with the tools to excel in a dynamic world. At Dalimss Sunbeam Educomp Ltd., we work
                  at the intersection of tradition and innovation, blending the values of our rich educational legacy with
                  cutting-edge practices in academics, skill development, consultancy, and technology-driven learning.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--maroon)', fontWeight: 600 }}>
                  "Together, we are building a future where education is not just preparation for life—it is life itself."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" style={{ backgroundColor: 'var(--cream)' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className="p-8 rounded-2xl shadow-md"
              style={{ backgroundColor: 'var(--maroon)', color: 'white' }}
            >
              <h2 style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h2>
              <p style={{ lineHeight: 1.9, fontSize: '0.95rem', color: '#eee' }}>
                DALIMSS Sunbeam Group of Schools cultivate an aspiration for global citizenship by leading from the front with
                qualities of innovation, adaptability, commitment to excellence, entrepreneurship, creativity, resilience, and a
                forward thinking mindset, preparing them for a rapidly evolving world.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl shadow-md"
              style={{ backgroundColor: 'white', border: '2px solid var(--maroon)' }}
            >
              <h2 style={{ color: 'var(--maroon)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ lineHeight: 1.9, fontSize: '0.95rem', color: '#333' }}>
                To cultivate a culture that embodies the entrepreneurial spirit, empowering students to be proactive in managing
                change by providing a dynamic learning environment that equips students with the skills to navigate uncertainties,
                fostering their ability to initiate positive transformations and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
