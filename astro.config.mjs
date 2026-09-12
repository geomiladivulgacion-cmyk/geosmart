import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://geosmart.es',
  // Temporary GitHub Pages project path. Remove this when the custom domain is active.
  base: '/geosmart',
  trailingSlash: 'always',
});
