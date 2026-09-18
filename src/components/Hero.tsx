import { useEffect, useState } from "react";
import { content } from "../content";
import { heroVideoSrc } from "../theme";
import { EmailSignup } from "./EmailSignup";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";
import { StatsCard } from "./StatsCard";
import { TestimonialCard } from "./TestimonialCard";

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
    <section
      id="top"
      // 小屏文字是近黑色、lg 以上是白色，兜底底色跟着一起切换，
      // 这样即使视频没加载出来，文案也不会看不见。
      className="relative h-screen w-full overflow-hidden bg-neutral-200 lg:bg-black"
    >
      <video
        src={heroVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

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
            <EmailSignup />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5">
            <StatsCard />
            <TestimonialCard />
          </div>
        </main>
      </div>
    </section>
  );
}
