"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const placeholderColors = [
  "from-blue-600/20 to-purple-600/20",
  "from-emerald-600/20 to-teal-600/20",
  "from-orange-600/20 to-red-600/20",
  "from-violet-600/20 to-indigo-600/20",
  "from-pink-600/20 to-rose-600/20",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradientClass = placeholderColors[index % placeholderColors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] hover:border-blue-500/30 transition-all duration-500"
    >
      {/* Image / Placeholder */}
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradientClass} border-b border-[var(--border)]`}>
        {/* Real screenshot */}
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {/* Fallback initials (shows when image absent) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-6xl font-display font-bold text-white/5 select-none">
            {project.title.slice(0, 2)}
          </div>
        </div>
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-blue-600/10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white font-medium hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white font-medium hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={14} />
              Code
            </a>
          )}
        </motion.div>
        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-md px-2 py-0.5 text-xs text-white/60 font-mono">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-[var(--text-muted)] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
          />
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.07] text-xs text-[var(--text-muted)] font-mono"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-xs text-[var(--text-muted)]">
              +{project.tech.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
