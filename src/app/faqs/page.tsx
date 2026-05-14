'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqGroups = [
  {
    group: 'Is there any pre-requisite to opening a school?',
    color: 'var(--maroon)',
    faqs: [
      {
        q: 'Do I need any kind of Degree, Qualification or Academic experience background to start a school?',
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
    group: 'How would DALIMSS Sunbeam Educomp Ltd. help me set-up the school?',
    color: 'var(--maroon)',
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
    group: 'Location & Infrastructure',
    color: 'var(--maroon)',
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
    group: 'Do you offer different specific operating and structural models?',
    color: 'var(--maroon)',
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e8e8e8' }}>
      <button
        className="w-full text-left flex items-start justify-between gap-3 py-4 px-2"
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--maroon)', lineHeight: 1.5 }}>{q}</span>
        {open ? (
          <ChevronUp size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
        ) : (
          <ChevronDown size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
        )}
      </button>
      {open && (
        <div className="px-2 pb-4" style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.8 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <main>
      <section style={{ backgroundColor: 'var(--maroon)' }} className="py-12 px-4">
        <div style={{ height: '3px', backgroundColor: 'var(--gold)', marginBottom: '1.5rem' }} />
        <div className="max-w-5xl mx-auto text-center">
          <h1 style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '0.5rem' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
            Everything you need to know about partnering with DALIMSS Sunbeam
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto space-y-10">
          {faqGroups.map((group) => (
            <div key={group.group}>
              <h2
                className="py-3 px-4 rounded-lg font-bold text-sm text-white mb-2"
                style={{ backgroundColor: group.color }}
              >
                {group.group}
              </h2>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #e8e8e8' }}>
                {group.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
