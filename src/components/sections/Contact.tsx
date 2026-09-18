import { content } from "../../content";
import { EmailSignup } from "../EmailSignup";
import { Section } from "./Section";

export function Contact() {
  const { contact } = content;

  return (
    <Section
      id="contact"
      index="04"
      label={contact.label}
      title={contact.title}
      intro={contact.intro}
    >
      <div className="flex flex-col gap-6">
        <EmailSignup />

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${contact.email}`}
            className="w-fit text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            {contact.email}
          </a>
          <p className="text-xs text-white/40">{contact.note}</p>
        </div>
      </div>
    </Section>
  );
}
