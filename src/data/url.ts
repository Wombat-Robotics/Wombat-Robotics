// Prefixes a site path with the configured `base` (e.g. /my-repo on GitHub Pages).
// Use for every internal link and for files in /public.
export const url = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return base + (path.startsWith('/') ? path : `/${path}`);
};
