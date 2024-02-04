// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'floating-vue/nuxt'
  ],
  anime: {
    provide: false,
    composables: true
  },
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
  ]
})
