// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-icon',
  ],
  pinia: {
    autoImports: [
      "defineStore"
    ]
  },
  image: {
    screens: {
      'sm':	640,
      'md':	768,
      'lg':	1024,
      'xl':	1280
    }
  },
  buildModules: [
    'floating-vue/nuxt',
  ],
  ssr: false
})
