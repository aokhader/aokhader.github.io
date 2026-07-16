"use client";

import { useEffect, useState } from "react";

type TypedLineProps = {
  text: string;
  className?: string;
  /** Delay before typing starts, in ms. */
  startDelay?: number;
  /** Per-character delay, in ms. */
  speed?: number;
};

/** Terminal-style typewriter with a blinking block cursor. */
export function TypedLine({
  text,
  className,
  startDelay = 400,
  speed = 40,
}: TypedLineProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, startDelay, speed]);

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">
        <span className="text-accent">{"//"}</span> {text.slice(0, count)}
        <span className="cursor-blink -mb-0.5 ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-accent/80" />
      </span>
    </p>
  );
}
