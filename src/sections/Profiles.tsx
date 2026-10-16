import { motion } from 'framer-motion';
import { ExternalLink, Code2, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { socialLinks } from '../data/personal';
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  GeeksforGeeksIcon,
  CodeforcesIcon,
  CodeChefIcon,
  HackerRankIcon,
  DuolingoIcon,
} from '../components/Icons';

interface ProfileItem {
  id: string;
  name: string;
  category: 'Development' | 'Competitive Coding' | 'Network' | 'Learning';
  username: string;
  url: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  badge: string;
  description: string;
}

export default function Profiles() {
  const profileList: ProfileItem[] = [
    {
      id: 'github',
      name: 'GitHub',
      category: 'Development',
      username: 'nirmal-kumar-v',
      url: socialLinks.github,
      icon: <GithubIcon className="w-6 h-6 text-white" />,
      accentColor: 'from-purple-500/20 to-indigo-500/5',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60',
      badge: 'Open Source & Projects',
      description: 'Repositories, full-stack application code, civic tools, and hackathon projects.',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      category: 'Network',
      username: 'nirmalkumar77',
      url: socialLinks.linkedin,
      icon: <LinkedinIcon className="w-6 h-6 text-blue-400" />,
      accentColor: 'from-blue-500/20 to-cyan-500/5',
      borderColor: 'border-blue-500/30 hover:border-blue-500/60',
      badge: 'Professional Network',
      description: 'Career updates, hackathon achievements, leadership, and project showcases.',
    },
    {
      id: 'leetcode',
      name: 'LeetCode',
      category: 'Competitive Coding',
      username: 'NIRMALKUMAR_V',
      url: socialLinks.leetcode,
      icon: <LeetcodeIcon className="w-6 h-6 text-amber-400" />,
      accentColor: 'from-amber-500/20 to-orange-500/5',
      borderColor: 'border-amber-500/30 hover:border-amber-500/60',
      badge: '500+ Solved',
      description: 'Data structures, algorithm problem solving, dynamic programming, and graphs.',
    },
    {
      id: 'geeksforgeeks',
      name: 'GeeksforGeeks',
      category: 'Competitive Coding',
      username: 'nirmalkumar33',
      url: socialLinks.geeksforgeeks,
      icon: <GeeksforGeeksIcon className="w-6 h-6 text-emerald-400" />,
      accentColor: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
      badge: 'Practice & Articles',
      description: 'Core computer science fundamentals, DSA problem solving, and system concepts.',
    },
    {
      id: 'codeforces',
      name: 'Codeforces',
      category: 'Competitive Coding',
      username: 'nirmal_kumar_v',
      url: socialLinks.codeforces,
      icon: <CodeforcesIcon className="w-6 h-6 text-rose-400" />,
      accentColor: 'from-rose-500/20 to-pink-500/5',
      borderColor: 'border-rose-500/30 hover:border-rose-500/60',
      badge: 'Contest Rating',
      description: 'Timed competitive programming contests and problem solving under pressure.',
    },
    {
      id: 'codechef',
      name: 'CodeChef',
      category: 'Competitive Coding',
      username: 'nirmal_kumar_v',
      url: socialLinks.codechef,
      icon: <CodeChefIcon className="w-6 h-6 text-orange-400" />,
      accentColor: 'from-orange-500/20 to-amber-500/5',
      borderColor: 'border-orange-500/30 hover:border-orange-500/60',
      badge: 'Long & Star Challenges',
      description: 'Algorithm challenges and global competitive programming rankings.',
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      category: 'Competitive Coding',
      username: 'nirmalkumar31081',
      url: socialLinks.hackerrank,
      icon: <HackerRankIcon className="w-6 h-6 text-emerald-300" />,
      accentColor: 'from-emerald-600/20 to-green-500/5',
      borderColor: 'border-emerald-600/30 hover:border-emerald-600/60',
      badge: 'Skill Badges',
      description: 'Problem solving skills, language domain badges, and algorithmic challenges.',
    },
    {
      id: 'duolingo',
      name: 'Duolingo',
      category: 'Learning',
      username: 'NirmalKumar7',
      url: socialLinks.duolingo,
      icon: <DuolingoIcon className="w-6 h-6 text-lime-400" />,
      accentColor: 'from-lime-500/20 to-green-500/5',
      borderColor: 'border-lime-500/30 hover:border-lime-500/60',
      badge: 'Daily Streak',
      description: 'Consistency, daily learning habit, and language proficiency practice.',
    },
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-black/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Online Footprint"
          title="Coding & Professional Profiles"
          subtitle="Explore my verified profiles across code repositories, competitive programming platforms, professional networks, and continuous learning."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {profileList.map((profile, i) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group glass-panel p-6 rounded-2xl border ${profile.borderColor} bg-gradient-to-br ${profile.accentColor} transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                {/* Header Icon & External Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform">
                    {profile.icon}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-text-tertiary group-hover:text-white group-hover:bg-white/10 transition-all">
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                {/* Profile Name & Category */}
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-light transition-colors">
                  {profile.name}
                </h3>
                <div className="text-xs font-mono text-text-tertiary mt-0.5">
                  @{profile.username}
                </div>

                {/* Badge Tag */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-text-secondary">
                  <ShieldCheck className="w-3 h-3 text-accent-blue" />
                  <span>{profile.badge}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-text-tertiary mt-3 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Bottom Category bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-tertiary">
                <span className="flex items-center gap-1">
                  <Code2 className="w-3 h-3" />
                  {profile.category}
                </span>
                <span className="text-accent-light opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  View Profile →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
