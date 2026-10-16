import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, ChevronDown, ChevronUp, Users, Award, Filter, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';
import { GithubIcon } from '../components/Icons';
import { nineAchievements, type AchievementRecord } from '../data/achievements';

function AchievementCard({
  achievement,
  index,
}: {
  achievement: AchievementRecord;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isFirst = achievement.position === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group w-full"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`pixel-card rounded-lg transition-all cursor-pointer p-5 border select-none ${
          isFirst
            ? 'border-gold/30 hover:border-gold/60 bg-bg-card'
            : 'border-border hover:border-accent/40 bg-bg-card'
        } ${
          expanded
            ? isFirst
              ? 'bg-bg-card-hover border-gold/60 shadow-[0_0_20px_rgba(234,179,8,0.12)]'
              : 'bg-bg-card-hover border-accent/50 shadow-[0_0_20px_rgba(56,189,248,0.1)]'
            : ''
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 flex-1 min-w-0">
            {/* Position Icon */}
            <div
              className={`p-2.5 rounded flex-shrink-0 border ${
                isFirst
                  ? 'bg-gold/10 border-gold/30 text-gold'
                  : 'bg-slate-500/10 border-slate-500/30 text-slate-300'
              }`}
            >
              {isFirst ? <Trophy className="w-5 h-5" /> : <Medal className="w-5 h-5" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isFirst
                      ? 'bg-gold/15 text-gold border border-gold/30'
                      : 'bg-slate-400/15 text-slate-300 border border-slate-400/30'
                  }`}
                >
                  {achievement.result}
                </span>
                <span className="text-[10px] font-mono text-text-tertiary uppercase px-1.5 py-0.5 rounded bg-bg-secondary border border-border">
                  {achievement.category}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-text-primary leading-snug group-hover:text-accent-light transition-colors">
                {achievement.event}
              </h4>

              <div className="text-xs font-mono text-accent-light font-medium mt-1">
                Project / Topic: <span className="text-text-primary">{achievement.project}</span>
              </div>

              <p className="text-xs text-text-secondary mt-2 line-clamp-2 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>

          {/* Smooth Rotating Chevron Indicator */}
          <div
            className={`p-1.5 rounded transition-all flex-shrink-0 ${
              expanded
                ? 'bg-accent/15 text-accent border border-accent/30'
                : 'text-text-tertiary group-hover:text-text-primary border border-transparent'
            }`}
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ease-out ${
                expanded ? 'rotate-180 text-accent' : 'text-text-tertiary'
              }`}
            />
          </div>
        </div>

        {/* Revealed on click: Progressive Disclosure with smooth height animation */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/60 space-y-3.5 text-xs">
                {/* Role */}
                <div className="font-mono flex items-center gap-2">
                  <span className="text-text-tertiary uppercase">Role:</span>
                  <span className="text-text-primary font-semibold px-2 py-0.5 rounded bg-bg-secondary border border-border">
                    {achievement.role}
                  </span>
                </div>

                {/* Team */}
                {achievement.team.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase block mb-1.5">
                      Confirmed Team
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {achievement.team.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-bg-secondary border border-border text-[11px] font-mono text-text-secondary"
                        >
                          <Users className="w-3 h-3 text-accent" />
                          <span>{m}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech / Skills */}
                {achievement.technologies && (
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase block mb-1.5">
                      Key Competencies / Stack
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {achievement.technologies.map((t) => (
                        <TechBadge key={t} name={t} size="sm" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                {(achievement.demoUrl || achievement.githubUrl) && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {achievement.demoUrl && (
                      <a
                        href={achievement.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-tactile inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent/10 border border-accent/30 text-accent text-[11px] font-mono hover:bg-accent hover:text-bg-primary transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Deployment</span>
                      </a>
                    )}
                    {achievement.githubUrl && (
                      <a
                        href={achievement.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-tactile inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-bg-card border border-border text-text-secondary text-[11px] font-mono hover:text-text-primary hover:border-accent/40 transition-all"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                )}

                <div className="pt-1 text-[10px] font-mono text-text-tertiary flex items-center justify-between">
                  <span>Record confirmed</span>
                  <span className="text-accent-light">Click card to collapse ▲</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const [filter, setFilter] = useState<'all' | '1st' | '2nd' | 'hackathon' | 'presentation'>('all');

  const filtered = nineAchievements.filter((a) => {
    if (filter === 'all') return true;
    if (filter === '1st') return a.position === 1;
    if (filter === '2nd') return a.position === 2;
    if (filter === 'hackathon') return a.category === 'hackathon';
    if (filter === 'presentation') return a.category === 'presentation';
    return true;
  });

  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="Prize Records"
            title="9 reported competition wins."
            subtitle="Verified hackathon championships and technical symposium presentations. Click any record to inspect confirmed team composition and roles."
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 bg-bg-secondary p-1.5 rounded-md border border-border self-start md:self-end">
            <span className="text-[11px] font-mono text-text-tertiary px-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Filter:</span>
            </span>
            {(
              [
                { id: 'all', label: 'All (9)' },
                { id: '1st', label: '1st Prize (4)' },
                { id: '2nd', label: '2nd Place (5)' },
                { id: 'hackathon', label: 'Hackathons' },
                { id: 'presentation', label: 'Presentations' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn-tactile px-3 py-1 text-xs font-mono rounded transition-colors ${
                  filter === tab.id
                    ? 'bg-accent text-bg-primary font-bold shadow-none'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Achievements Grid - items-start prevents sibling cards from awkward vertical stretching */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <AnimatePresence mode="popLayout">
            {filtered.map((ach, idx) => (
              <AchievementCard key={ach.id} achievement={ach} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
