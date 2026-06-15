import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'News & Events | DALIMSS Sunbeam Educomp Ltd',
  description: 'Latest achievements, awards, milestones and events from DALIMSS Sunbeam Educomp.',
};

const newsItems = [
  {
    date: 'March 2025',
    category: 'Award',
    icon: '🏅',
    title: 'AcadElite Award 2025',
    desc: 'DALIMSS Sunbeam Educomp Ltd. received the prestigious AcadElite Award 2025 for Excellence in Education — a recognition of our unwavering commitment to transforming academic standards across India.',
    featured: true,
  },
  {
    date: 'February 2025',
    category: 'Recognition',
    icon: '⭐',
    title: 'No.1 Pre-School in Varanasi',
    desc: 'Recognized as the No.1 School in Varanasi under the India Pre School Grand Jury Awards 2025–26, reflecting our dedication to early childhood excellence.',
    featured: false,
    photo: '/news/no1-preschool-varanasi.png',
  },
  {
    date: 'January 2025',
    category: 'Award',
    icon: '🏆',
    title: 'Education World Award',
    desc: 'Received the Education World Award for The Best School in UP — validating our commitment to holistic academic excellence and student development.',
    featured: false,
    photo: '/news/education-world-award.png',
  },
  {
    date: 'December 2024',
    category: 'Expo',
    icon: '🎯',
    title: 'Education Resources & Technology Expo',
    desc: 'Showcased our innovative educational solutions at ETTECHX — Education Resources and Technology Expo, highlighting our integration of smart technology in classrooms.',
    featured: false,
    photo: '/news/education-resources-expo.png',
  },
  {
    date: 'November 2024',
    category: 'Recognition',
    icon: '🎖️',
    title: 'Outstanding Day-cum-Boarding School',
    desc: 'DALIMSS Sunbeam School & Hostel, Rohania, Varanasi was officially ranked as an Outstanding Day-cum-Boarding institution — among the finest in the region.',
    featured: false,
    photo: '/news/outstanding-dayboarding.png',
    photoPosition: 'center 45%',
  },
  {
    date: 'October 2024',
    category: 'Milestone',
    icon: '🚀',
    title: 'New School Launch',
    desc: 'Expanded our network with the successful launch of our newest associate school, continuing our mission of spreading quality, values-driven education across Uttar Pradesh.',
    featured: false,
    photo: '/news/new-school-launch.png',
  },
];

const categoryStyle: Record<string, { bg: string; color: string; border: string }> = {
  Award:       { bg: 'rgba(123,28,28,0.1)',  color: 'var(--maroon)',  border: 'rgba(123,28,28,0.2)' },
  Recognition: { bg: 'rgba(201,162,39,0.12)', color: '#8a6d00',       border: 'rgba(201,162,39,0.3)' },
  Expo:        { bg: 'rgba(33,150,243,0.1)',  color: '#1565c0',        border: 'rgba(33,150,243,0.2)' },
  Milestone:   { bg: 'rgba(56,142,60,0.1)',   color: '#2e7d32',        border: 'rgba(56,142,60,0.2)' },
};

const accentColor: Record<string, string> = {
  Award:       'var(--maroon)',
  Recognition: 'var(--gold)',
  Expo:        '#2196F3',
  Milestone:   '#4CAF50',
};

const featured = newsItems.find((n) => n.featured)!;
const rest = newsItems.filter((n) => !n.featured);

