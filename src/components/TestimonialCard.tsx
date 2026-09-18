import { content } from "../content";

export function TestimonialCard() {
  const { testimonial } = content;

  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-lg sm:w-64 sm:p-6">
      <div className="mb-3 flex items-center gap-2 sm:mb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-xs font-bold text-white">
          {testimonial.companyLogoLetter}
        </div>
        <span className="text-sm font-semibold text-[#010101] lg:text-white">
          {testimonial.company}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-[#010101]/80 lg:text-white/80">
        {testimonial.quote}
      </p>

      <div className="mt-4 flex items-center gap-3 sm:mt-5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-9 w-9 rounded-full bg-white/20 object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-[#010101] lg:text-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-[#010101]/60 lg:text-white/60">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

