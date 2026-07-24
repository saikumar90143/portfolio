"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/experience";
import { Briefcase, ExternalLink } from "lucide-react";

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`relative flex flex-col md:flex-row gap-0 md:gap-8 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <div className="md:w-[calc(50%-2rem)] w-full">
        <motion.div
          whileHover={{ scale: 1.01, y: -2 }}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 hover:border-blue-500/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                  {experience.type}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {experience.startDate} → {experience.endDate}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] leading-tight">
                {experience.role}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm font-medium flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-blue-400 text-sm font-medium">{experience.company}</span>
                )}
                <span className="text-[var(--text-muted)] text-xs">· {experience.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                {achievement}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-xs text-[var(--text-muted)] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center dot — desktop only */}
      <div className="hidden md:flex w-16 flex-col items-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-xl bg-[var(--bg-surface)] border-2 border-blue-500/60 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
        >
          <Briefcase size={14} className="text-blue-400" />
        </motion.div>
      </div>

      {/* Spacer for alternating */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionWrapper className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-500 font-mono text-sm">03.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent max-w-16" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3">
            Experience
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl">
            Where I've worked, what I've built, and what I've learned.
          </p>
        </SectionWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent -translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
