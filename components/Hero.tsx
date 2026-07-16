import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { BlurFade } from "./ui/blur-fade";
import { GraphBg } from "./ui/graph-bg";
import { Spotlight } from "./ui/spotlight";
import { TypedLine } from "./ui/typed-line";
import { WordRotate } from "./ui/word-rotate";
import { site } from "@/data";

const Hero = () => {
  return (
    <div className="relative flex min-h-svh items-center pt-16">
      <Spotlight id="spot-gold" className="-left-10 -top-40 md:-left-32 md:-top-20" fill="#e7b44c" />
      <Spotlight id="spot-navy" className="left-[45%] top-10 h-[120%]" fill="#3d5a8f" />
      <GraphBg />

      <div className="relative z-10 max-w-3xl pb-16">
        <BlurFade delay={0.05}>
          <TypedLine
            text={site.motto}
            className="font-mono text-xs tracking-wide text-faint sm:text-sm"
          />
        </BlurFade>

        <BlurFade delay={0.15}>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl">
            {site.name}
          </h1>
        </BlurFade>

        <BlurFade delay={0.25}>
          <p className="mt-6 text-2xl leading-snug text-fg/90 sm:text-3xl">
            I build software that makes{" "}
            <WordRotate
              phrases={[
                <span key="algorithms">
                  <em className="font-serif italic text-accent">algorithms</em> visible.
                </span>,
                <span key="models">
                  <em className="font-serif italic text-accent">models</em> useful.
                </span>,
                <span key="ideas">
                  <em className="font-serif italic text-accent">ideas</em> real.
                </span>,
              ]}
            />
          </p>
        </BlurFade>

        <BlurFade delay={0.35}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.subhead}
          </p>
        </BlurFade>

        <BlurFade delay={0.45}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line
              bg-surface/60 px-4 py-2 text-sm text-fg transition-colors hover:border-faint"
            >
              <FiGithub aria-hidden="true" />
              GitHub
              <FiArrowUpRight aria-hidden="true" className="text-faint" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line
              bg-surface/60 px-4 py-2 text-sm text-fg transition-colors hover:border-faint"
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" className="text-faint" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="px-1 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.55}>
          <p className="mt-6 font-mono text-xs text-faint">{site.location}</p>
        </BlurFade>
      </div>
    </div>
  );
};

export default Hero;
