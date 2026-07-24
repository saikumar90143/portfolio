"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  id?: string;
  as?: string;
};

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  const ref = useRef(null);

  const getInitial = () => {
    switch (direction) {
      case "left":  return { opacity: 0, x: -40 };
      case "right": return { opacity: 0, x: 40 };
      case "none":  return { opacity: 0 };
      default:      return { opacity: 0, y: 40 };
    }
  };

  const variants: Variants = {
    hidden: getInitial(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const Component = motion[Tag as keyof typeof motion] as React.ElementType;

  return (
    <Component
      ref={ref}
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </Component>
  );
}
