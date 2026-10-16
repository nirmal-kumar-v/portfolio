import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { techStack } from '../data/skills';

export default function TechStack() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tech Stack"
          title="Tools I build with."
          subtitle="Technologies chosen for the job, not for the resume."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="glass rounded-xl p-6 hover:border-accent/20 transition-colors"
            >
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-5">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + ii * 0.04 }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
