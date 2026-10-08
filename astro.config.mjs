// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fullscopemetals.com',
  compressHTML: true,
  vite: {
    build: {
      // Astro 7 builds CSS for `esnext`, which strips the -webkit- prefixes
      // older Safari needs (e.g. -webkit-backdrop-filter). Target the same
      // browsers as Vite's own "baseline-widely-available" default.
      cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'],
    },
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