export default function NewsEvents() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />

        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(201,162,39,0.15)',
            border: '1px solid rgba(201,162,39,0.35)',
            borderRadius: '2rem',
            padding: '0.3rem 1.1rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--gold-light)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            marginBottom: '1.25rem',
          }}>
            Latest Updates
          </div>
          <h1 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(2rem,5vw,3.25rem)',
            letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}>
            News &amp; <span style={{ color: 'var(--gold)' }}>Events</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            Awards, milestones and recognitions that reflect 50+ years of educational excellence across India.
          </p>
        </div>
      </section>

      {/* ── Featured ── */}
      <section style={{ background: 'var(--cream)', padding: '4rem 1.5rem 0' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #4a0f0f 0%, var(--maroon) 60%, #8b2020 100%)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem 3rem',
            position: 'relative',
            boxShadow: '0 16px 48px rgba(123,28,28,0.35)',
          }}>
            {/* Pattern overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.07) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              borderRadius: '1.25rem',
            }} />

            <div style={{ position: 'relative' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(201,162,39,0.2)',
                border: '1px solid rgba(201,162,39,0.4)',
                borderRadius: '2rem',
                padding: '0.25rem 0.85rem',
                fontSize: '0.7rem', fontWeight: 700,
                color: 'var(--gold-light)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                marginBottom: '1rem',
              }}>
                🏅 Latest Achievement · {featured.date}
              </div>
              <h2 style={{
                color: 'white', fontWeight: 900,
                fontSize: 'clamp(1.4rem,3vw,2rem)',
                letterSpacing: '-0.02em', lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}>
                {featured.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: '540px' }}>
                {featured.desc}
              </p>
            </div>

            <div style={{
              position: 'relative',
              fontSize: '5rem',
              lineHeight: 1,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              background: 'rgba(201,162,39,0.15)',
              borderRadius: '50%',
              border: '2px solid rgba(201,162,39,0.3)',
            }}>
              {featured.icon}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section style={{ background: 'var(--cream)', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

          <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
            <h2 className="section-heading">More <span style={{ color: 'var(--gold)' }}>Updates</span></h2>
            <p className="section-subheading">Awards, expos, and milestones shaping our journey</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}>
            {rest.map((item) => {
              const cs = categoryStyle[item.category] ?? categoryStyle['Award'];
              const accent = accentColor[item.category] ?? 'var(--maroon)';
              return (
                <div key={item.title} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  {/* Accent top bar */}
                  <div style={{ height: '4px', background: accent, borderRadius: '1rem 1rem 0 0', margin: '-1px -1px 0', flexShrink: 0 }} />

                  {/* Photo (only when available) */}
                  {(item as { photo?: string; photoPosition?: string }).photo && (
                    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
                      <Image
                        src={(item as { photo?: string }).photo!}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: (item as { photoPosition?: string }).photoPosition ?? 'center top' }}
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      {/* subtle gradient overlay at bottom */}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)' }} />
                    </div>
                  )}

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* Icon + category + date */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{
                          width: '38px', height: '38px',
                          borderRadius: '10px',
                          background: cs.bg,
                          border: `1.5px solid ${cs.border}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.15rem', flexShrink: 0,
                        }}>
                          {item.icon}
                        </div>
                        <span style={{
                          fontSize: '0.68rem', fontWeight: 800,
                          color: cs.color,
                          background: cs.bg,
                          border: `1px solid ${cs.border}`,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '2rem',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase' as const,
                        }}>
                          {item.category}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.7rem', color: '#aaa', fontWeight: 500,
                        background: '#f5f5f5', padding: '0.2rem 0.6rem',
                        borderRadius: '2rem', whiteSpace: 'nowrap' as const,
                      }}>
                        {item.date}
                      </span>
                    </div>

                    <h3 style={{
                      fontWeight: 800, fontSize: '1rem',
                      color: 'var(--maroon)', lineHeight: 1.3,
                      marginBottom: '0.6rem',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.7, flexGrow: 1 }}>
                      {item.desc}
                    </p>

                    {/* Bottom divider accent */}
                    <div style={{
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1.5px solid #f0ece0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}>
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: accent, flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '0.7rem', color: '#bbb', fontWeight: 500 }}>
                        DALIMSS Sunbeam Educomp
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
        <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
          <h2 style={{
            color: 'white', fontWeight: 900,
            fontSize: 'clamp(1.5rem,3.5vw,2.2rem)',
            letterSpacing: '-0.03em', lineHeight: 1.2,
            marginBottom: '0.75rem',
          }}>
            Be Part of Our Growing Legacy
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Join the DALIMSS Sunbeam family — India's award-winning school network transforming education for 50+ years.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              color: 'white', padding: '0.875rem 2rem',
              borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(201,162,39,0.4)',
            }}>
              Get in Touch
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
