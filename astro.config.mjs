// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dapperdino.github.io',
  base: '/awesome-website',
  integrations: [mdx(), sitemap()],

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Atkinson Hyperlegible',
          cssVariable: '--font-atkinson',
          weights: [400, 700],
          styles: ['normal'],
          fallbacks: ['sans-serif'],
      },
      {
          provider: fontProviders.google(),
          name: 'Charmonman',
          cssVariable: '--font-title',
          weights: [700],
          styles: ['normal'],
          fallbacks: ['serif'],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});