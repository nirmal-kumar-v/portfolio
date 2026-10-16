export interface AchievementRecord {
  id: string;
  order: number;
  event: string;
  result: string;
  position: 1 | 2;
  project: string;
  role: string;
  team: string[];
  description: string;
  category: 'hackathon' | 'presentation';
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  certificateUrl?: string;
}

export const nineAchievements: AchievementRecord[] = [
  {
    id: 'tamil-mandram-24hr',
    order: 1,
    event: 'Tamil Mandram 24-Hour Hackathon',
    result: '1st Prize',
    position: 1,
    project: 'Kongu Kural',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Ranjith K.', 'Mohamad Shameer'],
    description:
      'Engineered an AI-assisted multilingual college chatbot supporting Tamil, Tanglish, English, and Hindi, integrated with an Android Termux SMS gateway for offline query processing.',
    category: 'hackathon',
    technologies: ['React', 'Node.js', 'Express', 'NLP', 'Termux SMS'],
    demoUrl: 'https://kongu-kural.vercel.app',
    githubUrl: 'https://github.com/nirmal-kumar-v/kongu-kural',
    certificateUrl: '/certificates/tamil-mandram-hackathon-certificate.jpg',
  },
  {
    id: 'devforge-24hr',
    order: 2,
    event: 'DevForge 2K26 24-Hour Hackathon',
    result: '1st Place',
    position: 1,
    project: 'Integrated Retail POS & Store Management System',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Praveenkarthick M.', 'Lokgesh B.', 'Rishi Priyan G.'],
    description:
      'Architected an offline-first retail operations system featuring local transaction queueing, synchronization engine, multi-store data isolation, and role-based permissions.',
    category: 'hackathon',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'RBAC'],
    githubUrl: 'https://github.com/nirmal-kumar-v/Store-Management-System',
    certificateUrl: '/certificates/devforge-certificate.jpg',
  },
  {
    id: 'coe-hackathon',
    order: 3,
    event: 'Centre of Excellence (CoE) Hackathon',
    result: '1st Prize',
    position: 1,
    project: 'OptiVest / PortfolioIQ',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Nithish S.', 'Niranjan G.', 'Pranesh D.'],
    description:
      'Designed a quantitative portfolio risk and return optimization platform applying Modern Portfolio Theory, generating the Efficient Frontier and simulating 10,000 asset weights.',
    category: 'hackathon',
    technologies: ['React', 'Python', 'SciPy', 'FastAPI', 'Tailwind CSS'],
    demoUrl: 'https://optivest-psi.vercel.app/',
    githubUrl: 'https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization',
  },
  {
    id: 'rrc-hackathon',
    order: 4,
    event: 'Red Ribbon Club 8-Hour Hackathon',
    result: '1st Place',
    position: 1,
    project: 'ChangeWave',
    role: 'Team Member',
    team: ['Nirmal Kumar V. (Team Member)', 'Prathish S.', 'Arnald S.'],
    description:
      'Contributed to the rapid development of a social campaign management platform with community impact surveying and sentiment analysis.',
    category: 'hackathon',
    technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB', 'JWT'],
    demoUrl: 'https://changewave.tech',
    githubUrl: 'https://github.com/nirmal-kumar-v/changewave',
  },
  {
    id: 'tamil-mandram-8hr',
    order: 5,
    event: 'Tamil Mandram 8-Hour Hackathon',
    result: '2nd Place',
    position: 2,
    project: 'Bilingual College Chatbot',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Prathish S.', 'Nishanth KV', 'Ponyoshesh S.'],
    description:
      'Developed a conversational college assistance chatbot providing answers to student queries in both Tamil and English.',
    category: 'hackathon',
    technologies: ['HTML/CSS', 'JavaScript', 'Node.js'],
  },
  {
    id: 'csi-solo',
    order: 6,
    event: 'CSI Solo Project Presentation',
    result: '2nd Place',
    position: 2,
    project: 'Community Welfare Management System (ChangeWave)',
    role: 'Solo Presenter',
    team: ['Nirmal Kumar V. (Solo Presenter)'],
    description:
      'Delivered a technical presentation demonstrating the architecture, survey feedback pipeline, and social impact measurement of the Community Welfare Management System.',
    category: 'presentation',
    technologies: ['Technical Presentation', 'System Architecture', 'Impact Analytics'],
    demoUrl: 'https://changewave.tech',
    githubUrl: 'https://github.com/nirmal-kumar-v/changewave',
  },
  {
    id: 'csi-team',
    order: 7,
    event: 'CSI Team Project Presentation',
    result: '2nd Place',
    position: 2,
    project: 'Community Welfare Management System (ChangeWave)',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Rajamurugan', 'Pon Yogesh S.'],
    description:
      'Led the team technical presentation demonstrating the end-to-end implementation and societal benefits of the Community Welfare Management System before professional evaluators.',
    category: 'presentation',
    technologies: ['Software Engineering', 'Full-Stack Showcase', 'Technical Communication'],
    demoUrl: 'https://changewave.tech',
    githubUrl: 'https://github.com/nirmal-kumar-v/changewave',
  },
  {
    id: 'kpr-presentation',
    order: 8,
    event: 'KPR College Project Presentation',
    result: '2nd Prize',
    position: 2,
    project: 'CareerLens',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Praveenkarthick M.'],
    description:
      'Presented CareerLens, a developer profile analytics engine that aggregates and normalizes public coding metrics from LeetCode, Codeforces, GeeksforGeeks, and LinkedIn.',
    category: 'presentation',
    technologies: ['Data Analytics', 'Profile Aggregation', 'Technical Evaluation'],
    githubUrl: 'https://github.com/nirmal-kumar-v/careerLens',
    certificateUrl: '/certificates/kpr-neuroverse-certificate.jpg',
  },
  {
    id: 'ieee-bci',
    order: 9,
    event: 'IEEE Paper Presentation',
    result: '2nd Place',
    position: 2,
    project: 'Brain-Computer Interface (BCI)',
    role: 'Team Lead',
    team: ['Nirmal Kumar V. (Lead)', 'Ponyogesh S.'],
    description:
      'Presented an academic and technical research paper examining emerging Brain-Computer Interface architectures, neural signal processing, and assistive tech applications.',
    category: 'presentation',
    technologies: ['Neural Systems', 'Research Methodology', 'Emerging Technology'],
    certificateUrl: '/certificates/ieee-vortex-certificate.jpg',
  },
];
