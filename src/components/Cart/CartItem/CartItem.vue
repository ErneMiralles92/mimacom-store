<template>
  <div class="cart-item" data-test-id="cartItem">
    <img
      class="cart-item-image"
      :src="cartItem.product.image_url"
      :alt="cartItem.product.productName"
    />
    <div class="cart-item-control">
      <span class="text-title" data-test-id="cartProductName">
        {{ cartItem.product.productName }}
      </span>
      <div class="cart-item-actions">
        <button
          class="btn-quantity"
          data-test-id="decrementProductQuantity"
          @click="removeProduct(cartItem.product)"
        >
          <AppIcon size="16" color="#9c27b0">mdi-minus</AppIcon>
        </button>
        <span class="cart-item-quantity" data-test-id="carProductQuantity">
          {{ cartItem.frequency }}
        </span>
        <button
          class="btn-quantity"
          data-test-id="incrementProductQuantity"
          :disabled="cartItem.product.stock === cartItem.frequency"
          @click="addProduct(cartItem.product)"
        >
          <AppIcon size="16" color="#9c27b0">mdi-plus</AppIcon>
        </button>
      </div>
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
import AppIcon from '../../UI/AppIcon.vue'
import { useCartStore } from '../cartStore'
interface Props {
  cartItem: CartItem
}
const props = defineProps<Props>()
const { cartItem } = toRefs(props)
const { addProduct, removeProduct } = useCartStore()
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

    .cart-item-actions {
      display: flex;
      width: fit-content;
      align-items: center;
      border: 1px solid $accent;
      border-radius: 0.25rem;
      box-shadow: $elevation-1;

      .cart-item-quantity {
        padding: 0 0.5rem;
        color: $accent;
        min-width: 2.25rem;
        text-align: center;
      }

      .btn-quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.5rem;
        border: none;
        background-color: transparent;
        color: $text;
        cursor: pointer;
        border-radius: 0.25rem;

        &:hover {
          background-color: #cfd8dc;
        }

        &:disabled {
          cursor: not-allowed;
          background-color: #4e4379;
          color: #fefefe;
        }
      }
    }
  }

  .cart-item-price {
    align-self: center;
    color: $primary;
    font-weight: 700;
    font-size: 1.25rem;
    min-width: 4rem;

    &:before {
      content: '$ ';
      font-size: 1rem;
    }
  }
}
</style>
