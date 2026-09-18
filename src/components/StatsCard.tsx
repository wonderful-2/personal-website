import { content } from "../content";
import { silkscreen } from "../theme";

export function StatsCard() {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-5 backdrop-blur-lg sm:w-64 sm:p-6">
      <p
        style={{ fontFamily: silkscreen }}
        className="text-3xl font-normal tracking-tight text-[#010101] sm:text-4xl lg:text-white"
      >
        {content.stats.value}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#010101]/70 sm:mt-4 lg:text-white/70">
        {content.stats.body}
      </p>
    </div>
  );
}

