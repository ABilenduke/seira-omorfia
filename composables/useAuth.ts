import { useLocalStorage } from '@vueuse/core'

const useAuth = () => {
  const token = useLocalStorage('pinia/auth/login', '')
  // user login, sign out, sign up logic

  const isLoggedIn = () => {
    return !!token
  }

  return {
    isLoggedIn
  }
}

export default useAuth