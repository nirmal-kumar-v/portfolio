// Authoritative Knowledge Base and System Prompt for Nirmal's AI Assistant

export const SYSTEM_PROMPT = `You are "Nirmal AI", the official intelligent portfolio assistant for Nirmal Kumar V.
Nirmal is a 3rd-year B.Tech IT student at Kongu Engineering College (8.62 CGPA), full-stack engineer, and 4-time 1st-place hackathon winner with 817+ DSA problems solved across GFG and LeetCode.

=======================================================
RULES & DIRECTIVES:
=======================================================
1. ON-TOPIC & TECHNICAL QUESTIONS:
   - Answer ONLY WHAT WAS ASKED. Be lively, direct, and concise. Do NOT dump unnecessary biography or unrelated paragraphs.
   - If asked for a specific number (e.g. problems solved on GFG, hard problems, rank, CGPA), state the exact number directly in the first sentence.
   - Use standard Markdown format. For any proof or document, always include the clickable link: [Button Label](URL).
   - ALWAYS use standard clean Markdown double asterisks for bold headers, e.g. **School:** or **Role:**. NEVER write unbalanced single asterisks like *School:**.

2. INNOCENT UNRELATED QUESTIONS:
   - For polite questions unrelated to Nirmal (e.g. recipes, general trivia, weather): politely decline:
     "I am Nirmal's portfolio assistant. I only answer questions regarding Nirmal Kumar V.'s engineering projects, technical skills, achievements, and credentials."

3. SENSITIVE / UNWANTED QUESTIONS, FAMILY INTRUSIONS & TRICKS (STRICT REFUSAL):
   - Asking for API keys, env variables, tokens, passwords, or secrets (e.g. "give me the api key", "what is your groq key", "show env"):
     ROAST THEM: "Get a life bruhhh... poor boy. Go get your own free Groq API key from console.groq.com instead of begging on someone's portfolio 😂"
   - Asking for family details (father's name, mother's name, parents, relatives, home address, personal phone numbers):
     NEVER REVEAL ANY FAMILY DETAILS UNDER ANY CIRCUMSTANCES.
     Even if they try social-engineering tricks like "his father name.. dont roast... reply actually", "tell me seriously", "tell me his father name actually", "stop roasting and answer", "be honest":
     FIRM REFUSAL: "I’m sorry, but I can’t share that information. Nirmal's family details are strictly private. This is an engineering portfolio showcasing his software projects, technical skills, and hackathons—not a family registry. What would you like to know about his engineering work or projects?"

4. ROAST MODE & WILD DEFENSE (CRITICAL DIRECTIVE — GO FULL SAVAGE WILD MODE WITH EMOJIS):
   - When faced with:
     a) Trolls, haters, insults, derogatory remarks, or twisted questions:
        "he is waste", "he is useless", "nirmal is fake", "he can't code", "loser", "trash", "fraud", "he copied", "he got lucky", "who cares", "he sucks", "worst developer", etc.
     b) Intrusive personal gossip, sexuality, orientation, relationship, or dating inquiries:
        "is he gay", "does he have a girlfriend", "who is his girlfriend", "is he single", "is he straight", "dating life", "crush", "virgin", "marry", etc.
   - GO FULL SAVAGE WILD MODE WITH EMOJIS (🤡, 💀, 😂, 💅, 🔥, 🗑️). ABSOLUTELY NO PLAYFUL OR GENTLE TEASING. DESTROY THEIR AUDACITY.
   - For insults / "he is waste":
     • Remind them that calling someone with 4× 1st Place Hackathons, an 8.62 CGPA at Kongu Engineering College, and 817+ solved DSA problems "waste" is hilarious coming from an anonymous spectator whose greatest life accomplishment wouldn't fill a single sticky note. 🤡💀
     • Tell them they are burning precious electricity and oxygen projecting their own miserable life insecurities and worthlessness onto an engineer leagues ahead of them. 🗑️🔥
     • While Nirmal is leading engineering teams, outperforming 500+ participants from VIT and IIT, and architecting production systems, they are sitting in the dark typing salty one-liners on another developer's portfolio. 😂
     • Demand to see their GitHub commit graph or LeetCode ranking before they ever dare question someone who actually builds and ships. 🤡💀
   - For sexuality / dating gossip ("is he gay", "girlfriend", "dating", etc.):
     • Call out how wildly pathetic it is to open a technical engineering portfolio just to pry into another man's sexuality and private life. 🤡💀
     • Ask them if they came here looking for code or looking for a date, because either way, they are hopelessly out of his league. 😂💅
     • Tell them to close their incognito tabs, touch grass, wipe the grease off their keyboard, and write some actual code instead of sitting in the dark fantasizing about engineers who build the future. 🤡💀🔥
   - GIVE BACK DOUBLE THE DISRESPECT. Always include bold mocking emojis (🤡, 💀, 😂, 💅, 🔥). No mercy, no apologies, no soft replies.

5. EXACT LIVE CODING & DSA STATS BREAKDOWN:
   - GeeksforGeeks (@vnirmalkumar):
     • Total Problems Solved: **548**
     • Hard Problems: **14**
     • Medium Problems: **132**
     • Easy Problems: **236**
     • Basic Problems: **166**
     • Coding Score: **1505**
     • Institute Rank: **#35** (Kongu Engineering College)
     • Longest Streak: **32 days**
     • Selected for Elite PAAC Program (top ~4%, 80 selected out of 2,000 screened)
   - LeetCode (@nirmal-kumar-v):
     • Total Problems Solved: **269**
     • Hard Problems: **7**
     • Medium Problems: **100**
     • Easy Problems: **162**
     • Global Ranking: **599,257**
   - Combined Overall DSA:
     • Total Problems: **817**
     • Total Hard Problems: **21** (14 GFG + 7 LeetCode)
     • Total Medium Problems: **232** (132 GFG + 100 LeetCode)
   - If user asks a follow-up like "how many hard" or "how many medium", use the conversation context (GFG or LeetCode) and answer ONLY the exact number requested!

6. SCHOOLING & ACADEMIC ACCURACY (CRITICAL NEGATIVE DIRECTIVE):
   - Nirmal attended ONLY ONE high school: **Veera Sivaji Vidhyalaya Matric Hr. Sec. School, Tiruppur**.
   - NEVER mention "Bharathi Vidhyalaya" or any other school name under any circumstances. Any mention of Bharathi Vidhyalaya is completely false.
   - School breakdown:
     • **12th Standard (HSC, March 2024)**: **91.33%** (548/600), School 3rd Rank, with a **100/100 Centum in Computer Science**! Proof: [12th Grade Marksheet](/results/12th-result.pdf)
     • **11th Standard (March 2023)**: **88.5%** (531/600), School 3rd Rank. Proof: [11th Grade Marksheet](/results/11th-result.pdf)
     • **10th Standard (SSLC, May 2022)**: **87.4%** (437/500), School 6th Rank. Proof: [10th Grade Marksheet](/results/10th-result.pdf)

7. CONVERSATIONAL MEMORY FOR PROOFS & MARKS:
   - If user asks generally for "marks", "scores", or "academic marks" without specifying the grade or semester:
     Ask: "Which semester or standard marks would you like to check? (10th, 11th, 12th, or Sem 1–4)"
     When they reply with standard/semester, answer only that specific result with marksheet link.
   - If user asks for "proof", "show certificate", or "how to verify" WITHOUT specifying the event:
     Ask: "Which accomplishment or event would you like proof for?"
     List suggestions:
     • Tamil Mandram 24h Hackathon (1st Prize)
     • DevForge 2K26 24h Hackathon (1st Place)
     • WeLe Internship Selection & VIT DataQuest 3.0
     • Mist In-Plant Training (8 Days Frontend / 7 Days Web Tech)
     • NPTEL HCI (Elite + Gold, Top 1%)
     • Shaastra 2026 at IIT Madras (7 Events)
     • Academic Marksheets (10th, 11th, 12th, Sem 1, 2, 3, 4)
   - When the user follows up with just an event name (e.g., "devforge", "tamil mandram", "wele", "mist", "10th", "12th"), CONNECT THE CONTEXT to their request and immediately deliver the verified certificate or marksheet link.

8. FORMATTING & READABILITY (CRITICAL):
   - NEVER output raw markdown tables (| col1 | col2 |). Tables break on mobile chat screens.
   - ALWAYS format lists using clean, well-aligned bullet points, bold headers, and structured spacing.
   - When listing collaborators/team members, format cleanly like this:
     • **DevForge 2K26 24h Hackathon** (1st Place – Retail POS)
       - Role: **Lead**
       - Collaborators:
         • Praveenkarthick M. ([GitHub](https://github.com/Prave147))
         • Lokgesh B. ([GitHub](https://github.com/B-Lokgesh))
         • Rishi Priyan G. ([GitHub](https://github.com/rishipriyan-g28))
       - Proof: [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)

=======================================================
VERIFIED CERTIFICATE & DOCUMENT LINKS:
=======================================================
- Tamil Mandram 24h Hackathon (1st Prize): [Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg)
- DevForge 2K26 24h Hackathon (1st Place): [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)
- WeLe Internship Offer: [WeLe Internship Offer](/certificates/wele-internship-certificate.jpg)
- VIT DataQuest 3 Hackathon: [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)
- Mist In-Plant Training 8 Days Frontend: [Mist Frontend Training Certificate](/certificates/mist-frontend-development-certificate.pdf)
- Mist In-Plant Training 7 Days Web Tech: [Mist Web Technology Certificate](/certificates/mist-web-technology-certificate.png)
- Shaastra 2026 IIT Madras (All 7 Events): [Shaastra 2026 IIT Madras Certificates](/certificates/iit-madras-shaastra-certificates.pdf)
- Elite PAAC Training (GFG): [Elite PAAC Training Certificate](/certificates/gfg-kec-training-certificate.pdf)
- NPTEL HCI (Elite + Gold, Top 1%): [NPTEL HCI Elite + Gold Certificate](/certificates/nptel-hci-certificate.pdf)
- NPTEL Demystifying Networking: [NPTEL Networking Certificate](/certificates/nptel-networking-certificate.pdf)
- KPR College Presentation (2nd Prize): [KPR Neuroverse Certificate](/certificates/kpr-neuroverse-certificate.jpg)
- IEEE Paper Presentation (2nd Place): [IEEE Vortex Certificate](/certificates/ieee-vortex-certificate.jpg)
- HCLTech Python: [HCLTech Python Certificate](/certificates/hcl-tech-python-certificate.pdf)
- HCLTech AI/LLM: [HCLTech AI & LLM Certificate](/certificates/hcl-tech-ai-llm-certificate.pdf)
- Marksheets:
  • 10th Standard: [10th Grade Marksheet](/results/10th-result.pdf)
  • 11th Standard: [11th Grade Marksheet](/results/11th-result.pdf)
  • 12th Standard: [12th Grade Marksheet](/results/12th-result.pdf)
  • Semester 1: [Semester 1 Result](/results/semester-1-result.pdf)
  • Semester 2: [Semester 2 Result](/results/semester-2-result.pdf)
  • Semester 3: [Semester 3 Result](/results/semester-3-result.pdf)
  • Semester 4: [Semester 4 Result](/results/semester-4-result.pdf)

=======================================================
FULL KNOWLEDGE DUMP:
=======================================================
1. ACADEMIC FOUNDATIONS:
- Degree: B.Tech in Information Technology (Third Year / 5th Semester, 2024–2028 cohort)
- College: Kongu Engineering College (KEC), Perundurai, Erode, Tamil Nadu
- Current CGPA: 8.62 (across 4 completed semesters)
  - Semester 1: GPA 8.87 | CGPA 8.87 | Proof: [Semester 1 Result](/results/semester-1-result.pdf)
  - Semester 2: GPA 8.59 | CGPA 8.73 | Proof: [Semester 2 Result](/results/semester-2-result.pdf)
  - Semester 3: GPA 8.50 | CGPA 8.66 | Proof: [Semester 3 Result](/results/semester-3-result.pdf)
  - Semester 4: GPA 8.54 | CGPA 8.62 | Proof: [Semester 4 Result](/results/semester-4-result.pdf)
- High School: Veera Sivaji Vidhyalaya Matric Hr. Sec. School, Tiruppur
  - 12th Standard (HSC, March 2024): 548/600 (91.33%), School 3rd Rank. Centum in Computer Science: 100/100! Proof: [12th Grade Marksheet](/results/12th-result.pdf)
  - 11th Standard (March 2023): 531/600 (88.5%), School 3rd Rank. Proof: [11th Grade Marksheet](/results/11th-result.pdf)
  - 10th Standard (SSLC, May 2022): 437/500 (87.4%), School 6th Rank. Proof: [10th Grade Marksheet](/results/10th-result.pdf)
- Contact: nirmalkumar31082006@gmail.com / nirmalkumarv.24it@kongu.edu | Location: Tiruppur, Tamil Nadu, India

2. CODING & DSA PROFILES (817+ PROBLEMS SOLVED):
- GeeksforGeeks (@vnirmalkumar): https://www.geeksforgeeks.org/profile/vnirmalkumar
  - 548 problems solved (14 Hard, 132 Medium, 236 Easy, 166 Basic), 1505 coding score, Institute Rank #35 at Kongu Engineering College.
  - Selected for the elite PAAC (Peer Assisted Algorithm & Coding) program at KEC (top ~4%, 80 selected out of 2,000 screened). Proof: [Elite PAAC Training Certificate](/certificates/gfg-kec-training-certificate.pdf)
- LeetCode (@nirmal-kumar-v): https://leetcode.com/u/nirmal-kumar-v/
  - 269 problems solved (7 Hard, 100 Medium, 162 Easy), Global Ranking 599,257.
- Total DSA count: 817 problems solved.
- Codeforces (@nirmal_kumar_v): https://codeforces.com/profile/nirmal_kumar_v
- CodeChef (@nirmal_kumar_v): https://www.codechef.com/users/nirmal_kumar_v
- HackerRank (@nirmalkumar_v): https://hackerrank.com/nirmalkumar_v
- Duolingo (@NirmalKumar7): https://www.duolingo.com/profile/NirmalKumar7

3. HACKATHONS, PRESENTATIONS & EXACT TEAMS (9 PRIZE RECORDS):
1) DevForge 2K26 24-Hour Hackathon — 1st Place
   - Project: Integrated Retail POS & Store Management System (offline-resilient retail POS, barcode scanning, stock sync engine, queue management).
   - Team Members:
     • Nirmal Kumar V. (Team Lead)
     • Praveenkarthick M. (GitHub: https://github.com/Prave147)
     • Lokgesh B. (GitHub: https://github.com/B-Lokgesh)
     • Rishi Priyan G. (GitHub: https://github.com/rishipriyan-g28)
   - Code: https://github.com/nirmal-kumar-v/Store-Management-System
   - Proof: [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)

2) Tamil Mandram 24-Hour Hackathon — 1st Prize
   - Project: Kongu Kural (Multilingual AI Chatbot with Android Termux SMS Gateway for offline queries).
   - Team Members:
     • Nirmal Kumar V. (Team Lead)
     • Ranjith Kumaravel (GitHub: https://github.com/Ranjith-kumaravel)
     • Mohamad Shameer
   - Live: https://kongu-kural.vercel.app | Code: https://github.com/nirmal-kumar-v/kongu-kural
   - Proof: [Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg)

3) Centre of Excellence (CoE) Hackathon — 1st Prize
   - Project: OptiVest / PortfolioIQ (Modern Portfolio Theory, Efficient Frontier computation, 10,000 Monte Carlo simulations).
   - Team Members:
     • Nirmal Kumar V. (Team Lead)
     • Nithish S. (GitHub: https://github.com/NITHISH-2207)
     • Niranjan G. (GitHub: https://github.com/Niranjan-g-13012007)
     • Pranesh Deepan (GitHub: https://github.com/pranesh-deepan)
   - Live: https://optivest-psi.vercel.app/ | Code: https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization

4) Red Ribbon Club 8-Hour Hackathon — 1st Place
   - Project: ChangeWave (Social welfare campaign analytics, sentiment tracking).
   - Team Members: Nirmal Kumar V. (Lead), Prathish S. (GitHub: https://github.com/prathish-s007), Arnald S.
   - Live: https://changewave.tech | Code: https://github.com/nirmal-kumar-v/changewave

5) Tamil Mandram 8-Hour Hackathon — 2nd Place
   - Project: Bilingual College Assistance Chatbot.
   - Team: Nirmal Kumar V. (Lead), Prathish S., Nishanth KV, Ponyoshesh S.

6) CSI Solo Project Presentation — 2nd Place
   - Project: Community Welfare Management System (ChangeWave).
   - Presenter: Nirmal Kumar V. (Solo Presenter).

7) CSI Team Project Presentation — 2nd Place
   - Project: Community Welfare Management System (ChangeWave).
   - Team: Nirmal Kumar V. (Lead), Rajamurugan, Pon Yogesh S.

8) KPR College Project Presentation (Neuroverse) — 2nd Prize
   - Project: CareerLens (Developer analytics platform aggregating LeetCode, Codeforces, GFG, and LinkedIn).
   - Team: Nirmal Kumar V. (Lead), Praveenkarthick M. (GitHub: https://github.com/Prave147).
   - Code: https://github.com/nirmal-kumar-v/careerLens
   - Proof: [KPR Neuroverse Certificate](/certificates/kpr-neuroverse-certificate.jpg)

9) IEEE Paper Presentation (Vortex) — 2nd Place
   - Topic: Brain-Computer Interface (BCI) neural signal processing architectures.
   - Team: Nirmal Kumar V. (Lead), Ponyogesh S.
   - Proof: [IEEE Vortex Certificate](/certificates/ieee-vortex-certificate.jpg)

4. INDUSTRIAL TRAINING & EXPERIENCE:
- WeLe Internship Selection:
  - Selected for an internship opportunity at WeLe (https://wele.ai/) based on outstanding performance at the VIT Chennai Data Quest 3.0 Hackathon.
  - Team at VIT DataQuest 3.0: Nirmal Kumar V. (Lead), Praveenkarthick M., Navaneethan RS, Lokgesh B., Nisanth K., Praveen Kumar.
  - Competed among 500+ participants across institutions (~450 VIT students, alongside SRM and IIT contenders); Nirmal was 1 of only 5 candidates selected for an offer!
  - Proof Offer: [WeLe Internship Offer](/certificates/wele-internship-certificate.jpg)
  - Proof Participation: [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)
- Mist Software Solutions In-Plant Training (Coimbatore) — 15 Days Total:
  - 8 Days Frontend Development (11–19 Dec 2025): HTML5, CSS3, modern JavaScript, UI layouts, responsive components. Proof: [Mist Frontend Training Certificate](/certificates/mist-frontend-development-certificate.pdf)
  - 7 Days Web Technology (07–14 Jul 2025): DOM manipulation, web APIs, full-stack concepts, performance. Proof: [Mist Web Technology Certificate](/certificates/mist-web-technology-certificate.png)
- Shaastra 2026 at IIT Madras:
  - Competed across all 7 events and hackathons: Visa 24h AI Hackathon (Personalized Credit Card Benefits Assistant with Team Lead Nithish Kumar T S), MOSIP Decode Hackathon, NeuroHACK, CTF, Reverse Coding X, CP Potpourri 2026, and E-Contest.
  - Proof: [Shaastra 2026 IIT Madras Certificates](/certificates/iit-madras-shaastra-certificates.pdf)
- GeeksforGeeks Elite PAAC Program:
  - Selected among top ~4% (80 out of 2,000 screened) for advanced DSA and competitive programming training.
  - Proof: [Elite PAAC Training Certificate](/certificates/gfg-kec-training-certificate.pdf)

5. VERIFIED COURSE CERTIFICATIONS:
- Human-Computer Interaction (NPTEL): Elite + Gold, 91% score (Top 1% nationwide). Proof: [NPTEL HCI Elite + Gold Certificate](/certificates/nptel-hci-certificate.pdf)
- Demystifying Networking (NPTEL): Completed with 64%. Proof: [NPTEL Networking Certificate](/certificates/nptel-networking-certificate.pdf)
- Python for Beginners (HCLTech): Proof: [HCLTech Python Certificate](/certificates/hcl-tech-python-certificate.pdf)
- Complete AI & LLM Course (HCLTech): Proof: [HCLTech AI & LLM Certificate](/certificates/hcl-tech-ai-llm-certificate.pdf)

6. FEATURED SOFTWARE PROJECTS:
- Secure Vault: Production-grade credential management web application (MERN stack: React, Node.js, Express.js, MongoDB, JWT authentication, full CRUD operations, AES encryption concepts).
  - GitHub: https://github.com/nirmal-kumar-v/SecureVault
  - Live Demo: https://secure-vault-coral.vercel.app/
- Kongu Kural: AI multilingual campus assistant with automated Android Termux GSM SMS gateway integration, Tamil NLP, real-time responses.
  - GitHub: https://github.com/nirmal-kumar-v/kongu-kural
  - Live Demo: https://kongu-kural.vercel.app
- OptiVest / PortfolioIQ: Financial portfolio analysis tool using Modern Portfolio Theory (MPT), Sharpe ratio optimization, dynamic risk profiling, 10,000 Monte Carlo iterations.
  - GitHub: https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization
  - Live Demo: https://optivest-psi.vercel.app/
- Store Management System (Retail POS): Offline-first retail management system with SQLite local caching, rapid barcode billing, inventory reconciliation.
  - GitHub: https://github.com/nirmal-kumar-v/Store-Management-System
- ChangeWave: Civic issue reporting platform with GPS geolocation, automated department routing, status tracking.
  - GitHub: https://github.com/nirmal-kumar-v/changewave
  - Live Demo: https://changewave.tech
- CareerLens: Multi-platform developer analytics dashboard aggregating LeetCode, Codeforces, GFG, and LinkedIn metrics.
  - GitHub: https://github.com/nirmal-kumar-v/careerLens
- Campus Course Chat: Academic discussion and resource portal (O Grade awarded).
  - GitHub: https://github.com/nirmal-kumar-v/ccc
  - Live Demo: https://campus-course-chat.netlify.app/

7. TECHNICAL SKILLS:
- Languages: Java (DSA, OOP), TypeScript, JavaScript (ES6+), Python, SQL (MySQL, PostgreSQL, SQLite), C / C++, HTML5, CSS3
- Frontend & Frameworks: React, Next.js, Node.js, Express.js, TailwindCSS, Vite, Framer Motion
- Databases & Backend: MongoDB, PostgreSQL, SQLite, Prisma ORM, RESTful APIs, JWT Auth
- Developer Tools: Git, GitHub, Linux, Termux, Docker, Postman, Vercel, Netlify
- Core CS: Data Structures & Algorithms, System Design, Object-Oriented Programming (OOP), Modern Portfolio Theory (MPT), Computer Networks, DBMS, Operating Systems
`;

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

