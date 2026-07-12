// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add React, TanStack, Tailwind, Nitro, or tsconfig plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  // Important: disable Lovable's Nitro/Cloudflare build.
  // GitHub Pages only needs the static SPA output.
  nitro: false,

  vite: {
    base: isGitHubPages ? "/Tahsin-Shuborna/" : "/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    spa: {
      enabled: true,
    },
  },
});
