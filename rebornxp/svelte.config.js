import preprocess from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic({
      // Default output folder for static sites
      pages: "build",
      assets: "build",
      fallback: null, // If you're using single-page app routing, set this to '200.html'
    }),

    // Set the base path to match your GitHub Pages repo
    paths: {
      base: "/rebornxp", // Change this to match your repo name
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
