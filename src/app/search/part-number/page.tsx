import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { searchByPartNumber } from "@/features/parts/lib/parts";
import { SearchResults } from "@/features/parts/components/SearchResults";

export const metadata: Metadata = {
  title: "Search by Part Number | The Pathfinder Auto Parts Sales",
  description: "Look up a part by OEM or manufacturer number, including cross references.",
};

export default async function PartNumberSearchPage({ searchParams }: PageProps<"/search/part-number">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";

  return (
    <Container className="flex max-w-4xl flex-col gap-6 py-10">
      <header>
        <h1 className="text-3xl font-extrabold uppercase">Search by part number</h1>
        <p className="text-sm text-brand-muted">
          Enter an OEM or manufacturer number. Cross-referenced numbers are matched too.
        </p>
      </header>
      <form action={routes.searchPartNumber} className="flex overflow-hidden rounded-md border border-brand-border bg-white">
        <input
          name="q"
          defaultValue={query}
          placeholder="e.g. 34110-XA010"
          className="w-full px-4 py-3 text-sm outline-none"
        />
        <button type="submit" className="flex items-center gap-2 bg-brand-green px-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark">
          <Search size={16} /> Search
        </button>
      </form>
      <SearchResults query={query} results={searchByPartNumber(query)} />
    </Container>
  );
}
