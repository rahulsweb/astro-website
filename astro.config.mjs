import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vue from '@astrojs/vue';
// import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  base: "/evolvx/",
  site: "https://www.brandsbees.com/evolvx/",
  integrations: [vue(),tailwind(), mdx(), sitemap(), icon()],
  // output: 'server',
  // adapter: netlify(),
  // adapter: netlify(),
});

