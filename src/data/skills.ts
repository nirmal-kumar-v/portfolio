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

export interface TrainingExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: 'Program' | 'In-Plant Training' | 'Opportunity Selection' | 'Hackathon';
  badge: string;
  period?: string;
  description: string;
  details: string[];
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
  },
  {
    id: 'mist-tech',
    title: 'In-Plant Training',
    organization: 'Mist Technology',
    type: 'In-Plant Training',
    badge: '15 Days Completed',
    description:
      'Completed a focused 15-day technical in-plant training immersion covering core web technologies and frontend application development.',
    details: [
      'Duration: Exactly 15 days of hands-on technical training',
      '8 Days: Web Development architecture, backend basics, and client-server communication',
      '7 Days: Frontend Development, component design, and responsive interfaces',
      'Recorded as completed in-plant training',
    ],
  },
  {
    id: 'wele-internship',
    title: 'WeLe Internship Selection',
    organization: 'WeLe (wele.ai)',
    type: 'Opportunity Selection',
    badge: 'Selected / Offered',
    description:
      'Earned an internship offer following competitive performance at the VIT Data Quest 3.0 hackathon.',
    details: [
      'Selected for an internship opportunity at WeLe (https://wele.ai/) following VIT Data Quest 3.0',
      'Reported context: 5 internship selections from over 500 participants',
      'Status: Offered/selected (not labeled as completed)',
    ],
  },
  {
    id: 'shaastra-iit',
    title: 'Shaastra 2026 Hackathon',
    organization: 'IIT Madras × Visa',
    type: 'Hackathon',
    badge: '24-Hour Hackathon',
    description:
      'Competed in a high-intensity 24-hour sprint developing a personalized financial benefits assistant.',
    details: [
      'Role: Team Member (Team Lead: Nithish Kumar T S)',
      'Project Concept: Personalized Credit Card Benefits Assistant designed to deliver contextual notifications for cardholders (e.g., airport lounge access)',
      'Collaboration between IIT Madras Shaastra and Visa',
      'Participated as a competitive developer sprint (no prize claimed)',
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
}

export const certificationsList: CertificationItem[] = [
  {
    id: 'nptel-hci',
    title: 'Human-Computer Interaction',
    issuer: 'NPTEL (IIT Guwahati)',
    grade: 'Elite + Gold (98%, Top 5%)',
    status: 'Elite + Gold',
    notes: 'In-depth study of interaction design, usability evaluation, cognitive models, and user experience engineering.',
  },
  {
    id: 'nptel-networking',
    title: 'Demystifying Networking',
    issuer: 'NPTEL',
    grade: 'Completed (65%)',
    status: 'Completed',
    notes: 'Covered computer network topologies, TCP/IP, OSI layering, routing protocols, and socket communication.',
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
    title: 'Python Programming',
    issuer: 'HCL Technologies',
    grade: 'Completed',
    status: 'Completed',
    notes: 'Python syntax, data structures, and functional scripting. (Practical experience was limited).',
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
    notes: 'Mandatory non-formal course covering core React theory and component state principles.',
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
