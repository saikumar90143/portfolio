"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import MagneticButton from "@/components/ui/MagneticButton";
import { personal } from "@/data/personal";

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx % words.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const roles = [
  "Full-Stack Engineer",
  "React Specialist",
  "API Architect",
  "Open Source Contributor",
  "Performance Obsessive",
];

// Animated background grid dots
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />

      {/* Gradient blobs */}
      <motion.div
        className="blob absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--bg)_100%)]" />
    </div>
  );
}

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const role = useTypewriter(roles, 75, 2200);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <GridBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-sm font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.availability}
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeUp}>
            <h1 className="font-display font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                {personal.firstName}
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text">
                {personal.lastName}
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 h-8">
            <span className="font-mono text-blue-400 text-base sm:text-lg">$</span>
            <span className="font-mono text-[var(--text-muted)] text-base sm:text-lg">
              {role}
              <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton
              href="#projects"
              variant="primary"
              className="px-7 py-3.5 text-sm font-semibold"
              id="hero-view-work-btn"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work →
            </MagneticButton>
            <MagneticButton
              href="#contact"
              variant="outline"
              className="px-7 py-3.5 text-sm font-semibold"
              id="hero-contact-btn"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 pt-4">
            {[
              { href: personal.socials.github,   icon: GithubIcon,   label: "GitHub" },
              { href: personal.socials.linkedin,  icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: Mail,         label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl border border-[var(--border)] bg-white/[0.03] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-200"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
