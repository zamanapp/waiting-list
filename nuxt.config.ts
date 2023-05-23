import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/devtools", "@nuxthq/ui"],

  imports: {
    dirs: ["composables/**"],
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        dir: "ltr",
        file: "en.json",
      },
      {
        name: "العربية",
        code: "ar",
        iso: "ar-SA",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },

  components: [{ path: "~/components", pathPrefix: false }],

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },

  $development: {
    devtools: {
      enabled: true,
    },
  },
});
