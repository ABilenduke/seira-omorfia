import { useLocalStorage } from '@vueuse/core'

const token = useLocalStorage('pinia/auth/login', '')

export default defineNuxtRouteMiddleware((to, from) => {
  if (token.value) {
    return navigateTo('/user')
  }
})
