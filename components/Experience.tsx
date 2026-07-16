import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <Section id="experience" eyebrow="// EXPERIENCE" title="Quests cleared.">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((role, i) => (
          <BlurFade key={role.company} inView delay={(i % 2) * 0.08}>
            <div className="nb-card flex h-full flex-col gap-2.5 p-6">
              <div className="font-mono text-[11.5px] font-semibold text-olive">
                {role.meta}
              </div>
              <h3 className="font-display text-2xl font-bold">
                {role.company}{" "}
                <span className="font-medium text-faint">— {role.title}</span>
              </h3>
              <p className="text-[14.5px] leading-[1.6]">{role.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {role.metrics.map((metric) => (
                  <span key={metric} className="nb-metric">
                    {metric}
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

export default Experience;
