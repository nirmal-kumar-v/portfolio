import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, MapPin, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, socialLinks } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact() {
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedCollege, setCopiedCollege] = useState(false);

  const copyEmail = (text: string, isPersonal: boolean) => {
    navigator.clipboard.writeText(text);
    if (isPersonal) {
      setCopiedPersonal(true);
      setTimeout(() => setCopiedPersonal(false), 2000);
    } else {
      setCopiedCollege(true);
      setTimeout(() => setCopiedCollege(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-secondary/60 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Direct Communication"
          title="Let's connect."
          subtitle="Open for full-stack engineering roles, hackathon collaborations, competitive coding initiatives, and developer internship opportunities."
          align="center"
        />

        <div className="pixel-card p-8 md:p-12 rounded-lg border border-border bg-bg-card pixel-corner-brackets max-w-3xl mx-auto space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span>Available for Technical Roles & Sprints</span>
            </span>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Reach out directly
            </h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto">
              No forms required. Send an email directly or connect through professional networks.
            </p>
          </div>

          {/* Email Cards */}
          <div className="space-y-3 max-w-lg mx-auto">
            {/* Primary Email */}
            <div className="p-4 rounded-md border border-accent/30 bg-bg-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-accent-light tracking-wider font-semibold block">
                    Primary Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-text-primary hover:text-accent font-medium transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyEmail(personalInfo.email, true)}
                className="btn-tactile self-start sm:self-center px-3 py-1.5 rounded bg-bg-card border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 flex items-center gap-1.5"
                title="Copy primary email"
              >
                {copiedPersonal ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald" />
                    <span className="text-emerald">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Secondary Academic Email */}
            <div className="p-4 rounded-md border border-border bg-bg-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-bg-card border border-border text-text-tertiary">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-text-tertiary tracking-wider font-semibold block">
                    Academic Institutional Contact
                  </span>
                  <a
                    href={`mailto:${personalInfo.collegeEmail}`}
                    className="text-sm font-mono text-text-secondary hover:text-text-primary font-medium transition-colors"
                  >
                    {personalInfo.collegeEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyEmail(personalInfo.collegeEmail, false)}
                className="btn-tactile self-start sm:self-center px-3 py-1.5 rounded bg-bg-card border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 flex items-center gap-1.5"
                title="Copy college email"
              >
                {copiedCollege ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald" />
                    <span className="text-emerald">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-border text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-tertiary">
              Professional Profiles
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-md bg-bg-secondary border border-border text-xs font-mono text-text-primary hover:border-accent/40"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-text-tertiary" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-md bg-bg-secondary border border-border text-xs font-mono text-text-primary hover:border-accent/40"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-text-tertiary" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-text-tertiary pt-2">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{personalInfo.location} • Kongu Engineering College</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
