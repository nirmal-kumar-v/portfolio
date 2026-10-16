import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Star, Code2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { socialLinks } from '../data/personal';
import Button from '../components/Button';
import { GithubIcon } from '../components/Icons';

export default function GitHubSection() {
  const repos = [
    {
      name: 'perundurai-water-issue-reporting-system',
      description: 'Civic issue reporting & tracking system for Perundurai water management',
      url: 'https://github.com/nirmal-kumar-v/perundurai-water-issue-reporting-system',
      tech: ['JavaScript', 'Node.js', 'MongoDB'],
      featured: true,
    },
    {
      name: 'portfolio-tracker',
      description: 'Investment portfolio tracking application',
      url: 'https://github.com/nirmal-kumar-v/portfolio-tracker',
      tech: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
    },
  ];

  const techBreakdown = [
    { name: 'JavaScript', percentage: 40, color: '#F7DF1E' },
    { name: 'Java', percentage: 25, color: '#ED8B00' },
    { name: 'Python', percentage: 15, color: '#3776AB' },
    { name: 'HTML/CSS', percentage: 12, color: '#E34F26' },
    { name: 'TypeScript', percentage: 8, color: '#3178C6' },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Open Source"
          title="Code is where the ideas become real."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <GithubIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">nirmal-kumar-v</h3>
                  <p className="text-xs text-text-secondary">GitHub Profile</p>
                </div>
              </div>

              {/* Tech breakdown */}
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary mb-3">Languages</h4>
              <div className="space-y-2 mb-6">
                {techBreakdown.map((tech) => (
                  <div key={tech.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">{tech.name}</span>
                      <span className="text-text-tertiary">{tech.percentage}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-bg-card-hover">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Contribution visual */}
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary mb-3">Activity</h4>
              <div className="grid grid-cols-12 gap-0.5 mb-6">
                {Array.from({ length: 84 }).map((_, i) => {
                  const intensity = Math.random();
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.005 }}
                      className="aspect-square rounded-[2px]"
                      style={{
                        backgroundColor: intensity > 0.7
                          ? 'rgba(168, 85, 247, 0.6)'
                          : intensity > 0.4
                            ? 'rgba(168, 85, 247, 0.3)'
                            : intensity > 0.2
                              ? 'rgba(168, 85, 247, 0.12)'
                              : 'rgba(168, 85, 247, 0.04)',
                      }}
                    />
                  );
                })}
              </div>

              <div className="mt-auto">
                <Button href={socialLinks.github} variant="outline" size="sm" icon="github">
                  View Profile
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Repository Cards */}
          <div className="lg:col-span-2 space-y-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block p-5 rounded-xl border border-border bg-bg-card hover:border-accent/30 transition-all card-hover group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-accent" />
                      <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-light transition-colors">
                        {repo.name}
                      </h3>
                      {repo.featured && (
                        <span className="px-2 py-0.5 text-[9px] rounded-full bg-accent/10 text-accent-light border border-accent/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary mb-3">{repo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-bg-card-hover border border-border text-text-tertiary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-text-tertiary group-hover:text-accent-light transition-colors flex-shrink-0 mt-1" />
                </div>
              </motion.a>
            ))}

            {/* Note for repos without links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl border border-border/50 bg-bg-card/50"
            >
              <p className="text-xs text-text-tertiary">
                <GitBranch className="w-3 h-3 inline-block mr-1" />
                Additional project repositories for ChangeWave, OptiVest, SETU, and other projects are available through their respective demo links.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
