// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{rel :'icon', type: 'image/png', href: '/logo-icon.png'}]
    }
  },
  devtools: {
    enabled: false
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: false
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@vueuse/nuxt"
  ],
  shadcn: {
    componentDir: "./components/ui",
    prefix: "S"
  }
})