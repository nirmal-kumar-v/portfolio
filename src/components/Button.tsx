import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'external' | 'github' | React.ReactNode | null;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'btn-tactile inline-flex items-center justify-center gap-2 font-mono font-medium rounded-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-accent';

  const variants = {
    primary:
      'bg-accent text-bg-primary hover:bg-accent-light active:bg-accent-dark border border-accent/40 shadow-[0_2px_0_0_#0284c7] font-semibold',
    secondary:
      'bg-bg-card border border-border text-text-primary hover:border-accent/40 hover:bg-bg-card-hover shadow-[0_2px_0_0_#1e293b]',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent shadow-none',
    outline:
      'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent shadow-[0_2px_0_0_#0c4a6e]',
    amber:
      'bg-gold text-bg-primary hover:brightness-110 active:brightness-95 border border-gold/40 shadow-[0_2px_0_0_#b45309] font-semibold',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (icon === 'external') return <ExternalLink className="w-3.5 h-3.5" />;
    if (icon === 'github') return <GithubIcon className="w-3.5 h-3.5" />;
    if (React.isValidElement(icon)) return icon;
    return null;
  };

  const cls = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {children}
        {renderIcon()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
      {renderIcon()}
    </button>
  );
}
