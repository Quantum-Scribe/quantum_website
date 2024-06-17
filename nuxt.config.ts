// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@vueuse/nuxt"
  ],
  eslint: {
    config: { stylistic: false, standalone: false },
  },
  shadcn: {
    prefix: 'S',
    componentDir: './components/ui'
  }
})