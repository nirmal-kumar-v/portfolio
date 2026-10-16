export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    note?: string;
    tag?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Algorithmic Problem Solving',
    subtitle: 'Primary foundation for competitive coding and DSA problem solving',
    skills: [
      { name: 'Java', note: 'Primary & strongest language for Data Structures & Algorithms', tag: 'Core DSA' },
      { name: 'Data Structures & Algorithms', note: 'Consistent practice across LeetCode & GeeksforGeeks', tag: 'Core' },
      { name: 'Competitive Programming', note: 'Timed contests & algorithmic thinking', tag: 'Elite PAAC' },
      { name: 'Core Foundations', note: 'Studied Trees, Graphs, Dynamic Programming & Backtracking (under active revision)', tag: 'DSA' },
      { name: 'Python', note: 'Scripting, quantitative optimization with SciPy & data processing', tag: 'Language' },
      { name: 'C / C++', note: 'Foundational programming & low-level concepts', tag: 'Language' },
    ],
  },
  {
    title: 'Full-Stack Web Development',
    subtitle: 'End-to-end web engineering verified through shipped hackathon applications',
    skills: [
      { name: 'React', note: 'Frontend UI component architecture, state management & hooks', tag: 'Frontend' },
      { name: 'JavaScript (ES6+)', note: 'Asynchronous event loop, DOM manipulation & client logic', tag: 'Frontend' },
      { name: 'HTML5 & Vanilla CSS', note: 'Semantic markup, responsive layouts, micro-interactions', tag: 'Frontend' },
      { name: 'Tailwind CSS', note: 'Utility-first styling & responsive tokens', tag: 'Styling' },
      { name: 'Node.js & Express.js', note: 'RESTful API construction, route handlers & middleware', tag: 'Backend' },
      { name: 'MongoDB', note: 'Document database modeling in ChangeWave, Campus Chat & Secure Vault', tag: 'Database' },
      { name: 'PostgreSQL', note: 'Relational data modeling, ACID transactions & schema isolation', tag: 'Database' },
      { name: 'JWT & RBAC', note: 'Token-based authentication & role-based access control', tag: 'Security' },
    ],
  },
  {
    title: 'Applied Domains & Architecture',
    subtitle: 'Interdisciplinary engineering demonstrated in specialized projects',
    skills: [
      { name: 'Conversational AI / Chatbots', note: 'Multilingual assistance with offline SMS gateways (Kongu Kural)', tag: 'Applied AI' },
      { name: 'Quantitative FinTech Analytics', note: 'Modern Portfolio Theory & Efficient Frontier computation (OptiVest)', tag: 'FinTech' },
      { name: 'Civic Technology Systems', note: 'Problem-to-impact pipelines & stakeholder routing (SETU)', tag: 'CivicTech' },
      { name: 'Developer Profile Analytics', note: 'Cross-platform metrics aggregation & scoring (CareerLens)', tag: 'Analytics' },
      { name: 'Offline-First Systems', note: 'Local queueing & conflict reconciliation (Retail POS)', tag: 'Architecture' },
      { name: 'Git & Version Control', note: 'Multi-contributor repository collaboration & branch workflows', tag: 'Tooling' },
    ],
  },
];

export const techStack = [
  {
    title: 'Languages & Problem Solving',
    items: [{ name: 'Java' }, { name: 'JavaScript (ES6+)' }, { name: 'Python' }, { name: 'C / C++' }],
  },
  {
    title: 'Frontend Development',
    items: [{ name: 'React' }, { name: 'Vite' }, { name: 'Tailwind CSS' }, { name: 'HTML5 & CSS3' }],
  },
  {
    title: 'Backend & Database',
    items: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'JWT & RBAC' }],
  },
];

export interface ExperienceCertificate {
  label: string;
  badgeLabel?: string;
  url: string;
  variant?: 'gold' | 'accent';
}

export interface TrainingExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: 'Program' | 'In-Plant Training' | 'Opportunity Selection' | 'Hackathon';
  badge: string;
  period?: string;
  description: string;
  details: string[];
  certificateUrl?: string;
  hackathonCertificateUrl?: string;
  certificates?: ExperienceCertificate[];
}