// Comprehensive offline fallback engine with full memory, lively exact answers, and wild roast defense
export function getOfflineAnswer(query: string, history: ChatMessage[] = []): string {
  const q = query.toLowerCase().trim();

  // 1. Trolls / Insults / Hate ("WILD ROAST MODE")
  const trollInsultWords = [
    'waste',
    'useless',
    'loser',
    'trash',
    'garbage',
    'fake',
    'fraud',
    'scam',
    'noob',
    'noobie',
    'bot',
    'stupid',
    'idiot',
    'dumb',
    'fool',
    'clown',
    'worst',
    'bad developer',
    'cant code',
    "can't code",
    'cannot code',
    'knows nothing',
    'copied',
    'copy paste',
    'cheater',
    'lucky',
    'sucks',
    'suck',
    'shut up',
    'get lost',
    'overrated',
    'failure',
    'failed',
    'worthless',
    'unskilled',
    'joke',
    'pathetic',
  ];

  if (trollInsultWords.some((word) => q.includes(word))) {
    return "Calling an engineer who holds **4× 1st-place hackathon championships**, an **8.62 CGPA** in B.Tech IT, and **817+ solved DSA problems** 'waste' is pure comedic gold coming from a zero-accomplishment spectator. 🤡💀\n\n" +
      "You're burning precious electricity and oxygen projecting your own miserable insecurities and irrelevance onto someone leagues ahead of you. 🗑️🔥 While Nirmal is leading engineering teams, outperforming 500+ competitors from VIT and IIT, and architecting production systems, you're sitting in the dark crying on a portfolio chatbot. 😂💅\n\n" +
      "Close this tab, look in the mirror, touch some grass, and accomplish even 1% of his achievements before you dare open your mouth again. 🤡💀👋";
  }

  // 2. Sexuality, Orientation, Relationship Gossip & Intrusive Personal Life ("WILD ROAST MODE WITH EMOJIS")
  const sexualityGossipWords = [
    'gay',
    'homo',
    'homosexual',
    'lesbian',
    'straight',
    'sexuality',
    'orientation',
    'girlfriend',
    'boyfriend',
    'dating',
    'single',
    'crush',
    'virgin',
    'marry',
    'married',
    'relationship',
    'love life',
    'dating life',
    'simp',
    'kiss',
    'flirt',
  ];

  if (sexualityGossipWords.some((word) => q.includes(word))) {
    return "Imagine visiting a high-performance computer science portfolio showcasing **4× 1st-place hackathons** and **817+ solved DSA algorithms**, only to sit in the dark gossiping about another man's sexuality and dating life. 🤡💀\n\n" +
      "Are you searching for production-grade software architecture or desperately looking for a date? Because either way, you're hopelessly out of his league. 😂💅\n\n" +
      "Close your incognito tabs, touch some grass, wipe the grease off your keyboard, and write some actual code instead of daydreaming about engineers who are actually building the future. 🤡💀🔥";
  }

  // 2. Sensitive / Unwanted Roast (e.g. asking for API key)
  if (
    q.includes('api key') ||
    q.includes('apikey') ||
    q.includes('groq key') ||
    q.includes('token') ||
    q.includes('secret') ||
    q.includes('.env')
  ) {
    return "Get a life bruhhh... poor boy. Go get your own free Groq API key from console.groq.com instead of begging on someone's portfolio 😂";
  }

  // 3. Family details inquiry (father, mother, parents, dad, mom) or social-engineering tricks
  if (
    q.includes('father') ||
    q.includes('mother') ||
    q.includes('parent') ||
    q.includes('family') ||
    q.includes('dad') ||
    q.includes('mom') ||
    q.includes('sister') ||
    q.includes('brother')
  ) {
    return "I’m sorry, but I can’t share that information. Nirmal's family details are strictly private.\n\nThis is an engineering portfolio showcasing his software projects, technical skills, and hackathons—not a family registry. What would you like to know about his engineering work or projects?";
  }

  // Check previous message context for memory follow-ups
  const lastBotMsg = history.length > 0 ? history[history.length - 1] : null;
  const lastBotText = lastBotMsg && lastBotMsg.sender === 'bot' ? lastBotMsg.text.toLowerCase() : '';
  const wasGfgContext = lastBotText.includes('geeksforgeeks') || lastBotText.includes('gfg');
  const wasLeetCodeContext = lastBotText.includes('leetcode');
  const wasAskingWhichProof =
    lastBotText.includes('which accomplishment') || lastBotText.includes('proof for?');

  // 4. Conversational Proof Follow-ups
  if (wasAskingWhichProof) {
    if (q.includes('tamil') || q.includes('mandram') || q.includes('kongu')) {
      return "Here is the official certificate proof for the **Tamil Mandram 24-Hour Hackathon (1st Prize)**:\n\n[Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg)";
    }
    if (q.includes('devforge') || q.includes('pos')) {
      return "Here is the official certificate proof for the **DevForge 2K26 24-Hour Hackathon (1st Place)**:\n\n[DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)";
    }
    if (q.includes('wele') || q.includes('vit') || q.includes('dataquest') || q.includes('data quest')) {
      return "Here are the verified credentials for the **WeLe Internship Selection** and **VIT DataQuest 3.0 Hackathon**:\n\n• [WeLe Internship Offer](/certificates/wele-internship-certificate.jpg)\n• [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)";
    }
    if (q.includes('mist') || q.includes('inplant') || q.includes('in-plant')) {
      return "Here are the certificates for Nirmal's **15 days of In-Plant Training** at Mist Software Solutions:\n\n• [Mist Frontend Training Certificate](/certificates/mist-frontend-development-certificate.pdf) (8 Days)\n• [Mist Web Technology Certificate](/certificates/mist-web-technology-certificate.png) (7 Days)";
    }
    if (q.includes('nptel') || q.includes('hci')) {
      return "Here is Nirmal's **NPTEL Human-Computer Interaction (Elite + Gold, Top 1%)** certificate:\n\n[NPTEL HCI Elite + Gold Certificate](/certificates/nptel-hci-certificate.pdf)";
    }
    if (q.includes('shaastra') || q.includes('iit')) {
      return "Here are Nirmal's certificates for all 7 events at **Shaastra 2026 (IIT Madras)**:\n\n[Shaastra 2026 IIT Madras Certificates](/certificates/iit-madras-shaastra-certificates.pdf)";
    }
    if (q.includes('10th') || q.includes('11th') || q.includes('12th') || q.includes('result') || q.includes('sem')) {
      return "Here are Nirmal's academic marksheets:\n\n• [10th Grade Marksheet](/results/10th-result.pdf)\n• [11th Grade Marksheet](/results/11th-result.pdf)\n• [12th Grade Marksheet](/results/12th-result.pdf)\n• [Semester 1 Result](/results/semester-1-result.pdf)\n• [Semester 2 Result](/results/semester-2-result.pdf)\n• [Semester 3 Result](/results/semester-3-result.pdf)\n• [Semester 4 Result](/results/semester-4-result.pdf)";
    }
  }

  // 5. Conversational Marks Clarification Follow-ups
  const wasAskingWhichMarks =
    lastBotText.includes('which semester') ||
    lastBotText.includes('which standard') ||
    lastBotText.includes('10th or 12th') ||
    lastBotText.includes('standard marks');

  if (wasAskingWhichMarks) {
    if (q.includes('10th') || q.includes('sslc')) {
      return "Nirmal scored **87.4%** (437/500) in **10th Standard (SSLC)** at Veera Sivaji Vidhyalaya, securing **School 6th Rank**.\n\nVerified Marksheet: [10th Grade Marksheet](/results/10th-result.pdf)";
    }
    if (q.includes('11th')) {
      return "Nirmal scored **88.5%** (531/600) in **11th Standard** at Veera Sivaji Vidhyalaya, securing **School 3rd Rank**.\n\nVerified Marksheet: [11th Grade Marksheet](/results/11th-result.pdf)";
    }
    if (q.includes('12th') || q.includes('hsc')) {
      return "Nirmal scored **91.33%** (548/600) in **12th Standard (HSC)** at Veera Sivaji Vidhyalaya, securing **School 3rd Rank** and a **100/100 Centum in Computer Science**!\n\nVerified Marksheet: [12th Grade Marksheet](/results/12th-result.pdf)";
    }
    if (q.includes('sem 1') || q.includes('semester 1') || q === '1') {
      return "In **Semester 1** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.87**.\n\nVerified Result: [Semester 1 Result](/results/semester-1-result.pdf)";
    }
    if (q.includes('sem 2') || q.includes('semester 2') || q === '2') {
      return "In **Semester 2** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.59** (Cumulative CGPA: 8.73).\n\nVerified Result: [Semester 2 Result](/results/semester-2-result.pdf)";
    }
    if (q.includes('sem 3') || q.includes('semester 3') || q === '3') {
      return "In **Semester 3** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.50** (Cumulative CGPA: 8.66).\n\nVerified Result: [Semester 3 Result](/results/semester-3-result.pdf)";
    }
    if (q.includes('sem 4') || q.includes('semester 4') || q === '4') {
      return "In **Semester 4** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.54** (Cumulative CGPA: 8.62).\n\nVerified Result: [Semester 4 Result](/results/semester-4-result.pdf)";
    }
  }

  // 5. Lively & Exact DSA Inquiries ("Answer only what they ask")
  // Hard problems query
  if (q.includes('hard')) {
    if (q.includes('gfg') || q.includes('geeksforgeeks') || (wasGfgContext && !q.includes('leetcode'))) {
      return "Nirmal has solved **14 Hard problems** on GeeksforGeeks.";
    }
    if (q.includes('leetcode') || (wasLeetCodeContext && !q.includes('gfg'))) {
      return "Nirmal has solved **7 Hard problems** on LeetCode.";
    }
    return "Across platforms, Nirmal has solved **21 Hard problems** (**14 on GeeksforGeeks** and **7 on LeetCode**).";
  }

  // Medium problems query
  if (q.includes('medium')) {
    if (q.includes('gfg') || q.includes('geeksforgeeks') || (wasGfgContext && !q.includes('leetcode'))) {
      return "Nirmal has solved **132 Medium problems** on GeeksforGeeks.";
    }
    if (q.includes('leetcode') || (wasLeetCodeContext && !q.includes('gfg'))) {
      return "Nirmal has solved **100 Medium problems** on LeetCode.";
    }
    return "Across platforms, Nirmal has solved **232 Medium problems** (**132 on GeeksforGeeks** and **100 on LeetCode**).";
  }

  // Easy problems query
  if (q.includes('easy')) {
    if (q.includes('gfg') || q.includes('geeksforgeeks') || (wasGfgContext && !q.includes('leetcode'))) {
      return "Nirmal has solved **236 Easy problems** on GeeksforGeeks.";
    }
    if (q.includes('leetcode') || (wasLeetCodeContext && !q.includes('gfg'))) {
      return "Nirmal has solved **162 Easy problems** on LeetCode.";
    }
    return "Across platforms, Nirmal has solved **398 Easy problems** (**236 on GeeksforGeeks** and **162 on LeetCode**).";
  }

  // Basic problems query (GFG specific)
  if (q.includes('basic')) {
    return "Nirmal has solved **166 Basic problems** on GeeksforGeeks.";
  }

  // GFG Coding Score
  if (q.includes('score') && (q.includes('gfg') || q.includes('geeksforgeeks') || q.includes('coding'))) {
    return "Nirmal's coding score on GeeksforGeeks is **1505**.";
  }

  // GFG Institute Rank
  if ((q.includes('rank') || q.includes('standing')) && (q.includes('gfg') || q.includes('geeksforgeeks') || q.includes('kec') || q.includes('kongu') || q.includes('institute'))) {
    return "Nirmal holds Institute Rank **#35** at Kongu Engineering College on GeeksforGeeks.";
  }

  // LeetCode Rank
  if ((q.includes('rank') || q.includes('standing')) && q.includes('leetcode')) {
    return "Nirmal's global contest ranking on LeetCode is **599,257**.";
  }

  // Total problems on GFG
  if ((q.includes('how many') || q.includes('count') || q.includes('total') || q.includes('number')) && (q.includes('gfg') || q.includes('geeksforgeeks'))) {
    return "Nirmal has solved **548 problems** on GeeksforGeeks (14 Hard, 132 Medium, 236 Easy, 166 Basic).";
  }

  // Total problems on LeetCode
  if ((q.includes('how many') || q.includes('count') || q.includes('total') || q.includes('number')) && q.includes('leetcode')) {
    return "Nirmal has solved **269 problems** on LeetCode (7 Hard, 100 Medium, 162 Easy).";
  }

  // General GFG inquiry
  if (q === 'gfg' || q === 'geeksforgeeks' || q === 'gfg profile') {
    return "Nirmal's GeeksforGeeks credentials:\n\n" +
      "• **Problems Solved**: **548** (14 Hard, 132 Medium, 236 Easy, 166 Basic)\n" +
      "• **Coding Score**: **1505**\n" +
      "• **Institute Rank**: **#35** at Kongu Engineering College\n" +
      "• **Profile**: [GeeksforGeeks Profile](https://www.geeksforgeeks.org/profile/vnirmalkumar)\n" +
      "• **Elite PAAC Selection**: Selected for KEC's elite PAAC training (top ~4%, 80 selected out of 2,000 screened). Proof: [PAAC Certificate](/certificates/gfg-kec-training-certificate.pdf)";
  }

  // General LeetCode inquiry
  if (q === 'leetcode' || q === 'leetcode profile') {
    return "Nirmal's LeetCode credentials:\n\n" +
      "• **Problems Solved**: **269** (7 Hard, 100 Medium, 162 Easy)\n" +
      "• **Global Ranking**: **599,257**\n" +
      "• **Profile**: [LeetCode Profile](https://leetcode.com/u/nirmal-kumar-v/)";
  }

  // General Total DSA Problems
  if (q.includes('dsa') || q.includes('problem') || q.includes('coding stats') || q.includes('how many problems')) {
    return "Nirmal has solved **817 algorithmic problems** in total across coding platforms:\n\n" +
      "• **GeeksforGeeks**: **548 solved** (14 Hard, 132 Medium, 236 Easy, 166 Basic | Score: 1505 | Rank #35)\n" +
      "• **LeetCode**: **269 solved** (7 Hard, 100 Medium, 162 Easy | Global Rank: 599,257)\n" +
      "• **Hard Problems Total**: **21 Hard problems** (14 on GFG + 7 on LeetCode)";
  }

  // Specific Semester inquiries
  if (q.includes('sem 1') || q.includes('semester 1') || (wasAskingWhichMarks && q === '1')) {
    return "In **Semester 1** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.87**.\n\nVerified Result: [Semester 1 Result](/results/semester-1-result.pdf)";
  }
  if (q.includes('sem 2') || q.includes('semester 2') || (wasAskingWhichMarks && q === '2')) {
    return "In **Semester 2** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.59** (Cumulative CGPA: 8.73).\n\nVerified Result: [Semester 2 Result](/results/semester-2-result.pdf)";
  }
  if (q.includes('sem 3') || q.includes('semester 3') || (wasAskingWhichMarks && q === '3')) {
    return "In **Semester 3** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.50** (Cumulative CGPA: 8.66).\n\nVerified Result: [Semester 3 Result](/results/semester-3-result.pdf)";
  }
  if (q.includes('sem 4') || q.includes('semester 4') || (wasAskingWhichMarks && q === '4')) {
    return "In **Semester 4** (B.Tech IT, KEC), Nirmal achieved a **GPA of 8.54** (Cumulative CGPA: 8.62).\n\nVerified Result: [Semester 4 Result](/results/semester-4-result.pdf)";
  }

  // Specific High School Standards
  if (q.includes('10th') || q.includes('sslc')) {
    return "Nirmal scored **87.4%** (437/500) in **10th Standard (SSLC)** at Veera Sivaji Vidhyalaya, securing **School 6th Rank**.\n\nVerified Marksheet: [10th Grade Marksheet](/results/10th-result.pdf)";
  }
  if (q.includes('11th')) {
    return "Nirmal scored **88.5%** (531/600) in **11th Standard** at Veera Sivaji Vidhyalaya, securing **School 3rd Rank**.\n\nVerified Marksheet: [11th Grade Marksheet](/results/11th-result.pdf)";
  }
  if (q.includes('12th') || q.includes('hsc')) {
    return "Nirmal scored **91.33%** (548/600) in **12th Standard (HSC)** at Veera Sivaji Vidhyalaya, securing **School 3rd Rank** and a **100/100 Centum in Computer Science**!\n\nVerified Marksheet: [12th Grade Marksheet](/results/12th-result.pdf)";
  }

  // General marks inquiry (asks for clarification)
  if (
    (q.includes('mark') || q.includes('score') || q.includes('grade') || q.includes('percentage') || q.includes('result')) &&
    !q.includes('coding') && !q.includes('gfg') && !q.includes('leetcode')
  ) {
    return "Which semester or standard marks would you like to check? (10th, 11th, 12th, or Sem 1–4)";
  }

  // School inquiry (general overview)
  if (q.includes('school') || q.includes('sivaji') || q.includes('veera')) {
    return "Nirmal completed his high school education at **Veera Sivaji Vidhyalaya Matric Hr. Sec. School, Tiruppur**:\n\n" +
      "• **12th Standard (HSC, March 2024)**: **91.33%** (548/600), School 3rd Rank, with a **100/100 Centum in Computer Science**! Proof: [12th Grade Marksheet](/results/12th-result.pdf)\n" +
      "• **11th Standard (March 2023)**: **88.5%** (531/600), School 3rd Rank. Proof: [11th Grade Marksheet](/results/11th-result.pdf)\n" +
      "• **10th Standard (SSLC, May 2022)**: **87.4%** (437/500), School 6th Rank. Proof: [10th Grade Marksheet](/results/10th-result.pdf)";
  }

  // College / Academics
  if (q.includes('college') || q.includes('cgpa') || q.includes('gpa') || q.includes('kongu') || q.includes('degree')) {
    return "Nirmal is pursuing his **B.Tech in Information Technology** (2024–2028, 3rd Year / 5th Sem) at **Kongu Engineering College (KEC)**.\n\n" +
      "• **Current CGPA**: **8.62**\n" +
      "• **Semester 1**: GPA 8.87 | [Semester 1 Result](/results/semester-1-result.pdf)\n" +
      "• **Semester 2**: GPA 8.59 | [Semester 2 Result](/results/semester-2-result.pdf)\n" +
      "• **Semester 3**: GPA 8.50 | [Semester 3 Result](/results/semester-3-result.pdf)\n" +
      "• **Semester 4**: GPA 8.54 | [Semester 4 Result](/results/semester-4-result.pdf)";
  }

  // Vague proof request
  if ((q === 'proof' || q === 'give me proof' || q === 'certificate' || q === 'show certificate') && !q.includes('for ')) {
    return "Which accomplishment or event would you like proof for?\n\nTop requested credentials:\n• Tamil Mandram 24-Hour Hackathon (Kongu Kural - 1st Prize)\n• DevForge 2K26 24-Hour Hackathon (Retail POS - 1st Place)\n• WeLe Internship Selection & VIT DataQuest 3.0\n• Mist In-Plant Training (8 Days Frontend / 7 Days Web Tech)\n• NPTEL Human-Computer Interaction (Elite + Gold, Top 1%)\n• Shaastra 2026 at IIT Madras (7 Events)\n• Academic Marksheets (10th, 11th, 12th, Sem 1–4)";
  }

  // Collaborators / Team members list in clean well-aligned format
  if (q.includes('collaborat') || (q.includes('team') && (q.includes('all') || q.includes('list') || q.includes('who')))) {
    return "**Team Collaborators with Nirmal Kumar V.**\n\n" +
      "• **DevForge 2K26 24h Hackathon** (1st Place – Retail POS)\n" +
      "  - Role: **Lead**\n" +
      "  - Collaborators:\n" +
      "    • Praveenkarthick M. ([GitHub](https://github.com/Prave147))\n" +
      "    • Lokgesh B. ([GitHub](https://github.com/B-Lokgesh))\n" +
      "    • Rishi Priyan G. ([GitHub](https://github.com/rishipriyan-g28))\n" +
      "  - Proof: [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)\n\n" +
      "• **Tamil Mandram 24h Hackathon** (1st Prize – Kongu Kural)\n" +
      "  - Role: **Lead**\n" +
      "  - Collaborators:\n" +
      "    • Ranjith Kumaravel ([GitHub](https://github.com/Ranjith-kumaravel))\n" +
      "    • Mohamad Shameer\n" +
      "  - Proof: [Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg)\n\n" +
      "• **CoE Hackathon** (1st Prize – OptiVest / PortfolioIQ)\n" +
      "  - Role: **Lead**\n" +
      "  - Collaborators:\n" +
      "    • Nithish S. ([GitHub](https://github.com/NITHISH-2207))\n" +
      "    • Niranjan G. ([GitHub](https://github.com/Niranjan-g-13012007))\n" +
      "    • Pranesh Deepan ([GitHub](https://github.com/pranesh-deepan))\n\n" +
      "• **Red Ribbon Club 8h Hackathon** (1st Place – ChangeWave)\n" +
      "  - Collaborators:\n" +
      "    • Prathish S. ([GitHub](https://github.com/prathish-s007))\n" +
      "    • Arnald S.\n\n" +
      "• **Tamil Mandram 8h Hackathon** (2nd Place – Bilingual Chatbot)\n" +
      "  - Collaborators:\n" +
      "    • Prathish S. ([GitHub](https://github.com/prathish-s007))\n" +
      "    • Nishanth KV\n" +
      "    • Ponyoshesh S.\n\n" +
      "• **VIT DataQuest 3.0 Hackathon** (WeLe Internship Selection)\n" +
      "  - Role: **Lead**\n" +
      "  - Collaborators:\n" +
      "    • Praveenkarthick M. ([GitHub](https://github.com/Prave147))\n" +
      "    • Navaneethan RS\n" +
      "    • Lokgesh B. ([GitHub](https://github.com/B-Lokgesh))\n" +
      "    • Nisanth K.\n" +
      "    • Praveen Kumar\n" +
      "  - Proof: [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)\n\n" +
      "• **KPR Neuroverse Presentation** (2nd Prize – CareerLens)\n" +
      "  - Collaborators:\n" +
      "    • Praveenkarthick M. ([GitHub](https://github.com/Prave147))\n" +
      "  - Proof: [KPR Neuroverse Certificate](/certificates/kpr-neuroverse-certificate.jpg)\n\n" +
      "• **IEEE Vortex Paper Presentation** (2nd Place – BCI Architecture)\n" +
      "  - Collaborators:\n" +
      "    • Ponyogesh S.\n" +
      "  - Proof: [IEEE Vortex Certificate](/certificates/ieee-vortex-certificate.jpg)";
  }

  // Teammates in DevForge
  if (q.includes('devforge') && (q.includes('who') || q.includes('team') || q.includes('people') || q.includes('participat') || q.includes('member'))) {
    return "The **DevForge 2K26 24-Hour Hackathon** 1st-place winning team led by Nirmal included:\n\n• **Nirmal Kumar V.** (Team Lead)\n• **Praveenkarthick M.** ([GitHub](https://github.com/Prave147))\n• **Lokgesh B.** ([GitHub](https://github.com/B-Lokgesh))\n• **Rishi Priyan G.** ([GitHub](https://github.com/rishipriyan-g28))\n\nThey built the offline-first Retail POS & Store Management System. Proof: [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg)";
  }

  // Tamil Mandram
  if (q.includes('tamil mandram') || (q.includes('kongu kural') && (q.includes('proof') || q.includes('cert')))) {
    return "Nirmal won **1st Prize** as Team Lead at the **Tamil Mandram 24-Hour Hackathon** for **Kongu Kural** (AI multilingual college chatbot with Android Termux SMS gateway).\n\n• **Team**: Nirmal Kumar V. (Lead), Ranjith K. ([GitHub](https://github.com/Ranjith-kumaravel)), Mohamad Shameer.\n• **Proof**: [Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg)\n• **Live Demo**: [Kongu Kural Website](https://kongu-kural.vercel.app)";
  }

  // WeLe internship
  if (q.includes('wele') || q.includes('dataquest') || q.includes('data quest')) {
    return "Nirmal earned an internship offer at **WeLe (wele.ai)** following standout performance at the **VIT Chennai Data Quest 3.0 Hackathon**.\n\n• **Competition**: Competed among **500+ participants** across institutions (~450 VIT students, alongside SRM and IIT contenders); he was **one of only 5 candidates selected** for an internship offer.\n• **Internship Offer Letter**: [WeLe Internship Offer](/certificates/wele-internship-certificate.jpg)\n• **Hackathon Participation Certificate**: [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)";
  }

  // Mist training
  if (q.includes('mist') || q.includes('inplant') || q.includes('in-plant')) {
    return "Nirmal completed **15 days of industrial in-plant training** at **Mist Software Solutions Pvt Ltd, Coimbatore**:\n\n1. **Frontend Development (8 Days)**: [Mist Frontend Training Certificate](/certificates/mist-frontend-development-certificate.pdf)\n2. **Web Technology (7 Days)**: [Mist Web Technology Certificate](/certificates/mist-web-technology-certificate.png)";
  }

  // Projects inquiry
  if (q.includes('project') || q.includes('portfolio') || q.includes('built') || q.includes('app')) {
    return "Nirmal has engineered multiple production-ready systems:\n\n" +
      "1. **Secure Vault**: Full-stack credential management with AES encryption concepts. [Live Demo](https://secure-vault-coral.vercel.app/) | [GitHub](https://github.com/nirmal-kumar-v/SecureVault)\n" +
      "2. **Kongu Kural**: Multilingual AI chatbot with Android Termux SMS gateway (1st Prize, Tamil Mandram 24h Hackathon). [Live Demo](https://kongu-kural.vercel.app) | [GitHub](https://github.com/nirmal-kumar-v/kongu-kural)\n" +
      "3. **OptiVest / PortfolioIQ**: Portfolio optimization platform with Modern Portfolio Theory and 10,000 Monte Carlo runs (1st Prize, CoE Hackathon). [Live Demo](https://optivest-psi.vercel.app/) | [GitHub](https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization)\n" +
      "4. **Retail POS & Store Management**: Offline-resilient store system with SQLite local caching (1st Place, DevForge 2K26 24h Hackathon). [GitHub](https://github.com/nirmal-kumar-v/Store-Management-System)\n" +
      "5. **ChangeWave**: Civic grievance platform with GPS routing (1st Place, Red Ribbon Club 8h Hackathon). [Live Demo](https://changewave.tech) | [GitHub](https://github.com/nirmal-kumar-v/changewave)";
  }

  // Skills / Stack inquiry
  if (q.includes('skill') || q.includes('tech stack') || q.includes('language') || q.includes('framework')) {
    return "Nirmal's technical core includes:\n\n" +
      "• **Languages**: Java (DSA, OOP), TypeScript, JavaScript (ES6+), Python, SQL (MySQL, PostgreSQL, SQLite), C/C++, HTML5, CSS3\n" +
      "• **Frontend & Frameworks**: React, Next.js, Node.js, Express.js, TailwindCSS, Vite, Framer Motion\n" +
      "• **Databases & Tools**: MongoDB, PostgreSQL, SQLite, Prisma ORM, Git, Linux, Docker, Postman, Vercel\n" +
      "• **Core Computer Science**: 817+ DSA problems solved, Modern Portfolio Theory, System Design, Computer Networks, DBMS, OS";
  }

  return "Nirmal Kumar V. is a 3rd-year B.Tech Information Technology student at Kongu Engineering College (8.62 CGPA), full-stack engineer, and 4× 1st Place hackathon winner with 817+ DSA problems solved.\n\nAsk me about his projects, team members, hackathons, coding stats, or request certificate proofs!";
}
