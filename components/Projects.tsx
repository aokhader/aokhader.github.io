import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { BlurFade } from "./ui/blur-fade";
import { CardGlow } from "./ui/card-glow";
import { Section } from "./ui/section";
import { projects, type Project } from "@/data";

function CardShell({
  project,
  className,
  children,
}: {
  project: Project;
  className: string;
  children: React.ReactNode;
}) {
  const href = project.repo ?? project.live;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <div className={className}>{children}</div>;
}

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-faint";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="space-y-6">
        {featured.map((project, i) => (
          <BlurFade key={project.title} inView delay={i * 0.08}>
            <CardShell project={project} className={`${cardBase} p-7 md:p-8`}>
              <CardGlow />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="text-xl font-medium text-fg">{project.title}</h3>
                {project.award && (
                  <span
                    className="rounded-full border border-accent/40 bg-accent/10 px-3
                    py-0.5 font-mono text-xs text-accent"
                  >
                    {project.award}
                  </span>
                )}
                {(project.repo ?? project.live) && (
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="ml-auto shrink-0 text-faint transition-colors group-hover:text-accent"
                  />
                )}
              </div>
              {project.dates && (
                <p className="mt-2 font-mono text-xs text-faint">{project.dates}</p>
              )}
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-5 font-mono text-xs text-faint">
                {project.tech.join(" · ")}
              </p>
            </CardShell>
          </BlurFade>
        ))}

        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((project, i) => (
            <BlurFade key={project.title} inView delay={(i % 2) * 0.08}>
              <CardShell project={project} className={cardBase}>
                <CardGlow />
                {project.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500
                      group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-center justify-between gap-2 text-lg font-medium text-fg">
                    {project.title}
                    {(project.repo ?? project.live) && (
                      <FiArrowUpRight
                        aria-hidden="true"
                        className="shrink-0 text-faint transition-colors group-hover:text-accent"
                      />
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-5 font-mono text-xs text-faint">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              </CardShell>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
