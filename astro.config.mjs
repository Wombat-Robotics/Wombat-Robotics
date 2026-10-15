import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by .github/workflows/deploy.yml for GitHub Pages.
// Locally they're unset, so the site runs at http://localhost:4321/.
//   user site    (<user>/<user>.github.io): SITE_URL=https://<user>.github.io  BASE_PATH=/
//   project site (<user>/<repo>):           SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
// With a custom domain, set SITE_URL to it and BASE_PATH to /.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
});
