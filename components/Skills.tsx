import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { skillGroups } from "@/data";

const tintClass: Record<string, string> = {
  cream: "bg-card",
  peach: "bg-peach",
  olive: "bg-olive-bg",
};

const Skills = () => {
  return (
    <Section id="skills" eyebrow="// SKILLS" title="Toolbox.">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <BlurFade key={group.label} inView delay={i * 0.06}>
            <div>
              <div className="mb-3 font-mono text-[11.5px] font-semibold text-faint">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className={`nb-chip nb-press ${tintClass[group.tint]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
