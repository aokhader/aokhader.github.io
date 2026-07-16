"use client";

import { useEffect, useRef } from "react";

/**
 * Mouse-tracking radial glow for cards. Drop inside any element with
 * `group relative` — it listens on the parent and fades in on hover.
 */
export function CardGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = ref.current;
    const parent = overlay?.parentElement;
    if (!overlay || !parent) return;

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      overlay.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      overlay.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0
      transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgb(231 180 76 / 0.08), transparent 65%)",
      }}
    />
  );
}
