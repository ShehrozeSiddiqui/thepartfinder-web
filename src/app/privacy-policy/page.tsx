import type { Metadata } from "next";
import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { site } from "@/core/constants/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.fullName}`,
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="flex flex-col gap-6 py-16">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="max-w-2xl text-brand-muted">
        <p>
          This page is a placeholder. {site.fullName} does not yet collect customer accounts,
          orders or payment data — that functionality is introduced in later phases of this
          project. A full privacy policy covering data collection, storage and customer rights
          will be published here before any customer account or checkout functionality goes live.
        </p>
      </div>
    </Container>
  );
}
