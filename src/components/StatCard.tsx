import { useEffect } from 'react';
import { useInView, useCounter } from '../hooks/useAnimations';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

export default function StatCard({ value, label, suffix = '', decimals = 0 }: StatCardProps) {
  const { ref, isInView } = useInView(0.5);
  const { count, activate } = useCounter(value, 2000, decimals);

  useEffect(() => {
    if (isInView) activate();
  }, [isInView, activate]);

  return (
    <div ref={ref} className="text-center group">
      <div className="stat-value text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-1 tracking-tight">
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-text-tertiary group-hover:text-text-secondary transition-colors">
        {label}
      </div>
    </div>
  );
}
