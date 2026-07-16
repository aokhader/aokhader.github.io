import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { skillGroups } from "@/data";

const Skills = () => {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <BlurFade key={group.label} inView delay={i * 0.05}>
            <div className="grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-6">
              <p className="pt-1 font-mono text-xs uppercase tracking-[0.2em] text-faint">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3.5 py-1 text-sm text-muted
                    transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
