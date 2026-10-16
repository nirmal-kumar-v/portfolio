import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wifi, WifiOff, RefreshCw, Building2, Smartphone } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';

export default function DevForge() {
  const challenges = [
    {
      icon: <WifiOff className="w-5 h-5" />,
      title: 'Offline-First Billing',
      description: 'Allow billing to continue when connectivity is unavailable.',
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Synchronization',
      description: 'Queue offline transactions locally and synchronize them when connectivity returns.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Conflict Handling',
      description: 'Prevent duplicate transactions and inconsistent inventory updates.',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Multi-Store Architecture',
      description: 'Separate store-level operations while maintaining centralized reporting.',
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'SMS Gateway Demo',
      description: 'Show the offline transaction workflow using a mobile/SMS gateway.',
    },
  ];

  const modules = [
    'Product Catalog', 'Inventory Management', 'Billing', 'Transaction Management',
    'Customer Management', 'Loyalty Programs', 'Promotions & Discounts', 'Returns & Refunds',
    'Sales Tracking', 'Real-time Dashboard', 'Multi-Store Support', 'RBAC', 'Offline Billing', 'Data Sync',
  ];

  const roles = ['Admin', 'Manager', 'Billing Staff'];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Study — DevForge 2K26"
          title="24-Hour Hackathon. One unified retail platform."
          subtitle="September 22–23, 2026 | KEC IT Association | 1st Place"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem & Solution */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-red-400 mb-3">Problem</h3>
              <p className="text-text-secondary leading-relaxed">
                Retail stores frequently use disconnected systems for billing, inventory, customers, employees and reporting,
                resulting in stock inconsistencies and delayed reporting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-green-400 mb-3">Solution</h3>
              <p className="text-text-secondary leading-relaxed">
                A unified multi-store retail platform that integrates billing, inventory, customer management,
                promotions, and real-time reporting into a single system with offline-first capabilities.
              </p>
            </motion.div>

            {/* Modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">System Modules</h3>
              <div className="flex flex-wrap gap-2">
                {modules.map((mod) => (
                  <span key={mod} className="text-xs px-2.5 py-1 rounded-md bg-bg-card border border-border text-text-secondary">
                    {mod}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RBAC */}
            <div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-3">Access Roles</h3>
              <div className="flex gap-3">
                {roles.map((role) => (
                  <span key={role} className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent-light text-xs font-medium border border-accent/20">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-3">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Express.js'].map((t) => (
                  <TechBadge key={t} name={t} size="md" />
                ))}
              </div>
            </div>
          </div>

          {/* Engineering Challenges & Architecture */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-2">Engineering Challenges</h3>

            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent/20 transition-colors"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent h-fit">
                  {c.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{c.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 mt-8"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">Architecture Flow</h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">┌─</span> React Frontend (PWA)
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">│</span>
                  <ArrowRight className="w-3 h-3 text-accent/50" />
                  <span>Local Storage (Offline Queue)</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">│</span>
                  <ArrowRight className="w-3 h-3 text-accent/50" />
                  <span className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-green-400" />
                    Sync Engine
                  </span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">├─</span> Express.js API Server
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">├─</span> RBAC Middleware
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">├─</span> PostgreSQL (Multi-tenant)
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">└─</span> SMS/Mobile Gateway
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
