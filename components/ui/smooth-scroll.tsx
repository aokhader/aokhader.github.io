"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Lenis smooth scrolling for the whole page. No-op under prefers-reduced-motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Match the sections' scroll-mt-28 so anchor jumps clear the fixed nav.
      anchors: { offset: -112 },
    });

    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
