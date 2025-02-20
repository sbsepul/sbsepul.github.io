import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';


const site = 'https://sbsepul.github.io';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  site: site,
});