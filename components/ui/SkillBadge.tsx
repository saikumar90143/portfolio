"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/data/skills";

const levelColors = {
  expert: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  proficient: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  familiar: "bg-slate-500/15 text-slate-400 border-slate-500/25",
};

const levelDots = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

type SkillBadgeProps = {
  skill: Skill;
  index?: number;
};

export default function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  const colorClass = levelColors[skill.level];
  const dots = levelDots[skill.level];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.04,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04, y: -2 }}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${colorClass} cursor-default`}
    >
      <span>{skill.name}</span>
      {/* Proficiency dots */}
      <span className="flex gap-0.5 ml-1">
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            className={`w-1 h-1 rounded-full ${d <= dots ? "bg-current" : "bg-current opacity-20"}`}
          />
        ))}
      </span>
    </motion.div>
  );
}
