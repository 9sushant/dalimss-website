export interface School {
  slug: string;
  name: string;
  location: string;
  grades: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  highlights: string[];
  facilities: { category: string; items: string[] }[];
}

export const schools: School[] = [
  {
    slug: 'mau',
    name: 'Dalimss Sunbeam School Mau',
    location: 'Mau, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'dalimsssunbeammau@gmail.com',
    phone: '+91-9517011033',
    address: 'NH 24, Mau Bypass, Tajopur, Near Paniyara, Mau – 275101 Uttar Pradesh, India',
    description:
      'At the heart of our school is a holistic environment where a thoughtfully designed campus meets a nurturing atmosphere. From our vibrant playgrounds to our indoor sports facilities, we provide the perfect space for students to thrive. Our educators are more than just qualified teachers; they provide parental care and moral guidance, ensuring that every student feels supported on their individual journey.',
    highlights: [
      'Multimedia Hall for seminars, workshops, and cultural events',
      'Digital Classrooms with LED smart-displays in pre-primary sections',
      'Advanced RO water filtration system',
      'Separate hygienic washroom facilities for boys and girls',
      'Safe and reliable transportation services',
      'Dedicated staff rooms with private washroom facilities',
    ],
    facilities: [
      { category: 'Modern Learning Spaces', items: ['Multimedia Hall', 'Digital Classrooms with LED smart-displays'] },
      { category: 'Health & Hygiene', items: ['RO Filtration water system', 'Standardized separate sanitation'] },
      { category: 'Safety & Convenience', items: ['Transport network', 'Faculty infrastructure with dedicated staff rooms'] },
    ],
  },
  {
    slug: 'sayadraja',
    name: 'Dalimss Sunbeam School Sayadraja',
    location: 'Saiyadraja, Chandauli, Uttar Pradesh',
    grades: 'Nursery to Class X',
    email: 'saiyadrajadalimsssunbeam@gmail.com',
    phone: '+91-9450106825 / +91-7007155151',
    address: 'Marui, Saiyadraja, District: Chandauli, PIN: 232110',
    description:
      'Situated in the serene Marui, Saiyadraja, Dalimss Sunbeam School is a premier institution offering a transformative journey from Play Group to Class 10. By blending a rigorous academic curriculum with vibrant co-curriculars, the school fosters a holistic environment where curiosity meets character.',
    highlights: [
      'Eco-Friendly & Safe Environment',
      'Smart Classrooms and state-of-the-art Science Labs',
      'Advanced Computer Labs',
      'Well-managed and organized transport network',
      'Regular monitoring for personalized academic growth',
      'National & International Olympiad participation',
      'Dedicated sports mentors and professional coaching',
    ],
    facilities: [
      { category: 'Advanced Campus', items: ['Smart Classrooms', 'Science Labs', 'Computer Labs', 'Eco-friendly secure campus'] },
      { category: 'Academic Excellence', items: ['Certified educators', 'Personalized academic growth', 'Olympiad participation'] },
      { category: 'Sports & Physical Education', items: ['Professional coaching', 'Premium sports facilities'] },
    ],
  },
  {
    slug: 'kuchman',
    name: 'Dalimss Sunbeam School Kuchman',
    location: 'Kuchman, Chandauli, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'dalimsssunbeamsanghati@gmail.com',
    phone: '+91-9415161395',
    address: 'Sanghati, Kuchman Chandauli – 232107 Uttar Pradesh, India',
    description:
      'Founded by visionary Mrs. Deesh Ishrat in honor of renowned scholar Dr. Amrit Lal Ishrat, DALIMSS Sunbeam Kuchman transcends traditional schooling. We cultivate an entrepreneurial, forward-thinking mindset, empowering students to navigate a rapidly evolving world with resilience and creativity.',
    highlights: [
      'High-tech computer lab for digital literacy',
      'Smart-Enabled Classrooms with interactive technology',
      'Integrated Science & Innovation Lab',
      'Elite Sports & Athletics Infrastructure',
      'Vibrant Cultural & Performing Arts',
      'Open-Air Learning Alleys',
      '24/7 CCTV Surveillance',
    ],
    facilities: [
      { category: 'Academic & Technology', items: ['Next-Gen Computing Hub', 'Smart-Enabled Classrooms', 'Integrated Science Lab'] },
      { category: 'Holistic Growth', items: ['Elite Sports Infrastructure', 'Cultural & Performing Arts', 'Open-Air Learning Alleys'] },
      { category: 'Safety & Welfare', items: ['24/7 CCTV', 'Secure transport', 'Hygienic sanitation'] },
    ],
  },
  {
    slug: 'jaunpur',
    name: 'Dalimss Sunbeam School Jaunpur',
    location: 'Rampur, Jaunpur, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'dalimsssunbeamrampur@gmail.com',
    phone: '+91-8840158326',
    address: 'Rampur, Jaunpur, Uttar Pradesh',
    description:
      'Strategically located in Rampur, DALIMSS Sunbeam School, Jaunpur, stands as a beacon of academic excellence and holistic development. By harmonizing a disciplined environment with modern pedagogical approaches, we empower every learner to reach their full potential.',
    highlights: [
      'High-tech computing hub',
      'Integrated Science & Innovation Lab',
      'Smart-Enabled Classrooms',
      'Elite Sports & Athletics Program',
      'Vibrant Cultural & Performing Arts',
      'GPS-enabled buses for safe commute',
      '24/7 CCTV Surveillance',
    ],
    facilities: [
      { category: 'Academic', items: ['Computing Hub', 'Science Lab', 'Smart Classrooms'] },
      { category: 'Co-Curricular', items: ['Sports & Athletics', 'Cultural & Performing Arts'] },
      { category: 'Safety', items: ['24/7 CCTV', 'GPS buses', 'Hygienic sanitation', 'Open-Air Learning Alleys'] },
    ],
  },
  {
    slug: 'sultanpur',
    name: 'Dalimss Sunbeam School Sultanpur',
    location: 'Sultanpur, Uttar Pradesh',
    grades: 'Balvatika to Class XII',
    email: 'dalimsssultanpur16@gmail.com',
    phone: '+91-7570803445',
    address: 'Dobhiyara, Baldirai Sultanpur – 227815 Uttar Pradesh, India',
    description:
      'DALIMSS Sunbeam School, Sultanpur has always stood out for its relentless pursuit of excellence, successfully elevating our students from "Good" to "Better" on their journey to becoming the "Best." We embed sustained development into our DNA so that global best practices become our daily norm.',
    highlights: [
      'Smart Classrooms with audio-visual tools',
      'Well-stocked library with digital learning materials',
      'Fully equipped Science labs and Computer lab',
      'Language Lab for communication skills',
      'Large playgrounds and indoor/outdoor game areas',
      'GPS school buses',
      'On-campus infirmary',
      'Ramps and CWSN-compliant toilets',
    ],
    facilities: [
      { category: 'Modern Learning', items: ['Smart Classrooms', 'Knowledge Hub Library', 'Modern Labs', 'Language Lab'] },
      { category: 'Sports & Creative Arts', items: ['Large playgrounds', 'Arts & Culture rooms', 'Multi-Purpose Hall', 'Yoga & Fitness'] },
      { category: 'Safety & Student Care', items: ['24/7 CCTV', 'GPS school buses', 'Health & Wellness cell', 'Clean water & sanitation'] },
      { category: 'Inclusive Infrastructure', items: ['Accessible campus (CWSN)', 'Career Guidance'] },
    ],
  },
  {
    slug: 'ghazipur',
    name: 'Dalimss Sunbeam School Ghazipur',
    location: 'Gandhinagar, Ghazipur, Uttar Pradesh',
    grades: 'Nursery to Class XII',
    email: 'dalimss.gandhinagar@gmail.com',
    phone: '+91-7234990011',
    address: 'Gandhinagar, Ghazipur, Uttar Pradesh',
    description:
      'DALIMSS Sunbeam School is a vision-driven school committed to meet the educational needs of students in the changing times. We prepare students for the modern world who can become responsible and engaged members of society, resulting in sustainable growth, peace and positive global impact.',
    highlights: [
      'Sprawling modern campus',
      'Dedicated Bal Vatika building for toddlers',
      'AI-Powered Classrooms with smart boards',
      'Science and Computer labs + Britannica Language Lab',
      'Comprehensive library',
      '3000-liter R.O. water plant with chiller',
      'GPS-tracked van and bus fleet',
      'Staff hostels',
    ],
    facilities: [
      { category: 'Spacious Campus', items: ['Modern campus', 'Bal Vatika', 'Staff Hostels'] },
      { category: 'Advanced Learning', items: ['AI-Powered Classrooms', 'Specialized Labs', 'Britannica Language Lab', 'Resource Center'] },
      { category: 'Safety & Mobility', items: ['GPS transport fleet', 'Safe environment'] },
    ],
  },
  {
    slug: 'chandauli',
    name: 'Dalimss Sunbeam School Chandauli',
    location: 'Chandauli, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'saraidalimsssunbeam@gmail.com',
    phone: '+91-9415354151',
    address: 'Sarai, Balua Chandauli – 232109 Uttar Pradesh, India',
    description:
      'DALIMSS Sunbeam School, Chandauli is a premier institution dedicated to nurturing responsible global citizens through a perfect blend of tradition and modern innovation. Following a progressive CBSE curriculum, we provide a holistic environment where academic excellence meets character building.',
    highlights: [
      'AI-enabled classrooms',
      'Specialized Physics, Chemistry, Biology labs',
      'High-speed Computer Lab',
      'Knowledge Resource Center',
      'Language & Communication Lab',
      'Performing Arts Studios',
      'Sports & Athletics Complex',
      'Digital Parent Connect (ERP & SMS)',
    ],
    facilities: [
      { category: 'Academic & Digital', items: ['Smart Learning Spaces', 'Advanced Science & IT Labs', 'Knowledge Resource Center', 'Language Lab'] },
      { category: 'Creative & Holistic', items: ['Performing Arts Studios', 'Sports Complex', 'Wellness & Mindfulness Zone', 'Auditorium'] },
      { category: 'Safety & Connectivity', items: ['24/7 CCTV', 'GPS buses', 'Health & Counseling Cell', 'ERP & SMS system'] },
    ],
  },
  {
    slug: 'jakhania',
    name: 'Dalimss Sunbeam School Jakhania',
    location: 'Jakhania, Uttar Pradesh',
    grades: 'Nursery to Class 9',
    email: 'Dalimsssunbeamjkn@gmail.com',
    phone: '+91-9277055775',
    address: 'Dalimss Sunbeam School Jakhania (near SBI bank)',
    description:
      'The school provides a holistic learning environment featuring a well-equipped library, extensive sports facilities, and experienced passionate teachers who balance academics with moral education. Student safety is prioritized with campus-wide CCTV surveillance and managed transport services.',
    highlights: [
      'Newly constructed building with spacious classrooms',
      'Smart boards and digital aids',
      'Well-organized library',
      'Dedicated faculty with personalized support',
      'Strong focus on moral education',
      'Regular co-curricular activities',
      'Eco-friendly green campus',
      '24/7 CCTV monitoring',
    ],
    facilities: [
      { category: 'Infrastructure', items: ['Modern building', 'Smart Classrooms', 'Well-Organized Library'] },
      { category: 'Student Development', items: ['Dedicated Faculty', 'Values & Discipline', 'Co-Curricular Programs', 'Physical Fitness'] },
      { category: 'Safety & Environment', items: ['Green & Clean Campus', 'Top-Tier CCTV Safety', 'Reliable Transport'] },
    ],
  },
  {
    slug: 'dildarnagar',
    name: 'Dalimss Sunbeam School Dildarnagar',
    location: 'Dildarnagar, Ghazipur, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'dalimssdln@gmail.com',
    phone: '+91-9721447902',
    address: 'Rakasahan, Dildarnagar, Ghazipur – 232326 Uttar Pradesh, India',
    description:
      'DALIMSS Sunbeam School, Rakasahan, Dildarnagar stands as a beacon of academic excellence and premier choice for families within a 20 km radius. Built on the pillars of Duty, Devotion, and Discipline, we follow a modern curriculum including a three-language system in alignment with NEP-2020 guidelines.',
    highlights: [
      'Consistently highest Board Exam results in region (8+ years)',
      'English-Centric campus environment',
      'Robotics & Future-Tech classes',
      'Regular Class Tests and Periodic Assessments',
      'Special care for weaker students',
      'Merit-based scholarships for Class X toppers',
      'Kickboxing and diverse athletic programs',
      '24/7 CCTV surveillance',
    ],
    facilities: [
      { category: 'Academic & Skill', items: ['English-Centric Environment', 'Robotics classes', 'Rigorous Academic Tracking'] },
      { category: 'Inclusion & Incentives', items: ['Targeted Academic Support', 'Merit-Based Scholarships'] },
      { category: 'Sports & Infrastructure', items: ['Diverse Athletic Programs (incl. Kickboxing)', 'Expert Faculty', 'Remote area transport'] },
    ],
  },
  {
    slug: 'azamgarh',
    name: 'Dalimss Sunbeam School Azamgarh',
    location: 'Azamgarh, Uttar Pradesh',
    grades: 'Nursery to Class VIII',
    email: 'dalimssazamgarh@gmail.com',
    phone: '+91-6388469499 / +91-7266870080',
    address: 'Tiwari Pur, Mau Road, Sidhari Azamgarh – 276001 Uttar Pradesh',
    description:
      'At DALIMSS Sunbeam, we\'ve spent 14 years turning sparks of curiosity into a bonfire of success! Now home to over 650 bright minds, our campus is a vibrant playground for experimental learning and academic excellence.',
    highlights: [
      '650+ students, 14 years of excellence',
      'Smart Classes with multi-sensory experiences',
      'Science, Mathematics, and Computer Labs',
      'Abundant Library',
      'Eco-friendly playground with Karate and Skating',
      'Music & Dance Clubs',
      'GPS and Camera-enabled transport',
      'Personality Development Classes',
    ],
    facilities: [
      { category: 'Academic & Digital', items: ['Smart Classes', 'Specialized Laboratories', 'Knowledge Hub Library'] },
      { category: 'Physical & Co-Curricular', items: ['Elite Sports (Karate, Skating)', 'Wellness & Yoga', 'Music & Dance Clubs'] },
      { category: 'Safety & Personal Growth', items: ['CCTV Monitoring', 'GPS Camera-enabled transport', 'Soft Skills & Personality Development'] },
    ],
  },
];
