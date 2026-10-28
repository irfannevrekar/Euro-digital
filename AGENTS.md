# AGENTS.md

## Project overview

EuroDigital is a React 19 + TypeScript marketing site built with Vite, React Router 7, Tailwind CSS 4, Framer Motion, and Lucide React.

## Development commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

The development server runs at `http://localhost:5173`.

## Source layout

- `src/pages/` contains route-level screens.
- `src/components/` contains shared UI and site-wide patterns.
- `src/layouts/` contains shared route shells such as the header/footer layout.
- `src/data/` contains static content and service definitions.
- `src/constants/booking.ts` owns booking modal events and booking URLs.
- `src/index.css` owns global tokens, base styles, and shared pricing styles.
- `public/` contains logos, background images, service images, and other static assets.
- `api/` contains the contact-form server endpoint.

## UI conventions

- Reuse the existing color tokens in `src/index.css`: `--primary-navy`, `--primary-blue`, `--primary-green`, and the text/background tokens.
- Prefer Tailwind utility classes for component-level styling. Add global CSS only for reusable patterns or tokens.
- Keep shared visual changes in shared components. `Header.tsx`, `Footer.tsx`, `Hero.tsx`, and `Sections.tsx` affect multiple routes.
- Use Lucide React for interface icons; do not hand-draw SVG icons.
- Preserve responsive behavior at mobile, tablet, and desktop widths.
- Keep keyboard focus states and accessible labels on interactive controls.
- Respect `prefers-reduced-motion` when adding animations.
- Keep CTAs and booking actions wired to the existing booking helpers/modal flow.

## Routing and content

- Add new routes in `src/App.tsx` and update `react-router.config.ts` when the route should be prerendered.
- Use `ServicesLayout` for service and solution routes and `ProductsLayout` for product routes.
- Keep page-specific data near the page unless it is shared across multiple screens; shared service metadata belongs in `src/data/solutions.ts`.
- Preserve existing external URLs and Bunny Stream video IDs unless the task explicitly changes them.

## Verification

After UI changes:

1. Run `npm run build`.
2. Run ESLint on changed files, for example `npx eslint src/components/Header.tsx`.
3. Check the affected route at desktop and mobile widths.
4. Verify dropdowns, mobile navigation, modals, video controls, and primary CTAs still work.

The generated `.react-router/` directory may contain lint errors from generated types. Do not manually edit generated files; report those errors separately from lint results for changed source files.

## Change safety

- Preserve unrelated user changes in the working tree.
- Do not commit secrets or real credentials. Environment variables belong in local/Vercel configuration, not source or Markdown.
- Do not remove assets or routes without checking their references first.
