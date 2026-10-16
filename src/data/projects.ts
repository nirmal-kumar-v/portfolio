export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  role: string;
  featured: boolean;
  order: number;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  responsibilities?: string[];
  team?: string[];
  achievement?: string;
  githubUrl?: string;
  demoUrl?: string;
  statusNotes?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'kongu-kural',
    name: 'Kongu Kural',
    subtitle: 'Multilingual College Information Chatbot & SMS Gateway',
    category: 'AI / College Information Chatbot',
    role: 'Team Lead',
    featured: true,
    order: 1,
    overview:
      'Kongu Kural is an intelligent college assistance platform that answers inquiries about Kongu Engineering College across multiple languages using verified college information as its primary knowledge source.',
    problem:
      'College campus information is frequently scattered across various portals, making it difficult for prospective and enrolled students to get fast, accurate answers in their preferred native languages, especially in low-connectivity areas.',
    solution:
      'Built a conversational chatbot supporting Tamil, Tanglish, English, and Hindi. Integrated a specialized mobile SMS gateway operated via Termux on Android, enabling students to send SMS queries and receive answers even without direct internet connectivity.',
    features: [
      'Multilingual conversational engine (Tamil, Tanglish, English, Hindi)',
      'Dual-channel architecture: web chat + Android Termux SMS gateway',
      'Offline fallback mechanism for querying college databases via SMS',
      'Verified institutional knowledge base covering campus infrastructure, admissions, and departments',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'NLP', 'Android / Termux', 'Vercel'],
    responsibilities: [
      'Led the 3-member engineering team through system architecture and deployment',
      'Developed the conversational NLP routing logic and language-switch handler',
      'Engineered the Termux Android SMS gateway service and offline synchronization fallback',
      'Deployed the live production web portal on Vercel',
    ],
    team: ['Nirmal Kumar V. (Team Lead)', 'Ranjith K.', 'Mohamad Shameer'],
    achievement: '1st Prize — Tamil Mandram 24-Hour Hackathon',
    demoUrl: 'https://kongu-kural.vercel.app',
    githubUrl: 'https://github.com/nirmal-kumar-v/kongu-kural',
    statusNotes: 'Production deployed website and active public GitHub repository.',
  },
  {
    id: 'retail-pos',
    name: 'Integrated Retail POS & Store Management System',
    subtitle: 'Unified Multi-Store Offline-First Retail Platform',
    category: 'Retail Management Software',
    role: 'Team Lead',
    featured: true,
    order: 2,
    overview:
      'A comprehensive store operations platform addressing fragmented systems for billing, inventory management, customer loyalty, employee roles, and multi-store business reporting.',
    problem:
      'Retail outlets often suffer from network dropouts during checkout, causing stalled customer queues. Disconnected standalone billing software causes severe inventory discrepancies across multiple store branches.',
    solution:
      'Engineered an offline-first retail system featuring a local transaction queue, an automatic synchronization engine upon reconnection, deterministic conflict handling, and a unified multi-tenant database.',
    features: [
      'Offline-first billing engine with local transactional queueing',
      'Background data synchronization engine with conflict reconciliation',
      'Multi-store architecture with centralized reporting and branch-level isolation',
      'Role-based access control (Admin, Manager, Cashier)',
      'Real-time inventory decrement and low-stock escalation triggers',
      'Demonstrated mobile SMS gateway for customer transaction receipts',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'RBAC'],
    responsibilities: [
      'Led overall platform design and database schema architecture during the 24-hour sprint',
      'Implemented the offline queueing mechanism and sync reconciliation engine',
      'Constructed role-based authorization middlewares and store isolation logic',
    ],
    team: [
      'Nirmal Kumar V. (Team Lead)',
      'Praveenkarthick M.',
      'Lokgesh B.',
      'Rishi Priyan G.',
    ],
    achievement: '1st Place — DevForge 2K26 24-Hour Hackathon',
    githubUrl: 'https://github.com/nirmal-kumar-v/Store-Management-System',
    statusNotes: 'DevForge 2K26 hackathon-winning codebase available on GitHub.',
  },
  {
    id: 'optivest',
    name: 'OptiVest / PortfolioIQ',
    subtitle: 'Mathematical Portfolio Risk & Return Optimization Engine',
    category: 'FinTech / Portfolio Optimization',
    role: 'Team Lead',
    featured: true,
    order: 3,
    overview:
      'A quantitative investment analytics platform grounded in Modern Portfolio Theory (MPT), calculating risk-reward boundaries and generating mathematically optimal asset allocations.',
    problem:
      'Retail investors often make arbitrary portfolio diversification decisions without quantitative understanding of asset covariance, volatility, or Sharpe ratio frontiers.',
    solution:
      'Developed a quantitative web platform using Python SciPy optimization routines to compute the Efficient Frontier, simulate 10,000 randomized asset portfolios, and pinpoint the Maximum Sharpe and Minimum Volatility portfolios.',
    features: [
      'Modern Portfolio Theory (Markowitz) quantitative calculation models',
      'Interactive Efficient Frontier risk vs. return visualization curve',
      'Maximum Sharpe Ratio and Minimum Volatility optimal weights identification',
      'Monte Carlo simulation model over 10,000 simulated asset combinations',
      'Automated financial PDF performance report export',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'SciPy'],
    responsibilities: [
      'Headed the 4-member development team for the Centre of Excellence (CoE) challenge',
      'Interfaced the Python SciPy numerical optimization endpoints with the React client',
      'Designed interactive risk-return visualizations and constraint validation inputs',
    ],
    team: [
      'Nirmal Kumar V. (Team Lead)',
      'Nithish S.',
      'Niranjan G.',
      'Pranesh D.',
    ],
    achievement: '1st Prize — Centre of Excellence (CoE) Hackathon',
    demoUrl: 'https://optivest-psi.vercel.app/',
    githubUrl: 'https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization',
    statusNotes: 'Centre of Excellence hackathon-winning platform deployed on Vercel with public source code.',
  },
  {
    id: 'changewave',
    name: 'ChangeWave / Community Welfare Management System',
    subtitle: 'Social Campaign Impact Analytics & Community Welfare Platform',
    category: 'Social Campaigns / Community Welfare',
    role: 'Team Member / Team Lead (Varies by presentation)',
    featured: true,
    order: 4,
    overview:
      'A platform designed to organize, manage, and measure the real-world impact of social awareness campaigns and community welfare initiatives.',
    problem:
      'Community and social welfare drives frequently lack rigorous tracking mechanisms, leaving organizers without quantitative data on participant reach, sentiment, or lasting community impact.',
    solution:
      'Created an end-to-end platform facilitating structured social campaign launches, before-and-after participant surveying, sentiment analysis on community feedback, and verifiable welfare metric tracking.',
    features: [
      'Social campaign creation and volunteer coordination module',
      'Pre- and post-campaign survey distribution engine',
      'Sentiment analysis on public community feedback submissions',
      'Engagement metric dashboards tracking participation and reach',
      'Educational modules for community health and social awareness',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    responsibilities: [
      'Contributed as Team Member during the 8-hour Red Ribbon Club Hackathon (1st Place)',
      'Served as Solo Presenter at the CSI Solo Project Presentation (2nd Place)',
      'Led the team presentation at the CSI Team Project Presentation (2nd Place)',
      'Presented the system as the Community Welfare Management System for NBA accreditation evaluation',
    ],
    team: [
      'Red Ribbon Club: Nirmal Kumar V. (Team Member), Prathish S., Arnald S.',
      'CSI Team Presentation: Nirmal Kumar V. (Team Lead), Rajamurugan, Pon Yogesh S.',
    ],
    achievement:
      '1st Place (Red Ribbon Club Hackathon) • 2nd Place (CSI Solo Presentation) • 2nd Place (CSI Team Presentation)',
    demoUrl: 'https://changewave.tech',
    githubUrl: 'https://github.com/nirmal-kumar-v/changewave',
    statusNotes: 'Live web platform accessible at changewave.tech with public repository on GitHub.',
  },
  {
    id: 'careerlens',
    name: 'CareerLens',
    subtitle: 'Developer Profile Aggregation & Quantitative Analytics',
    category: 'Career Analytics / Developer Profile Analysis',
    role: 'Team Lead',
    featured: true,
    order: 5,
    overview:
      'A multi-platform developer analytics engine that gathers publicly accessible coding statistics across major platforms and synthesizes them into actionable skill metrics.',
    problem:
      'Developers build profiles across disparate platforms (LeetCode, Codeforces, GeeksforGeeks, LinkedIn), making it cumbersome for recruiters and mentors to gain a cohesive, verified picture of their technical trajectory.',
    solution:
      'Designed an aggregation engine to parse public statistics across developer platforms and present verified problem-solving consistency, difficulty coverage, and contest ratings in a unified profile.',
    features: [
      'Multi-platform public profile aggregation (LeetCode, GeeksforGeeks, Codeforces, LinkedIn)',
      'Data normalization algorithms across varied ranking and problem-scoring methodologies',
      'Algorithmic consistency and topic-coverage breakdown indicators',
      'Candidate summary view designed for technical evaluators and judges',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'Profile Analytics'],
    responsibilities: [
      'Led the team project presentation at KPR College (awarded 2nd Prize)',
      'Led the 6-member hackathon team at VIT Data Quest 3.0',
      'Structured the data extraction and normalization specifications',
    ],
    team: [
      'KPR College Presentation: Nirmal Kumar V. (Team Lead), Praveenkarthick M.',
      'VIT Data Quest 3.0: Nirmal Kumar V. (Lead), Praveenkarthick M., Navaneethan S., Lokgesh B., Praveen Kumar, Nisanth K.',
    ],
    achievement: '2nd Prize — KPR College Project Presentation',
    githubUrl: 'https://github.com/nirmal-kumar-v/careerLens',
    statusNotes:
      'Awarded 2nd Prize at KPR College. Source code repository available on GitHub.',
  },
  {
    id: 'setu',
    name: 'SETU',
    subtitle: 'Societal Engagement and Technology Utility (SIH Project)',
    category: 'Civic Technology / Social Impact',
    role: 'Team Lead',
    featured: true,
    order: 6,
    overview:
      'A comprehensive civic problem-reporting platform concept designed to bridge the gap between citizens reporting public issues and the students, academic institutions, CSR partners, and government bodies that can resolve them.',
    problem:
      'Traditional municipal grievance portals function merely as black-hole complaint inboxes where issues frequently stagnate without community transparency or resource allocation.',
    solution:
      'Proposed an orchestration pipeline: citizen complaints with verifiable evidence are categorized by AI, routed for government visibility, matched with engineering university capstone projects, and paired with CSR funding for physical prototyping and deployment.',
    features: [
      'Citizen grievance reporting with evidence upload (images, descriptions)',
      'AI-assisted categorization and department routing concept',
      'Multi-stakeholder portal concept (Citizen, Government, Academic Institution, CSR Sponsor)',
      'Problem-to-impact lifecycle tracking pipeline',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'Python / NLP', 'PostgreSQL', 'PostGIS'],
    responsibilities: [
      'Spearheaded the problem formulation and platform architecture as Team Lead',
      'Orchestrated team responsibilities across AI classification, database design, and interface mockups',
      'Presented the civic orchestration methodology for institutional review',
    ],
    team: [
      'Nirmal Kumar V. (Team Lead)',
      'Nithish Kumar T S',
      'Nithish S',
      'Loganat R K',
      'Vishali',
      'Prathisha',
    ],
    achievement: 'Institutional Project Development (Internal College Review)',
    demoUrl: 'https://setu-connect.vercel.app/',
    githubUrl: 'https://github.com/nirmal-kumar-v/SETU',
    statusNotes:
      'Smart India Hackathon (SIH) concept development. Live deployment on Vercel and repository on GitHub.',
  },
];

