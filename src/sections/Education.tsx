import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Info,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, semesterGrades, schoolEducation } from '../data/personal';
import {
  trainingExperiences,
  certificationsList,
  type TrainingExperienceItem,
  type CertificationItem,
} from '../data/skills';
import Modal from '../components/Modal';

export default function Education() {
  const [showSchoolDetails, setShowSchoolDetails] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<TrainingExperienceItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="education" className="relative py-24 md:py-32 bg-bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Foundations & Training"
          title="Education, industry training, and technical credentials."
          subtitle="A solid academic track record coupled with rigorous DSA competitive programming training and verified coursework."
        />

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Education & Semester History (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Performance</span>
            </h3>

            {/* Current Degree Card */}
            <div className="pixel-card p-6 rounded-lg border border-accent/30 bg-bg-card pixel-corner-brackets">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-emerald px-2 py-0.5 rounded bg-emerald/10 border border-emerald/20 font-semibold uppercase">
                    Active Program
                  </span>
                  <h4 className="text-lg font-bold text-text-primary mt-2">
                    {personalInfo.degree}
                  </h4>
                  <p className="text-xs text-text-secondary mt-0.5 font-sans">
                    {personalInfo.college}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-mono font-black text-accent block">
                    {personalInfo.cgpa}
                  </span>
                  <span className="text-[10px] font-mono text-text-tertiary">CGPA (Sem 4)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span>{personalInfo.currentYear} • {personalInfo.currentSemester}</span>
                <span>Tiruppur / Erode, TN</span>
              </div>

              {/* Semester Breakdown Table */}
              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary block mb-3 font-semibold">
                  Semester Results (Official Records)
                </span>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {semesterGrades.map((sem) => {
                    const content = (
                      <>
                        <span className="text-[10px] font-mono text-text-tertiary group-hover:text-text-secondary transition-colors block truncate">
                          {sem.semester.replace('Semester ', 'Sem ')}
                        </span>
                        <span className="text-sm font-mono font-bold text-text-primary group-hover:text-accent-light transition-colors block mt-1">
                          {sem.gpa.toFixed(2)}
                        </span>
                        <span className="text-[9px] font-mono text-accent-light block mt-0.5">
                          CGPA {sem.cgpa.toFixed(2)}
                        </span>
                      </>
                    );

                    return sem.pdfUrl ? (
                      <a
                        key={sem.semester}
                        href={sem.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${sem.semester} result in new tab`}
                        className="p-2 rounded bg-bg-secondary border border-border hover:border-accent/60 hover:bg-bg-card-hover transition-all duration-200 cursor-pointer block group"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={sem.semester} className="p-2 rounded bg-bg-secondary border border-border">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* School Timeline Toggle Button */}
              <div className="mt-5 pt-4 border-t border-border">
                <button
                  onClick={() => setShowSchoolDetails(!showSchoolDetails)}
                  className="btn-tactile w-full py-2.5 px-3 rounded bg-bg-secondary border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 flex items-center justify-between transition-colors"
                >
                  <span className="font-semibold">School Academic History (10th, 11th, 12th)</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      showSchoolDetails ? 'rotate-180 text-accent' : 'text-text-tertiary'
                    }`}
                  />
                </button>

                {/* Expandable School History */}
                <AnimatePresence initial={false}>
                  {showSchoolDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-3 space-y-2.5"
                    >
                      <div className="p-3 rounded bg-bg-secondary/70 border border-border text-xs">
                        <span className="font-semibold text-text-primary block">
                          Veera Sivaji Vidhyalaya Matric Hr. Sec. School, Tiruppur
                        </span>
                        <div className="mt-2 space-y-2 font-mono">
                          {schoolEducation.map((sch) => {
                            const content = (
                              <>
                                <div className="flex items-center justify-between text-text-primary text-[11px] font-semibold">
                                  <span className={sch.pdfUrl ? "group-hover:text-accent-light transition-colors" : ""}>
                                    {sch.grade}
                                  </span>
                                  <span className="text-accent">{sch.percentage}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] text-text-tertiary mt-1">
                                  <span>{sch.year} ({sch.marks})</span>
                                  <span>{sch.rank}</span>
                                </div>
                                {sch.note && (
                                  <div className="mt-1 text-[10px] text-gold font-bold">
                                    ★ {sch.note}
                                  </div>
                                )}
                              </>
                            );

                            return sch.pdfUrl ? (
                              <a
                                key={sch.grade}
                                href={sch.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Open ${sch.grade} result in new tab`}
                                className="p-2 rounded bg-bg-card border border-border/60 hover:border-accent/60 hover:bg-bg-card-hover transition-all duration-200 cursor-pointer block group"
                              >
                                {content}
                              </a>
                            ) : (
                              <div key={sch.grade} className="p-2 rounded bg-bg-card border border-border/60">
                                {content}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Training & Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Training, Selection & Experience</span>
            </h3>

            {/* Training List */}
            <div className="space-y-3">
              {trainingExperiences.map((exp) => (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp)}
                  className="pixel-card group p-4 rounded-lg border border-border hover:border-accent/40 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-bg-card hover:bg-bg-card-hover"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-text-primary group-hover:text-accent-light transition-colors">
                        {exp.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent-light">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary font-sans">
                      {exp.organization}
                    </div>
                    <p className="text-xs text-text-tertiary line-clamp-1">
                      {exp.description}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-accent-light flex items-center gap-1 self-start sm:self-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications Sub-section */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-accent font-semibold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                <span>Verified Courses & Certifications</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-3">
                {certificationsList.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="pixel-card p-3 rounded-md border border-border hover:border-accent/40 cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider inline-block mb-1.5 font-semibold ${
                          cert.status === 'Elite + Gold'
                            ? 'bg-gold/15 text-gold border border-gold/30'
                            : 'bg-bg-secondary text-text-tertiary border border-border'
                        }`}
                      >
                        {cert.grade}
                      </span>
                      <h5 className="text-xs font-bold text-text-primary leading-snug">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] text-text-tertiary block mt-0.5">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-accent-light mt-3 block">
                      Inspect note →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Details Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.title}
        badge={selectedExperience?.organization}
      >
        {selectedExperience && (
          <div className="space-y-4">
            <div className="p-3 rounded bg-bg-card border border-border flex items-center justify-between text-xs font-mono">
              <span className="text-text-tertiary uppercase">Record Type: {selectedExperience.type}</span>
              <span className="text-accent font-semibold">{selectedExperience.badge}</span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Summary
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedExperience.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Verified Specifics
              </h4>
              <ul className="space-y-2">
                {selectedExperience.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>

      {/* Certification Note Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        badge={selectedCert?.issuer}
      >
        {selectedCert && (
          <div className="space-y-4">
            <div className="p-3 rounded bg-bg-card border border-border flex items-center justify-between text-xs font-mono">
              <span className="text-text-tertiary uppercase">Result / Grade</span>
              <span className="text-gold font-bold">{selectedCert.grade}</span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                Verified Scope & Practical Context
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedCert.notes}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
