import { FiArrowUpRight } from "react-icons/fi";
import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { experiences } from "@/data";

const Experience = () => {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative ml-1.5 space-y-12 border-l border-line pl-8">
        {experiences.map((role, i) => (
          <li key={`${role.company}-${role.title}`} className="relative">
            {/* Node on the timeline edge — current role gets the gold node */}
            <span
              aria-hidden="true"
              className={`absolute -left-[38.5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                role.current ? "bg-accent" : "bg-edge"
              }`}
            />
            <BlurFade inView delay={i * 0.05}>
              <p className="font-mono text-xs text-faint">
                {role.dates}
                {role.location && ` · ${role.location}`}
              </p>
              <h3 className="mt-2 text-lg font-medium text-fg">
                {role.title}
                <span className="text-muted">
                  {" · "}
                  {role.link ? (
                    <a
                      href={role.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-baseline gap-1 transition-colors hover:text-accent"
                    >
                      {role.company}
                      <FiArrowUpRight aria-hidden="true" className="self-center text-xs" />
                    </a>
                  ) : (
                    role.company
                  )}
                </span>
              </h3>
              <ul className="mt-3 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)} className="leading-relaxed text-muted">
                    {bullet}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
