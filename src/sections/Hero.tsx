import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Code2, Sparkles, RefreshCw } from 'lucide-react';
import { personalInfo, socialLinks, heroStats } from '../data/personal';
import Button from '../components/Button';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { fetchLeetCodeStats, fetchGeeksforGeeksStats } from '../services/statsApi';

/**
 * Interactive Pixel Matrix
 * Subtle pixel-inspired interactive element where clicking or hovering
 * lights up cells with tactile responsiveness.
 */
function PixelMatrix() {
  const [grid, setGrid] = useState<boolean[]>(() => {
    // Initial pattern: stylized letter 'N' or subtle constellation
    const initial = new Array(64).fill(false);
    // Stylized letter N in 8x8
    const nIndices = [
      9, 14,
      17, 18, 22,
      25, 27, 30,
      33, 36, 38,
      41, 45, 46,
      49, 54
    ];
    nIndices.forEach((idx) => {
      if (idx < 64) initial[idx] = true;
    });
    return initial;
  });

  const [activeCell, setActiveCell] = useState<{ x: number; y: number } | null>(null);

  const toggleCell = (index: number) => {
    setGrid((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  const clearOrReset = () => {
    setGrid(new Array(64).fill(false));
  };

  return (
    <div className="relative glass p-6 rounded-lg border border-border pixel-corner-brackets max-w-sm sm:max-w-md w-full mx-auto select-none">
      {/* Workspace Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-[11px] font-mono text-text-tertiary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-none bg-accent inline-block animate-pulse" />
          <span className="text-text-secondary font-semibold">WORKSPACE_CANVAS</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{activeCell ? `X:${String(activeCell.x).padStart(2, '0')} Y:${String(activeCell.y).padStart(2, '0')}` : 'HOVER/CLICK'}</span>
          <button
            onClick={clearOrReset}
            className="hover:text-accent transition-colors"
            title="Clear grid"
          >
            RESET
          </button>
        </div>
      </div>

      {/* 8x8 Interactive Grid */}
      <div className="grid grid-cols-8 gap-1.5 aspect-square p-2 bg-bg-secondary/80 border border-border/80 rounded">
        {grid.map((active, i) => {
          const x = i % 8;
          const y = Math.floor(i / 8);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggleCell(i)}
              onMouseEnter={() => setActiveCell({ x, y })}
              className={`rounded-[2px] transition-all duration-150 cursor-pointer border ${
                active
                  ? 'bg-accent border-accent-light shadow-[0_0_8px_rgba(56,189,248,0.5)] scale-[0.98]'
                  : 'bg-bg-card/70 border-border/60 hover:border-accent/40 hover:bg-bg-card-hover'
              }`}
              aria-label={`Pixel ${x},${y}`}
            />
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-gold" />
          <span>Tactile Interactive Matrix</span>
        </span>
        <span className="text-[10px] text-accent-light">CLICK TO TOGGLE</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [liveLeetCode, setLiveLeetCode] = useState<number | null>(null);
  const [liveGfg, setLiveGfg] = useState<number | null>(null);

  useEffect(() => {
    // Proactively fetch live counts for the hero highlight stats
    fetchLeetCodeStats()
      .then((res) => {
        if (res.data?.totalSolved) setLiveLeetCode(res.data.totalSolved);
      })
      .catch(() => {});

    fetchGeeksforGeeksStats()
      .then((res) => {
        if (res.data?.totalSolved) setLiveGfg(res.data.totalSolved);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center bg-pixel-grid pt-24 pb-16 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-border bg-bg-secondary text-xs font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-text-secondary">{personalInfo.status}</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
                <span className="text-text-primary">Nirmal Kumar V.</span>
              </h1>
              <div className="text-lg sm:text-2xl font-mono text-accent-light tracking-tight font-medium">
                {personalInfo.headline}
              </div>
            </motion.div>

            {/* Concise Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-sans"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Primary Actions & Verified Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects" variant="primary" size="md">
                Explore My Projects
              </Button>
              <Button href="#coding" variant="secondary" size="md">
                View Coding Progress
              </Button>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-bg-card border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-bg-card border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Pixel Interactive Playground */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PixelMatrix />
          </motion.div>
        </div>

        {/* Highlight Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {/* Metric 1 */}
          <div className="p-4 rounded border border-border bg-bg-secondary/60">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-gold">9</div>
            <div className="text-xs font-mono text-text-tertiary mt-1">Prize Records</div>
            <div className="text-[10px] text-text-secondary mt-0.5">Hackathons & Symposiums</div>
          </div>

          {/* Metric 2 */}
          <div className="p-4 rounded border border-border bg-bg-secondary/60">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-accent">8.62</div>
            <div className="text-xs font-mono text-text-tertiary mt-1">CGPA (Sem 4)</div>
            <div className="text-[10px] text-text-secondary mt-0.5">Kongu Engineering College</div>
          </div>

          {/* Metric 3 */}
          <div className="p-4 rounded border border-border bg-bg-secondary/60">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-text-primary">
              {liveLeetCode ? liveLeetCode : '250+' }
            </div>
            <div className="text-xs font-mono text-text-tertiary mt-1">LeetCode Solved</div>
            <div className="text-[10px] text-text-secondary mt-0.5">
              {liveLeetCode ? 'Live fetched data' : 'Profile baseline'}
            </div>
          </div>

          {/* Metric 4 */}
          <div className="p-4 rounded border border-border bg-bg-secondary/60">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald">
              {liveGfg ? liveGfg : '500+'}
            </div>
            <div className="text-xs font-mono text-text-tertiary mt-1">GFG Solved</div>
            <div className="text-[10px] text-text-secondary mt-0.5">
              {liveGfg ? 'Live fetched data' : 'Profile baseline'}
            </div>
          </div>

          {/* Metric 5 */}
          <div className="p-4 rounded border border-border bg-bg-secondary/60 col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-purple-400">~4%</div>
            <div className="text-xs font-mono text-text-tertiary mt-1">Elite PAAC</div>
            <div className="text-[10px] text-text-secondary mt-0.5">80 of ~2,000 screened</div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center mt-10">
        <a
          href="#projects"
          className="text-text-tertiary hover:text-accent transition-colors flex flex-col items-center gap-1 text-[11px] font-mono"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
