import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BlurFade } from "./ui/blur-fade";
import { NodeGlyph } from "./ui/section";
import { site } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-line py-20 md:py-28">
      <BlurFade inView>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          <NodeGlyph />
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Let&apos;s build something{" "}
          <em className="font-serif italic text-accent">together</em>.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          I&apos;m open to software engineering and machine learning
          opportunities. The fastest way to reach me:
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block text-xl font-medium text-fg underline
          decoration-accent decoration-2 underline-offset-8 transition-colors
          hover:text-accent sm:text-2xl"
        >
          {site.email}
        </a>
      </BlurFade>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name} · {site.motto}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md border
            border-line text-muted transition-colors hover:border-faint hover:text-fg"
          >
            <FiGithub />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md border
            border-line text-muted transition-colors hover:border-faint hover:text-fg"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
