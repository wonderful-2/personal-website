import { content } from "../../content";

export function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto mb-8 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {content.brand}</p>
        <p>郑州 · 车辆工程在读 · 方向 FDE</p>
      </div>
    </footer>
  );
}
