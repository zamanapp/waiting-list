// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@nuxt/devtools"],

  imports: {
    dirs: ["composables/**"],
  },

  components: [{ path: "~/components", pathPrefix: false }],

  $development: {
    devtools: {
      enabled: true,
    },
  },
});
