"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789<>/{}_";

/**
 * Decode-on-hover: characters scramble, then settle left to right.
 * Use with a monospace font so nothing shifts.
 */
export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => () => clearInterval(timer.current), []);

  const scramble = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      frame += 1;
      const settled = Math.floor(frame / 2);
      if (settled >= text.length) {
        clearInterval(timer.current);
        setDisplay(text);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            i < settled ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join("")
      );
    }, 35);
  };

  return (
    <span className={className} onPointerEnter={scramble} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
