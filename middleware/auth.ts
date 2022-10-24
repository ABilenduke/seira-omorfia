// import { useLocalStorage } from '@vueuse/core'

// const token = useLocalStorage('pinia/auth/login', '')

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn()) {
    return navigateTo('/auth/login')
  }
})
