import { useEffect, useState } from "react";
import { content } from "../content";
import { primaryGradient } from "../theme";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";
import { StatsCard } from "./StatsCard";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 菜单展开时锁定页面滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    // 背景视频由 Backdrop 统一提供，这里只负责首屏内容，视频首屏同样是满屏铺满
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col">
        <Nav
          links={content.nav}
          ctaLabel={content.primaryCta}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
        />

        <MobileMenu
          links={content.nav}
          ctaLabel={content.primaryCta}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />

        <main className="mt-auto flex flex-col gap-6 px-5 pb-8 sm:gap-8 sm:px-8 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:pb-16">
          <div>
            <h1 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-tight text-[#010101] sm:text-4xl lg:text-[3.5rem] lg:text-white">
              {content.headline}
            </h1>

            <a
              href="#contact"
              style={{ background: primaryGradient }}
              className="mt-6 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:mt-8"
            >
              {content.heroCta}
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5">
            <StatsCard />
          </div>
        </main>
      </div>
    </section>
  );
}
