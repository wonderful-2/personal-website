import { useState } from "react";
import { content } from "../content";
import { primaryGradient } from "../theme";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [handoff, setHandoff] = useState(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: 接上真实表单服务（Formspree / 自建 API 等）后，这里改回真正的提交。
          // 在那之前绝不能显示“已收到”——访客会以为留言送到了，其实没有。
          setHandoff(true);
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={content.emailCta.placeholder}
          className="w-full rounded-full bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none sm:w-64 sm:py-2.5"
        />
        <button
          type="submit"
          style={{ background: primaryGradient }}
          className="rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:py-2.5"
        >
          {content.emailCta.button}
        </button>
      </form>

      {handoff && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#010101]/70 lg:text-white/70">
          {content.emailCta.handoff}{" "}
          <a
            href={`mailto:${content.contact.email}`}
            className="underline underline-offset-4"
          >
            {content.contact.email}
          </a>
        </p>
      )}
    </>
  );
}
