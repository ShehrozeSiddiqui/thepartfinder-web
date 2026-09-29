import { Container } from "@/core/components/Container";
import { LinkButton } from "@/core/components/Button";
import { routes } from "@/core/constants/routes";

export function CtaBanner() {
  return (
    <section className="bg-brand-green">
      <Container className="flex flex-col items-center gap-4 py-14 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-bold">Can&apos;t find your part?</h2>
          <p className="text-white/90">
            Tell us what you need — our team sources hard-to-find parts through our supplier network.
          </p>
        </div>
        <LinkButton href={routes.contact} variant="outline" className="border-white text-white">
          Submit a Request
        </LinkButton>
      </Container>
    </section>
  );
}
