import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, label, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-6 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          {label}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            {intro}
          </p>
        )}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

