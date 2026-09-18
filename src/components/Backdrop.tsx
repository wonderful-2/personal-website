import { useEffect, useState } from "react";
import { heroVideoSrc } from "../theme";

/// 全站共用的一层背景：首屏那段视频固定在视口里，
/// 往下滚动时用一层深色薄纱把画面压暗，让下面的板块浮在同一段影像上。
export function Backdrop() {
  const [dimmed, setDimmed] = useState(false);

  useEffect(() => {
    let frame = 0;

    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setDimmed(window.scrollY > window.innerHeight * 0.45);
      });
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      // 视频没加载出来时的兜底底色：跟着小屏近黑字 / 大屏白字的配色一起切换
      className="fixed inset-0 z-0 bg-neutral-200 lg:bg-black"
    >
      <video
        src={heroVideoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-[#0a0a0a] transition-opacity duration-700 ease-out"
        style={{ opacity: dimmed ? 0.85 : 0 }}
      />
    </div>
  );
}