export const trainingExperiences: TrainingExperienceItem[] = [
  {
    id: 'elite-paac',
    title: 'Elite PAAC Selection',
    organization: 'Kongu Engineering College × GeeksforGeeks',
    type: 'Program',
    badge: 'Top ~4% Selection',
    description:
      'Rigorous algorithmic training program conducted by GeeksforGeeks trainers for students selected via competitive screening.',
    details: [
      'Selected among approximately 80 students out of 2,000 considered (~4% acceptance among cohort considered)',
      'Semester 4 Curriculum: Advanced Data Structures & Algorithms',
      'Semester 5 Curriculum: Competitive Programming & Complex Problem Solving',
      'Direct instruction and mentorship delivered by GeeksforGeeks trainers',
    ],
    certificateUrl: '/certificates/gfg-kec-training-certificate.pdf',
    certificates: [
      {
        label: 'GeeksforGeeks Training Certificate',
        badgeLabel: 'Certificate',
        url: '/certificates/gfg-kec-training-certificate.pdf',
        variant: 'gold',
      },
    ],
  },
  {
    id: 'mist-tech',
    title: 'In-Plant Training',
    organization: 'Mist Software Solutions Pvt Ltd, Coimbatore',
    type: 'In-Plant Training',
    badge: '15 Days Completed',
    description:
      'Completed 15 days of industrial in-plant training covering frontend application development (8 days) and web technology fundamentals (7 days).',
    details: [
      'Duration: Exactly 15 days of hands-on technical industrial training',
      '8 Days: Frontend Development (11th December 2025 to 19th December 2025)',
      '7 Days: Web Technology (07th July 2025 to 14th July 2025)',
      'Verified with official in-plant training completion certificates from Mist Software Solutions Pvt Ltd',
    ],
    certificates: [
      {
        label: 'Frontend Development Certificate (8 Days)',
        badgeLabel: 'Frontend (8D)',
        url: '/certificates/mist-frontend-development-certificate.pdf',
        variant: 'accent',
      },
      {
        label: 'Web Technology Certificate (7 Days)',
        badgeLabel: 'Web Tech (7D)',
        url: '/certificates/mist-web-technology-certificate.png',
        variant: 'accent',
      },
    ],
  },
  {
    id: 'wele-internship',
    title: 'WeLe Internship Selection',
    organization: 'WeLe (wele.ai) × VIT Chennai',
    type: 'Opportunity Selection',
    badge: 'Selected / Offered',
    description:
      'Earned an internship offer for top performance at the VIT Data Quest 3.0 hackathon, competing among 500+ participants.',
    details: [
      'Selected for an internship opportunity at WeLe (https://wele.ai/) for best performance at the VIT Data Quest 3.0 hackathon',
      'Competed among 500+ participants across institutions (~450 VIT students, alongside SRM and IIT contenders); one of only 5 selected for an offer',
      'Status: Offered/selected (not labeled as completed)',
    ],
    certificateUrl: '/certificates/wele-internship-certificate.jpg',
    hackathonCertificateUrl: '/certificates/vit-dataquest-hackathon-certificate.pdf',
    certificates: [
      {
        label: 'WeLe Internship Offer Letter',
        badgeLabel: 'Internship Offer',
        url: '/certificates/wele-internship-certificate.jpg',
        variant: 'gold',
      },
      {
        label: 'VIT DataQuest 3 Hackathon Certificate',
        badgeLabel: 'DataQuest Cert',
        url: '/certificates/vit-dataquest-hackathon-certificate.pdf',
        variant: 'accent',
      },
    ],
  },
  {
    id: 'shaastra-iit',
    title: 'Shaastra 2026 Technical Events & Hackathons',
    organization: 'IIT Madras (Shaastra 2026)',
    type: 'Hackathon',
    badge: '7 Events Participated',
    description:
      'Participated across 7 competitive technical events and hackathons at Shaastra 2026, Indian Institute of Technology (IIT), Madras.',
    details: [
      'Visa 24hrs AI Hackathon: Personalized Credit Card Benefits Assistant (Team Member with Nithish Kumar T S)',
      'MOSIP Decode Hackathon | Digital Governance Summit 2026: Open-source digital identity challenge',
      'NeuroHACK: Shaastra 2026 technical hackathon',
      'Capture the Flag (CTF): Cybersecurity and exploitation challenge',
      'Reverse Coding X: Code pattern deduction and algorithmic reconstruction',
      'CP Potpourri 2026: Fast-paced competitive programming contest',
      'E-Contest: Engineering technical competition',
    ],
    certificateUrl: '/certificates/iit-madras-shaastra-certificates.pdf',
    certificates: [
      {
        label: 'Shaastra 2026 Certificates (All 7 Events at IIT Madras)',
        badgeLabel: 'Shaastra (7 Events)',
        url: '/certificates/iit-madras-shaastra-certificates.pdf',
        variant: 'accent',
      },
    ],
  },
  {
    id: 'sih-setu',
    title: 'Smart India Hackathon 2026 (Internal College Sprint)',
    organization: 'Kongu Engineering College (Institutional Stage)',
    type: 'Hackathon',
    badge: 'Internal Sprint',
    description:
      'Developed the SETU civic problem-reporting platform concept through internal college review rounds.',
    details: [
      'Project: SETU (Societal Engagement and Technology Utility)',
      'Role: Team Lead with a 6-member cross-disciplinary team',
      'Status: The team was not selected by the college for the final round; displayed strictly as an internal concept sprint',
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  grade: string;
  status: 'Completed' | 'Elite + Gold';
  notes?: string;
  certificateUrl?: string;
}

export const certificationsList: CertificationItem[] = [
  {
    id: 'nptel-hci',
    title: 'Human-Computer Interaction',
    issuer: 'NPTEL (IIT Guwahati)',
    grade: 'Elite + Gold (98%, Top 5%)',
    status: 'Elite + Gold',
    notes: 'In-depth study of interaction design, usability evaluation, cognitive models, and user experience engineering.',
    certificateUrl: '/certificates/nptel-hci-certificate.pdf',
  },
  {
    id: 'nptel-networking',
    title: 'Demystifying Networking',
    issuer: 'NPTEL',
    grade: 'Completed (65%)',
    status: 'Completed',
    notes: 'Covered computer network topologies, TCP/IP, OSI layering, routing protocols, and socket communication.',
    certificateUrl: '/certificates/nptel-networking-certificate.pdf',
  },
  {
    id: 'hcl-cloud',
    title: 'Cloud Computing',
    issuer: 'HCL Technologies',
    grade: 'Completed',
    status: 'Completed',
    notes: 'Cloud fundamentals and deployment models. (Practical experience was limited).',
  },
  {
    id: 'hcl-python',
    title: 'AI LLM Python',
    issuer: 'HCLTech',
    grade: 'Completed (45 Hours)',
    status: 'Completed',
    notes: 'Completed 45 hours of technical training on AI LLM Python conducted by HCLTech (February – May 2026).',
    certificateUrl: '/certificates/hcl-ai-llm-python-certificate.pdf',
  },
  {
    id: 'nonformal-pc',
    title: 'PC Troubleshooting & Hardware',
    issuer: 'Kongu Engineering College',
    grade: 'Completed (Non-formal course)',
    status: 'Completed',
    notes: 'Mandatory non-formal laboratory course covering PC hardware internals, LAN configuration, and OSI layers.',
  },
  {
    id: 'nonformal-react',
    title: 'React.js Fundamentals',
    issuer: 'Kongu Engineering College',
    grade: 'Completed (Non-formal course)',
    status: 'Completed',
    notes: 'Mandatory non-formal course covering core React theory and component state principles (30 Hours).',
    certificateUrl: '/certificates/kec-reactjs-certificate.jpg',
  },
];

export interface LeadershipItem {
  role: string;
  context: string;
  period: string;
  summary: string;
}

export const leadershipRecords: LeadershipItem[] = [
  {
    role: 'Student Representative',
    context: 'Department of Information Technology, KEC',
    period: 'Semester 1 & Semester 3',
    summary:
      'Served as Class Representative across two academic terms, liaising between faculty and students, coordinating academic schedules, and communicating cohort feedback.',
  },
  {
    role: 'Team Lead',
    context: 'Multiple Hackathons & Competition Sprints',
    period: '2024 – Present',
    summary:
      'Led multidisciplinary teams to 1st place wins at DevForge 2K26 (Retail POS), Tamil Mandram 24-Hour (Kongu Kural), and Centre of Excellence (OptiVest). Handled architecture design, task delegation, and presentation delivery.',
  },
  {
    role: 'Solo Presenter',
    context: 'CSI Solo Project Presentation',
    period: 'Symposium Record',
    summary:
      'Secured 2nd Place as a solo speaker presenting the Community Welfare Management System before professional evaluators and faculty judges.',
  },
  {
    role: 'IT Lead',
    context: 'EV Battery Cross-Disciplinary Project',
    period: 'Active Project',
    summary:
      'Heads the IT sub-team responsible for database schemas, backend telemetry ingestion APIs, AI analytics modules, and cross-hardware integration.',
  },
  {
    role: 'Team Member',
    context: 'Red Ribbon Club 8-Hour Hackathon',
    period: '1st Place Win',
    summary:
      'Contributed as an active development team member on the ChangeWave campaign analytics platform under strict 8-hour sprint deadlines.',
  },
];
