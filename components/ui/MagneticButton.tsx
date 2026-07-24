"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  strength?: number;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.3,
  external = false,
  type = "button",
  id,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });

  const rotateX = useTransform(y, [-20, 20], [5, -5]);
  const rotateY = useTransform(x, [-20, 20], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * strength;
    const distY = (e.clientY - centerY) * strength;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200 select-none";

  const variantStyles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]",
    outline:
      "border border-white/15 dark:border-white/15 text-[var(--text-primary)] hover:bg-white/5 hover:border-blue-500/40 backdrop-blur-sm",
    ghost:
      "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 pointer-events-none" : ""}`;

  const MotionWrapper = (
    <motion.div
      ref={ref}
      style={{ x, y, rotateX, rotateY, transformPerspective: 600 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="inline-block"
    >
      <motion.span
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
        className={combinedClass}
        id={id}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {MotionWrapper}
        </a>
      );
    }
    return <Link href={href}>{MotionWrapper}</Link>;
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className="inline-block">
      {MotionWrapper}
    </button>
  );
}
