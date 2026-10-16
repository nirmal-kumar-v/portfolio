import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  badge?: string;
}

export default function Modal({ isOpen, onClose, children, title, badge }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // focus on modal
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-4 pt-12 sm:pt-16 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-bg-secondary border border-border rounded-lg shadow-2xl shadow-black/80 my-6 pixel-corner-brackets overflow-hidden z-10 focus:outline-none"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 border-b border-border bg-bg-secondary/95 backdrop-blur-md">
              <div>
                {badge && (
                  <span className="text-[11px] font-mono tracking-wider uppercase text-accent font-semibold block mb-1">
                    {badge}
                  </span>
                )}
                {title && (
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-tight">
                    {title}
                  </h3>
                )}
              </div>
              <button
                onClick={onClose}
                className="btn-tactile p-1.5 rounded-md bg-bg-card border border-border text-text-tertiary hover:text-text-primary hover:border-accent/40 transition-colors ml-4 focus:outline-2 focus:outline-accent"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
