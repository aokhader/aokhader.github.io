"use client";

import { motion, useReducedMotion } from "motion/react";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  inView = false,
}: BlurFadeProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 14, filter: "blur(6px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(inView
        ? { whileInView: visible, viewport: { once: true, margin: "-80px" } }
        : { animate: visible })}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
