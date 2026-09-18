import { content } from "../../content";
import { Section } from "./Section";

export function About() {
  const { about } = content;

  return (
    <Section id="about" index="01" label={about.label} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-white/70"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="flex flex-col gap-4 self-start rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-6 backdrop-blur-lg">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs uppercase tracking-[0.15em] text-white/40">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-white">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
