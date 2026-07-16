import { BlurFade } from "./blur-fade";

/** An edge terminating in a node — the site's recurring graph glyph. */
export function NodeGlyph({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="8"
      viewBox="0 0 22 8"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="0" y1="4" x2="13" y2="4" stroke="var(--color-edge)" strokeWidth="1.5" />
      <circle cx="18" cy="4" r="3" fill="var(--color-accent)" />
    </svg>
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-20 md:py-28">
      <BlurFade inView>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          <NodeGlyph />
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {title}
        </h2>
      </BlurFade>
      <div className="mt-12">{children}</div>
    </section>
  );
}
