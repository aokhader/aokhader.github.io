"use client";

import { motion, useScroll } from "motion/react";

/** Hairline reading-progress bar, meant to sit on the fixed nav's bottom edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/70"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
