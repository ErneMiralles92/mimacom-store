<template>
  <div style="margin: -0.25rem 0">
    <CartItem
      v-for="i in 10"
      :key="i"
      :cart-item="cartItem"
      style="padding: 0.25rem 0; margin-right: 0.5rem"
    />
  </div>
</template>

<script setup lang="ts">
import CartItem from '../CartItem'
const cartItem = {
  product: {
    id: 'ab284424-8e46-4a3e-8e13-e179b0ab8bb5',
    image_url:
      'https://dummyimage.com/400x400/4de5d5/000&text=Awesome Cotton Soap',
    stock: 47,
    productName: 'Awesome Cotton Soap',
    price: 66,
    productDescription:
      'Molestias sunt quia omnis reprehenderit quia. Iste quia et similique voluptate. Et sit molestias.',
    favorite: 0,
  },
  frequency: 2,
}
</script>

<style scoped></style>
