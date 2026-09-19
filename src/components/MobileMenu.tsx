import type { NavLink } from "../content";

type MobileMenuProps = {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ links, open, onClose }: MobileMenuProps) {
  return (
    <>
      {/* 遮罩 */}
      <div
        onClick={onClose}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* 抽屉 */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="站点导航"
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-black/90 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pt-24">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              style={{ transitionDelay: open ? `${(index + 1) * 60}ms` : "0ms" }}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
