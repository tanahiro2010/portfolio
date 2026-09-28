// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tanahiro2010.com",
  integrations: [
    react(),
    sitemap({
      // 小説ダウンローダーは直リンクを知っている人だけがアクセスする隠しページのため除外
      filter: (page) => !page.includes("/works/syosetsu"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
