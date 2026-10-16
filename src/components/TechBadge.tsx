interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
  variant?: 'default' | 'accent' | 'amber';
}

export default function TechBadge({ name, size = 'sm', variant = 'default' }: TechBadgeProps) {
  const variantStyles = {
    default: 'bg-bg-secondary border-border text-text-secondary hover:text-text-primary hover:border-accent/40',
    accent: 'bg-accent/10 border-accent/30 text-accent-light',
    amber: 'bg-gold/10 border-gold/30 text-gold',
  };

  return (
    <span
      className={`inline-flex items-center font-mono rounded-sm border transition-colors ${
        variantStyles[variant]
      } ${size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'}`}
    >
      <span className="w-1 h-1 rounded-full bg-accent/60 mr-1.5 inline-block" />
      {name}
    </span>
  );
}
