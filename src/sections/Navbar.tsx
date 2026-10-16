import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { navLinks, socialLinks } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active link detection
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 group font-mono font-bold tracking-tight text-text-primary select-none"
            >
              <span className="w-2.5 h-2.5 bg-accent rounded-none inline-block group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              <span className="text-sm sm:text-base">NIRMAL KUMAR V.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded transition-all ${
                      isActive
                        ? 'text-accent font-bold bg-accent/10 border border-accent/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Quick Profile Links */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-2 rounded bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent/40"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-2 rounded bg-bg-card border border-border text-text-secondary hover:text-blue-400 hover:border-blue-400/40"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-tactile md:hidden p-2 rounded bg-bg-card border border-border text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-72 bg-bg-secondary border-l border-border p-6 pt-16 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-[11px] font-mono uppercase text-accent tracking-wider font-semibold pb-2 border-b border-border">
                  Navigation Menu
                </div>
                <div className="flex flex-col gap-1 font-mono text-sm">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 rounded hover:bg-white/5 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-text-tertiary">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-bg-card border border-border text-text-secondary hover:text-text-primary"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-bg-card border border-border text-text-secondary hover:text-blue-400"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-mono text-text-tertiary hover:text-text-primary p-2"
                >
                  Close [ESC]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
