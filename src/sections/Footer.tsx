import { ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/personal';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, GeeksforGeeksIcon } from '../components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-secondary/90 relative z-10 py-10 font-mono text-xs text-text-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border/60">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent/10 border border-accent/30 flex items-center justify-center font-mono font-bold text-accent">
              NKV
            </div>
            <div>
              <div className="font-bold text-text-primary text-sm font-sans">{personalInfo.name}</div>
              <div className="text-[11px] text-text-tertiary">{personalInfo.headline}</div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile p-2 rounded bg-bg-card border border-border hover:text-text-primary hover:border-accent/40"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile p-2 rounded bg-bg-card border border-border hover:text-blue-400 hover:border-blue-400/40"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile p-2 rounded bg-bg-card border border-border hover:text-amber-400 hover:border-amber-400/40"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={socialLinks.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile p-2 rounded bg-bg-card border border-border hover:text-emerald hover:border-emerald/40"
              aria-label="GeeksforGeeks Profile"
              title="GeeksforGeeks"
            >
              <GeeksforGeeksIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn-tactile flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent/40 text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name} • Kongu Engineering College
          </div>
          <div className="text-text-tertiary">
            Built with React, Vite, Tailwind CSS & TypeScript • Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}
