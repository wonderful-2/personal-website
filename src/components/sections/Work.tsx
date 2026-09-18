import { content } from "../../content";
import { Section } from "./Section";

export function Work() {
  const { work } = content;

  return (
    <Section id="work" label={work.label} title={work.title} intro={work.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {work.projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors hover:border-white/20 hover:bg-white/10"
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

