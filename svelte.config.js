import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),

  kit: {
    // Set the adapter to build for Node
    adapter: adapter({ out: 'build' }),
    
    // Set the base path for GitHub Pages
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/NihilityStudio.github.io' : '',
    },
  },
};

export default config;