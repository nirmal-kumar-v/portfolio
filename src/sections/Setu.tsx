import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Globe, University, Building, Landmark, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';
import Button from '../components/Button';

export default function Setu() {
  const pipeline = [
    { label: 'Citizen Problem', icon: <Users className="w-4 h-4" /> },
    { label: 'Evidence', icon: null },
    { label: 'AI Validation', icon: null },
    { label: 'Government Visibility', icon: <Landmark className="w-4 h-4" /> },
    { label: 'University Match', icon: <University className="w-4 h-4" /> },
    { label: 'CSR / Industry Partner', icon: <Building className="w-4 h-4" /> },
    { label: 'Prototype', icon: null },
    { label: 'Pilot', icon: null },
    { label: 'Deployment', icon: null },
    { label: 'Impact', icon: null },
  ];

  const modules = ['Citizen', 'University', 'Government', 'CSR / Industry'];

  const technologies = [
    'React', 'PWA', 'Node.js', 'Express.js', 'Python', 'Transformers', 'scikit-learn',
    'Whisper', 'Indic NLP', 'PostgreSQL', 'PostGIS', 'OTP', 'JWT', 'RBAC',
    'SMS', 'Email', 'WhatsApp', 'IVR', 'Maps', 'PDF/DOCX',
  ];

  const languages = ['Tamil', 'English', 'Hindi'];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Case Study — SIH 2026"
          title="SETU — Civic-action orchestration."
          subtitle="A civic-action orchestration platform rather than a simple complaint-reporting application."
        />

        {/* Core Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-5 rounded-xl border border-accent/20 bg-accent/5 max-w-2xl"
        >
          <p className="text-sm text-accent-light font-medium italic">
            "No problem disappears regardless of votes."
          </p>
          <p className="text-xs text-text-tertiary mt-1">Core Design Principle — SETU</p>
        </motion.div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-6">Problem-to-Impact Pipeline</h3>
          <div className="flex flex-wrap items-center gap-2 md:gap-1">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1 md:gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-bg-card border border-border text-xs text-text-secondary hover:border-accent/30 hover:text-text-primary transition-colors"
                >
                  {step.icon && <span className="text-accent">{step.icon}</span>}
                  {step.label}
                </motion.div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-accent/40 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div className="space-y-8">
            {/* Modules */}
            <div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">Platform Modules</h3>
              <div className="grid grid-cols-2 gap-3">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-xl border border-border bg-bg-card text-center hover:border-accent/20 transition-colors"
                  >
                    <span className="text-sm font-medium text-text-primary">{mod}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-3">Supported Languages</h3>
              <div className="flex gap-3">
                {languages.map((lang) => (
                  <span key={lang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border text-sm text-text-secondary">
                    <Globe className="w-3 h-3 text-accent" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
              <span className="text-xs font-mono text-text-tertiary">Role</span>
              <p className="text-sm text-text-primary font-medium mt-1">Team Lead</p>
            </div>

            <Button href="https://setu-connect.vercel.app" variant="primary" size="md" icon="external">
              View SETU
            </Button>
          </div>

          {/* Right — Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((t) => (
                  <TechBadge key={t} name={t} size="sm" />
                ))}
              </div>
            </div>

            {/* Architecture Map */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">System Architecture</h3>
              <div className="space-y-3 font-mono text-xs text-text-secondary">
                <div>
                  <span className="text-accent">┌─ Frontend</span>
                  <div className="ml-4 space-y-1 mt-1">
                    <div>├─ React PWA (Citizen Portal)</div>
                    <div>├─ Government Dashboard</div>
                    <div>├─ University Interface</div>
                    <div>└─ CSR Partner Portal</div>
                  </div>
                </div>
                <div>
                  <span className="text-accent">├─ API Layer</span>
                  <div className="ml-4 space-y-1 mt-1">
                    <div>├─ Express.js REST API</div>
                    <div>├─ JWT + OTP Auth</div>
                    <div>└─ RBAC Middleware</div>
                  </div>
                </div>
                <div>
                  <span className="text-accent">├─ AI Engine</span>
                  <div className="ml-4 space-y-1 mt-1">
                    <div>├─ Python (Transformers + scikit-learn)</div>
                    <div>├─ Whisper (Voice → Text)</div>
                    <div>└─ Indic NLP (Multilingual)</div>
                  </div>
                </div>
                <div>
                  <span className="text-accent">├─ Data</span>
                  <div className="ml-4 space-y-1 mt-1">
                    <div>├─ PostgreSQL + PostGIS</div>
                    <div>└─ Maps Integration</div>
                  </div>
                </div>
                <div>
                  <span className="text-accent">└─ Notifications</span>
                  <div className="ml-4 space-y-1 mt-1">
                    <div>├─ SMS / WhatsApp / Email</div>
                    <div>└─ IVR Gateway</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
