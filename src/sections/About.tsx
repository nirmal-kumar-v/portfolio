import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Code2, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';
import { aboutBio, personalInfo } from '../data/personal';
import { skillCategories, leadershipRecords, type LeadershipItem } from '../data/skills';
import Modal from '../components/Modal';

export default function About() {
  const [selectedLeadership, setSelectedLeadership] = useState<LeadershipItem | null>(null);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Profile & Philosophy"
          title="Engineering products from real-world problems."
          subtitle="Combining strong algorithmic foundations in Java with practical full-stack execution across hackathons, team initiatives, and student representation."
        />

        {/* Narrative Bio */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
            {aboutBio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-4 p-6 rounded-lg border border-border bg-bg-card pixel-corner-brackets space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
              Profile Summary
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between pb-2 border-b border-border/60">
                <span className="text-text-tertiary">IDENTITY:</span>
                <span className="text-text-primary font-bold">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-border/60">
                <span className="text-text-tertiary">LOCATION:</span>
                <span className="text-text-primary">{personalInfo.location}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-border/60">
                <span className="text-text-tertiary">COLLEGE:</span>
                <span className="text-text-primary">Kongu Engg. College</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-border/60">
                <span className="text-text-tertiary">DEGREE:</span>
                <span className="text-text-primary">B.Tech IT (Sem 5)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-border/60">
                <span className="text-text-tertiary">CGPA:</span>
                <span className="text-accent font-bold">8.62 (after Sem 4)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">WINS RECORD:</span>
                <span className="text-gold font-bold">9 Reported Prizes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Categories — Strictly NO percentage bars */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-semibold">
                Technical Proficiencies
              </span>
              <h3 className="text-2xl font-bold text-text-primary mt-1">
                Verified Skills by Domain
              </h3>
            </div>
            <span className="text-xs font-mono text-text-tertiary hidden sm:block">
              Evidence-based categorization (No arbitrary percentage bars)
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="pixel-card p-6 rounded-lg border border-border bg-bg-card flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-text-primary mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-text-tertiary font-mono mb-5">
                    {cat.subtitle}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((s) => (
                      <div
                        key={s.name}
                        className="p-3 rounded bg-bg-secondary/70 border border-border/60 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-text-primary font-mono">{s.name}</span>
                          {s.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent-light border border-accent/20">
                              {s.tag}
                            </span>
                          )}
                        </div>
                        {s.note && (
                          <p className="text-text-secondary text-[11px] mt-1.5 leading-relaxed font-sans">
                            {s.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Student Representation */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-semibold">
                Initiative & Representation
              </span>
              <h3 className="text-2xl font-bold text-text-primary mt-1">
                Leadership Timeline & Roles
              </h3>
            </div>
            <span className="text-xs font-mono text-text-tertiary hidden sm:block">
              Roles tailored to event and context
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadershipRecords.map((lead) => (
              <div
                key={lead.role + lead.context}
                onClick={() => setSelectedLeadership(lead)}
                className="pixel-card p-5 rounded-lg border border-border hover:border-accent/40 cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary mb-2">
                    <span className="text-accent-light uppercase">{lead.period}</span>
                    <span className="text-text-tertiary truncate max-w-[120px]">{lead.context}</span>
                  </div>
                  <h4 className="text-base font-bold text-text-primary mb-2">
                    {lead.role}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {lead.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-accent-light">
                  <span>Inspect details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Modal */}
      <Modal
        isOpen={!!selectedLeadership}
        onClose={() => setSelectedLeadership(null)}
        title={selectedLeadership?.role}
        badge={selectedLeadership?.context}
      >
        {selectedLeadership && (
          <div className="space-y-4">
            <div className="p-3 rounded bg-bg-card border border-border text-xs font-mono flex items-center justify-between">
              <span className="text-text-tertiary uppercase">Tenure / Event</span>
              <span className="text-accent font-bold">{selectedLeadership.period}</span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Scope & Responsibilities
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {selectedLeadership.summary}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
