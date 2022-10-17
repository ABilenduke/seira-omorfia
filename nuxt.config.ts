import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'bulma',
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: [
    // '@nuxtjs/auth-next'
    '@pinia/nuxt',
  ],
  auth: {
    // Options
  },
  vite: {
    server: {
      host: "0.0.0.0",
      hmr: {
        // protocol: 'ws'
      }
    }
  }
})
