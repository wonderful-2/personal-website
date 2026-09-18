import { useState, type FormEvent } from "react";
import { content } from "../content";
import { primaryGradient } from "../theme";

type Status = "idle" | "sending" | "ok" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      // FormSubmit 不需要注册，提交会直接转发到 content.contact.email。
      // 字段名用 email 时，它会把回复地址设成访客填的邮箱，收到通知直接点回复即可。
      const response = await fetch(
        `https://formsubmit.co/ajax/${content.contact.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            _subject: content.emailCta.subject,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      const data: unknown = await response.json().catch(() => null);
      const ok =
        response.ok &&
        String((data as { success?: unknown } | null)?.success) === "true";

      setStatus(ok ? "ok" : "error");
      if (ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form
        onSubmit={submit}
        className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={content.emailCta.placeholder}
          disabled={status === "sending"}
          className="w-full rounded-full bg-white px-5 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none disabled:opacity-70 sm:w-64 sm:py-2.5"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          style={{ background: primaryGradient }}
          className="rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70 sm:py-2.5"
        >
          {status === "sending"
            ? content.emailCta.sending
            : content.emailCta.button}
        </button>
      </form>

      {status === "ok" && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#010101]/70 lg:text-white/70">
          {content.emailCta.success}
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#010101]/70 lg:text-white/70">
          {content.emailCta.error}{" "}
          <a
            href={`mailto:${content.contact.email}`}
            className="whitespace-nowrap underline underline-offset-4"
          >
            {content.contact.email}
          </a>
        </p>
      )}
    </>
  );
}
