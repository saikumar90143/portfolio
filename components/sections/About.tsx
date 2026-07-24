"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { personal } from "@/data/personal";
import { techMarquee } from "@/data/skills";
import { MapPin, Coffee, Code2 } from "lucide-react";

function TechMarqueeTrack({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-3 flex-shrink-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-sm text-[var(--text-muted)] whitespace-nowrap font-mono"
          >
            <span className="text-blue-500/70">▸</span>
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "25+" },
  { label: "GitHub Stars", value: "2.4k" },
  { label: "Cups of Coffee", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <SectionWrapper className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-500 font-mono text-sm">01.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent max-w-16" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            About Me
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl">
            A little bit about who I am, what I do, and how I got here.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio text */}
          <SectionWrapper direction="left">
            <div className="space-y-5">
              {personal.bio.map((paragraph, i) => (
                <p key={i} className="text-[var(--text-muted)] text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Meta info */}
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <MapPin size={14} className="text-blue-500" />
                  {personal.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Code2 size={14} className="text-blue-500" />
                  Building real-world products
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Coffee size={14} className="text-blue-500" />
                  Powered by coffee and TypeScript
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Avatar / Stats panel */}
          <SectionWrapper direction="right" delay={0.15}>
            {/* Avatar placeholder */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                <span className="font-display font-bold text-6xl text-blue-400/60">
                  {personal.firstName[0]}{personal.lastName[0]}
                </span>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 md:right-[calc(50%-80px)] bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-emerald-400 text-xs font-semibold">● Available</span>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 text-center hover:border-blue-500/25 transition-all duration-200"
                >
                  <p className="font-display font-bold text-3xl text-blue-400 mb-1">{value}</p>
                  <p className="text-xs text-[var(--text-muted)]">{label}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* Tech marquee */}
        <SectionWrapper delay={0.2}>
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-6 text-center">
            Technologies I work with
          </p>
          <div className="space-y-3">
            <TechMarqueeTrack items={techMarquee} />
            <TechMarqueeTrack items={[...techMarquee].reverse()} reverse />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
