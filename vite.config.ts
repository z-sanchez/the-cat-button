import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      devOptions: {
        enabled: true, // Enable in development
      },

      manifest: {
        name: "The Cat Button",
        short_name: "The Cat Button",
        description:
          "Discover unique cats, each with their own quirky backstories! From astronaut kitties to medieval knight cats, click our magical Cat Button to meet your next feline friend",
        start_url: "/",
        display: "standalone",
        theme_color: "#A28ADF",
        background_color: "#EDEDED",
        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/the-cat-button-screenshot-wide.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/the-cat-button-screenshot-wide.png",
            sizes: "1920x1080",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
    svgr(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
