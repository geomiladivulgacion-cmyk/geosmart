import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://geosmart.es',
  // GitHub Pages serves the project temporarily from /geosmart/.
  // This will be removed once the custom domain is active.
  base: '/geosmart',
});
