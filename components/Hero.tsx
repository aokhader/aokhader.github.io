import { BlurFade } from "./ui/blur-fade";
import { CopyEmail } from "./ui/copy-email";
import { Yoyo } from "./ui/yoyo";
import { site } from "@/data";

const Hero = () => {
  return (
    <header className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 pb-16 pt-12 sm:px-14 md:grid-cols-[1.25fr_1fr]">
      <BlurFade>
        <div className="mb-4 font-mono text-[13px] text-olive">{site.heroEyebrow}</div>

        <h1 className="mb-[18px] font-display text-[52px] font-extrabold leading-[0.98] tracking-[-0.02em] sm:text-[64px] md:text-[76px]">
          Abdulaziz
          <br />
          Khader
        </h1>

        <p className="mb-3.5 max-w-[520px] text-[19px] leading-[1.55]">
          ML engineer who ships the whole stack — from enterprise AIOps agents at
          BMC down to a 360M-parameter LLM answering questions{" "}
          <em>offline on an Arduino</em>.
        </p>

        <div className="mb-6 font-mono text-[13px] leading-[2] text-muted">
          ROLE: <span className="font-semibold text-ink">{site.meta.role}</span>
          <br />
          EDUCATION: <span className="font-semibold text-ink">{site.meta.education}</span>
          <br />
          STATUS: <span className="font-semibold text-olive">{site.meta.status}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={`mailto:${site.email}`}
            className="nb-btn nb-btn-lg bg-orange px-5 py-3 text-[14px] text-cream no-underline"
          >
            {site.email}
          </a>
          <CopyEmail className="nb-btn nb-press bg-card px-4 py-[11px] text-[13px] text-ink" />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn nb-press bg-card px-4 py-[11px] text-[13px] text-ink no-underline"
          >
            GITHUB ↗
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn nb-press bg-card px-4 py-[11px] text-[13px] text-ink no-underline"
          >
            LINKEDIN ↗
          </a>
        </div>
      </BlurFade>

      <div className="justify-self-center">
        <Yoyo />
      </div>
    </header>
  );
};

export default Hero;
