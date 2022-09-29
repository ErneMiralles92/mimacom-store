<template>
  <div style="margin: -0.5rem 0">
    <template v-if="cartStore.cart.length > 0">
      <CartItem
        v-for="item in cartStore.cart"
        :key="item.product.id"
        :cart-item="item"
        style="padding: 0.5rem 0; margin-right: 0.5rem"
      />
    </template>
    <div v-else>The cart is empty.</div>
  </div>
</template>

<script setup lang="ts">
import CartItem from '../CartItem'
import { useCart } from '../cartStore'

const cartStore = useCart()
</script>

<style scoped></style>
