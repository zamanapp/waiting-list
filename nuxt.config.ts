// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  imports: {
    dirs: ["composables/**"],
  },
  components: [{ path: "~/components", pathPrefix: false }],
});
