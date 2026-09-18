import { content } from "../../content";
import { Section } from "./Section";

export function Work() {
  const { work } = content;

  return (
    <Section
      id="work"
      index="02"
      label={work.label}
      title={work.title}
      intro={work.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {work.projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:from-white/[0.14] hover:to-white/[0.06]"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs text-white/40">{project.meta}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
