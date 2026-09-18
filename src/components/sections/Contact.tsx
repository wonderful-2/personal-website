import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { content } from "../../content";
import { EmailSignup } from "../EmailSignup";
import { Section } from "./Section";

export function Contact() {
  const { contact } = content;
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(contact.wechat);
      setCopied(true);
    } catch {
      // 非安全上下文（http 部署）下 clipboard API 不可用，退回老办法
      const field = document.createElement("textarea");
      field.value = contact.wechat;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      if (ok) setCopied(true);
    }
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      index="04"
      label={contact.label}
      title={contact.title}
      intro={contact.intro}
    >
      <div className="flex flex-col gap-8">
        <EmailSignup />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-5">
            <span className="w-10 text-xs uppercase tracking-[0.15em] text-white/40">
              邮箱
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="w-fit text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <span className="w-10 shrink-0 text-xs uppercase tracking-[0.15em] text-white/40 sm:pt-1">
              微信
            </span>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <img
                src="/wechat-qr.jpg"
                alt="耿通的微信二维码"
                width={704}
                height={704}
                className="h-32 w-32 shrink-0 rounded-xl object-contain ring-1 ring-white/10 sm:h-36 sm:w-36"
              />

              <div className="flex flex-col gap-2">
                <p className="text-sm leading-relaxed text-white/60">
                  扫码加我微信，或者直接复制微信号
                </p>
                <button
                  type="button"
                  onClick={copyWechat}
                  aria-label="复制微信号"
                  className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-lg transition-colors hover:bg-white/10"
                >
                  <span className="select-all font-medium">
                    {contact.wechat}
                  </span>
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-white/60" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-white/40" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
