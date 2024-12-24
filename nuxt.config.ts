import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: [
    "./assets/sass/main.scss",
    "swiper/swiper-bundle.css",
    "aos/dist/aos.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "ar",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/sass/abstracts/_mixins.scss";
          `,
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: [
    "@nuxt/icon",
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  plugins: [
    "@/plugins/axiosConfig.js",
    { src: "~/plugins/aos.client.js", mode: "client" },
  ],
});
