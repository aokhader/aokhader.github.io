"use client";

import { useRef, useState } from "react";
import { site } from "@/data";

/** Copy-to-clipboard email button with a brief "COPIED ✓" confirmation. */
export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={copy} className={className}>
      {copied ? "COPIED ✓" : "COPY EMAIL"}
    </button>
  );
}
