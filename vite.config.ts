// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add React, TanStack, Tailwind, Nitro, or tsconfig plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/Tahsin-Shuborna/" : "/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    // Generate a static client-side app for GitHub Pages
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
        crawlLinks: false,
        retryCount: 0,
      },
    },
  },
});
