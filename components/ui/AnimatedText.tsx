"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  variant?: "words" | "chars" | "lines";
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 12, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function AnimatedText({
  text,
  el: Element = "p",
  className = "",
  delay = 0,
  once = true,
  variant = "words",
}: AnimatedTextProps) {
  const Tag = Element as React.ElementType;

  if (variant === "chars") {
    const chars = text.split("");
    return (
      <Tag className={`overflow-hidden ${className}`} aria-label={text}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          style={{ display: "inline-flex", flexWrap: "wrap", perspective: "600px" }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              custom={i + delay * 10}
              variants={charVariants}
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  // Words (default)
  const words = text.split(" ");
  return (
    <Tag className={`overflow-hidden ${className}`} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        style={{ display: "inline-flex", flexWrap: "wrap", gap: "0 0.3em" }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i + delay * 10}
            variants={wordVariants}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
