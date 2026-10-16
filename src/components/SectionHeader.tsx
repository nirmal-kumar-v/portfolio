import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, badge, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const eyebrowText = badge || label;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      {eyebrowText && (
        <span className="inline-block text-xs font-mono font-semibold tracking-[0.3em] uppercase text-accent mb-4">
          {eyebrowText}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed" style={align === 'center' ? { margin: '0 auto' } : {}}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-20 bg-gradient-to-r from-accent to-indigo ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
