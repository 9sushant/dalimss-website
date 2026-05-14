export const metadata = {
  title: 'News & Events | DALIMSS Sunbeam Educomp Ltd',
};

const newsItems = [
  {
    date: 'March 2025',
    category: 'Award',
    title: 'AcadElite Award 2025',
    desc: 'DALIMSS Sunbeam Educomp Ltd. received the prestigious AcadElite Award 2025 for excellence in education.',
  },
  {
    date: 'February 2025',
    category: 'Recognition',
    title: 'No.1 Pre School in Varanasi',
    desc: 'Recognized as No.1 School in Varanasi with India Pre School Grand Jury Awards 2025-26.',
  },
  {
    date: 'January 2025',
    category: 'Award',
    title: 'Education World Award',
    desc: 'Received the Education World Award for The Best School in UP, validating our commitment to academic excellence.',
  },
  {
    date: 'December 2024',
    category: 'Expo',
    title: 'Education Resources and Technology Expo',
    desc: 'Participated in ETTECHX — Education Resources and Technology Expo showcasing our innovative educational solutions.',
  },
  {
    date: 'November 2024',
    category: 'Recognition',
    title: 'Outstanding Day-cum-Boarding School',
    desc: 'DALIMSS Sunbeam School & Hostel Rohania, Varanasi officially ranked as outstanding in Day-cum-Boarding category.',
  },
  {
    date: 'October 2024',
    category: 'Milestone',
    title: 'New School Launch',
    desc: 'Expanded our network with the successful launch of our newest associate school, continuing our mission of spreading quality education.',
  },
];

const categoryColors: Record<string, string> = {
  Award: '#7B1C1C',
  Recognition: '#C9A227',
  Expo: '#2196F3',
  Milestone: '#4CAF50',
};

export default function NewsEvents() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            News & Events
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Latest achievements, awards, and milestones from DALIMSS Sunbeam
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.title} className="rounded-xl shadow-sm overflow-hidden" style={{ backgroundColor: 'white' }}>
                <div className="h-2" style={{ backgroundColor: categoryColors[item.category] || 'var(--maroon)' }} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: categoryColors[item.category] || 'var(--maroon)', color: 'white' }}
                    >
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#888' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--maroon)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
