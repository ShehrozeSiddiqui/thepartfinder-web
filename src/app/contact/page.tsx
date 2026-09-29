import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/core/components/Container";
import { site } from "@/core/constants/site";
import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact Us | ${site.fullName}`,
  description: `Get in touch with ${site.fullName} — send us your part request or question.`,
};

const details = [
  { icon: Phone, label: "Phone / WhatsApp", lines: [site.contact.phone] },
  { icon: Mail, label: "Email", lines: [site.contact.email] },
  { icon: MapPin, label: "Address", lines: [site.contact.address] },
  { icon: Clock, label: "Business hours", lines: [site.contact.hours] },
];

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <header>
        <h1 className="text-3xl font-extrabold uppercase">Contact us</h1>
        <p className="text-sm text-brand-muted">We&apos;re here to help you find the right parts.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-5 self-start rounded-md border border-brand-border bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest">Get in touch</p>
          {details.map(({ icon: Icon, label, lines }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon size={18} className="mt-0.5 text-brand-green" />
              <div>
                <p className="text-sm font-bold">{label}</p>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-brand-muted">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </aside>
        <ContactForm />
      </div>
    </Container>
  );
}
