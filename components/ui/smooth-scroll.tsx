"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Lenis smooth scrolling for the whole page. No-op under prefers-reduced-motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Nav scrolls with the page; a small offset just adds breathing room.
      anchors: { offset: -24 },
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
