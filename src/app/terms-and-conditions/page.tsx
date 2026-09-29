import type { Metadata } from "next";
import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { site } from "@/core/constants/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.fullName}`,
};

export default function TermsAndConditionsPage() {
  return (
    <Container className="flex flex-col gap-6 py-16">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="max-w-2xl text-brand-muted">
        <p>
          This page is a placeholder. Full terms covering orders, payments, shipping and returns
          will be published here alongside the ordering system introduced in a later phase of this
          project.
        </p>
      </div>
    </Container>
  );
}
