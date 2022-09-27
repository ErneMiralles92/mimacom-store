<template>
  <div class="cart-item">
    <img
      class="cart-item-image"
      :src="cartItem.product.image_url"
      :alt="cartItem.product.productName"
    />
    <div class="cart-item-control">
      <span class="text-title">{{ cartItem.product.productName }}</span>
      <div>XX</div>
    </div>
    <div style="flex-grow: 1" />
    <span class="cart-item-price">
      {{ cartItem.frequency * cartItem.product.price }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { CartItem } from '../../../types'
interface Props {
  cartItem: CartItem
}
const props = defineProps<Props>()
const { cartItem } = toRefs(props)
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  // align-items: center;

  .cart-item-image {
    width: 5rem;
    height: 5em;
    border-radius: 0.25rem;
  }

  .cart-item-control {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.25rem 0.75rem;
  }

  .cart-item-price {
    align-self: center;
    color: $primary;
    font-weight: 700;
    font-size: 1.25rem;

    &:before {
      content: '$ ';
      font-size: 1rem;
    }
  }
}
</style>
