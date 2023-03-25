import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {

  const user = ref({})

  function setUser(u) {
    user.value = u
  }

  return { user, setUser }
})
