<template>
  <div class="product-item" data-test-id="productItem">
    <div class="aspect-ratio-box">
      <img
        class="aspect-ratio-box-inside product-item-image"
        :src="product.image_url"
        :alt="product.productName"
      />
    </div>
    <div class="product-item-content">
      <div class="row justify-between" style="margin-top: 0.5rem">
        <span class="product-item-title" data-test-id="productName">{{
          product.productName
        }}</span>
        <span class="product-item-price">{{ product.price }}</span>
      </div>
      <p class="product-item-description text-subtitle">
        {{ product.productDescription }}
      </p>
      <div class="product-item-bottom">
        <span class="product-item-availability">
          {{ product.stock }} left
        </span>
        <button
          class="product-item-button"
          :disabled="noMoreStock"
          data-test-id="addProductBtn"
          @click="() => addProduct(product)"
        >
          <div class="row align-center">
            <AppIcon color="white" size="16"> mdi-cart-plus </AppIcon>
            <span class="hide-on-mobile" style="margin-left: 0.25rem">
              Add
            </span>
            <div
              v-if="itemFrequency > 0"
              class="app-badge hide-on-desktop"
              size="16"
              :style="{
                'background-color': '#9c27b0',
                color: '#FFFFFF',
              }"
            >
              {{ itemFrequency }}
            </div>
          </div>
        </button>
      </div>
    </div>
    <div class="product-item-favorite">
      <button
        data-test-id="favoriteProductBtn"
        @click="$emit('updateFavorite', product)"
      >
        <AppIcon size="28" color="#C58B35">{{
          +product.favorite === 1 ? 'mdi-star' : 'mdi-star-outline'
        }}</AppIcon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { Product } from '../../../types'
import AppIcon from '../../UI/AppIcon.vue'
import { useCartStore } from '../../Cart/cartStore'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const { product } = toRefs(props)

defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'updateFavorite', payload: Product): void
}>()
const { addProduct, cart } = useCartStore()

const noMoreStock = computed(() => {
  const cartItem = cart.find((cItem) => cItem.product.id === product.value.id)
  const stockInCart = cartItem ? cartItem.frequency : 0
  return product.value.stock === stockInCart
})

const itemFrequency = computed(() => {
  const cartItem = cart.find((cItem) => cItem.product.id === product.value.id)
  return cartItem ? cartItem.frequency : 0
})
</script>

<style scoped lang="scss">
.product-item {
  position: relative;
  display: block;
  max-width: 300px;
  outline: none;
  position: relative;
  white-space: normal;
  border-radius: 6px;
  box-shadow: $elevation-1;
  background-color: #ffffff;

  &:hover {
    box-shadow: $elevation-2;
  }

  .aspect-ratio-box {
    height: 0;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    .aspect-ratio-box-inside {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .product-item-image {
    border-radius: 6px 6px 0 0;
  }

  .product-item-content {
    padding: 0 1rem 1rem;

    .product-item-title {
      padding-right: 0.25rem;
      font-weight: 700;
      font-size: 0.875rem;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1rem;
      }
    }

    .product-item-price {
      color: $primary;
      font-weight: 700;
      font-size: 1rem;

      &:before {
        content: '$ ';
        font-size: 0.875rem;
      }

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1.25rem;
        &:before {
          content: '$ ';
          font-size: 1rem;
        }
      }
    }

    .product-item-description {
      display: none;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin: 0.25rem 0;

      @media screen and (min-width: $breakpoint-sm) {
        display: -webkit-box;
      }
      @media screen and (min-width: $breakpoint-md) {
        -webkit-line-clamp: 2;
      }
    }

    .product-item-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.25rem;
      @media screen and (min-width: $breakpoint-sm) {
        display: 1rem;
      }
    }

    .product-item-availability {
      color: $accent;
      padding-right: 0.25rem;
      font-weight: 700;
      font-size: 0.875rem;
      font-style: italic;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1rem;
      }
    }

    .product-item-button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
      border: 1px solid transparent;
      padding: 1rem;
      font-size: 1em;
      font-weight: 500;
      text-transform: uppercase;
      font-family: inherit;
      font-size: 0.875rem;
      background-color: $primary;
      color: #ffffff;
      cursor: pointer;

      @media screen and (min-width: $breakpoint-sm) {
        height: fit-content;
        width: fit-content;
        border-radius: 0.325rem;
        padding: 0.5rem 1rem;
      }

      &:hover {
        box-shadow: $elevation-1;
      }

      &:disabled {
        cursor: not-allowed;
        background-color: #4e4379;
        color: #fefefe;
      }
    }
  }
  .product-item-favorite {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    button {
      position: relative;
      border-radius: 50%;
      border: 1px solid transparent;
      background-color: $standardBackgroundColor;
      width: 2.5rem;
      height: 2.5rem;
      box-shadow: $elevation-1;

      &:hover {
        box-shadow: $elevation-2;
      }
    }
  }
}
</style>
