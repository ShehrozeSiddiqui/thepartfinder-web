import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { Button } from "@/core/components/Button";
import { site } from "@/core/constants/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.fullName}`,
  description: `Get in touch with ${site.fullName} — send us your part request or question.`,
};

const inputClasses =
  "w-full rounded-md border border-brand-border px-3 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-green";

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-12 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Can't find your part or have a question? Send us a message and our team will follow up."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form className="flex flex-col gap-4 rounded-xl border border-brand-border p-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Your Name" className={inputClasses} disabled />
            <input type="email" placeholder="Email Address" className={inputClasses} disabled />
          </div>
          <input type="text" placeholder="Subject" className={inputClasses} disabled />
          <textarea
            placeholder="Type your inquiry here..."
            rows={5}
            className={inputClasses}
            disabled
          />
          <Button type="submit" disabled title="Contact form goes live with the ordering system in Phase 3" className="self-start">
            Send Message
          </Button>
          <p className="text-xs text-brand-muted">
            This form will be connected once the request/ordering system (Phase 3) is built. For
            now, reach us directly using the details on the right.
          </p>
        </form>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 text-brand-green" />
            <div>
              <p className="font-semibold text-brand-ink">Phone</p>
              <p className="text-sm text-brand-muted">{site.contact.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="mt-0.5 text-brand-green" />
            <div>
              <p className="font-semibold text-brand-ink">Email</p>
              <p className="text-sm text-brand-muted">{site.contact.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-brand-green" />
            <div>
              <p className="font-semibold text-brand-ink">Address</p>
              <p className="text-sm text-brand-muted">{site.contact.address}</p>
              <p className="text-sm text-brand-muted">{site.contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
