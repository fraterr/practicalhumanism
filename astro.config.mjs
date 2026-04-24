// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://fraterr.github.io/practicalhumanism/',
	base: '/practicalhumanism',
	integrations: [mdx(), sitemap()],
});
