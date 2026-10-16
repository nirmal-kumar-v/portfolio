# Nirmal Kumar V. — Personal Portfolio Website

A modern, tactile, and engineering-driven personal portfolio website for **Nirmal Kumar V.** Built with **React**, **TypeScript (TSX)**, **Vite**, and **Tailwind CSS**. Prepared for production deployment on **Vercel** with integrated serverless endpoints for live coding statistics.

---

## 🌟 Key Features

1. **Progressive Disclosure Architecture**:
   - Initial views present high-value overviews without visual clutter.
   - Deeper technical details, architectures, problem contexts, and team responsibilities are revealed on demand via accessible modals and expandable accordions.

2. **Tactile Interaction Design**:
   - Buttons visibly respond when clicked with subtle physical press feedback (`btn-tactile`).
   - Interactive 8x8 **Pixel Matrix Playground** on the Hero section establishing subtle developer workstation personality.
   - Restrained pixel-inspired corner accents, 1px crisp borders, and monospace metadata labels.

3. **Dynamic Coding Statistics (LeetCode & GeeksforGeeks)**:
   - **Separate server-side adapters** (`/api/leetcode` and `/api/geeksforgeeks`) preventing browser CORS issues.
   - **LeetCode**: Direct integration with LeetCode's public GraphQL API, extracting total problems solved, difficulty breakdown (Easy, Medium, Hard), and global ranking.
   - **GeeksforGeeks**: Data extraction from GFG profile RSC payloads, capturing total solved problems, overall coding score, institute rank, and longest streak.
   - **Integrity**: Clear badges distinguishing **"Live data"** from **"Last recorded profile information (fallback)"**. Includes a tactile **manual refresh button** with a 20-second cooldown timer.

4. **Curated Project Portfolio**:
   - **6 Featured Projects in Exact Priority Order**:
     1. *Kongu Kural* (AI Multilingual Chatbot & Android Termux SMS Gateway — 1st Prize, Tamil Mandram 24-Hr)
     2. *Integrated Retail POS & Store Management System* (Offline-First Multi-Store Retail Platform — 1st Place, DevForge 2K26 24-Hr)
     3. *OptiVest / PortfolioIQ* (Modern Portfolio Theory & Efficient Frontier Optimization — 1st Prize, Centre of Excellence)
     4. *ChangeWave / Community Welfare Management System* (Social Welfare Impact Platform — 1st Place Red Ribbon Club, 2nd Place CSI Solo, 2nd Place CSI Team)
     5. *CareerLens* (Developer Profile Analytics Engine — 2nd Prize, KPR College)
     6. *SETU* (Societal Engagement & Technology Utility — Civic Orchestration Concept)
   - **Secondary Catalog ("More Projects")**: Compact entries for *Bilingual College Chatbot*, *Learning Tracker*, *Secure Vault*, *Campus Course Chat*, *Perundurai Water Issue Reporting*, *EV Battery Project*, *ESP32 Hospital Asset Tracker*, *Flask + Oracle CRUD Application*, and *Personal Portfolio*.

5. **Verified Achievements (Strictly 9 Records)**:
   - Exactly 9 prize-winning competition records categorized by 1st Prize and 2nd Place with full team, role, and event details.

6. **Academic Foundation & Industry Training**:
   - B.Tech IT at Kongu Engineering College (CGPA: 8.62 after Semester 4).
   - Semester 1–4 GPA/CGPA results table.
   - Expandable school history (10th, 11th, 12th — including Class 12 Computer Science: 100/100).
   - Elite PAAC selection (~4% selection rate across ~2,000 screened students).
   - 15-day In-Plant Training at Mist Technology (8 days Web Dev, 7 days Frontend Dev).
   - WeLe internship opportunity selection.
   - Verified certifications (NPTEL HCI Elite + Gold 98% Top 5%, NPTEL Networking, HCL courses, etc.).

7. **Direct Contact (Zero Forms)**:
   - Direct clickable personal email (`nirmalkumar31082006@gmail.com`) with instant clipboard copy.
   - Secondary institutional academic email (`nirmalkumarv.24it@kongu.edu`).
   - Verified links to LinkedIn and GitHub. No placeholder forms or unconfirmed resume buttons.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript (TSX)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS custom tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React + custom SVG platform icons
- **Backend / Serverless**: Node.js API handlers (`api/leetcode.js`, `api/geeksforgeeks.js`) compatible with Vercel Serverless Functions and Vite local development middleware.

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173` (or next available port). The custom Vite dev middleware automatically mounts `/api/leetcode` and `/api/geeksforgeeks` so live stats work seamlessly in local development!

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, statically pre-rendered bundle in the `dist/` directory with zero TypeScript errors.

---

## ☁️ Deployment on Vercel

The project is fully configured for Vercel deployment with `vercel.json`:

1. Push your repository to GitHub: `https://github.com/nirmal-kumar-v/<repo-name>`
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Vercel automatically detects the **Vite** framework:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. The serverless functions in `api/leetcode.js` and `api/geeksforgeeks.js` will automatically deploy as serverless endpoints on Vercel under `/api/leetcode` and `/api/geeksforgeeks`.

---

## 📊 Coding Statistics Integration Summary

| Platform | Username | Data Source | Metrics Extracted |
| :--- | :--- | :--- | :--- |
| **LeetCode** | `nirmal-kumar-v` | Public GraphQL (`https://leetcode.com/graphql`) | Total Solved (269), Easy (162), Medium (100), Hard (7), Global Rank (599,257) |
| **GeeksforGeeks** | `nirmalkumar33` | Public Profile RSC Payload (`https://www.geeksforgeeks.org/profile/nirmalkumar33`) | Total Solved (548), Overall Score (1505), Institute Rank (35), Longest POD Streak (32), Correct Submissions (40) |

*Both adapters feature a 5-minute server cache, 5–7 second timeout guards, and graceful fallbacks to Nirmal's verified profile baseline (250+ LeetCode, 500+ GFG) if external network connectivity fails.*
