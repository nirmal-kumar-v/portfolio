import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import {
  fetchLeetCodeStats,
  fetchGeeksforGeeksStats,
  type ProviderStats,
  type LeetCodeStats,
  type GeeksforGeeksStats,
} from '../services/statsApi';
import { socialLinks } from '../data/personal';
import {
  LeetcodeIcon,
  GeeksforGeeksIcon,
  CodeforcesIcon,
  CodeChefIcon,
  HackerRankIcon,
  DuolingoIcon,
} from '../components/Icons';

export default function DSA() {
  const [leetcode, setLeetcode] = useState<ProviderStats<LeetCodeStats> | null>(null);
  const [gfg, setGfg] = useState<ProviderStats<GeeksforGeeksStats> | null>(null);
  const [loadingLc, setLoadingLc] = useState<boolean>(true);
  const [loadingGfg, setLoadingGfg] = useState<boolean>(true);
  const [selectedPanel, setSelectedPanel] = useState<'leetcode' | 'gfg' | null>('leetcode');
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);

  // Load initial statistics on mount
  useEffect(() => {
    loadStats();
  }, []);

  // Cooldown timer ticker
  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const loadStats = async (force = false) => {
    if (force && cooldownSeconds > 0) return;

    if (force) {
      setCooldownSeconds(20);
    }

    setLoadingLc(true);
    setLoadingGfg(true);

    try {
      const [lcData, gfgData] = await Promise.all([
        fetchLeetCodeStats(force),
        fetchGeeksforGeeksStats(force),
      ]);
      setLeetcode(lcData);
      setGfg(gfgData);
    } catch {
      // statsApi provides safe fallbacks
    } finally {
      setLoadingLc(false);
      setLoadingGfg(false);
    }
  };

  const formatTimestamp = (iso: string) => {
    try {
      const date = new Date(iso);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' (' + date.toLocaleDateString() + ')';
    } catch {
      return iso;
    }
  };

  return (
    <section id="coding" className="relative py-24 md:py-32 bg-bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="Live Coding Progress"
            title="Algorithmic problem solving, tracked live."
            subtitle="Genuine public statistics fetched directly from LeetCode and GeeksforGeeks. Click either panel to inspect full metric breakdowns."
          />

          {/* Manual Refresh Button with Cooldown */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => loadStats(true)}
              disabled={loadingLc || loadingGfg || cooldownSeconds > 0}
              className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-bg-card border border-border text-xs font-mono text-text-primary hover:border-accent/40 disabled:opacity-50 transition-all cursor-pointer"
              title="Refresh live profile metrics"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-accent ${loadingLc || loadingGfg ? 'animate-spin' : ''}`} />
              <span>
                {loadingLc || loadingGfg
                  ? 'Fetching Live Data...'
                  : cooldownSeconds > 0
                  ? `Cooldown (${cooldownSeconds}s)`
                  : 'Refresh Live Stats'}
              </span>
            </button>
          </div>
        </div>

        {/* Two Clickable Primary Profile Panels: LeetCode & GeeksforGeeks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* LeetCode Panel */}
          <div
            onClick={() => setSelectedPanel(selectedPanel === 'leetcode' ? null : 'leetcode')}
            className={`pixel-card p-6 rounded-lg cursor-pointer transition-all border flex flex-col justify-between h-full ${
              selectedPanel === 'leetcode'
                ? 'border-accent bg-bg-card-hover shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                : 'border-border hover:border-accent/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20">
                  <LeetcodeIcon className="w-6 h-6" colored />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-text-primary">LeetCode</h3>
                    <span className="text-xs font-mono text-text-tertiary">@nirmal-kumar-v</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {loadingLc ? (
                      <span className="text-[11px] font-mono text-text-tertiary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        Fetching data...
                      </span>
                    ) : leetcode?.isLive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                        Live data
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-gold">
                        <AlertTriangle className="w-3 h-3 text-gold" />
                        Last recorded profile information
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded bg-bg-secondary text-text-tertiary hover:text-text-primary hover:border-accent/40 border border-border transition-colors"
                  aria-label="View original LeetCode profile"
                  title="Verify on LeetCode"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="p-2 text-text-tertiary">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      selectedPanel === 'leetcode' ? 'rotate-180 text-accent' : 'text-text-tertiary'
                    }`}
                  />
                </span>
              </div>
            </div>

            {/* Total Solved Overview */}
            <div className="mt-6 flex items-baseline justify-between pt-4 border-t border-border">
              <div>
                <span className="text-3xl sm:text-4xl font-mono font-black text-text-primary tracking-tight">
                  {leetcode?.data?.totalSolved ?? 250}
                  <span className="text-accent text-2xl font-bold">+</span>
                </span>
                <span className="text-xs font-mono text-text-tertiary block mt-0.5">Problems Solved</span>
              </div>

              {leetcode?.data?.ranking && (
                <div className="text-right">
                  <span className="text-sm font-mono text-text-secondary font-semibold">
                    #{leetcode.data.ranking.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-mono text-text-tertiary block">Global Ranking</span>
                </div>
              )}
            </div>

            {/* Hint to expand/collapse */}
            <div className="mt-4 text-[11px] font-mono text-accent-light flex items-center justify-between">
              <span>{selectedPanel === 'leetcode' ? 'Click to collapse details' : 'Click to inspect difficulty breakdown'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${selectedPanel === 'leetcode' ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {/* GeeksforGeeks Panel */}
          <div
            onClick={() => setSelectedPanel(selectedPanel === 'gfg' ? null : 'gfg')}
            className={`pixel-card p-6 rounded-lg cursor-pointer transition-all border flex flex-col justify-between h-full ${
              selectedPanel === 'gfg'
                ? 'border-emerald bg-bg-card-hover shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                : 'border-border hover:border-emerald/40'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                  <GeeksforGeeksIcon className="w-6 h-6" colored />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-text-primary">GeeksforGeeks</h3>
                    <span className="text-xs font-mono text-text-tertiary">@vnirmalkumar</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {loadingGfg ? (
                      <span className="text-[11px] font-mono text-text-tertiary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
                        Fetching data...
                      </span>
                    ) : gfg?.isLive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                        Live data
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-gold">
                        <AlertTriangle className="w-3 h-3 text-gold" />
                        Last recorded profile information
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="/certificates/gfg-kec-training-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2 py-1 rounded bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 hover:border-gold/60 text-[10px] font-mono inline-flex items-center gap-1 transition-all cursor-pointer"
                  title="View Elite PAAC Program Certificate in new tab"
                >
                  <Award className="w-3 h-3" />
                  <span>PAAC Cert</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                </a>
                <a
                  href={socialLinks.geeksforgeeks}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded bg-bg-secondary text-text-tertiary hover:text-text-primary hover:border-emerald/40 border border-border transition-colors"
                  aria-label="View original GFG profile"
                  title="Verify on GeeksforGeeks"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="p-2 text-text-tertiary">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      selectedPanel === 'gfg' ? 'rotate-180 text-emerald' : 'text-text-tertiary'
                    }`}
                  />
                </span>
              </div>
            </div>

            {/* Total Solved Overview */}
            <div className="mt-6 flex items-baseline justify-between pt-4 border-t border-border">
              <div>
                <span className="text-3xl sm:text-4xl font-mono font-black text-text-primary tracking-tight">
                  {gfg?.data?.totalSolved ?? 500}
                  <span className="text-emerald text-2xl font-bold">+</span>
                </span>
                <span className="text-xs font-mono text-text-tertiary block mt-0.5">Problems Solved</span>
              </div>

              {gfg?.data?.codingScore && (
                <div className="text-right">
                  <span className="text-sm font-mono text-text-secondary font-semibold">
                    {gfg.data.codingScore}
                  </span>
                  <span className="text-[10px] font-mono text-text-tertiary block">Coding Score</span>
                </div>
              )}
            </div>

            {/* Hint to expand/collapse */}
            <div className="mt-4 text-[11px] font-mono text-emerald flex items-center justify-between">
              <span>{selectedPanel === 'gfg' ? 'Click to collapse details' : 'Click to inspect GFG profile stats'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${selectedPanel === 'gfg' ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>

        {/* Expanded Detailed Statistics Tray for Selected Provider */}
        <AnimatePresence mode="wait">
          {selectedPanel === 'leetcode' && (
            <motion.div
              key="lc-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-12 overflow-hidden"
            >
              <div className="p-6 md:p-8 rounded-lg border border-accent/30 bg-bg-card pixel-corner-brackets space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary flex items-center gap-2">
                      <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                      <span>LeetCode Verified Metrics</span>
                    </h4>
                    <p className="text-xs font-mono text-text-tertiary mt-0.5">
                      Last updated: {leetcode ? formatTimestamp(leetcode.lastUpdated) : 'N/A'} • Status:{' '}
                      <span className={leetcode?.isLive ? 'text-emerald font-semibold' : 'text-gold'}>
                        {leetcode?.isLive ? 'Live Verified' : 'Baseline Fallback'}
                      </span>
                    </p>
                  </div>

                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-secondary border border-border text-xs font-mono text-text-primary hover:border-accent/40 self-start"
                  >
                    <span>Verify Profile on LeetCode</span>
                    <ExternalLink className="w-3 h-3 text-accent" />
                  </a>
                </div>

                {/* Difficulty Breakdown Visual */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-4">
                    Difficulty Breakdown (Actually Solved)
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Easy */}
                    <div className="p-4 rounded border border-emerald/30 bg-emerald/5">
                      <div className="flex items-center justify-between text-xs font-mono text-emerald mb-1">
                        <span className="font-semibold">Easy</span>
                        <span>{leetcode?.data?.easy ?? 162} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-emerald h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((leetcode?.data?.easy ?? 162) / (leetcode?.data?.totalSolved || 269)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Medium */}
                    <div className="p-4 rounded border border-amber-500/30 bg-amber-500/5">
                      <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                        <span className="font-semibold">Medium</span>
                        <span>{leetcode?.data?.medium ?? 100} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-amber-400 h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((leetcode?.data?.medium ?? 100) / (leetcode?.data?.totalSolved || 269)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Hard */}
                    <div className="p-4 rounded border border-rose-500/30 bg-rose-500/5">
                      <div className="flex items-center justify-between text-xs font-mono text-rose-400 mb-1">
                        <span className="font-semibold">Hard</span>
                        <span>{leetcode?.data?.hard ?? 7} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-rose-400 h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((leetcode?.data?.hard ?? 7) / (leetcode?.data?.totalSolved || 269)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Problem Solving Context */}
                <div className="p-4 rounded bg-bg-secondary/60 border border-border text-xs text-text-secondary leading-relaxed font-sans">
                  <span className="font-mono text-accent font-semibold block mb-1">DATA INTEGRITY NOTE:</span>
                  All counts above are derived strictly from LeetCode&apos;s verified public GraphQL endpoint.
                  Primary language utilized for DSA implementations is <strong className="text-text-primary">Java</strong>,
                  strengthening algorithms across binary trees, graphs, sorting algorithms, and dynamic programming patterns.
                </div>
              </div>
            </motion.div>
          )}

          {selectedPanel === 'gfg' && (
            <motion.div
              key="gfg-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-12 overflow-hidden"
            >
              <div className="p-6 md:p-8 rounded-lg border border-emerald/30 bg-bg-card pixel-corner-brackets space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary flex items-center gap-2">
                      <GeeksforGeeksIcon className="w-4 h-4 text-emerald" />
                      <span>GeeksforGeeks Verified Metrics</span>
                    </h4>
                    <p className="text-xs font-mono text-text-tertiary mt-0.5">
                      Last updated: {gfg ? formatTimestamp(gfg.lastUpdated) : 'N/A'} • Status:{' '}
                      <span className={gfg?.isLive ? 'text-emerald font-semibold' : 'text-gold'}>
                        {gfg?.isLive ? 'Live Verified' : 'Baseline Fallback'}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                    <a
                      href="/certificates/gfg-kec-training-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono hover:bg-gold hover:text-bg-primary transition-all cursor-pointer"
                      title="View Elite PAAC Training Certificate in new tab"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Elite PAAC Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={socialLinks.geeksforgeeks}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-secondary border border-border text-xs font-mono text-text-primary hover:border-emerald/40"
                    >
                      <span>Verify Profile on GFG</span>
                      <ExternalLink className="w-3 h-3 text-emerald" />
                    </a>
                  </div>
                </div>

                {/* GeeksforGeeks Difficulty Breakdown (School/Basic, Easy, Medium, Hard) */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-4">
                    Difficulty Breakdown (Actually Solved)
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {/* School & Basic */}
                    <div className="p-4 rounded border border-cyan-500/30 bg-cyan-500/5">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                        <span className="font-semibold">School & Basic</span>
                        <span>{gfg?.data?.basic ?? 166} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-cyan-400 h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((gfg?.data?.basic ?? 166) / (gfg?.data?.totalSolved || 548)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Easy */}
                    <div className="p-4 rounded border border-emerald/30 bg-emerald/5">
                      <div className="flex items-center justify-between text-xs font-mono text-emerald mb-1">
                        <span className="font-semibold">Easy</span>
                        <span>{gfg?.data?.easy ?? 236} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-emerald h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((gfg?.data?.easy ?? 236) / (gfg?.data?.totalSolved || 548)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Medium */}
                    <div className="p-4 rounded border border-amber-500/30 bg-amber-500/5">
                      <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                        <span className="font-semibold">Medium</span>
                        <span>{gfg?.data?.medium ?? 132} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-amber-400 h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((gfg?.data?.medium ?? 132) / (gfg?.data?.totalSolved || 548)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Hard */}
                    <div className="p-4 rounded border border-rose-500/30 bg-rose-500/5">
                      <div className="flex items-center justify-between text-xs font-mono text-rose-400 mb-1">
                        <span className="font-semibold">Hard</span>
                        <span>{gfg?.data?.hard ?? 14} Solved</span>
                      </div>
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-rose-400 h-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round(((gfg?.data?.hard ?? 14) / (gfg?.data?.totalSolved || 548)) * 100)
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded border border-border bg-bg-secondary/60">
                    <span className="text-2xl font-mono font-bold text-emerald block">
                      {gfg?.data?.totalSolved ?? 548}
                    </span>
                    <span className="text-xs font-mono text-text-tertiary">Total Solved</span>
                  </div>

                  <div className="p-4 rounded border border-border bg-bg-secondary/60">
                    <span className="text-2xl font-mono font-bold text-accent block">
                      {gfg?.data?.codingScore ?? 1505}
                    </span>
                    <span className="text-xs font-mono text-text-tertiary">Overall Score</span>
                  </div>

                  <div className="p-4 rounded border border-border bg-bg-secondary/60">
                    <span className="text-2xl font-mono font-bold text-gold block">
                      #{gfg?.data?.instituteRank ?? 35}
                    </span>
                    <span className="text-xs font-mono text-text-tertiary">Institute Rank (KEC)</span>
                  </div>

                  <div className="p-4 rounded border border-border bg-bg-secondary/60">
                    <span className="text-2xl font-mono font-bold text-purple-400 block">
                      {gfg?.data?.longestStreak ?? 32} Days
                    </span>
                    <span className="text-xs font-mono text-text-tertiary">POD Longest Streak</span>
                  </div>
                </div>

                {/* Additional GFG verified context */}
                <div className="p-4 rounded bg-bg-secondary/60 border border-border text-xs text-text-secondary leading-relaxed font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-emerald font-semibold block">INSTITUTIONAL ALIGNMENT:</span>
                    <p>
                      Profile registered under <strong className="text-text-primary">Kongu Engineering College</strong>.
                      Selected for the <strong className="text-text-primary">Elite PAAC Program</strong> conducted in collaboration
                      with GeeksforGeeks trainers (selected ~80 out of 2,000 students screened, ~4%).
                    </p>
                  </div>
                  <a
                    href="/certificates/gfg-kec-training-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gold/15 border border-gold/40 text-gold text-xs font-mono hover:bg-gold hover:text-bg-primary transition-all flex-shrink-0 self-start sm:self-center cursor-pointer"
                    title="View Elite PAAC Certificate in new tab"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Verified Coding Platforms */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary">
              Verified Public Coding & Learning Profiles
            </h4>
            <span className="text-[11px] font-mono text-accent-light">Direct Links</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Codeforces */}
            <a
              href={socialLinks.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card p-4 rounded-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <CodeforcesIcon className="w-5 h-5 text-rose-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary group-hover:text-text-primary transition-colors" />
                </div>
                <h5 className="font-bold text-text-primary text-sm group-hover:text-accent-light transition-colors">
                  Codeforces
                </h5>
                <p className="text-[11px] font-mono text-text-tertiary mt-0.5">@nirmal_kumar_v</p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/50 text-[10px] font-mono text-text-secondary">
                Competitive Contests
              </div>
            </a>

            {/* CodeChef */}
            <a
              href={socialLinks.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card p-4 rounded-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <CodeChefIcon className="w-5 h-5 text-amber-500" />
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary group-hover:text-text-primary transition-colors" />
                </div>
                <h5 className="font-bold text-text-primary text-sm group-hover:text-accent-light transition-colors">
                  CodeChef
                </h5>
                <p className="text-[11px] font-mono text-text-tertiary mt-0.5">@nirmal_kumar_v</p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/50 text-[10px] font-mono text-text-secondary">
                Algorithm Challenges
              </div>
            </a>

            {/* HackerRank */}
            <a
              href={socialLinks.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card p-4 rounded-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <HackerRankIcon className="w-5 h-5 text-emerald-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary group-hover:text-text-primary transition-colors" />
                </div>
                <h5 className="font-bold text-text-primary text-sm group-hover:text-accent-light transition-colors">
                  HackerRank
                </h5>
                <p className="text-[11px] font-mono text-text-tertiary mt-0.5">@nirmalkumar_v</p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/50 text-[10px] font-mono text-text-secondary">
                Domain Practice
              </div>
            </a>

            {/* Duolingo */}
            <a
              href={socialLinks.duolingo}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card p-4 rounded-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <DuolingoIcon className="w-5 h-5 text-lime-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-text-tertiary group-hover:text-text-primary transition-colors" />
                </div>
                <h5 className="font-bold text-text-primary text-sm group-hover:text-accent-light transition-colors">
                  Duolingo
                </h5>
                <p className="text-[11px] font-mono text-text-tertiary mt-0.5">@NirmalKumar7</p>
              </div>
              <div className="mt-4 pt-2 border-t border-border/50 text-[10px] font-mono text-text-secondary">
                Daily Habit Consistency
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
