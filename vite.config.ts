// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind, Nitro, or other included plugins again.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  vite: {
    // GitHub Pages URL:
    // username.github.io/tahsin-shuborna/
    base: isGitHubPages ? "/tahsin-shuborna/" : "/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    // GitHub Pages only supports static files,
    // so the pages must be generated during build.
    ...(isGitHubPages
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            autoStaticPathsDiscovery: true,
          },
        }
      : {}),
  },
});
