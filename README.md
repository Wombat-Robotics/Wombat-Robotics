# Site template

Astro + Tailwind CSS 3. Requires Node 18.20.8+ or 20.3+.

With Nix, `nix-shell` gives you Node 22 and runs `npm install` on first use.
Otherwise install Node yourself and run:

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
```

## Where things live

| To change...                  | Edit                                   |
| ----------------------------- | -------------------------------------- |
| Brand name, email, reply time | `src/data/site.ts`                     |
| Menu links                    | `src/data/nav.ts`                      |
| Header / footer               | `src/components/Header.astro`, `Footer.astro` |
| Page content                  | `src/pages/*.astro`                    |
| `<head>`, fonts, page shell   | `src/layouts/BaseLayout.astro`         |
| Custom CSS                    | `src/styles/global.css`                |
| Tailwind theme (fonts, colors)| `tailwind.config.mjs`                  |

## Adding a page

1. Create `src/pages/pricing.astro` (copy `about.astro` as a starting point). It is served at `/pricing/`.
2. Add `{ label: 'Pricing', href: '/pricing/' }` to `src/data/nav.ts`.

## Deploying

### GitHub Pages

1. Push the whole project (not `dist/`) to a GitHub repo on the `main` branch.
2. In the repo, go to Settings > Pages and set Source to **GitHub Actions**.
3. Push again, or run the workflow from the Actions tab. The site appears at `https://<user>.github.io/<repo>/`.

`.github/workflows/deploy.yml` builds the site and sets the base path automatically. For a custom domain, set `SITE_URL` to your domain and `BASE_PATH` to `/` in that file.

### Other static hosts

`npm run build` outputs plain static files in `dist/`. Upload that folder to Netlify, Vercel, Cloudflare Pages, S3, etc.

Always write internal links with `url('/path/')` from `src/data/url.ts` so they keep working under a base path.