export interface MoreProjectItem {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  team?: string[];
  achievement?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const moreProjects: MoreProjectItem[] = [
  {
    id: 'bilingual-chatbot',
    name: 'Bilingual College Chatbot',
    category: 'Conversational AI / College Information',
    role: 'Team Lead',
    description:
      'A college-focused bilingual information chatbot supporting Tamil and English conversational interfaces to answer campus queries.',
    team: ['Nirmal Kumar V. (Lead)', 'Prathish S.', 'Nishanth KV', 'Ponyoshesh S.'],
    achievement: '2nd Place — Tamil Mandram 8-Hour Hackathon',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  },
  {
    id: 'learning-tracker',
    name: 'Learning Tracker',
    category: 'Personal Productivity',
    role: 'Sole Developer',
    description:
      'A personal task and daily habit tracking application built and utilized by its developer. Includes task management, completion streaks, and habit consistency tracking.',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 'secure-vault',
    name: 'Secure Vault',
    category: 'Security & Credential Management',
    role: 'Sole Developer',
    description:
      'A personal credential management web application representing my first full-stack MERN project. Supports user authentication and full CRUD operations (add, edit, delete, view) on stored credentials.',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express.js'],
  },
  {
    id: 'campus-course-chat',
    name: 'Campus Course Chat',
    category: 'Academic Collaboration',
    role: 'Developer',
    description:
      'An academic discussion platform developed during the 3rd Semester Design Thinking Laboratory that achieved an O Grade. Explores course-code-based discussion spaces and student-staff interaction.',
    team: ['Nirmal Kumar V.', 'Nishanth KV', 'Nathish'],
    achievement: 'O Grade — 3rd Semester Design Thinking Lab',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/nirmal-kumar-v/ccc',
    demoUrl: 'https://campus-course-chat.netlify.app/',
  },
  {
    id: 'perundurai-water',
    name: 'Perundurai Water Issue Reporting',
    category: 'Civic Issue Tracking',
    role: 'Developer',
    description:
      'A civic issue-reporting platform concept created for municipal water distribution tracking. Achieved an O Grade in 3rd Semester mini-project review.',
    team: ['Nirmal Kumar V.', 'Narmatha G.', 'Lavanya'],
    achievement: 'O Grade — 3rd Semester Mini Project',
    technologies: ['JavaScript', 'Node.js', 'HTML/CSS', 'MongoDB'],
    githubUrl: 'https://github.com/nirmal-kumar-v/perundurai-water-issue-reporting-system',
    demoUrl: 'https://perundurai-water-system.netlify.app/',
  },
  {
    id: 'ev-battery',
    name: 'EV Battery Project',
    category: 'Embedded & Analytics Integration',
    role: 'IT Lead',
    description:
      'Cross-disciplinary engineering project focused on electric vehicle battery analytics. Responsible for backend API architecture, database schema, AI processing, and hardware-software telemetry integration.',
    team: [
      'Nirmal Kumar V. (IT Lead: Backend, AI, DB, Integration)',
      'Prathish (Frontend, Dashboard & API)',
      'Sudharson (Hardware)',
      'Vaseegaran (Battery Research & Testing)',
    ],
    technologies: ['Python', 'Node.js', 'IoT Telemetry', 'Database Integration'],
  },
  {
    id: 'esp32-hospital-tracker',
    name: 'ESP32 Hospital Asset Tracker',
    category: 'IoT / Healthcare Hardware',
    role: 'Developer',
    description:
      'Exploratory hardware asset tracking system concept utilizing ESP32 microcontrollers for monitoring location-sensitive medical equipment. Further technical documentation is currently unpublished.',
    technologies: ['ESP32', 'C/C++', 'IoT Sensors'],
  },
  {
    id: 'flask-oracle-crud',
    name: 'Flask + Oracle CRUD Application',
    category: 'Enterprise Database Backend',
    role: 'Developer',
    description:
      'A database management backend application built with Python Flask and Oracle relational database. Further project documentation is currently unpublished.',
    technologies: ['Python', 'Flask', 'Oracle DB', 'SQL'],
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    category: 'Web Engineering & UI/UX',
    role: 'Architect & Developer',
    description:
      'Production developer portfolio built with React, Vite, Tailwind CSS, and TypeScript. Implements progressive disclosure, live coding stats adapters for LeetCode & GFG, tactile micro-interactions, and Vercel serverless integration.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vercel API'],
    githubUrl: 'https://github.com/nirmal-kumar-v',
  },
];
