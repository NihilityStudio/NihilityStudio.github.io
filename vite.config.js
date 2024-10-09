import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    // Uncomment the line below if you need SSL during development
    // basicSsl()
  ],
  server: {
    host: true,
    // https: true, // Uncomment this to enable HTTPS in development
    port: 3000,
  },
  build: {
    outDir: "build", // This specifies the output directory
  },
};

export default config;
