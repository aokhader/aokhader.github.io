"use client";

import { useEffect, useRef } from "react";

/**
 * A draggable yo-yo with real pendulum physics. Grab the disc and throw it;
 * released, it swings on gravity and the string retracts to rest.
 * Ported from the design-canvas prototype; static under prefers-reduced-motion.
 */
export function Yoyo() {
  const areaRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const area = areaRef.current;
    const stringEl = stringRef.current;
    const disc = discRef.current;
    if (!area || !stringEl || !disc) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let a = 0.7; // angle from vertical (radians)
    let av = 0; // angular velocity
    let len = 230; // string length
    const nat = 230; // natural resting length
    let spin = 0; // disc self-rotation
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const r = area.getBoundingClientRect();
      const ax = r.left + r.width / 2;
      const ay = r.top + 14;
      const dx = e.clientX - ax;
      const dy = e.clientY - ay;
      const na = Math.atan2(dx, Math.max(dy, 20));
      av = av * 0.5 + (na - a) * 0.45;
      a = na;
      len = Math.min(360, Math.max(70, Math.hypot(dx, dy)));
    };
    const onUp = () => {
      dragging.current = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    const tick = () => {
      if (!dragging.current) {
        av += -0.0035 * Math.sin(a);
        av *= 0.996;
        a += av;
        len += (nat - len) * 0.06;
      }
      spin += 2 + av * 420;
      stringEl.style.transform = `rotate(${-a}rad)`;
      stringEl.style.height = `${len}px`;
      const x = Math.sin(a) * len;
      const y = Math.cos(a) * len;
      disc.style.transform = `translate(${x}px,${y}px) rotate(${spin}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const startDrag = (e: React.PointerEvent) => {
    dragging.current = true;
    e.preventDefault();
  };

  return (
    <div
      ref={areaRef}
      className="relative mx-auto h-[420px] w-[300px] md:h-[470px] md:w-[380px]"
    >
      {/* mount */}
      <div className="absolute left-1/2 top-0 h-4 w-[54px] -translate-x-1/2 rounded-b-xl bg-ink" />
      {/* string */}
      <div
        ref={stringRef}
        className="absolute left-1/2 top-[14px] -ml-px h-[230px] w-0.5 bg-ink"
        style={{ transformOrigin: "top center" }}
      />
      {/* pivot */}
      <div className="absolute left-1/2 top-[14px] h-0 w-0">
        <div
          ref={discRef}
          onPointerDown={startDrag}
          className="absolute -left-[50px] -top-[50px] grid h-[100px] w-[100px] cursor-grab
          place-items-center rounded-full border-[3px] border-ink bg-orange
          shadow-[4px_6px_0_rgba(34,28,20,0.25)] touch-none active:cursor-grabbing"
        >
          <div className="relative grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-cream">
            <div className="absolute left-1/2 top-[7px] -ml-1 h-2 w-2 rounded-full bg-orange" />
            <div className="h-[22px] w-[22px] rounded-full bg-ink" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs text-faint">
        ← drag the yo-yo. it&apos;s real physics. i also do this with an actual one.
      </div>
    </div>
  );
}
