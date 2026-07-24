"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";
import { Layers, Server, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Layers,
  backend: Server,
  devops: Wrench,
};

const categoryColors: Record<string, string> = {
  frontend: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  backend:  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  devops:   "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[var(--bg-surface)]/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionWrapper className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-500 font-mono text-sm">04.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent max-w-16" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3">
            Skills & Tools
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl">
            Technologies I use daily and tools I've grown to love.
          </p>
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-5">
            {[
              { level: "Expert",     color: "bg-blue-500" },
              { level: "Proficient", color: "bg-emerald-500" },
              { level: "Familiar",   color: "bg-slate-500" },
            ].map(({ level, color }) => (
              <div key={level} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                {level}
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIcons[category.id] ?? Layers;
            const colorClass = categoryColors[category.id] ?? "text-blue-400 bg-blue-500/10 border-blue-500/20";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: catIdx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 hover:border-blue-500/20 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${colorClass}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)]">
                      {category.label}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      index={catIdx * 10 + i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
