// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fullscopemetals.com',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
