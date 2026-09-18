import type { ReactNode } from "react";
import { silkscreen } from "../../theme";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-6 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* 细发丝分隔线，避免大块纯色拼在一起 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3">
          {/* 编号沿用首屏数据卡片的那套像素字体 */}
          <span
            style={{ fontFamily: silkscreen }}
            className="text-xs leading-none text-white/35"
          >
            {index}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {label}
          </span>
        </div>
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
