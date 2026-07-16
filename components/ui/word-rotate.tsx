"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type WordRotateProps = {
  /** Phrases to cycle through. Can contain markup (e.g. styled <em>). */
  phrases: React.ReactNode[];
  className?: string;
  /** Time each phrase stays visible, in ms. */
  interval?: number;
};

/** Magic UI-style word rotation: phrases roll upward on a timer. */
export function WordRotate({ phrases, className, interval = 3000 }: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => clearInterval(id);
  }, [phrases.length, interval, reduceMotion]);

  return (
    <span className={`inline-block overflow-hidden align-bottom ${className ?? ""}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          className="inline-block whitespace-nowrap"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-105%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
