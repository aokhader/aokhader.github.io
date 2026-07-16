import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import { CardGlow } from "./ui/card-glow";
import { Section } from "./ui/section";
import { about, education } from "@/data";

const About = () => {
  return (
    <Section id="about" eyebrow="About" title="A little context">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
        <BlurFade inView className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </BlurFade>

        <BlurFade inView delay={0.1}>
          <div className="group relative overflow-hidden rounded-lg border border-line bg-surface p-6">
            <CardGlow />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
              Education
            </p>
            <div className="mt-5 flex items-start gap-4">
              <Image
                src={education.seal}
                alt=""
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-fg">{education.school}</p>
                <p className="mt-1 text-sm text-muted">{education.degree}</p>
                <p className="mt-1 font-mono text-xs text-faint">{education.dates}</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </Section>
  );
};

export default About;
