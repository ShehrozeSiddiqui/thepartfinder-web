import type { Metadata } from "next";
import { Container } from "@/core/components/Container";
import { searchByDescription } from "@/features/parts/lib/parts";
import { DescriptionSearch } from "@/features/parts/components/DescriptionSearch";
import { SearchResults } from "@/features/parts/components/SearchResults";

export const metadata: Metadata = {
  title: "Search by Description | The Pathfinder Auto Parts Sales",
  description: "Describe the part you need, or upload a photo, and we'll find it.",
};

export default async function DescriptionSearchPage({ searchParams }: PageProps<"/search/description">) {
  const { q, tab } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const initialTab = tab === "photo" ? "photo" : "description";

  return (
    <Container className="flex max-w-3xl flex-col gap-6 py-10">
      <h1 className="text-3xl font-extrabold uppercase">Search by description or photo</h1>
      <DescriptionSearch initialQuery={query} initialTab={initialTab} />
      <SearchResults query={query} results={searchByDescription(query)} />
    </Container>
  );
}
