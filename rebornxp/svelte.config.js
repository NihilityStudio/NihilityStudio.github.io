import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter(),
    paths: {
      // Set the base path relative to the root of your GitHub Pages URL
      base: "/rebornxp", // No trailing slash
    },
  },
};
