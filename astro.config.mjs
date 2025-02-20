// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

import vercel from "@astrojs/vercel"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://live.f1api.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [sitemap()],
})
