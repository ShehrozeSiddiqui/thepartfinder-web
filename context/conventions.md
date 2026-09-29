# Conventions

- **Components:** PascalCase filenames matching the export, one component per file
  (`ShopByCategory.tsx`). Feature components live in `features/<feature>/components/`.
- **Data files:** camelCase exports of typed arrays/objects in `features/<feature>/data/`, e.g.
  `export const categories: Category[] = [...]`. No inline literal arrays of copy inside JSX.
- **Constants:** `core/constants/site.ts` for site-wide facts (name, tagline, phone, email, social
  links), `core/constants/nav.ts` for header/footer nav link lists.
- **Styling:** Tailwind utility classes; shared design tokens (colors, radii) defined once via
  `@theme` in `src/app/globals.css` and referenced by token name (e.g. `bg-brand-navy`,
  `text-brand-green`), not raw hex codes per component.
- **Imports:** use the `@/*` alias (maps to `src/*`) rather than relative `../../..` chains.
- **No default exports for data/constants** — named exports only, so imports are explicit and
  greppable. Components may use default export per Next.js convention for pages only; feature
  components use named exports.
