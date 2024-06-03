// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-icon",
    "@nuxt/image"
  ],
  eslint: {
    config: { stylistic: false, standalone: false },
  },
})