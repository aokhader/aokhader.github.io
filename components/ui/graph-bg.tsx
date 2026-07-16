"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature hero background: a sparse node-and-edge graph that draws itself
 * on load — a nod to the visual graph algorithms work. Nodes near the cursor
 * light up gold, along with their edges. Load animation is pure CSS and
 * disabled under prefers-reduced-motion.
 */

const nodes = [
  { id: "a", x: 80, y: 420 },
  { id: "b", x: 180, y: 300 },
  { id: "c", x: 140, y: 140 },
  { id: "d", x: 320, y: 220, accent: true },
  { id: "e", x: 300, y: 60 },
  { id: "f", x: 460, y: 140 },
  { id: "g", x: 520, y: 320, accent: true },
  { id: "h", x: 380, y: 400 },
  { id: "i", x: 240, y: 500 },
  { id: "j", x: 520, y: 520 },
] as const;

const edges: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["b", "d"],
  ["c", "e"],
  ["d", "e"],
  ["d", "f"],
  ["d", "h"],
  ["f", "g"],
  ["g", "h"],
  ["h", "i"],
  ["a", "i"],
  ["g", "j"],
  ["h", "j"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/** Cursor reach, in viewBox units. */
const REACH = 110;

export function GraphBg() {
  const svgRef = useRef<SVGSVGElement>(null);
  const frame = useRef(0);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const ctm = svgRef.current?.getScreenCTM();
        if (!ctm) return;
        // Map the pointer into viewBox coordinates.
        const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
        if (p.x < -60 || p.x > 660 || p.y < -60 || p.y > 660) {
          setCursor(null);
        } else {
          setCursor({ x: p.x, y: p.y });
        }
      });
    };
    const onLeave = () => setCursor(null);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const near = (id: string) => {
    if (!cursor) return false;
    const n = byId[id];
    return Math.hypot(n.x - cursor.x, n.y - cursor.y) < REACH;
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block
      [mask-image:radial-gradient(ellipse_60%_60%_at_60%_45%,black_30%,transparent_75%)]"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 600 600"
        className="h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map(([from, to], i) => {
          const a = byId[from];
          const b = byId[to];
          const active = near(from) || near(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={active ? "var(--color-accent)" : "var(--color-edge)"}
              strokeWidth={active ? 1.5 : 1}
              strokeOpacity={active ? 0.9 : 0.45}
              className="graph-edge"
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            />
          );
        })}
        {nodes.map((n, i) => {
          const gold = "accent" in n && n.accent;
          const active = near(n.id);
          return (
            <circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r={active ? 5.5 : gold ? 4 : 3}
              fill={active || gold ? "var(--color-accent)" : "var(--color-edge)"}
              className={gold ? "graph-node graph-node-pulse" : "graph-node"}
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
