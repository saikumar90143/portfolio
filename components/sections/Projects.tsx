"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 bg-[var(--bg-surface)]/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-500 font-mono text-sm">02.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent max-w-16" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3">
                Selected Work
              </h2>
              <p className="text-[var(--text-muted)] max-w-xl">
                A collection of projects I'm proud of — from experimental side projects to production systems.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Filter tabs */}
        <SectionWrapper delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {categories.map(({ label, value }) => (
              <motion.button
                key={value}
                role="tab"
                aria-selected={activeCategory === value}
                onClick={() => setActiveCategory(value)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === value
                    ? "text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border)] hover:border-blue-500/30"
                }`}
              >
                {activeCategory === value && (
                  <motion.span
                    layoutId="active-filter"
                    className="absolute inset-0 rounded-xl bg-blue-500"
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </motion.button>
            ))}
          </div>
        </SectionWrapper>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-[var(--text-muted)]"
          >
            <p className="text-lg">No projects in this category yet.</p>
          </motion.div>
        )}

        {/* See all note */}
        <SectionWrapper delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            More projects on{" "}
            <a
              href="https://github.com/saikumar90143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline underline-offset-4"
            >
              GitHub ↗
            </a>
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
