import { BlurFade } from "./ui/blur-fade";
import { Section } from "./ui/section";
import { earlierProjects, featuredProjects } from "@/data";

const Projects = () => {
  return (
    <Section id="projects" eyebrow="// FEATURED PROJECTS" title="The big ones.">
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <BlurFade key={project.name} inView delay={(i % 2) * 0.08}>
            <div className="nb-card nb-card-lg flex h-full flex-col overflow-hidden">
              {/* Placeholder art panel — swap for a real screenshot in public/ */}
              <div
                className="flex h-[220px] items-center justify-center border-b-2 border-ink bg-peach"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(34,28,20,0.05) 0 12px, transparent 12px 24px)",
                }}
              >
                <span className="font-display text-3xl font-extrabold text-orange-ink/70">
                  {project.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-6">
                <div className="font-mono text-[11.5px] font-semibold text-olive">
                  {project.meta}
                </div>
                <h3 className="font-display text-[28px] font-bold">{project.name}</h3>
                <p className="text-[14.5px] leading-[1.6]">{project.desc}</p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="nb-tag">
                      {tag}
                    </span>
                  ))}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-mono text-[11.5px] font-semibold"
                    >
                      {project.codeLabel ?? "CODE ↗"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade inView>
        <div className="nb-card mt-6 px-6 py-2" style={{ boxShadow: "4px 4px 0 var(--color-ink)" }}>
          <div className="py-3 font-mono text-[11.5px] font-semibold text-faint">
            EARLIER PROJECTS
          </div>
          {earlierProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1 border-t border-dashed border-rule py-2.5"
            >
              <span className="min-w-[210px] text-[14.5px] font-semibold">{project.name}</span>
              <span className="flex-1 text-[13.5px] text-muted">{project.desc}</span>
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs"
                >
                  code ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </BlurFade>
    </Section>
  );
};

export default Projects;
