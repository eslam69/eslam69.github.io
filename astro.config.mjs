import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // site: 'https://eslam69.github.io',
  site: 'https://eslamkhaled.me',
  integrations: [tailwind(), mdx(), sitemap()],
});