import { defineConfig } from "astro/config";
import content from "@astrojs/content";

export default defineConfig({
  site: "https://kirori-1.github.io/bandweb",
  base: "/bandweb/", // 这个是重点！
  integrations: [content()],
});
