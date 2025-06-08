// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://apm-2025-1.github.io',
  base: 'Mep_Mep_Raiders_web',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs()
  ]
});
