import { Menu, X } from "lucide-react";
import { content, type NavLink } from "../content";
import { LogoMark } from "./Logo";
import SpecularButton from "./SpecularButton";

type NavProps = {
  links: NavLink[];
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Nav({ links, menuOpen, onToggleMenu }: NavProps) {
  return (
    <nav className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12">
      <a href="#top" className="flex items-center gap-2">
        <LogoMark className="text-[#010101] lg:text-white" />
        <span className="text-lg font-semibold text-[#010101] lg:text-white">
          {content.brand}
        </span>
      </a>

      {/* 桌面端：玻璃胶囊导航 + 独立 CTA 胶囊 */}
      <div className="hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-1.5 backdrop-blur-lg">
          {links.map((link) => (
            <SpecularButton
              key={link.label}
              href={link.href}
              size="sm"
              radius={9999}
              className="specular-button--nav"
              lineColor="#ffffff"
              baseColor="#ffffff"
              intensity={1.4}
              shineSize={16}
              shineFade={45}
              thickness={1}
              speed={0.25}
              proximity={240}
            >
              {link.label}
            </SpecularButton>
          ))}
        </div>
      </div>

      {/* 移动端汉堡按钮 */}
      <button
        type="button"
        onClick={onToggleMenu}
        aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        aria-expanded={menuOpen}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg transition-colors hover:bg-white/20 md:hidden"
      >
        <Menu
          className={`absolute h-5 w-5 text-[#010101] transition-all duration-300 lg:text-white ${
            menuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <X
          className={`absolute h-5 w-5 text-[#010101] transition-all duration-300 lg:text-white ${
            menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </button>
    </nav>
  );
}
