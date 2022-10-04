// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // '@nuxtjs/auth-next'
  ],
  auth: {
    // Options
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws'
      }
    }
  }
})
