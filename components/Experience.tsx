import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { alsoRoles, experiences } from "@/data";

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

      <BlurFade inView>
        <div className="nb-card mt-6 px-6 py-2" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
          <div className="py-3 font-mono text-[11.5px] font-semibold text-faint">ALSO</div>
          {alsoRoles.map((role) => (
            <div
              key={role.company}
              className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1 border-t border-dashed border-rule py-2.5"
            >
              <span className="min-w-[210px] text-[14.5px] font-semibold">{role.company}</span>
              <span className="flex-1 text-[13.5px] text-muted">{role.title}</span>
              <span className="font-mono text-xs text-faint">{role.dates}</span>
            </div>
          ))}
        </div>
      </BlurFade>
    </Section>
  );
};

export default Experience;
