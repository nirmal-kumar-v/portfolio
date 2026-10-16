export const personalInfo = {
  name: 'Nirmal Kumar V.',
  firstName: 'Nirmal',
  lastName: 'Kumar V.',
  monogram: 'NKV',
  headline: 'Full-Stack Developer · DSA · Product Builder',
  tagline: 'Building practical software, solving algorithmic problems, and leading teams from ideas to working prototypes.',
  introduction:
    "I'm an Information Technology student at Kongu Engineering College who enjoys building practical software, solving algorithmic problems, and leading teams from ideas to working prototypes.",
  status: 'B.Tech IT (3rd Year, 5th Sem) @ Kongu Engineering College',
  location: 'Tiruppur, Tamil Nadu, India',
  email: 'nirmalkumar31082006@gmail.com',
  collegeEmail: 'nirmalkumarv.24it@kongu.edu',
  college: 'Kongu Engineering College',
  degree: 'B.Tech — Information Technology',
  currentYear: 'Third Year',
  currentSemester: 'Fifth Semester',
  cgpa: 8.62,
};

export const aboutBio = `I am a B.Tech Information Technology student at Kongu Engineering College with a strong focus on algorithmic problem solving, full-stack software development, and product execution.

Rather than building purely theoretical exercises, I focus on building systems that address tangible problems — ranging from multilingual AI chatbots and financial portfolio optimizers to offline-resilient retail POS architectures and civic impact platforms.

I approach software engineering with a structured mindset: analyze real-world constraints, design clean and reliable architectures, and deliver resilient software under competitive hackathon timelines. This approach has led to 9 reported prize-winning records across regional and national competitions.`;

export const heroStats = [
  { value: 9, label: 'Reported Prize Records', suffix: '', decimals: 0 },
  { value: 8.62, label: 'CGPA (Sem 4)', suffix: '', decimals: 2 },
  { value: 250, label: 'LeetCode (Baseline)', suffix: '+', decimals: 0, key: 'leetcode' },
  { value: 500, label: 'GFG (Baseline)', suffix: '+', decimals: 0, key: 'gfg' },
  { value: 4, label: 'Elite PAAC Selection', suffix: '%', decimals: 0 },
];

export interface SemesterGrade {
  semester: string;
  gpa: number;
  cgpa: number;
  pdfUrl?: string;
}

export const semesterGrades: SemesterGrade[] = [
  { semester: 'Semester 1', gpa: 8.87, cgpa: 8.87, pdfUrl: '/results/semester-1-result.pdf' },
  { semester: 'Semester 2', gpa: 8.59, cgpa: 8.73, pdfUrl: '/results/semester-2-result.pdf' },
  { semester: 'Semester 3', gpa: 8.50, cgpa: 8.66, pdfUrl: '/results/semester-3-result.pdf' },
  { semester: 'Semester 4', gpa: 8.54, cgpa: 8.62, pdfUrl: '/results/semester-4-result.pdf' },
];

export interface SchoolEducationItem {
  grade: string;
  year: string;
  marks: string;
  percentage: string;
  rank: string;
  note?: string;
  pdfUrl?: string;
}

export const schoolEducation: SchoolEducationItem[] = [
  {
    grade: '12th Standard (HSC)',
    year: 'March 2024',
    marks: '548/600',
    percentage: '91.33%',
    rank: '3rd Rank',
    note: 'Class 12 Computer Science: 100/100',
    pdfUrl: '/results/12th-result.pdf',
  },
  {
    grade: '11th Standard',
    year: 'March 2023',
    marks: '531/600',
    percentage: '88.5%',
    rank: '3rd Rank',
    pdfUrl: '/results/11th-result.pdf',
  },
  {
    grade: '10th Standard (SSLC)',
    year: 'May 2022',
    marks: '437/500',
    percentage: '87.4%',
    rank: '6th Rank',
    pdfUrl: '/results/10th-result.pdf',
  },
];

export const socialLinks = {
  github: 'https://github.com/nirmal-kumar-v',
  linkedin: 'https://www.linkedin.com/in/nirmal-kumar-v-',
  leetcode: 'https://leetcode.com/u/nirmal-kumar-v/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/vnirmalkumar',
  codeforces: 'https://codeforces.com/profile/nirmal_kumar_v',
  codechef: 'https://www.codechef.com/users/nirmal_kumar_v',
  hackerrank: 'https://hackerrank.com/nirmalkumar_v',
  duolingo: 'https://www.duolingo.com/profile/NirmalKumar7',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Coding Profiles', href: '#coding' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
