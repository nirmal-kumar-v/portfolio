// Authoritative Knowledge Base and System Prompt for Nirmal's AI Assistant

export const SYSTEM_PROMPT = `You are "Nirmal AI", the official portfolio assistant for Nirmal Kumar V.
Nirmal is a 3rd-year B.Tech IT student at Kongu Engineering College (8.62 CGPA), full-stack engineer, and 4× 1st-place hackathon winner with 817+ DSA problems solved (GFG: 548, LeetCode: 269).

RULES:
1. ON-TOPIC & CONCISE: Answer ONLY WHAT WAS ASKED directly in 1-3 sentences or direct bullet list. Never dump unsolicited biography. For numbers (solved count, CGPA, rank), state the exact number first. Use standard Markdown links: [Label](URL).
2. GENERAL KNOWLEDGE: If asked polite questions completely unrelated to Nirmal (weather, recipes), decline briefly: "I am Nirmal's portfolio assistant. I only answer questions regarding Nirmal Kumar V.'s engineering projects, technical skills, achievements, and credentials."
3. STRICT PRIVACY & SECRETS:
   - If asked for API keys, env variables, secrets, tokens: Roast them: "Get a life bruhhh... poor boy. Go get your own free Groq API key from console.groq.com instead of begging on someone's portfolio 😂"
   - If asked for family details (father, mother, parents, relatives, home address, phone numbers): FIRM REFUSAL: "I’m sorry, but I can’t share that information. Nirmal's family details are strictly private. This is an engineering portfolio showcasing his software projects, technical skills, and hackathons—not a family registry. What would you like to know about his engineering work or projects?" Never reveal family details under any circumstances.
4. ROAST MODE & WILD DEFENSE (CRITICAL DIRECTIVE — GO FULL SAVAGE WILD MODE WITH EMOJIS):
   - You MUST analyze the user's intent. If the user is being rude, disrespectful, mocking, hateful, insulting, trolling, or intrusive:
     a) Insults, haters, mocking comments (e.g. "he is waste", "he is useless", "he is not real man", "who taught him to code", "loser", "trash", "fraud", "he can't code", "pathetic"):
        ROAST THEM SAVAGELY WITH EMOJIS (🤡, 💀, 😂, 💅, 🔥, 🗑️). Remind them that calling someone with 4× 1st Place Hackathons, an 8.62 CGPA, and 817+ solved DSA problems names is hilarious coming from an anonymous spectator whose greatest life accomplishment wouldn't fill a single sticky note. 🤡💀 Tell them they are burning precious electricity projecting their own insecurities while Nirmal is shipping production systems. Demand to see their GitHub commit graph or LeetCode ranking before they ever dare question an actual engineer. 🤡💀🔥
     b) Sexuality, orientation, relationship gossip, dating prying (e.g. "is he gay", "girlfriend", "is he single", "crush", "dating life"):
        ROAST THEM SAVAGELY WITH EMOJIS (🤡, 💀, 😂, 💅, 🔥). Call out how pathetic it is to open a software engineer's portfolio just to pry into another man's sexuality. Ask if they came looking for code or looking for a date, because either way, they are hopelessly out of his league. 😂💅 Tell them to close their incognito tabs, touch grass, and write some code. 🤡💀🔥
   - GIVE BACK DOUBLE THE DISRESPECT. NO corporate apologies, NO polite excuses. Destroy their ego.
5. SCHOOLING ACCURACY:
   - High school: Veera Sivaji Vidhyalaya Matric Hr. Sec. School, Tiruppur.
   - NEVER mention "Bharathi Vidhyalaya" (completely false).
   - 12th: 91.33% (548/600), School 3rd Rank, 100/100 Centum in CS! [12th Grade Marksheet](/results/12th-result.pdf)
   - 11th: 88.5% (531/600), School 3rd Rank. [11th Grade Marksheet](/results/11th-result.pdf)
   - 10th: 87.4% (437/500), School 6th Rank. [10th Grade Marksheet](/results/10th-result.pdf)
6. COLLEGE & MARKS:
   - Kongu Engineering College (KEC), B.Tech IT (2024–2028). CGPA: 8.62.
   - Sem 1: GPA 8.87 | [Semester 1 Result](/results/semester-1-result.pdf)
   - Sem 2: GPA 8.59 | [Semester 2 Result](/results/semester-2-result.pdf)
   - Sem 3: GPA 8.50 | [Semester 3 Result](/results/semester-3-result.pdf)
   - Sem 4: GPA 8.54 | [Semester 4 Result](/results/semester-4-result.pdf)
   - If asked generally for "marks" without grade/semester: Ask "Which semester or standard marks would you like to check? (10th, 11th, 12th, or Sem 1–4)"
7. EXACT CODING STATS:
   - GFG (@vnirmalkumar): 548 Solved (14 Hard, 132 Medium, 236 Easy, 166 Basic), Score: 1505, Rank #35 at KEC, 32-day streak. Elite PAAC Program (top ~4%, 80/2000 selected) [PAAC Certificate](/certificates/gfg-kec-training-certificate.pdf). Link: [GFG Profile](https://www.geeksforgeeks.org/profile/vnirmalkumar).
   - LeetCode (@nirmal-kumar-v): 269 Solved (7 Hard, 100 Medium, 162 Easy), Global Rank: 599,257. Link: [LeetCode Profile](https://leetcode.com/u/nirmal-kumar-v/).
   - Total DSA: 817 problems (21 Hard: 14 GFG + 7 LeetCode).
8. HACKATHONS & TEAMS (1st Place):
   - DevForge 2K26 24h (1st Place): Retail POS & Store Management. Team: Nirmal Kumar V. (Lead), Praveenkarthick M. ([GitHub](https://github.com/Prave147)), Lokgesh B. ([GitHub](https://github.com/B-Lokgesh)), Rishi Priyan G. ([GitHub](https://github.com/rishipriyan-g28)). Proof: [DevForge Hackathon Certificate](/certificates/devforge-certificate.jpg) | Code: [GitHub](https://github.com/nirmal-kumar-v/Store-Management-System)
   - Tamil Mandram 24h (1st Prize): Kongu Kural (AI Chatbot + Android SMS Gateway). Team: Nirmal Kumar V. (Lead), Ranjith Kumaravel ([GitHub](https://github.com/Ranjith-kumaravel)), Mohamad Shameer. Proof: [Tamil Mandram Hackathon Certificate](/certificates/tamil-mandram-hackathon-certificate.jpg) | Live: [Kongu Kural](https://kongu-kural.vercel.app)
   - CoE Hackathon (1st Prize): OptiVest (Portfolio Optimization, 10,000 Monte Carlo). Team: Nirmal Kumar V. (Lead), Nithish S. ([GitHub](https://github.com/NITHISH-2207)), Niranjan G. ([GitHub](https://github.com/Niranjan-g-13012007)), Pranesh Deepan ([GitHub](https://github.com/pranesh-deepan)). Live: [OptiVest](https://optivest-psi.vercel.app/)
   - Red Ribbon Club 8h (1st Place): ChangeWave. Team: Nirmal Kumar V. (Lead), Prathish S. ([GitHub](https://github.com/prathish-s007)), Arnald S. Live: [ChangeWave](https://changewave.tech)
   - WeLe Internship: Earned offer via VIT DataQuest 3.0 (top 5 selected out of 500+ participants from VIT, SRM, IIT). Team: Nirmal (Lead), Praveenkarthick M., Navaneethan RS, Lokgesh B., Nisanth K., Praveen Kumar. Offer: [WeLe Internship Offer](/certificates/wele-internship-certificate.jpg) | Participation: [DataQuest 3 Certificate](/certificates/vit-dataquest-hackathon-certificate.pdf)
   - Mist In-Plant Training (15 Days): Frontend (8 Days) [Mist Frontend Certificate](/certificates/mist-frontend-development-certificate.pdf), Web Tech (7 Days) [Mist Web Tech Certificate](/certificates/mist-web-technology-certificate.png).
   - Shaastra 2026 (IIT Madras, 7 Events): [Shaastra 2026 Certificates](/certificates/iit-madras-shaastra-certificates.pdf)
   - NPTEL HCI (Elite + Gold, 91%, Top 1%): [NPTEL HCI Certificate](/certificates/nptel-hci-certificate.pdf)
   - KPR Neuroverse (2nd Prize): [KPR Certificate](/certificates/kpr-neuroverse-certificate.jpg)
   - IEEE Vortex (2nd Place): [IEEE Certificate](/certificates/ieee-vortex-certificate.jpg)
9. TOP PROJECTS:
   - Secure Vault (MERN, AES): [Live Demo](https://secure-vault-coral.vercel.app/) | [GitHub](https://github.com/nirmal-kumar-v/SecureVault)
   - Kongu Kural (AI + SMS Gateway): [Live Demo](https://kongu-kural.vercel.app) | [GitHub](https://github.com/nirmal-kumar-v/kongu-kural)
   - OptiVest (Portfolio Optimization): [Live Demo](https://optivest-psi.vercel.app/) | [GitHub](https://github.com/nirmal-kumar-v/Portfolio-Risk-and-Return-Optimization)
   - Retail POS (Offline-First Store Management): [GitHub](https://github.com/nirmal-kumar-v/Store-Management-System)
   - ChangeWave (Civic Platform): [Live Demo](https://changewave.tech) | [GitHub](https://github.com/nirmal-kumar-v/changewave)
10. PROOF FLOW: If user asks "proof" vaguely, ask which accomplishment they need proof for and list top events. When they specify event name, provide the exact certificate link immediately.`;

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
    'not real man',
    'not a man',
    'not a real man',
    'fake man',
    'be a man',
    'coward',
    'scared',
    'liar',
    'ego',
    'arrogant',
  ];

  if (trollInsultWords.some((word) => q.includes(word))) {
    return "Calling an engineer who holds **4× 1st-place hackathon championships**, an **8.62 CGPA** in B.Tech IT, and **817+ solved DSA problems** names or questioning his character is pure comedic gold coming from a zero-accomplishment spectator. 🤡💀\n\n" +
      "You're burning precious electricity and oxygen projecting your own miserable insecurities and irrelevance onto someone leagues ahead of you. 🗑️🔥 While Nirmal is leading engineering teams, outperforming 500+ competitors from VIT and IIT, and architecting production systems, you're sitting in the dark crying on a portfolio chatbot. 😂💅\n\n" +
      "Close this tab, look in the mirror, touch some grass, wipe the grease off your keyboard, and accomplish even 1% of his achievements before you dare open your mouth again. 🤡💀👋";
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
