import { BlurFade } from "./blur-fade";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

/** Section wrapper: monospace `// EYEBROW` in orange + big display heading. */
export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-[1240px] scroll-mt-6 px-5 pt-16 pb-6 sm:px-14"
    >
      <BlurFade inView>
        <div className="mb-2 font-mono text-[13px] text-orange">{eyebrow}</div>
        <h2 className="mb-8 font-display text-[32px] font-extrabold md:text-[42px]">
          {title}
        </h2>
      </BlurFade>
      {children}
    </section>
  );
}
