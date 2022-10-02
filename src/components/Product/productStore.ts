import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'
export const useProductStore = defineStore('product', () => {
  const isUpdating = ref(false)

  function setIsUpdating(value: boolean) {
    isUpdating.value = value
  }
  return { isUpdating: readonly(isUpdating), setIsUpdating }
})
