import { defineConfig, Preset } from "@vite-pwa/assets-generator/config";

const minimalPresetNoPadding: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    favicons: [[48, "favicon.ico"]],
    padding: 0,
  },
  maskable: {
    sizes: [512],
    padding: 0,
  },
  apple: {
    sizes: [180],
    padding: 0,
  },
};

export default defineConfig({
  headLinkOptions: {
    preset: "default",
  },
  preset: minimalPresetNoPadding,
  images: ["public/the-cat-button-logo.svg"],
});
