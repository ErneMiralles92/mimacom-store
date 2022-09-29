import { ref, readonly, computed } from 'vue'
import { defineStore } from 'pinia'
import { CartItem, Product } from '../../types'
export const useCart = defineStore('cart', () => {
  const cart = ref<Array<CartItem>>([])

  const totalToPay = computed(() => {
    const total = cart.value.reduce((previous: number, current: CartItem) => {
      return previous + current.frequency * current.product.price
    }, 0)
    return total
  })

  function addProduct(productItem: Product) {
    const index = cart.value.findIndex(
      (cItem) => cItem.product.id === productItem.id,
    )
    if (index !== -1) {
      if (cart.value[index].frequency < cart.value[index].product.stock)
        cart.value[index].frequency++
    } else {
      cart.value.push({
        product: productItem,
        frequency: 1,
      })
    }
  }

  function removeProduct(productItem: Product) {
    const index = cart.value.findIndex(
      (cItem) => cItem.product.id === productItem.id,
    )
    if (index !== -1) {
      if (cart.value[index].frequency === 1) {
        cart.value.splice(index, 1)
      } else if (cart.value[index].frequency > 1) {
        cart.value[index].frequency--
      }
    }
  }

  return { cart: readonly(cart), addProduct, removeProduct, totalToPay }
})
