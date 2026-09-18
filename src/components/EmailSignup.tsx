import { useState } from "react";
import { content } from "../content";
import { primaryGradient } from "../theme";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: 接上真实表单服务（Formspree / 自建 API 等）
        setSent(true);
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
        {sent ? content.emailCta.sent : content.emailCta.button}
      </button>
    </form>
  );
}
