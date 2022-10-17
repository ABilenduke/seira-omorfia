import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("user", {
  state: () => ({
    token: useLocalStorage('pinia/auth/login', ''),
  }),
  hydrate(state, initialState) {
    // in this case we can completely ignore the initial state since we
    // want to read the value from the browser
    state.token = useLocalStorage('pinia/auth/login', '')
  },
  actions: {
    setToken(token) {
      this.token = token
    }
  }
});
