import { content } from "../../content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {content.brand}</p>
        <p>React + Tailwind 构建</p>
      </div>
    </footer>
  );
}
