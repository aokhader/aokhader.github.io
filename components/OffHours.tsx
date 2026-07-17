import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { achievements, offHours } from "@/data";

const OffHours = () => {
  return (
    <Section id="offhours" eyebrow="// OFF HOURS" title="Not everything is shippable.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {offHours.map((hobby, i) => (
          <BlurFade key={hobby.name} inView delay={i * 0.05}>
            <div className="nb-card nb-press h-full p-[18px]" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
              <div className="mb-1.5 font-mono text-[11px] font-semibold text-olive">
                OFF HOURS · 0{i + 1}
              </div>
              <div className="font-display text-[19px] font-bold">{hobby.name}</div>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">{hobby.blurb}</p>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade inView>
        <div className="mt-6 flex flex-wrap gap-3">
          {achievements.map((achievement) => (
            <span key={achievement} className="nb-pill">
              {achievement}
            </span>
          ))}
        </div>
      </BlurFade>
    </Section>
  );
};

export default OffHours;
