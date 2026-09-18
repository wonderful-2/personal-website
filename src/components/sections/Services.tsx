import { content } from "../../content";
import { Section } from "./Section";

export function Services() {
  const { services } = content;

  return (
    <Section
      id="services"
      label={services.label}
      title={services.title}
      intro={services.intro}
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {services.items.map((item) => (
          <div key={item.title} className="bg-[#0a0a0a] p-6 sm:p-7">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

