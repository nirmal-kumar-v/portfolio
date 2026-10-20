import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Trophy,
  Users,
  ChevronRight,
  Code2,
  GitBranch,
  Layers,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { GithubIcon } from '../components/Icons';
import {
  featuredProjects,
  moreProjects,
  type Project,
  type MoreProjectItem,
  type TeamMember,
} from '../data/projects';

function FeaturedCard({
  project,
  index,
  onOpenDetails,
}: {
  project: Project;
  index: number;
  onOpenDetails: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group h-full flex flex-col"
    >
      <div
        onClick={() => onOpenDetails(project)}
        className="pixel-card rounded-lg h-full flex flex-col justify-between p-6 cursor-pointer border border-border hover:border-accent/40 transition-all select-none relative overflow-hidden bg-bg-card hover:bg-bg-card-hover"
      >
        <div className="flex flex-col flex-1">
          {/* Top category & order badge - fixed height h-6 */}
          <div className="flex items-center justify-between gap-2 h-6 mb-3">
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-bg-secondary border border-border text-accent-light truncate max-w-[220px]">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-text-tertiary flex-shrink-0">
              #{String(project.order).padStart(2, '0')}
            </span>
          </div>

          {/* Project Name: Fixed height h-14 so 1-line or 2-line titles always align perfectly */}
          <div className="h-14 flex items-center">
            <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-light transition-colors leading-snug line-clamp-2">
              {project.name}
            </h3>
          </div>

          {/* Role: strictly 1 line with fixed height h-5 */}
          <div className="h-5 flex items-center text-xs font-mono text-text-tertiary mt-1 truncate">
            <span>Role:</span>
            <span className="text-text-secondary ml-1.5 truncate font-medium">
              {project.role}
            </span>
          </div>

          {/* Short 1-2 sentence overview: fixed height h-16 (3 lines) */}
          <p className="text-xs sm:text-sm text-text-secondary mt-3 line-clamp-3 leading-relaxed h-[4.25rem] overflow-hidden">
            {project.overview}
          </p>

          {/* Award badge: fixed height slot h-8 with clean punchy badge */}
          <div className="mt-3.5 h-8 flex items-center">
            {project.certificateUrl ? (
              <a
                href={project.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono max-w-full hover:bg-gold/20 hover:border-gold/60 transition-all cursor-pointer group/badge"
                title={`View ${project.name} award certificate in new tab`}
              >
                <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{project.awardBadge || project.achievement}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/badge:opacity-100 transition-opacity" />
              </a>
            ) : project.awardBadge ? (
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono max-w-full"
                title={project.achievement}
              >
                <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{project.awardBadge}</span>
              </div>
            ) : project.achievement ? (
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono max-w-full"
                title={project.achievement}
              >
                <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{project.achievement}</span>
              </div>
            ) : (
              <div className="h-full" />
            )}
          </div>

          {/* Technology summary: fixed height slot h-7 strictly single row */}
          <div className="mt-3.5 h-7 flex items-center gap-1.5 overflow-hidden flex-nowrap">
            {project.technologies.slice(0, 3).map((tech) => (
              <TechBadge key={tech} name={tech} size="sm" />
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-mono text-text-tertiary px-1.5 py-0.5 rounded bg-bg-secondary border border-border flex-shrink-0">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer: Pinned to bottom with mt-auto, exact same height across all cards */}
        <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs h-11">
          <div className="flex items-center gap-2">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-tactile inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent/10 border border-accent/30 text-accent text-xs font-mono hover:bg-accent hover:text-bg-primary transition-all"
                title="Open live website"
              >
                <span>Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-bg-secondary/60 border border-border/50 text-text-tertiary text-[11px] font-mono">
                Direct Code
              </span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-tactile inline-flex items-center gap-1 px-2.5 py-1 rounded bg-bg-secondary border border-border text-text-secondary text-xs font-mono hover:text-text-primary hover:border-accent/40 transition-all"
                title="View GitHub repository"
              >
                <GithubIcon className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
          </div>

          <span className="text-accent-light font-mono text-xs flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0">
            <span>Explore</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMoreProject, setSelectedMoreProject] = useState<MoreProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured Work"
          title="Engineered solutions. Real-world systems."
          subtitle="Six featured engineering projects built across full-stack development, AI assistance, portfolio optimization, retail operations, and civic systems. Click any project to inspect problem context, architecture, and responsibilities."
        />

        {/* 6 Featured Projects Grid in exact specified order */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, idx) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={idx}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Secondary Section: More Projects */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary">
                Secondary Catalog
              </span>
              <h3 className="text-2xl font-bold text-text-primary mt-1">
                More Projects & Explorations
              </h3>
            </div>
            <p className="text-xs font-mono text-text-tertiary max-w-md">
              Compact entries for academic laboratories, mini projects, personal utilities, and ongoing hardware initiatives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMoreProject(item)}
                className="pixel-card p-4 rounded-md cursor-pointer border border-border hover:border-accent/30 transition-all flex flex-col justify-between h-full bg-bg-card hover:bg-bg-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary mb-2 h-5">
                    <span className="text-accent-light uppercase truncate max-w-[150px]">{item.category}</span>
                    <span className="truncate max-w-[110px]">{item.role}</span>
                  </div>
                  <h4 className="font-bold text-sm text-text-primary mb-1 h-10 flex items-center line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed h-9 overflow-hidden">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-text-tertiary h-6">
                  {item.achievement ? (
                    <span className="text-gold truncate max-w-[190px]">{item.achievement}</span>
                  ) : item.demoUrl || item.githubUrl ? (
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-accent hover:text-accent-light font-medium inline-flex items-center gap-1 transition-colors"
                          title="Open live deployment"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {item.demoUrl && item.githubUrl && <span className="text-border">·</span>}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-text-secondary hover:text-text-primary inline-flex items-center gap-1 transition-colors"
                          title="View GitHub repository"
                        >
                          <span>Code</span>
                          <GithubIcon className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span>Inspect summary</span>
                  )}
                  <ChevronRight className="w-3.5 h-3.5 text-accent-light flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name}
        badge={selectedProject?.category}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Subtitle & Role */}
            <div className="p-3 rounded bg-bg-card border border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-text-tertiary uppercase">Role: </span>
                <span className="text-text-primary font-bold">{selectedProject.role}</span>
              </div>
              {selectedProject.achievement && (
                <div className="inline-flex items-center gap-1 text-gold">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{selectedProject.achievement}</span>
                </div>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded border border-rose-500/20 bg-rose-500/5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold mb-2">
                  Problem Addressed
                </h5>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded border border-emerald/20 bg-emerald/5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-emerald font-bold mb-2">
                  Technical Solution
                </h5>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
                  Key Features & Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
                Verified Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <TechBadge key={t} name={t} size="md" />
                ))}
              </div>
            </div>

            {/* My Individual Responsibilities */}
            {selectedProject.responsibilities && selectedProject.responsibilities.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
                  My Individual Responsibilities
                </h4>
                <div className="space-y-2 p-4 rounded bg-bg-card border border-border">
                  {selectedProject.responsibilities.map((resp) => (
                    <div key={resp} className="flex items-start gap-2 text-xs text-text-secondary">
                      <ArrowRight className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Team & Contributors */}
            {((selectedProject.teamMembers && selectedProject.teamMembers.length > 0) ||
              (selectedProject.team && selectedProject.team.length > 0)) && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2.5 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>Project Team & Contributors</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedProject.teamMembers || (selectedProject.team ? selectedProject.team.map((m): TeamMember => ({ name: m })) : [])).map((member) =>
                    member.githubUrl ? (
                      <a
                        key={member.name}
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${member.name} on GitHub (${member.githubUrl})`}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card border border-border text-xs text-text-secondary font-mono hover:border-accent hover:bg-accent/10 hover:text-accent-light transition-all select-none cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent transition-colors" />
                        <span className="font-medium text-text-primary group-hover:text-accent-light transition-colors">
                          {member.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-text-tertiary/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ) : (
                      <span
                        key={member.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card/70 border border-border/80 text-xs text-text-secondary font-mono select-none"
                      >
                        <Users className="w-3.5 h-3.5 text-text-tertiary" />
                        <span>{member.name}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Status / Publication Notes */}
            {selectedProject.statusNotes && (
              <div className="p-3 rounded bg-bg-card/70 border border-border/80 text-xs font-mono text-text-tertiary">
                <span className="text-text-secondary font-semibold">Publication Notice: </span>
                {selectedProject.statusNotes}
              </div>
            )}

            {/* Links Bar */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
              {selectedProject.certificateUrl && (
                <Button href={selectedProject.certificateUrl} variant="outline" size="sm" icon="external">
                  View Award Certificate
                </Button>
              )}
              {selectedProject.hackathonCertificateUrl && (
                <Button href={selectedProject.hackathonCertificateUrl} variant="outline" size="sm" icon="external">
                  View DataQuest 3 Certificate
                </Button>
              )}
              {selectedProject.demoUrl && (
                <Button href={selectedProject.demoUrl} variant="primary" size="sm" icon="external">
                  Live Deployment
                </Button>
              )}
              {selectedProject.githubUrl && (
                <Button href={selectedProject.githubUrl} variant="secondary" size="sm" icon="github">
                  GitHub Repository
                </Button>
              )}
              {!selectedProject.demoUrl && !selectedProject.githubUrl && (
                <span className="text-xs font-mono text-text-tertiary">
                  Repository and demo links are currently unpublished.
                </span>
              )}
            </div>
          </div>
        )}
      </Modal>

      {/* Secondary Project Detail Modal */}
      <Modal
        isOpen={!!selectedMoreProject}
        onClose={() => setSelectedMoreProject(null)}
        title={selectedMoreProject?.name}
        badge={selectedMoreProject?.category}
      >
        {selectedMoreProject && (
          <div className="space-y-5">
            <div className="p-3 rounded bg-bg-card border border-border text-xs font-mono flex items-center justify-between">
              <div>
                <span className="text-text-tertiary uppercase">Role: </span>
                <span className="text-text-primary font-bold">{selectedMoreProject.role}</span>
              </div>
              {selectedMoreProject.achievement && (
                <span className="text-gold font-semibold">{selectedMoreProject.achievement}</span>
              )}
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Summary
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedMoreProject.description}
              </p>
            </div>

            {selectedMoreProject.features && selectedMoreProject.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedMoreProject.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedMoreProject.technologies && selectedMoreProject.technologies.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMoreProject.technologies.map((t) => (
                    <TechBadge key={t} name={t} size="sm" />
                  ))}
                </div>
              </div>
            )}

            {selectedMoreProject.projectFocus && (
              <div className="p-3 rounded bg-bg-card/70 border border-border/80 text-xs font-mono text-text-tertiary">
                <span className="text-text-secondary font-semibold">Project Focus: </span>
                {selectedMoreProject.projectFocus}
              </div>
            )}

            {/* Team & Contributors */}
            {((selectedMoreProject.teamMembers && selectedMoreProject.teamMembers.length > 0) ||
              (selectedMoreProject.team && selectedMoreProject.team.length > 0)) && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2.5 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>Team & Contributors</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedMoreProject.teamMembers || (selectedMoreProject.team ? selectedMoreProject.team.map((m): TeamMember => ({ name: m })) : [])).map((member) =>
                    member.githubUrl ? (
                      <a
                        key={member.name}
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${member.name} on GitHub (${member.githubUrl})`}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card border border-border text-xs text-text-secondary font-mono hover:border-accent hover:bg-accent/10 hover:text-accent-light transition-all select-none cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent transition-colors" />
                        <span className="font-medium text-text-primary group-hover:text-accent-light transition-colors">
                          {member.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-text-tertiary/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ) : (
                      <span
                        key={member.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-card/70 border border-border/80 text-xs text-text-secondary font-mono select-none"
                      >
                        <Users className="w-3.5 h-3.5 text-text-tertiary" />
                        <span>{member.name}</span>
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
              {selectedMoreProject.demoUrl && (
                <Button href={selectedMoreProject.demoUrl} variant="primary" size="sm" icon="external">
                  Live Deployment
                </Button>
              )}
              {selectedMoreProject.githubUrl && (
                <Button href={selectedMoreProject.githubUrl} variant="secondary" size="sm" icon="github">
                  GitHub Repository
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
