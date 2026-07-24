"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 800, mass: 0.01 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const scale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // Only show on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnterLink = () => {
      scale.set(2.5);
      cursorRef.current?.classList.add("opacity-30");
    };
    const handleMouseLeaveLink = () => {
      scale.set(1);
      cursorRef.current?.classList.remove("opacity-30");
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Attach to all interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [role='button'], input, textarea");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, [mouseX, mouseY, scale]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-blue-500/60 pointer-events-none z-[99999] transition-opacity duration-200"
        style={{
          x: springX,
          y: springY,
          scale: scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-500 pointer-events-none z-[99999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
