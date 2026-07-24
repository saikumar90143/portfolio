"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/personal";

const socials = [
  { label: "GitHub",   href: personal.socials.github,   icon: GithubIcon },
  { label: "LinkedIn", href: personal.socials.linkedin,  icon: LinkedinIcon },
  { label: "X (Twitter)",  href: personal.socials.twitter,   icon: XIcon },
  { label: "Email",    href: `mailto:${personal.email}`, icon: Mail },
];

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-surface)]/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">
              {personal.firstName}<span className="text-blue-500">.</span>
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-56">
              {personal.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[var(--text-muted)] hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-[var(--text-muted)] hover:text-blue-400 transition-colors duration-200 block mb-4"
            >
              {personal.email}
            </a>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {personal.name}. Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://framer.com/motion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Framer Motion
            </a>
            .
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-blue-400 transition-colors duration-200"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
