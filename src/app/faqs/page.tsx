'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const faqGroups = [
  {
    group: 'Prerequisites',
    icon: '📋',
    heading: 'Is there any pre-requisite to opening a school?',
    faqs: [
      {
        q: 'Do I need any Degree, Qualification or Academic experience to start a school?',
        a: 'Though experience is always an advantage, it is not essential. You and your team will be provided assistance from the very inception stage. Additionally you will be guided through all kinds of clearances required for opening a school.',
      },
      {
        q: 'Is it necessary that the school be run by a society or can it be run by an individual?',
        a: 'The school has to be run under a non-profit trust (minimum 2 members) or society (minimum 7 members).',
      },
      {
        q: 'Does our Trust/Society need any experience in the education field?',
        a: 'No prior experience is required as our training and support programmes will provide you with all that you need to run your school.',
      },
    ],
  },
  {
    group: 'Setup Support',
    icon: '🏗️',
    heading: 'How would DALIMSS Sunbeam Educomp Ltd. help me set-up the school?',
    faqs: [
      {
        q: 'Do you also provide any funding facility and at what cost?',
        a: 'Funding is readily available from banks and financial institutions depending on the credibility of the person, trust, society applying for the loan. The sanctioned amount and disbursement policy will be at the sole discretion of the funding institution and the rate of interest applicable would be determined by the bank or financial institution only.',
      },
      {
        q: 'What kind of support will I get from the company in setting up the school?',
        a: 'We provide: (1) Architectural Support — land survey to contacts of best building architects, including design manuals and vendor lists. (2) Academic & Curriculum Support — access to best academic material, NEP 2020-aligned course structure. (3) Advanced Academic Support — lesson planning, time table, syllabus planning, experiential learning. (4) Technology Support — IT infrastructure, ERP setup, technical training. (5) Operational Support — operational manual with procedures. (6) Marketing & Promotional Support — all advertisement and promotional materials. (7) Recruitment — assistance and supervision for hiring Principal and staff. (8) Training — extensive and year-round training for all staff.',
      },
    ],
  },
  {
    group: 'Location',
    icon: '📍',
    heading: 'Location & Infrastructure',
    faqs: [
      {
        q: 'What should be the ideal location of a school?',
        a: 'The land should be in an area not too far off from local population to reduce commute time for children and away from hazardous industries. Location, accessibility, infrastructure visibility, safety of the neighbourhood, and competition presence are key factors.',
      },
      {
        q: 'Is it compulsory that the land should be owned or rented?',
        a: 'No, you may lease it. The lease has to be irrevocable and for minimum 35 years.',
      },
      {
        q: 'Can I open in a city where there is a DALIMSS Sunbeam School already?',
        a: 'Yes, you may open a DALIMSS Sunbeam School in a city where there already is another DALIMSS Sunbeam School, subject to our approval based on analysis of not interfering with marketing and operations of the existing school.',
      },
    ],
  },
  {
    group: 'Models & Fees',
    icon: '💼',
    heading: 'Do you offer different specific operating and structural models?',
    faqs: [
      {
        q: 'How is a DALIMSS Associate School model different from all others?',
        a: 'Yes, DALIMSS school franchise is very different from other options available. We offer a variety of options not only in academics but also in terms of "Management and Operations control". The options available are: (1) Associate Owned and Associate Operated school (2) Associate Owned and Company Operated school (3) Anchor Schools (Townships).',
      },
      {
        q: 'How long will it take to start a school? How many students can be expected at the launch?',
        a: 'This would depend on the location and your existing setup; we estimate anything between 3 months to 12 months as a broad time frame. Number of students would depend on your location.',
      },
      {
        q: 'When is the Franchise / Upfront / Sign-up fees paid?',
        a: 'One-time Franchise / Upfront / Sign-up fees has to be paid at the time of signing of Letter of Intent (LOI) post site visit, background check and discussions, and has to be fully paid before signing of the Agreement.',
      },
      {
        q: 'Is the Sign-up Fees and Service Fees refundable?',
        a: 'The sign-up fees and service fees payable and paid is fully earned, and fully non-refundable.',
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid #ede8da' }}>
      <button
        onClick={onToggle}
        style={{ width: '100%', textAlign: 'left' as const, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', padding: '1.1rem 0', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: isOpen ? 'var(--maroon)' : '#333', lineHeight: 1.55, transition: 'color 0.2s' }}>{q}</span>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: isOpen ? 'var(--maroon)' : 'var(--cream)', border: '1.5px solid', borderColor: isOpen ? 'var(--maroon)' : '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', transition: 'all 0.2s' }}>
          <ChevronDown size={13} style={{ color: isOpen ? 'var(--gold)' : '#888', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
        </div>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: '1.1rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.85, borderLeft: '3px solid var(--gold)', paddingLeft: '1rem', marginBottom: '0.25rem' }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #4a0f0f 0%, #7B1C1C 55%, #6b1515 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light), var(--gold-dark))' }} />
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: '2rem', padding: '0.3rem 1.1rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1.25rem' }}>
            Got Questions?
          </div>
          <h1 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.25rem)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Frequently Asked <span style={{ color: 'var(--gold)' }}>Questions</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            Everything you need to know about partnering with DALIMSS Sunbeam — from prerequisites to fees and support.
          </p>
        </div>
      </section>

      {/* ── FAQ Groups ── */}
      <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {faqGroups.map((group) => (
            <div key={group.group}>
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                  {group.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>{group.group}</span>
                  <h2 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--maroon)', lineHeight: 1.3 }}>{group.heading}</h2>
                </div>
              </div>

              {/* FAQ items */}
              <div className="card" style={{ padding: '0.25rem 1.5rem' }}>
                {group.faqs.map((faq) => (
                  <FAQItem
                    key={faq.q}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openQuestion === faq.q}
                    onToggle={() => setOpenQuestion(openQuestion === faq.q ? null : faq.q)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 100%)', padding: '4.5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
          <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Still Have Questions?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Our team is happy to walk you through the process personally. Reach out and we'll respond within 24 hours.
          </p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))', color: 'white', padding: '0.875rem 2.25rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(201,162,39,0.4)', display: 'inline-block' }}>
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
