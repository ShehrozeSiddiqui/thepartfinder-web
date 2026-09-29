import { Send } from "lucide-react";
import { Container } from "@/core/components/Container";

export function Newsletter() {
  return (
    <section className="bg-brand-navy-light text-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold">Newsletter</p>
          <p className="text-sm text-white/60">Get updates on new parts and special offers.</p>
        </div>
        <form className="flex w-full max-w-sm overflow-hidden rounded-md bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            disabled
            title="Coming in a future phase"
            className="w-full px-4 py-2.5 text-sm text-brand-ink outline-none disabled:bg-white"
          />
          <button
            type="submit"
            disabled
            title="Coming in a future phase"
            className="flex items-center gap-1.5 bg-brand-green px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-70"
          >
            <Send size={16} />
          </button>
        </form>
      </Container>
    </section>
  );
}
